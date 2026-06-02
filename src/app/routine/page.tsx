import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skincare Routine",
  description: "How to use your Jouri Beauty serums together for best results.",
};

const steps = [
  {
    time: "Morning",
    items: [
      {
        product: "Bakuchiol Anti-Aging Serum",
        slug: "bakuchiol-anti-aging-serum",
        note: "Brightening & firming — or swap for GHK-Cu on repair days.",
      },
      {
        product: "5% Caffeine Under Eye Serum",
        slug: "caffeine-under-eye-serum",
        note: "Depuff and brighten — always last on eye area before SPF.",
      },
    ],
  },
  {
    time: "Evening",
    items: [
      {
        product: "GHK-Cu Barrier Repair Serum",
        slug: "ghk-cu-barrier-repair-serum",
        note: "Ideal for overnight barrier recovery after sun or travel.",
      },
      {
        product: "5% Caffeine Under Eye Serum",
        slug: "caffeine-under-eye-serum",
        note: "Eye area only — contains retinol; avoid layering on full face.",
      },
    ],
  },
];

export default function RoutinePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs tracking-[0.35em] uppercase text-gold-dark mb-3">Guide</p>
      <h1 className="font-serif text-5xl text-charcoal mb-4">Your Jouri Routine</h1>
      <p className="text-muted max-w-2xl mb-14 leading-relaxed">
        Three serums, one brand. Use them together for eyes, face, and barrier
        — without overloading your skin.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {steps.map((block) => (
          <div key={block.time} className="border border-sand p-8 bg-white/40">
            <h2 className="font-serif text-3xl text-gold-dark mb-6">{block.time}</h2>
            <ol className="space-y-8">
              {block.items.map((item, i) => (
                <li key={item.slug} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-gold text-gold-dark flex items-center justify-center text-sm font-medium">
                    {i + 1}
                  </span>
                  <div>
                    <Link
                      href={`/products/${item.slug}`}
                      className="font-medium text-charcoal hover:text-gold-dark transition-colors"
                    >
                      {item.product}
                    </Link>
                    <p className="mt-1 text-sm text-muted">{item.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-charcoal text-cream text-sm leading-relaxed max-w-2xl">
        <strong className="text-gold">Tip:</strong> Do not apply the eye serum
        (retinol) over your entire face on the same night as heavy actives
        unless directed by a professional. The eye serum is formulated for the
        delicate under-eye zone only.
      </div>
    </div>
  );
}
