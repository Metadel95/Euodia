import type { Metadata } from "next";
import "./globals.css";
// Self-hosted fonts via @fontsource — no network request at build time
import "@fontsource-variable/inter";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/cormorant-garamond/300-italic.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500-italic.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://euodia.worship";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Euodia | The Fragrance of Christ Through Music",
    template: "%s | Euodia",
  },
  description:
    "Euodia is a worship collective devoted to spreading the fragrance of Christ through music, worship, and community.",
  keywords: [
    "Christian worship",
    "worship music",
    "Euodia",
    "fragrance of Christ",
    "worship collective",
    "Christian music",
    "devotional music",
    "Chi-Rho",
  ],
  authors: [{ name: "Euodia Worship Collective" }],
  creator: "Euodia",
  publisher: "Euodia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Euodia",
    title: "Euodia | The Fragrance of Christ Through Music",
    description:
      "Euodia is a worship collective devoted to spreading the fragrance of Christ through music, worship, and community.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Euodia — Spreading the Fragrance of Christ Through Music",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Euodia | The Fragrance of Christ Through Music",
    description:
      "Euodia is a worship collective devoted to spreading the fragrance of Christ through music, worship, and community.",
    images: ["/og-image.jpg"],
    creator: "@euodiaworships",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
