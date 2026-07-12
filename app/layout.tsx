import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxe Restaurant | Premium Fine Dining Experience",
  description:
    "Experience culinary excellence at Luxe Restaurant. Book your premium dining experience today with our exclusive menu and VIP service.",
  keywords: [
    "fine dining",
    "restaurant",
    "luxury dining",
    "reservation",
    "premium food",
    "catering",
    "private events",
  ],
  authors: [{ name: "Luxe Restaurant" }],
  creator: "Luxe Restaurant",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luxerestaurant.com",
    title: "Luxe Restaurant | Premium Fine Dining Experience",
    description:
      "Experience culinary excellence at Luxe Restaurant. Book your premium dining experience today.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504674900968-3cc9f4dd0992?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Luxe Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxe Restaurant | Premium Fine Dining Experience",
    description: "Experience culinary excellence at Luxe Restaurant.",
    images: [
      "https://images.unsplash.com/photo-1504674900968-3cc9f4dd0992?w=1200&h=630&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
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
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2a2420" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-white text-charcoal-900">
        {children}
      </body>
    </html>
  );
}
