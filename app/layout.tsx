import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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

export const metadata: Metadata = {
  title: "Euodia | The Fragrance of Christ Through Music",
  description:
    "Euodia is a worship collective devoted to spreading the fragrance of Christ through music, worship, and community.",
  metadataBase: new URL("https://euodia.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Euodia | The Fragrance of Christ Through Music",
    description:
      "Euodia is a worship collective devoted to spreading the fragrance of Christ through music, worship, and community.",
    url: "https://euodia.co",
    siteName: "Euodia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Euodia — The Fragrance of Christ Through Music",
      },
    ],
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
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-parchment text-ink antialiased">{children}</body>
    </html>
  );
}
