"use client";

import Link from "next/link";
import { businessConfig } from "@/config/business";
import { useCart } from "@/context/CartContext";

export function SiteHeader() {
  const { openCart, lines } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-mist">
      <div className="mx-auto max-w-lg md:max-w-2xl lg:max-w-4xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="p-2 text-navy"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button
            type="button"
            className="p-2 text-navy relative"
            aria-label="Cart"
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
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-royal text-[10px] text-pearl flex items-center justify-center">
                {lines.length}
              </span>
            )}
          </button>
        </div>
        <Link href="/" className="flex items-center gap-2">
          <span className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-accent text-lg">
            ج
          </span>
          <span className="text-right leading-none">
            <span className="block font-brand text-2xl italic text-navy leading-none">
              {businessConfig.brand.nameEnglish.split(" ")[0]}
            </span>
            <span className="block text-[0.62rem] font-bold tracking-[0.45em] text-accent uppercase mt-0.5">
              {businessConfig.brand.nameEnglish.split(" ").slice(1).join(" ") || "BEAUTY"}
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
}
