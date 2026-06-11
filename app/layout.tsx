import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, DM_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Euodia | The Fragrance of Christ Through Music",
  description:
    "Euodia is a worship collective devoted to spreading the fragrance of Christ through music, worship, and community.",
  metadataBase: new URL("https://euodia.co"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Euodia | The Fragrance of Christ Through Music",
    description:
      "Euodia is a worship collective devoted to spreading the fragrance of Christ through music, worship, and community.",
    url: "https://euodia.co",
    siteName: "Euodia",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Euodia | The Fragrance of Christ Through Music",
    description:
      "Euodia is a worship collective devoted to spreading the fragrance of Christ through music, worship, and community.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
