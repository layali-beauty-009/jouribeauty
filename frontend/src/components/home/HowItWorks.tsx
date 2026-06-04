import { IconPackage, IconSparkles, IconTruck } from "@/components/ui/BrandIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { toArabicIndicDigits } from "@/lib/format";

type Step = { n: number; title: string; text: string };

const stepIcons = [IconSparkles, IconPackage, IconTruck];

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
    <section className="bg-cream px-4 py-14 sm:py-16" id="how-it-works">
      <div className="mx-auto max-w-lg sm:max-w-2xl lg:max-w-4xl">
        <SectionHeader label={label} title={title} subtitle={subtitle} />
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {steps.map((step, idx) => {
            const StepIcon = stepIcons[idx] ?? IconPackage;
            return (
              <div
                key={step.n}
                className="relative rounded-3xl border border-mist bg-white p-6 text-center shadow-sm transition-all hover:border-gold/35 hover:shadow-md md:p-7"
              >
                <span
                  className="absolute top-4 right-4 font-sans text-2xl font-extrabold leading-none text-gold/90"
                  aria-hidden
                >
                  {toArabicIndicDigits(step.n)}
                </span>
                <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 ring-1 ring-gold/35">
                  <StepIcon className="h-7 w-7 text-gold" />
                </span>
                <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
