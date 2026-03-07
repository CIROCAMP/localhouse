import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const BATCH_SIZE = 50;
const FROM_EMAIL = "Local House <newsletter@send.localhouse.com>";

async function sendEmail(to: string, subject: string, html: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({ from: FROM_EMAIL, to: [to], subject, html }),
  });
  return res.json();
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  try {
    const { subject, html_content, segment } = await req.json();

    if (!subject || !html_content) {
      return new Response(JSON.stringify({ error: "subject and html_content are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    let query = supabase
      .from("newsletter_subscribers")
      .select("id, email, first_name")
      .eq("subscribed", true);

    if (segment) {
      query = query.eq("source", segment);
    }

    const { data: subscribers, error } = await query;

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    let sent = 0;
    let failed = 0;

    const unsubscribeBase = `${SUPABASE_URL}/functions/v1/unsubscribe`;

    for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
      const batch = subscribers.slice(i, i + BATCH_SIZE);
      const promises = batch.map((sub) => {
        const unsubscribeLink = `${unsubscribeBase}?email=${encodeURIComponent(sub.email)}`;
        const personalizedHtml = html_content
          .replace(/{{first_name}}/g, sub.first_name || "Guest")
          .replace(/{{email}}/g, sub.email)
          .replace(/{{unsubscribe_link}}/g, unsubscribeLink);

        return sendEmail(sub.email, subject, personalizedHtml)
          .then(() => { sent++; })
          .catch(() => { failed++; });
      });

      await Promise.all(promises);
      if (i + BATCH_SIZE < subscribers.length) {
        await delay(1000);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        total_subscribers: subscribers.length,
        sent,
        failed,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
