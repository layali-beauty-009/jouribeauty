import type { Metadata } from "next";
import {
  Dancing_Script,
  IBM_Plex_Sans_Arabic,
  Inter,
} from "next/font/google";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { AnalyticsPixels } from "@/components/AnalyticsPixels";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { businessConfig } from "@/config/business";
import "./globals.css";

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-arabic",
});

const latin = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-latin",
});

const display = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jouribeauty.store",
  ),
  title: {
    default: `${businessConfig.brand.nameLocal} | ${businessConfig.brand.tagline}`,
    template: `%s | ${businessConfig.brand.nameLocal}`,
  },
  description: businessConfig.brand.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={businessConfig.market.language}
      dir={businessConfig.market.direction}
      className={`${arabic.variable} ${latin.variable} ${display.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-ink antialiased font-sans">
        <CartProvider>
          <AnalyticsPixels />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
