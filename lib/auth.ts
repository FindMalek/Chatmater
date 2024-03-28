import { JWT } from "next-auth/jwt";
import nodemailer from "nodemailer";
import { selectMailOptions } from "@lib/email-template";

import { db } from "@lib/prisma";

import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db as any),
  secret: process.env.NEXTAUTH_SECRET!,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    EmailProvider({
      from: process.env.SMTP_FROM,
      maxAge: 5 * 60,
      sendVerificationRequest: async ({
        identifier,
        url,
        provider: { server, from },
      }) => {
        const mailTransporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          auth: {
            user: process.env.EMAIL_SENDER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        });

        try {
          const mailOptions = selectMailOptions("magic-link", {
            email: identifier,
            otp_link: url,
          });
          await mailTransporter.sendMail(mailOptions);
        } catch (error) {
          console.log("Error sending email:", error);
        }
      },
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.image = token.image
          ? token.image
          : `https://avatars.jakerunzer.com/${token.email}`;
      }

      return session;
    },
    async jwt({ token, user }): Promise<JWT> {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        email: dbUser.email,
        name: dbUser.name,
        image: dbUser.image,
        role: dbUser.role,
        emailVerified: dbUser.emailVerified,
        createdAt: dbUser.createdAt,
        updatedAt: dbUser.updatedAt,
      };
    },
  },
};
