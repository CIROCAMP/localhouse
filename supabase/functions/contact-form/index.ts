import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const NOTIFY_EMAIL = "info@localhouse.com";
const FROM_EMAIL = "Local House <noreply@localhouse.com>";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

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
    const { first_name, last_name, email, phone, subject, message } =
      await req.json();

    // Validate required fields
    if (!first_name || !last_name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All required fields must be filled" }),
        { status: 400, headers }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers }
      );
    }

    // Send notification email to hotel staff
    const notificationHtml = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF7F2;">
  <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #FF8F75;">
    <h1 style="color: #4C5254; font-size: 24px; margin: 0;">New Contact Form Submission</h1>
    <p style="color: #FF8F75; font-size: 13px; letter-spacing: 2px; margin-top: 5px;">LOCALHOUSE.COM</p>
  </div>
  <div style="background: white; padding: 25px; border-radius: 8px; margin-top: 20px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 10px 0; color: #999; font-size: 13px; width: 100px; vertical-align: top;">Name</td>
        <td style="padding: 10px 0; color: #4C5254; font-size: 15px;">${escapeHtml(first_name)} ${escapeHtml(last_name)}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #999; font-size: 13px; vertical-align: top;">Email</td>
        <td style="padding: 10px 0; color: #4C5254; font-size: 15px;"><a href="mailto:${escapeHtml(email)}" style="color: #FF8F75;">${escapeHtml(email)}</a></td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #999; font-size: 13px; vertical-align: top;">Phone</td>
        <td style="padding: 10px 0; color: #4C5254; font-size: 15px;">${phone ? escapeHtml(phone) : "Not provided"}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #999; font-size: 13px; vertical-align: top;">Subject</td>
        <td style="padding: 10px 0; color: #4C5254; font-size: 15px; font-weight: bold;">${escapeHtml(subject)}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #999; font-size: 13px; vertical-align: top;">Message</td>
        <td style="padding: 10px 0; color: #4C5254; font-size: 15px; line-height: 1.6;">${escapeHtml(message).replace(/\n/g, "<br>")}</td>
      </tr>
    </table>
  </div>
  <div style="text-align: center; padding: 15px; font-size: 11px; color: #999; margin-top: 10px;">
    <p>Reply directly to this email to respond to the guest.</p>
  </div>
</body>
</html>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [NOTIFY_EMAIL],
        reply_to: email,
        subject: `Contact Form: ${subject}`,
        html: notificationHtml,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return new Response(
        JSON.stringify({ error: "Failed to send message. Please try again." }),
        { status: 500, headers }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully" }),
      { headers }
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers }
    );
  }
});
