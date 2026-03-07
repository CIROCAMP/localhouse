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
    const { campaign_id, action } = await req.json();

    if (!campaign_id) {
      return new Response(JSON.stringify({ error: "campaign_id is required" }), { status: 400, headers });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Fetch current campaign
    const { data: campaign, error: fetchError } = await supabase
      .from("newsletter_campaigns")
      .select("*")
      .eq("id", campaign_id)
      .single();

    if (fetchError || !campaign) {
      return new Response(JSON.stringify({ error: "Campaign not found" }), { status: 404, headers });
    }

    // action: "approve" or "reject" (back to draft)
    if (action === "approve") {
      if (campaign.status !== "draft") {
        return new Response(
          JSON.stringify({ error: `Can only approve draft campaigns. Current status: "${campaign.status}"` }),
          { status: 400, headers }
        );
      }

      const { error } = await supabase
        .from("newsletter_campaigns")
        .update({
          status: "approved",
          approved_at: new Date().toISOString(),
        })
        .eq("id", campaign_id);

      if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers });
      }

      return new Response(
        JSON.stringify({ success: true, message: "Campaign approved. You can now send it.", campaign_id }),
        { headers }
      );
    }

    if (action === "reject") {
      const { error } = await supabase
        .from("newsletter_campaigns")
        .update({ status: "draft", approved_at: null })
        .eq("id", campaign_id);

      if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers });
      }

      return new Response(
        JSON.stringify({ success: true, message: "Campaign moved back to draft.", campaign_id }),
        { headers }
      );
    }

    return new Response(
      JSON.stringify({ error: "Invalid action. Use 'approve' or 'reject'." }),
      { status: 400, headers }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), { status: 500, headers });
  }
});
