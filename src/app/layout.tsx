import type { Metadata, Viewport } from "next";
import { Space_Mono } from "next/font/google";
import { siteUrl } from "@/app/site";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Splitter | Tip calculator";
const description =
  "Split a bill and its tip evenly between any number of people, with the tip and total shown per person as you type.";
const images = [
  {
    url: "/opengraph-image.jpg",
    width: 1200,
    height: 630,
    alt: "The Splitter tip calculator with a bill entered, a tip chosen and the total shown per person",
  },
];
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Splitter",
    locale: "en_US",
    type: "website",
    images,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
