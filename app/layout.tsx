import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/components/context/CartContext";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { QuickViewModal } from "@/components/shop/QuickViewModal";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chaiwala Co. | Premium Artisanal Single-Origin Tea House",
  description:
    "Experience single-origin loose-leaf teas, high-altitude harvests, and artisanal brewing rituals sourced directly from remote gardens in Darjeeling, Kyoto, Assam & Wuyi Shan.",
  keywords: [
    "single-origin tea",
    "masala chai",
    "dragonwell green tea",
    "darjeeling tea",
    "wuyi rock oolong",
    "artisanal tea house",
    "loose leaf tea",
    "slow living",
  ],
  authors: [{ name: "Chaiwala Co." }],
  openGraph: {
    title: "Chaiwala Co. | Premium Artisanal Single-Origin Tea House",
    description: "Steeped in slowness. Single-origin teas sourced directly from remote high-altitude gardens.",
    url: "https://chaiwalaco.com",
    siteName: "Chaiwala Co.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chaiwala Co. Premium Single-Origin Tea House",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaiwala Co. | Premium Artisanal Tea House",
    description: "Steeped in slowness. Single-origin teas sourced directly from remote high-altitude gardens.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema.org LocalBusiness & Store JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Chaiwala Co.",
    image: "https://chaiwalaco.com/og-image.png",
    description: "Premium single-origin tea house selling loose-leaf tea, artisanal chai blends, and tea ware.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "142 Artisan Way, Soho",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10013",
      addressCountry: "US",
    },
    priceRange: "$$$",
    telephone: "+1-212-555-8321",
    openingHours: "Mo-Su 08:00-20:00",
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F1E6] text-[#2B211A]">
        <CartProvider>
          <SmoothScroll>
            <Preloader />
            <CustomCursor />
            {children}
            <CartDrawer />
            <QuickViewModal />
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
