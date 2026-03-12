import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase:
    typeof window === "undefined"
      ? new URL("https://whapvibez.com")
      : new URL(window.location.origin),
  title: {
    default: "WhapVibez – Create, Go Live, Shop & Connect",
    template: "%s | WhapVibez",
  },
  description:
    "WhapVibez is a modern social platform for short videos, live streaming, communities, and shopping – built to help creators and businesses connect and earn.",
  icons: {
    icon: [{ url: "/images/logo1.png", type: "image/png" }],
    apple: { url: "/images/logo1.png", type: "image/png" },
  },
  openGraph: {
    title: "WhapVibez – Create, Go Live, Shop & Connect",
    description:
      "Watch and create short videos, go live, message your community, and shop directly from creators – all inside WhapVibez.",
    url: "https://whapvibez.com",
    siteName: "WhapVibez",
    images: [
      {
        url: "/images/shop-home.png",
        width: 1200,
        height: 630,
        alt: "WhapVibez – social, live, and shop in one place",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhapVibez – Create, Go Live, Shop & Connect",
    description:
      "The all‑in‑one social platform where your content, live moments, and shop live together.",
    images: ["/images/shop-home.png"],
  },
  keywords: [
    "WhapVibez",
    "short videos",
    "live streaming",
    "Tanzania social app",
    "African creators",
    "social commerce",
    "live shopping",
    "marketplace",
    "creator economy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
