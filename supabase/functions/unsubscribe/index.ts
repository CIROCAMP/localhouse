import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

Deno.serve(async (req: Request) => {
  const url = new URL(req.url);
  const email = url.searchParams.get("email");

  if (!email) {
    return new Response("<html><body><h1>Invalid unsubscribe link</h1></body></html>", {
      status: 400,
      headers: { "Content-Type": "text/html" },
    });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  const { error } = await supabase
    .from("newsletter_subscribers")
    .update({
      subscribed: false,
      unsubscribed_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("email", email.toLowerCase());

  if (error) {
    return new Response("<html><body><h1>Something went wrong</h1><p>Please try again later.</p></body></html>", {
      status: 500,
      headers: { "Content-Type": "text/html" },
    });
  }

  return new Response(`
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><title>Unsubscribed</title></head>
    <body style="font-family: Georgia, serif; max-width: 600px; margin: 50px auto; text-align: center; padding: 20px;">
      <h1 style="color: #4C5254;">You've been unsubscribed</h1>
      <p style="color: #666; font-size: 16px; line-height: 1.8;">You will no longer receive newsletters from The Local House.</p>
      <p style="color: #666; font-size: 16px; line-height: 1.8;">We're sorry to see you go.</p>
      <a href="https://localhouse.com" style="display: inline-block; margin-top: 20px; padding: 12px 30px; background: #FF8F75; color: white; text-decoration: none; border-radius: 4px;">Visit Local House</a>
    </body>
    </html>
  `, {
    headers: { "Content-Type": "text/html" },
  });
});
