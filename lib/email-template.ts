import { render } from "@react-email/render";
import { MagicLinkData } from "@/types/auth";

import { MagicLink } from "@component/email/MagicLink";

export function selectMailOptions(type: string, body: MagicLinkData) {
  let html;
  const mailOptions = {
    from: `Chatmater {process.env.EMAIL_SENDER}>`,
    to: process.env.MAIN_EMAIL,
  };

  switch (type) {
    case "magic-link":
      html = render(MagicLink({ magicLink: body as MagicLinkData }));
      return {
        from: mailOptions.from,
        to: (body as MagicLinkData).email,
        subject: `Your magic link for Chatmater`,
        html: html,
      };
    default:
      throw new Error("Invalid submission type");
  }
}
