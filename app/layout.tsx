import "@styles/globals.css";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import type { Viewport, Metadata } from 'next'

import { Toaster } from "@/components/ui/Sonner";
import { Analytics } from "@components/Analytics";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TailwindIndicator } from "@/components/TailwindIndicator";

import localFont from "next/font/local";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: `Step it up bro - ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Vercel",
    "Automate",
    "Personalize",
    "Messaging",
    "Web Application",
    "Onlyfans",
    "Patreon",
    "Automate Messaging",
    "Personalize Messaging",
    "Chatmater",
    "Recommendations",
  ],
  authors: [
    {
      name: "findmalek",
      url: "https://www.findmalek.com",
    },
    {
      name: "meowhib",
      url: "https://www.meowhib.com",
    },
  ],
  creator: "findmalek",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og.svg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.svg`],
    creator: "@findmalek",
  },
  icons: {
    icon: "favicon/favicon.ico",
    shortcut: "favicon/favicon-16x16.png",
    apple: "favicon/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
