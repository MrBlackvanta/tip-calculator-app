import type { Metadata, Viewport } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Splitter — tip calculator";
const description =
  "Split a bill and its tip evenly between any number of people — a Frontend Mentor challenge built with Next.js, TypeScript, and Tailwind CSS.";
const siteUrl = "https://vanta-tip-calculator-app.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
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
