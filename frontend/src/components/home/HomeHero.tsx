import Link from "next/link";
import { BrandIcon, type BrandIconName } from "@/components/ui/BrandIcons";

type TrustPill = { icon: BrandIconName; title: string; sub: string };

type HeroContent = {
  label: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaSecondary: string;
  trustPills: TrustPill[];
  trustSubline: string;
  trustTagline: string;
};

/** هيرو — هيكل namabeauty.shop (تسمية، عنوان، أزرار، شارات ثقة 2×2) */
export function HomeHero({ content }: { content: HeroContent }) {
  return (
    <section className="relative overflow-hidden bg-cream px-4 pb-8 pt-8 sm:pb-10 sm:pt-12">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/5 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-lg text-center sm:max-w-2xl lg:max-w-3xl">
        <p className="text-[11px] font-bold tracking-[0.28em] text-gold">{content.label}</p>
        <h1 className="mx-auto mt-4 max-w-2xl font-sans text-[1.65rem] font-extrabold leading-[1.35] text-navy sm:text-3xl lg:text-[2.125rem]">
          {content.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted sm:text-[0.9375rem]">
          {content.subtitle}
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="#products"
            className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-2xl bg-navy px-8 text-sm font-bold text-pearl shadow-lg shadow-navy/15 ring-1 ring-gold/25 transition-all hover:bg-royal active:scale-[0.98]"
          >
            {content.cta}
            <span aria-hidden>←</span>
          </Link>
          <Link
            href="#why-jouri"
            className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-mist bg-white px-8 text-sm font-semibold text-navy transition-colors hover:border-gold/45 hover:bg-gold-soft/25"
          >
            {content.ctaSecondary}
          </Link>
        </div>

        <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-2.5 sm:max-w-xl sm:gap-3">
          {content.trustPills.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-mist/90 bg-white px-3 py-3.5 text-center shadow-sm transition-colors hover:border-gold/35"
            >
              <span className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/35">
                <BrandIcon name={item.icon} className="h-[18px] w-[18px] text-gold" />
              </span>
              <p className="text-[11px] font-extrabold leading-tight text-navy">{item.title}</p>
              <p className="mt-0.5 text-[10px] leading-snug text-muted">{item.sub}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[11px] font-semibold text-royal">{content.trustSubline}</p>
        <p className="mt-1 text-[10px] font-medium tracking-wide text-muted">{content.trustTagline}</p>
      </div>
    </section>
  );
}
