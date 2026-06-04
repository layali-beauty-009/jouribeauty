import { IconPackage, IconSparkles, IconTruck } from "@/components/ui/BrandIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
    <section className="px-4 py-16 bg-gradient-to-b from-cream to-pearl/30" id="how-it-works">
      <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
        <SectionHeader label={label} title={title} subtitle={subtitle} />
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {steps.map((step, idx) => {
            const StepIcon = stepIcons[idx] ?? IconPackage;
            return (
              <div
                key={step.n}
                className="bg-white rounded-3xl border border-mist/80 p-6 md:p-7 text-center shadow-sm hover:shadow-md hover:border-electric/30 transition-all relative"
              >
                <span className="absolute top-4 left-4 text-[10px] font-bold text-electric/80 tracking-widest">
                  ٠{step.n}
                </span>
                <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-clinical text-navy mb-4">
                  <StepIcon className="w-7 h-7" />
                </span>
                <h3 className="font-semibold text-lg text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
