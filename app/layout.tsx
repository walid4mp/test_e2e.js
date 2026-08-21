import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import "./globals.css";
import PwaRegistration from "@/components/pwa-registration";

const title = "WarHex AI Studio – AI App Builder";
const description =
  "Build, prototype and ship apps faster with WarHex AI Studio.";
const url = "https://llamacoder.io/";
const ogimage = "https://llamacoder.io/og-image.png";
const sitename = "WarHex AI Studio";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  applicationName: sitename,
  manifest: "/manifest.webmanifest",
  themeColor: "#070a12",
  icons: { icon: "/favicon.ico", apple: "/icon.png" },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <PlausibleProvider domain="llamacoder.io" />
      </head>
      <body className="min-h-full">
        <PwaRegistration />
        {children}
      </body>
    </html>
  );
}
