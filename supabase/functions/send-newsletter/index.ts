import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const BATCH_SIZE = 50;
const FROM_EMAIL = "Local House <newsletter@localhouse.com>";

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

function buildEmailHtml(campaign: { subject: string; html_content: string; image_url: string | null; campaign_type: string }) {
  const imageBlock = campaign.image_url
    ? `<div style="text-align: center; margin-bottom: 20px;">
        <img src="${campaign.image_url}" alt="" style="max-width: 100%; height: auto; border-radius: 8px;" />
       </div>`
    : "";

  // If html_content already contains full HTML, inject image at the {{hero_image}} placeholder
  if (campaign.html_content.includes("{{hero_image}}")) {
    return campaign.html_content.replace(/{{hero_image}}/g, imageBlock);
  }

  // Otherwise wrap in standard template with image
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF7F2;">
  <div style="text-align: center; padding: 30px 0;">
    <h1 style="color: #4C5254; font-size: 28px; margin-bottom: 5px;">Local House</h1>
    <p style="color: #FF8F75; font-size: 14px; letter-spacing: 2px;">MIAMI BEACH, FLORIDA</p>
  </div>
  <div style="background: white; padding: 30px; border-radius: 8px;">
    ${imageBlock}
    ${campaign.html_content}
  </div>
  <div style="text-align: center; padding: 20px; font-size: 12px; color: #999;">
    <p>The Local House | 400 Ocean Dr, Miami Beach, FL 33139</p>
    <p><a href="{{unsubscribe_link}}" style="color: #999;">Unsubscribe</a></p>
  </div>
</body>
</html>`;
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
    const { campaign_id } = await req.json();

    if (!campaign_id) {
      return new Response(JSON.stringify({ error: "campaign_id is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Fetch the campaign - MUST be approved
    const { data: campaign, error: campaignError } = await supabase
      .from("newsletter_campaigns")
      .select("*")
      .eq("id", campaign_id)
      .single();

    if (campaignError || !campaign) {
      return new Response(JSON.stringify({ error: "Campaign not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (campaign.status !== "approved") {
      return new Response(
        JSON.stringify({
          error: `Campaign must be approved before sending. Current status: "${campaign.status}"`,
        }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }

    // Mark as sending
    await supabase
      .from("newsletter_campaigns")
      .update({ status: "sending" })
      .eq("id", campaign_id);

    // Build the email HTML with image support
    const emailHtml = buildEmailHtml(campaign);

    // Get subscribers
    let query = supabase
      .from("newsletter_subscribers")
      .select("id, email, first_name")
      .eq("subscribed", true);

    if (campaign.segment) {
      query = query.eq("source", campaign.segment);
    }

    const { data: subscribers, error } = await query;

    if (error) {
      await supabase
        .from("newsletter_campaigns")
        .update({ status: "failed" })
        .eq("id", campaign_id);

      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Update total recipients
    await supabase
      .from("newsletter_campaigns")
      .update({ total_recipients: subscribers.length })
      .eq("id", campaign_id);

    let sent = 0;
    let failed = 0;

    const unsubscribeBase = `${SUPABASE_URL}/functions/v1/unsubscribe`;

    for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
      const batch = subscribers.slice(i, i + BATCH_SIZE);
      const promises = batch.map((sub) => {
        const unsubscribeLink = `${unsubscribeBase}?email=${encodeURIComponent(sub.email)}`;
        const personalizedHtml = emailHtml
          .replace(/{{first_name}}/g, sub.first_name || "Guest")
          .replace(/{{email}}/g, sub.email)
          .replace(/{{unsubscribe_link}}/g, unsubscribeLink);

        return sendEmail(sub.email, campaign.subject, personalizedHtml)
          .then(() => { sent++; })
          .catch(() => { failed++; });
      });

      await Promise.all(promises);
      if (i + BATCH_SIZE < subscribers.length) {
        await delay(1000);
      }
    }

    // Update campaign as sent
    await supabase
      .from("newsletter_campaigns")
      .update({
        status: "sent",
        sent_at: new Date().toISOString(),
        total_sent: sent,
        total_failed: failed,
      })
      .eq("id", campaign_id);

    return new Response(
      JSON.stringify({
        success: true,
        campaign_id,
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
