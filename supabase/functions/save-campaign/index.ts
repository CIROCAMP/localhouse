import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

Deno.serve(async (req: Request) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { headers });
  }

  try {
    const { campaign_id, subject, html_content, image_url, campaign_type, segment } = await req.json();

    if (!subject || !html_content) {
      return new Response(
        JSON.stringify({ error: "subject and html_content are required" }),
        { status: 400, headers }
      );
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    if (campaign_id) {
      // Update existing draft
      const { data, error } = await supabase
        .from("newsletter_campaigns")
        .update({
          subject,
          html_content,
          image_url: image_url || null,
          campaign_type: campaign_type || "general",
          segment: segment || null,
          status: "draft",
        })
        .eq("id", campaign_id)
        .select("id")
        .single();

      if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers });
      }

      return new Response(
        JSON.stringify({ success: true, campaign_id: data.id, message: "Campaign updated." }),
        { headers }
      );
    }

    // Create new campaign
    const { data, error } = await supabase
      .from("newsletter_campaigns")
      .insert({
        subject,
        html_content,
        image_url: image_url || null,
        campaign_type: campaign_type || "general",
        segment: segment || null,
        status: "draft",
      })
      .select("id")
      .single();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500, headers });
    }

    return new Response(
      JSON.stringify({ success: true, campaign_id: data.id, message: "Campaign saved as draft." }),
      { headers }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), { status: 500, headers });
  }
});
