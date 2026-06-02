import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { AnalyticsPixels } from "@/components/AnalyticsPixels";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { businessConfig } from "@/config/business";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jouribeauty.store",
  ),
  title: {
    default: `${businessConfig.brand.nameLocal} | سيرومات فاخرة الإمارات`,
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
      className={`${serif.variable} ${sans.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-ink antialiased">
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
