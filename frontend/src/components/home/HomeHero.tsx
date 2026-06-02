import Link from "next/link";
import { TrustBadgeRow } from "./AnnouncementBar";

type HeroContent = {
  label: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaSecondary: string;
  proofCard: { title: string; subtitle: string };
};

export function HomeHero({ content }: { content: HeroContent }) {
  return (
    <section className="relative px-4 pt-8 pb-12 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/15 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-lavender/30 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div className="relative max-w-lg md:max-w-2xl mx-auto text-center">
        <p className="text-[0.65rem] tracking-[0.35em] uppercase text-accent font-semibold mb-4">
          {content.label}
        </p>
        <h1 className="font-sans text-2xl md:text-3xl font-bold text-navy leading-snug">
          {content.title}
        </h1>
        <p className="mt-4 text-muted text-sm leading-7 max-w-md mx-auto font-light">
          {content.subtitle}
        </p>
        <TrustBadgeRow />
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 bg-navy text-pearl rounded-full py-3.5 px-8 text-sm font-medium tracking-wide hover:bg-royal transition-colors"
          >
            {content.cta}
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full py-3.5 px-8 text-sm font-medium text-navy border border-navy/20 bg-white/80 hover:border-royal transition-colors"
          >
            {content.ctaSecondary}
          </Link>
        </div>
        <p className="mt-4 text-xs text-accent font-medium">{content.proofCard.subtitle}</p>
      </div>
      {/* Hero image placeholder */}
      <div className="max-w-lg md:max-w-2xl mx-auto mt-10 relative">
        <div className="rounded-3xl overflow-hidden border border-mist shadow-lg bg-white p-2">
          <div className="relative rounded-2xl overflow-hidden min-h-[220px] bg-gradient-to-br from-royal/15 via-lavender/25 to-ice/30 flex items-end justify-center pb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-sm text-navy/50 tracking-widest uppercase">Hero image soon</p>
            </div>
            <div className="relative bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3 mx-4 mb-2">
              <span className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy text-lg">
                ✓
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-navy">{content.proofCard.title}</p>
                <p className="text-xs text-muted">{content.proofCard.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
