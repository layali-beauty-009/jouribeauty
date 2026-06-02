type Step = { n: number; title: string; text: string };

export function HowItWorks({
  label,
  title,
  subtitle,
  steps,
}: {
  label: string;
  title: string;
  subtitle: string;
  steps: Step[];
}) {
  return (
    <section className="px-4 py-14" id="how-it-works">
      <div className="max-w-lg md:max-w-2xl mx-auto text-center mb-10">
        <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium">{label}</p>
        <h2 className="font-sans text-xl md:text-2xl font-bold text-navy mt-3">{title}</h2>
        <p className="mt-3 text-sm text-muted">{subtitle}</p>
      </div>
      <div className="max-w-lg md:max-w-2xl mx-auto space-y-6">
        {steps.map((step) => (
          <div
            key={step.n}
            className="bg-white rounded-3xl border border-mist p-8 text-center shadow-sm"
          >
            <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-navy text-accent font-semibold text-lg border-2 border-accent/40 shadow">
              {step.n}
            </span>
            <h3 className="mt-4 font-semibold text-lg text-navy">{step.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
