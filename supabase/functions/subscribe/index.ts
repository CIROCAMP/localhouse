import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const FROM_EMAIL = "Local House <newsletter@localhouse.com>";

const WELCOME_HTML = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF7F2;">
  <div style="text-align: center; padding: 30px 0;">
    <h1 style="color: #4C5254; font-size: 28px; margin-bottom: 5px;">Welcome to Local House</h1>
    <p style="color: #FF8F75; font-size: 14px; letter-spacing: 2px;">MIAMI BEACH, FLORIDA</p>
  </div>
  <div style="background: white; padding: 30px; border-radius: 8px;">
    <p style="color: #4C5254; font-size: 16px; line-height: 1.8;">Dear {{first_name}},</p>
    <p style="color: #4C5254; font-size: 16px; line-height: 1.8;">Thank you for joining the Local House family. You'll be the first to know about our special events, seasonal menus, and exclusive offers.</p>
    <p style="color: #4C5254; font-size: 16px; line-height: 1.8;">We look forward to welcoming you soon.</p>
    <p style="color: #FF8F75; font-size: 16px; margin-top: 30px;">Warm regards,<br>The Local House Team</p>
  </div>
  <div style="text-align: center; padding: 20px; font-size: 12px; color: #999;">
    <p>The Local House | 400 Ocean Dr, Miami Beach, FL 33139</p>
    <p><a href="{{unsubscribe_link}}" style="color: #999;">Unsubscribe</a></p>
  </div>
</body>
</html>
`;

Deno.serve(async (req: Request) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { headers });
  }

  try {
    const { email, first_name, last_name } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), { status: 400, headers });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), { status: 400, headers });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("id, subscribed, first_name")
      .eq("email", email.toLowerCase())
      .single();

    if (existing && existing.subscribed) {
      // Still send welcome email so returning subscribers get confirmation
      const unsubscribeLink = `${SUPABASE_URL}/functions/v1/unsubscribe?email=${encodeURIComponent(email.toLowerCase())}`;
      const personalizedHtml = WELCOME_HTML
        .replace(/{{first_name}}/g, existing.first_name || first_name || "Guest")
        .replace(/{{unsubscribe_link}}/g, unsubscribeLink);

      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [email.toLowerCase()],
          subject: "Welcome to Local House \u2013 Miami Beach",
          html: personalizedHtml,
        }),
      });

      if (!emailRes.ok) {
        const errBody = await emailRes.text();
        console.error("Resend welcome email failed (existing):", emailRes.status, errBody);
      }

      return new Response(JSON.stringify({ message: "Already subscribed" }), { headers });
    }

    if (existing && !existing.subscribed) {
      await supabase
        .from("newsletter_subscribers")
        .update({ subscribed: true, unsubscribed_at: null, updated_at: new Date().toISOString() })
        .eq("id", existing.id);
    } else {
      await supabase.from("newsletter_subscribers").insert({
        email: email.toLowerCase(),
        first_name: first_name || null,
        last_name: last_name || null,
        source: "website",
        subscribed: true,
      });
    }

    // Send welcome email
    const unsubscribeLink = `${SUPABASE_URL}/functions/v1/unsubscribe?email=${encodeURIComponent(email.toLowerCase())}`;
    const personalizedHtml = WELCOME_HTML
      .replace(/{{first_name}}/g, first_name || "Guest")
      .replace(/{{unsubscribe_link}}/g, unsubscribeLink);

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [email.toLowerCase()],
        subject: "Welcome to Local House \u2013 Miami Beach",
        html: personalizedHtml,
      }),
    });

    if (!emailRes.ok) {
      const errBody = await emailRes.text();
      console.error("Resend welcome email failed:", emailRes.status, errBody);
    }

    return new Response(JSON.stringify({ success: true, message: "Subscribed successfully" }), { headers });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), { status: 500, headers });
  }
});
