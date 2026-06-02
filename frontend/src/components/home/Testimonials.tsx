type Item = {
  name: string;
  meta: string;
  initial: string;
  text: string;
  rating: number;
};

export function Testimonials({
  label,
  title,
  subtitle,
  items,
}: {
  label: string;
  title: string;
  subtitle: string;
  items: Item[];
}) {
  return (
    <section className="px-4 py-14 bg-cream">
      <div className="max-w-lg md:max-w-2xl mx-auto text-center mb-10">
        <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium">{label}</p>
        <h2 className="font-serif text-2xl md:text-3xl text-navy mt-3 leading-snug">{title}</h2>
        <p className="mt-3 text-sm text-muted">{subtitle}</p>
      </div>
      <div className="max-w-lg md:max-w-2xl mx-auto space-y-4">
        {items.map((t) => (
          <div
            key={t.name}
            className="bg-[#f9f6f0] rounded-2xl border border-mist/60 p-5 relative"
          >
            <span className="text-4xl text-accent/80 font-serif leading-none">&ldquo;</span>
            <p className="text-accent text-sm mt-1 mb-3">{"★".repeat(t.rating)}</p>
            <p className="text-sm text-navy leading-relaxed">{t.text}</p>
            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-navy text-sm">{t.name}</p>
                <p className="text-xs text-muted mt-0.5">{t.meta}</p>
              </div>
              <span className="w-10 h-10 rounded-full bg-navy text-accent flex items-center justify-center font-serif text-lg flex-shrink-0">
                {t.initial}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
