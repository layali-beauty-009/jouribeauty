import type { ReactNode } from "react";
import { toWesternDigits } from "@/lib/format";

/** رقم معزول — يبان 012345 بترتيب غربي داخل نص عربي */
export function Num({ children }: { children: string | number }) {
  return (
    <span dir="ltr" className="num-isolate tabular-nums">
      {toWesternDigits(children)}
    </span>
  );
}

type BadgeProps = {
  n: number;
  className?: string;
};

/** دائرة رقم — على يمين الصف في RTL (أول عنصر في flex-row) */
export function StepBadge({ n, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-pearl tabular-nums num-isolate ${className}`}
      dir="ltr"
    >
      {n}
    </span>
  );
}

type RowProps = {
  n: number;
  children: ReactNode;
  className?: string;
};

/** صف مرقّم: الرقم يمين، النص يساره — مناسب لـ dir=rtl */
export function NumberedStepRow({ n, children, className = "" }: RowProps) {
  return (
    <div
      className={`flex items-start gap-4 text-right ${className}`.trim()}
    >
      <StepBadge n={n} />
      <div className="min-w-0 flex-1 pt-1.5 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
