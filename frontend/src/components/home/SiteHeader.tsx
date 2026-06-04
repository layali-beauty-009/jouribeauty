"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { businessConfig } from "@/config/business";
import { useCart } from "@/context/CartContext";

const nav = [
  { href: "/", label: "الرئيسية" },
  { href: "/products", label: "السيرومات" },
  { href: "/about", label: "من نحن" },
];

export function SiteHeader() {
  const { openCart, lines } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-mist">
      <div className="mx-auto max-w-lg md:max-w-2xl lg:max-w-5xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <BrandLogo variant="light" iconClassName="h-12 w-auto max-h-12" />
          <span className="text-right leading-tight">
            <span className="block text-sm font-bold text-navy tracking-tight">
              {businessConfig.brand.nameLocal}
            </span>
            <span className="block text-[0.65rem] font-medium tracking-[0.2em] text-royal uppercase">
              {businessConfig.brand.nameEnglish}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="hidden sm:flex items-center gap-1 text-sm text-navy">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-full hover:bg-clinical transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="p-2 text-navy sm:hidden"
            aria-label="القائمة"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button
            type="button"
            className="p-2 text-navy relative"
            aria-label="السلة"
            onClick={openCart}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {lines.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-electric text-[10px] text-pearl flex items-center justify-center font-semibold">
                {lines.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
