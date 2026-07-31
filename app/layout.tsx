import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://complybean.com"),

  title: {
    default: "ComplyBean | Medical Device Regulatory Compliance",
    template: "%s | ComplyBean",
  },

  description:
    "ComplyBean helps medical device startups, researchers, and manufacturers navigate regulatory compliance, documentation, quality management, and market approvals with confidence.",

  keywords: [
    "Medical Device Compliance",
    "Regulatory Compliance",
    "Medical Device Regulations",
    "ISO 13485",
    "FDA",
    "CE Marking",
    "Medical Device Documentation",
    "Regulatory Affairs",
    "Compliance Consulting",
    "ComplyBean",
  ],

  applicationName: "ComplyBean",

  authors: [
    {
      name: "ComplyBean",
      url: "https://complybean.com",
    },
  ],

  creator: "ComplyBean",
  publisher: "ComplyBean",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://complybean.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://complybean.com",
    siteName: "ComplyBean",
    title: "ComplyBean | Medical Device Regulatory Compliance",
    description:
      "Helping medical device innovators simplify regulatory compliance from concept to market.",
  },

  twitter: {
    card: "summary_large_image",
    title: "ComplyBean | Medical Device Regulatory Compliance",
    description:
      "Helping medical device innovators simplify regulatory compliance from concept to market.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f6f8f5",
  width: "device-width",
  initialScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}