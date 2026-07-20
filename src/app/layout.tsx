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

const siteUrl = "https://lumos.agency";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lumos - Websites built to grow your business",
    template: "%s - Lumos",
  },
  description:
    "Lumos designs and develops fast, modern websites that help ambitious businesses stand out online. Custom websites, landing pages, redesigns, and maintenance.",
  keywords: [
    "web development agency",
    "custom website development",
    "landing page design",
    "website redesign",
    "Next.js agency",
  ],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Lumos - Websites built to grow your business",
    description:
      "We design and develop fast, modern websites that help ambitious businesses stand out online.",
    url: siteUrl,
    siteName: "Lumos",
    images: ["/logo.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumos - Websites built to grow your business",
    description:
      "We design and develop fast, modern websites that help ambitious businesses stand out online.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
