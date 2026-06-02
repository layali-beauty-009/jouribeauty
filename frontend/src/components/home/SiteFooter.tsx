import Link from "next/link";
import { businessConfig } from "@/config/business";

export function SiteFooter() {
  return (
    <footer className="bg-[#f9f6f0] border-t border-mist px-4 py-12">
      <div className="max-w-lg md:max-w-2xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center mb-4 leading-none">
          <span className="font-brand text-3xl italic text-navy">
            {businessConfig.brand.nameEnglish.split(" ")[0]}
          </span>
          <span className="text-[0.62rem] font-bold tracking-[0.45em] text-accent uppercase mt-1">
            {businessConfig.brand.nameEnglish.split(" ").slice(1).join(" ") || "BEAUTY"}
          </span>
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
