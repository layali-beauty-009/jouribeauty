import type { ProductThemeColors } from "@/types/product";

type Props = {
  label: string;
  sublabel?: string;
  theme: ProductThemeColors;
  variant?: "hero" | "square" | "wide";
  showBeforeAfter?: boolean;
};

export function PremiumImagePlaceholder({
  label,
  sublabel,
  theme,
  variant = "square",
  showBeforeAfter = false,
}: Props) {
  const height =
    variant === "hero" ? "min-h-[300px]" : variant === "wide" ? "aspect-[16/10]" : "aspect-square";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-2 ${height}`}
      style={{
        borderColor: `${theme.primary}33`,
        background: `linear-gradient(135deg, ${theme.softBg} 0%, #fff 50%, ${theme.accent}22 100%)`,
      }}
    >
      {showBeforeAfter && (
        <>
          <div
            className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-center text-xs opacity-40"
            style={{ backgroundColor: `${theme.primary}11` }}
          >
            بعد
          </div>
          <div
            className="absolute inset-y-0 left-0 w-1/2 flex items-center justify-center text-xs opacity-40 border-l"
            style={{ borderColor: `${theme.primary}22` }}
          >
            قبل
          </div>
        </>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
        <div
          className="w-20 h-28 rounded-lg shadow-lg mb-3 flex items-center justify-center text-white text-xs font-medium"
          style={{ background: `linear-gradient(180deg, ${theme.primary}, ${theme.primaryDark})` }}
        >
          {label.split(" ").slice(0, 2).join(" ")}
        </div>
        <p className="text-xs tracking-widest uppercase" style={{ color: theme.primary }}>
          صورة قريباً
        </p>
        {sublabel && (
          <p className="text-sm mt-1 max-w-[220px] opacity-70" style={{ color: theme.primaryDark }}>
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
}
