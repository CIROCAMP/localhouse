/**
 * Professional HTML Email Templates for Local House Newsletter
 *
 * Brand Colors:
 * - Coral: #FF8F75
 * - Charcoal: #4C5254
 * - Cream: #FAF7F2
 * - Sky: #9EB8BD
 * - Sunshine: #FDCFA3
 */

export interface CampaignData {
  subject: string;
  headline: string;
  body: string;
  image_url: string;
  cta_text: string;
  cta_url: string;
}

// Shared email wrapper (header + footer)
function emailWrapper(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>The Local House</title>
  <!--[if mso]>
  <noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #FAF7F2; font-family: Georgia, 'Times New Roman', serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAF7F2;">
    <tr>
      <td align="center" style="padding: 0;">
        <!-- Preheader (hidden text for email clients) -->
        <div style="display: none; max-height: 0; overflow: hidden; mso-hide: all;">
          The Local House - Miami Beach, Florida &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
        </div>

        <!-- Email Container -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; margin: 0 auto;">

          <!-- Top Accent Bar -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #FF8F75, #FDCFA3, #9EB8BD);"></td>
          </tr>

          <!-- Logo Header -->
          <tr>
            <td align="center" style="padding: 32px 24px 24px; background-color: #ffffff;">
              <img src="https://localhouse.com/images/localhouse-logo-grey.png" alt="The Local House" width="180" style="display: block; height: auto; max-width: 180px;" />
              <p style="margin: 8px 0 0; font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 11px; letter-spacing: 3px; color: #FF8F75; text-transform: uppercase;">Miami Beach, Florida</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 0 40px; background-color: #ffffff;">
              <div style="height: 1px; background: linear-gradient(90deg, transparent, #E5DED5, transparent);"></div>
            </td>
          </tr>

          ${content}

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 40px; background-color: #4C5254;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom: 16px;">
                    <img src="https://localhouse.com/images/localhouse-logo-white.png" alt="The Local House" width="120" style="display: block; height: auto; max-width: 120px; opacity: 0.9;" />
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 12px; color: #9EB8BD; line-height: 20px;">
                    400 Ocean Drive, Miami Beach, FL 33139<br />
                    <a href="tel:+13055385529" style="color: #9EB8BD; text-decoration: none;">(305) 538-5529</a> &nbsp;|&nbsp;
                    <a href="mailto:info@localhouse.com" style="color: #9EB8BD; text-decoration: none;">info@localhouse.com</a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 16px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 0 8px;">
                          <a href="https://www.instagram.com/thelocalhouse" style="color: #9EB8BD; text-decoration: none; font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 11px; letter-spacing: 1px;">INSTAGRAM</a>
                        </td>
                        <td style="color: #6b7a7d;">|</td>
                        <td style="padding: 0 8px;">
                          <a href="https://www.facebook.com/localhousemiami/" style="color: #9EB8BD; text-decoration: none; font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 11px; letter-spacing: 1px;">FACEBOOK</a>
                        </td>
                        <td style="color: #6b7a7d;">|</td>
                        <td style="padding: 0 8px;">
                          <a href="https://localhouse.com" style="color: #9EB8BD; text-decoration: none; font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 11px; letter-spacing: 1px;">WEBSITE</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Unsubscribe -->
          <tr>
            <td align="center" style="padding: 20px 24px; background-color: #3a3d3f;">
              <p style="margin: 0; font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 11px; color: #888888; line-height: 18px;">
                You're receiving this because you subscribed to The Local House newsletter.<br />
                <a href="{{unsubscribe_link}}" style="color: #9EB8BD; text-decoration: underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>

          <!-- Bottom Accent Bar -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #9EB8BD, #FDCFA3, #FF8F75);"></td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Template 1: "Elegante" - Clean, editorial style with large hero image
 * Best for: Event announcements, seasonal menus, special occasions
 */
export function templateElegante(data: CampaignData): string {
  const imageBlock = data.image_url
    ? `<tr>
        <td style="padding: 0; background-color: #ffffff;">
          <img src="${data.image_url}" alt="" width="600" style="display: block; width: 100%; height: auto;" />
        </td>
      </tr>`
    : "";

  return emailWrapper(`
          ${imageBlock}

          <!-- Content -->
          <tr>
            <td style="padding: 48px 40px 20px; background-color: #ffffff;">
              <h1 style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 32px; font-weight: 600; color: #4C5254; line-height: 1.3; text-align: center;">
                ${data.headline}
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 40px; background-color: #ffffff;" align="center">
              <div style="width: 60px; height: 2px; background-color: #FF8F75; margin: 0 auto;"></div>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 40px 16px; background-color: #ffffff;">
              <p style="margin: 0; font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 15px; color: #666666; line-height: 1.8; text-align: center;">
                Hi {{first_name}},
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 40px 32px; background-color: #ffffff;">
              <div style="font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 15px; color: #666666; line-height: 1.8; text-align: center;">
                ${data.body}
              </div>
            </td>
          </tr>

          <!-- CTA Button -->
          ${data.cta_text ? `<tr>
            <td align="center" style="padding: 0 40px 48px; background-color: #ffffff;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color: #FF8F75; border-radius: 4px;">
                    <a href="${data.cta_url}" style="display: inline-block; padding: 14px 36px; font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 2px; color: #ffffff; text-decoration: none; text-transform: uppercase;">
                      ${data.cta_text}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>` : ""}
  `);
}

/**
 * Template 2: "Costiero" - Side accent, warm tones, more editorial
 * Best for: Weekly updates, restaurant news, chef stories
 */
export function templateCostiero(data: CampaignData): string {
  const imageBlock = data.image_url
    ? `<tr>
        <td style="padding: 24px 40px 0; background-color: #ffffff;">
          <div style="border-radius: 12px; overflow: hidden; border: 1px solid #f0ebe3;">
            <img src="${data.image_url}" alt="" width="520" style="display: block; width: 100%; height: auto;" />
          </div>
        </td>
      </tr>`
    : "";

  return emailWrapper(`
          <!-- Warm accent banner -->
          <tr>
            <td style="padding: 32px 40px; background-color: #ffffff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-left: 4px solid #FF8F75; padding-left: 20px;">
                    <p style="margin: 0 0 4px; font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 11px; letter-spacing: 3px; color: #FF8F75; text-transform: uppercase;">From Our Kitchen</p>
                    <h1 style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 28px; font-weight: 600; color: #4C5254; line-height: 1.3;">
                      ${data.headline}
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${imageBlock}

          <!-- Content -->
          <tr>
            <td style="padding: 28px 40px 16px; background-color: #ffffff;">
              <p style="margin: 0; font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 15px; color: #4C5254; line-height: 1.8;">
                Dear {{first_name}},
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 40px 32px; background-color: #ffffff;">
              <div style="font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 15px; color: #666666; line-height: 1.8;">
                ${data.body}
              </div>
            </td>
          </tr>

          <!-- CTA Button -->
          ${data.cta_text ? `<tr>
            <td align="center" style="padding: 8px 40px 48px; background-color: #ffffff;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border: 2px solid #FF8F75; border-radius: 4px;">
                    <a href="${data.cta_url}" style="display: inline-block; padding: 12px 32px; font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 2px; color: #FF8F75; text-decoration: none; text-transform: uppercase;">
                      ${data.cta_text}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>` : ""}
  `);
}

/**
 * Template 3: "Tramonto" - Sunset vibes, warm gradient accents
 * Best for: Special events, holiday promotions, exclusive invitations
 */
export function templateTramonto(data: CampaignData): string {
  const imageBlock = data.image_url
    ? `<tr>
        <td style="padding: 0 24px 0; background-color: #ffffff;">
          <div style="border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(76, 82, 84, 0.1);">
            <img src="${data.image_url}" alt="" width="552" style="display: block; width: 100%; height: auto;" />
          </div>
        </td>
      </tr>`
    : "";

  return emailWrapper(`
          <!-- Gradient Hero Banner -->
          <tr>
            <td style="padding: 48px 40px 40px; background: linear-gradient(135deg, #FF8F75 0%, #FDCFA3 50%, #9EB8BD 100%); text-align: center;">
              <h1 style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 34px; font-weight: 600; color: #ffffff; line-height: 1.3; text-shadow: 0 1px 4px rgba(0,0,0,0.1);">
                ${data.headline}
              </h1>
              <div style="width: 40px; height: 2px; background-color: rgba(255,255,255,0.6); margin: 16px auto 0;"></div>
            </td>
          </tr>

          ${imageBlock}

          <!-- Content -->
          <tr>
            <td style="padding: 36px 40px 16px; background-color: #ffffff;">
              <p style="margin: 0; font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 15px; color: #4C5254; line-height: 1.8;">
                Hi {{first_name}},
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 40px 36px; background-color: #ffffff;">
              <div style="font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 15px; color: #666666; line-height: 1.8;">
                ${data.body}
              </div>
            </td>
          </tr>

          <!-- CTA Button with gradient -->
          ${data.cta_text ? `<tr>
            <td align="center" style="padding: 0 40px 48px; background-color: #ffffff;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background: linear-gradient(135deg, #FF8F75, #e67c63); border-radius: 50px; box-shadow: 0 4px 16px rgba(255, 143, 117, 0.35);">
                    <a href="${data.cta_url}" style="display: inline-block; padding: 14px 40px; font-family: 'Montserrat', Helvetica, Arial, sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 2px; color: #ffffff; text-decoration: none; text-transform: uppercase;">
                      ${data.cta_text}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>` : ""}
  `);
}

export const templates = {
  elegante: {
    id: "elegante",
    name: "Elegante",
    description: "Clean, editorial style with full-width hero image. Perfect for event announcements and special occasions.",
    preview: "Full hero image + centered text + coral CTA button",
    build: templateElegante,
  },
  costiero: {
    id: "costiero",
    name: "Costiero",
    description: "Warm editorial layout with accent border. Ideal for weekly updates and chef stories.",
    preview: "Left coral accent + rounded image + outlined CTA",
    build: templateCostiero,
  },
  tramonto: {
    id: "tramonto",
    name: "Tramonto",
    description: "Sunset gradient hero banner. Best for exclusive invitations and holiday promotions.",
    preview: "Gradient banner + rounded image + pill CTA button",
    build: templateTramonto,
  },
} as const;

export type TemplateName = keyof typeof templates;
