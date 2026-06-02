import Link from "next/link";
import { business } from "@/config/business";

export function SiteHeader() {
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
          <button type="button" className="p-2 text-navy" aria-label="Cart">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
        <Link href="/" className="flex items-center gap-2">
          <span className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-accent font-serif text-lg">
            J
          </span>
          <span className="text-right leading-tight">
            <span className="block text-sm font-medium text-navy">{business.brand.nameLocal}</span>
            <span className="block text-[10px] tracking-[0.2em] text-accent uppercase">
              {business.brand.nameEnglish}
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
}
