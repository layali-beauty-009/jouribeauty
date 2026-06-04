import Link from "next/link";
import { TrustPills } from "./TrustPills";
import type { BrandIconName } from "@/components/ui/BrandIcons";

type HeroContent = {
  label: string;
  brandLine: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaSecondary: string;
  proofCard: { title: string; subtitle: string };
  trustPills: { icon: BrandIconName; title: string; sub: string }[];
};

/** Emotional hero under collection banner — nama-level clarity, Jouri teal palette. */
export function HomeHero({ content }: { content: HeroContent }) {
  return (
    <section className="relative px-4 pt-10 pb-14 bg-gradient-to-b from-pearl via-white to-cream overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-electric/8 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div className="relative max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto text-center">
        <p className="text-[0.65rem] tracking-[0.35em] uppercase text-royal font-semibold mb-3">
          {content.label}
        </p>
        <p className="font-brand text-3xl md:text-4xl text-navy mb-2 leading-tight">
          {content.brandLine}
        </p>
        <h1 className="font-sans text-xl md:text-2xl lg:text-[1.75rem] font-bold text-navy leading-snug max-w-2xl mx-auto">
          {content.title}
        </h1>
        <p className="mt-4 text-muted text-sm md:text-base leading-7 max-w-xl mx-auto">
          {content.subtitle}
        </p>

        <TrustPills items={content.trustPills} />

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="#products"
            className="inline-flex items-center justify-center gap-2 bg-navy text-pearl rounded-full py-3.5 px-8 text-sm font-semibold tracking-wide hover:bg-royal shadow-md shadow-navy/15 transition-all"
          >
            {content.cta}
            <span aria-hidden>←</span>
          </Link>
          <Link
            href="#why-jouri"
            className="inline-flex items-center justify-center rounded-full py-3.5 px-8 text-sm font-medium text-navy border border-mist bg-white hover:border-electric hover:bg-clinical/50 transition-colors"
          >
            {content.ctaSecondary}
          </Link>
        </div>

        <div className="mt-8 mx-auto max-w-md rounded-2xl border border-electric/25 bg-gradient-to-br from-white to-clinical/40 px-5 py-4 shadow-sm text-right">
          <p className="text-sm font-semibold text-navy">{content.proofCard.title}</p>
          <p className="text-xs text-muted mt-1.5 leading-relaxed">{content.proofCard.subtitle}</p>
        </div>
      </div>
    </section>
  );
}
