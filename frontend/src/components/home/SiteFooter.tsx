import Link from "next/link";
import { businessConfig } from "@/config/business";

export function SiteFooter() {
  return (
    <footer className="bg-[#f9f6f0] border-t border-mist px-4 py-12">
      <div className="max-w-lg md:max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-accent font-serif text-lg">
            J
          </span>
          <span className="text-navy font-medium">{businessConfig.brand.nameEnglish}</span>
        </div>
        <p className="text-sm text-muted leading-relaxed max-w-sm mx-auto">
          {businessConfig.brand.description}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {["Vegan", "Cruelty-free", "UAE"].map((chip) => (
            <span
              key={chip}
              className="text-xs px-3 py-1 rounded-full bg-ice/50 text-navy border border-ice-dark/30"
            >
              {chip}
            </span>
          ))}
        </div>
        <nav className="mt-8 space-y-2 text-sm text-navy">
          <Link href="/products" className="block hover:text-royal">
            All serums
          </Link>
          <Link href="/routine" className="block hover:text-royal">
            Routine
          </Link>
          <Link href="/about" className="block hover:text-royal">
            About
          </Link>
        </nav>
        <p className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} {businessConfig.brand.nameEnglish}. جميع الحقوق محفوظة.
        </p>
        <a
          href="mailto:hello@jouribeauty.store"
          className="text-xs text-royal hover:underline mt-2 inline-block"
        >
          hello@jouribeauty.store
        </a>
      </div>
    </footer>
  );
}
