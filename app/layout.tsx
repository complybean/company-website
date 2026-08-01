import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://complybean.com"),

  title: {
    default: "ComplyBean | Medical Device Regulatory Compliance",
    template: "%s | ComplyBean",
  },

  description:
    "ComplyBean is an AI-enabled regulatory intelligence platform helping medical-device companies prepare FDA 510(k) submissions with greater clarity and confidence.",

  keywords: [
    "Medical Device Compliance",
    "Regulatory Compliance",
    "Medical Device Regulations",
    "FDA",
    "FDA 510(k)",
    "Predicate Device",
    "Medical Device Classification",
    "Medical Device Documentation",
    "Regulatory Affairs",
    "Regulatory Intelligence",
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
      "AI-enabled regulatory intelligence for medical-device companies preparing FDA 510(k) submissions.",
  },

  twitter: {
    card: "summary_large_image",
    title: "ComplyBean | Medical Device Regulatory Compliance",
    description:
      "AI-enabled regulatory intelligence for medical-device companies preparing FDA 510(k) submissions.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
