import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  shield: (
    <svg className="w-6 h-6 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  leaf: (
    <svg className="w-6 h-6 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  heart: (
    <svg className="w-6 h-6 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

type Card = { icon: string; title: string; text: string };

export function WhyBrand({
  label,
  title,
  subtitle,
  cards,
}: {
  label: string;
  title: string;
  subtitle: string;
  cards: Card[];
}) {
  return (
    <section className="px-4 py-14">
      <div className="max-w-lg md:max-w-2xl mx-auto text-center mb-10">
        <p className="text-[0.65rem] tracking-[0.35em] uppercase text-royal font-semibold">{label}</p>
        <h2 className="font-sans text-xl md:text-2xl font-bold text-navy mt-3">{title}</h2>
        <p className="mt-3 text-sm text-muted">{subtitle}</p>
      </div>
      <div className="max-w-lg md:max-w-2xl mx-auto space-y-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl border border-mist p-5 flex gap-4 shadow-sm"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy flex items-center justify-center">
              {icons[card.icon] ?? icons.shield}
            </div>
            <div>
              <h3 className="font-semibold text-navy">{card.title}</h3>
              <p className="mt-1 text-sm text-muted leading-relaxed">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
