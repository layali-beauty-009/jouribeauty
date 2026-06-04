import { displayText } from "@/lib/format";

type Stat = { value: string; label: string };

export function LpHeroStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="mt-3 grid grid-cols-2 gap-2">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-mist/80 bg-white px-2 py-3 text-center shadow-sm"
        >
          <p className="text-lg font-bold leading-none text-gold md:text-xl">{displayText(s.value)}</p>
          <p className="mt-1 text-[10px] font-medium leading-snug text-muted">{displayText(s.label)}</p>
        </div>
      ))}
    </div>
  );
}
