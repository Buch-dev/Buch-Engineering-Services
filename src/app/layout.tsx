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
  title: "Buch Engineering Services - Solar Energy Solutions",
  description: "Expert solar panel sales, installation, and maintenance services. Powering your future with clean, renewable energy solutions for homes and businesses.",
  keywords: "solar panels, solar energy, renewable energy, solar installation, solar maintenance, clean energy, Buch Engineering",
  authors: [{ name: "Buch Engineering Services" }],
  creator: "Buch Engineering Services",
  publisher: "Buch Engineering Services",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon-32x32.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Buch Engineering Services - Solar Energy Solutions",
    description: "Expert solar panel sales, installation, and maintenance services. Powering your future with clean, renewable energy solutions.",
    url: "https://buchengineering.com",
    siteName: "Buch Engineering Services",
    images: [
      {
        url: "/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: "Buch Engineering Services Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Buch Engineering Services - Solar Energy Solutions",
    description: "Expert solar panel sales, installation, and maintenance services. Powering your future with clean, renewable energy solutions.",
    images: ["/favicon-32x32.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
