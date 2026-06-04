import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { businessConfig } from "@/config/business";

const trustChips = [
  "وضوح المكوّنات",
  "دفع عند الاستلام",
  "توصيل الإمارات",
  "ضمان 30 يوماً",
];

export function SiteFooter() {
  return (
    <footer className="mt-8 bg-teal-dark text-pearl">
      <div className="mx-auto max-w-lg px-4 pb-10 pt-12 md:max-w-2xl">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="mb-5 flex flex-col items-center gap-3">
            <BrandLogo
              variant="dark"
              iconClassName="h-16 w-auto max-w-[4.5rem] sm:h-[4.25rem] sm:max-w-[5rem]"
            />
            <span className="block text-base font-bold text-pearl">
              {businessConfig.brand.nameLocal}
            </span>
            <span className="block text-[0.7rem] font-medium tracking-[0.22em] text-gold uppercase">
              {businessConfig.brand.nameEnglish}
            </span>
          </Link>

          <p className="max-w-md text-sm leading-relaxed text-pearl/85">
            {businessConfig.brand.description}
          </p>
          <p className="mt-2 text-xs font-medium text-gold/90">{businessConfig.brand.tagline}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {trustChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-pearl"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <nav className="mt-10 grid grid-cols-2 gap-2 text-center text-sm sm:flex sm:justify-center sm:gap-6">
          <Link href="/" className="transition-colors hover:text-gold">
            الرئيسية
          </Link>
          <Link href="/products" className="transition-colors hover:text-gold">
            السيرومات
          </Link>
          <Link href="/about" className="transition-colors hover:text-gold">
            من نحن
          </Link>
          <Link href="/products" className="transition-colors hover:text-gold">
            العروض
          </Link>
        </nav>

        <p className="mx-auto mt-8 max-w-md text-center text-[11px] leading-relaxed text-pearl/60">
          منتجات جوري للجمال للعناية بالبشرة فقط وليست بديلاً عن استشارة طبية. النتائج تختلف من
          شخص لآخر.
        </p>
        <p className="mt-4 text-center text-xs text-pearl/50">
          © {new Date().getFullYear()} {businessConfig.brand.nameLocal}. جميع الحقوق محفوظة.
        </p>
        <a
          href={`mailto:${businessConfig.brand.email}`}
          className="mt-2 block text-center text-xs text-gold hover:underline"
        >
          {businessConfig.brand.email}
        </a>
      </div>
    </footer>
  );
}
