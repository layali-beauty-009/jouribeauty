import { displayText } from "@/lib/format";

type Props = {
  value: string;
  text: string;
  source?: string;
};

/** شريط إحصائي تحت صورة المشكلة — نسبة ذهبية + نص عاطفي */
export function LpInsightBand({ value, text, source }: Props) {
  return (
    <div className="border-t border-gold/20 bg-teal-dark px-5 py-6 text-center text-pearl">
      <p className="text-4xl font-extrabold leading-none text-gold sm:text-5xl">
        {displayText(value)}
      </p>
      <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed opacity-95">{displayText(text)}</p>
      {source && (
        <p className="mt-2 text-[10px] leading-snug opacity-65">{displayText(source)}</p>
      )}
    </div>
  );
}
