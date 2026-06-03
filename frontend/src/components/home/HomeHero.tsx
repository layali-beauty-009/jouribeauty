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

/** Text + trust + CTA under collection banner (namabeauty.shop flow). */
export function HomeHero({ content }: { content: HeroContent }) {
  return (
    <section className="relative px-4 pt-10 pb-12 bg-gradient-to-b from-pearl to-white overflow-hidden">
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-electric/10 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div className="relative max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto text-center">
        <p className="text-[0.65rem] tracking-[0.35em] uppercase text-royal font-semibold mb-4">
          {content.label}
        </p>
        <h1 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-navy leading-snug">
          {content.title}
        </h1>
        <p className="mt-4 text-muted text-sm md:text-base leading-7 max-w-xl mx-auto">
          {content.subtitle}
        </p>
        <TrustBadgeRow />
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="#products"
            className="inline-flex items-center justify-center gap-2 bg-navy text-pearl rounded-full py-3.5 px-8 text-sm font-semibold tracking-wide hover:bg-royal transition-colors"
          >
            {content.cta}
            <span aria-hidden>←</span>
          </Link>
          <Link
            href="#why-jouri"
            className="inline-flex items-center justify-center rounded-full py-3.5 px-8 text-sm font-medium text-navy border border-mist bg-white hover:border-electric transition-colors"
          >
            {content.ctaSecondary}
          </Link>
        </div>
        <div className="mt-8 mx-auto max-w-md rounded-2xl border border-mist bg-white px-4 py-3 shadow-sm text-right">
          <p className="text-sm font-semibold text-navy">{content.proofCard.title}</p>
          <p className="text-xs text-muted mt-1">{content.proofCard.subtitle}</p>
        </div>
      </div>
    </section>
  );
}
