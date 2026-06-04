type Stat = { value: string; label: string };

export function LpHeroStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 mt-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-white rounded-xl border border-mist/80 py-3 px-2 text-center shadow-sm"
        >
          <p className="text-lg md:text-xl font-bold text-navy leading-none">{s.value}</p>
          <p className="text-[10px] text-muted mt-1 font-medium leading-snug">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
