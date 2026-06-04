import Link from "next/link";

type HeroContent = {
  label: string;
  brandLine: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaSecondary: string;
};

/** هيرو عاطفي — هيكل namabeauty.shop + ألوان جوري */
export function HomeHero({ content }: { content: HeroContent }) {
  return (
    <section className="relative overflow-hidden bg-cream px-4 pb-10 pt-10 sm:pt-14">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/5 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-lg text-center sm:max-w-2xl lg:max-w-4xl">
        <p className="text-[11px] font-bold tracking-[0.25em] text-gold">{content.label}</p>
        <p className="mt-2 font-brand text-2xl text-navy sm:text-3xl">{content.brandLine}</p>
        <h1 className="mx-auto mt-4 max-w-3xl font-sans text-2xl font-extrabold leading-snug text-navy sm:text-3xl lg:text-[2.125rem]">
          {content.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          {content.subtitle}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="#products"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-navy px-8 text-sm font-bold text-pearl shadow-lg shadow-navy/20 ring-1 ring-gold/20 transition-all hover:bg-royal active:scale-[0.98]"
          >
            {content.cta}
            <span aria-hidden>←</span>
          </Link>
          <Link
            href="#why-jouri"
            className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-mist bg-white px-8 text-sm font-semibold text-navy transition-colors hover:border-gold/50 hover:bg-gold-soft/30"
          >
            {content.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}

// keep type export for content.ts trustPills if removed from hero - content still has trustPills, page won't pass them
