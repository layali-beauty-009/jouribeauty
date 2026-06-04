import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { businessConfig } from "@/config/business";

const trustChips = [
  "وضوح المكوّنات",
  "دفع عند الاستلام",
  "توصيل الإمارات",
  "ضمان ٣٠ يوماً",
];

export function SiteFooter() {
  return (
    <footer className="bg-teal-dark text-pearl px-4 py-12 mt-8">
      <div className="max-w-lg md:max-w-2xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 mb-4">
            <BrandLogo variant="dark" iconClassName="h-10 w-auto max-w-[2.75rem]" />
            <div className="text-right leading-tight">
              <p className="text-sm font-bold">{businessConfig.brand.nameLocal}</p>
              <p className="text-[0.65rem] tracking-[0.2em] text-electric/90 uppercase">
                {businessConfig.brand.nameEnglish}
              </p>
            </div>
          </div>
          <p className="text-sm text-pearl/85 leading-relaxed max-w-md">
            {businessConfig.brand.description}
          </p>
          <p className="text-xs text-electric/90 mt-2 font-medium">
            {businessConfig.brand.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {trustChips.map((chip) => (
              <span
                key={chip}
                className="text-[11px] px-3 py-1 rounded-full bg-white/10 border border-white/15 text-pearl"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <nav className="mt-10 grid grid-cols-2 gap-2 text-sm text-center sm:flex sm:justify-center sm:gap-6">
          <Link href="/" className="hover:text-electric transition-colors">
            الرئيسية
          </Link>
          <Link href="/products" className="hover:text-electric transition-colors">
            السيرومات
          </Link>
          <Link href="/about" className="hover:text-electric transition-colors">
            من نحن
          </Link>
          <Link href="/products" className="hover:text-electric transition-colors">
            العروض
          </Link>
        </nav>

        <p className="mt-8 text-[11px] text-pearl/60 text-center leading-relaxed max-w-md mx-auto">
          منتجات جوري للجمال للعناية بالبشرة فقط وليست بديلاً عن استشارة طبية. النتائج تختلف من
          شخص لآخر.
        </p>
        <p className="mt-4 text-xs text-pearl/50 text-center">
          © {new Date().getFullYear()} {businessConfig.brand.nameLocal}. جميع الحقوق محفوظة.
        </p>
        <a
          href={`mailto:${businessConfig.brand.email}`}
          className="block text-center text-xs text-electric hover:underline mt-2"
        >
          {businessConfig.brand.email}
        </a>
      </div>
    </footer>
  );
}
