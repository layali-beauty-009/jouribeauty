import { getProductTheme } from "@/lib/productTheme";

type Props = {
  slug?: string;
  label?: string;
  className?: string;
  aspect?: "square" | "hero" | "wide";
};

export function ImagePlaceholder({
  slug,
  label = "صورة المنتج قريباً",
  className = "",
  aspect = "square",
}: Props) {
  const theme = slug ? getProductTheme(slug) : null;
  const aspectClass =
    aspect === "hero"
      ? "min-h-[280px] md:min-h-[360px]"
      : aspect === "wide"
        ? "aspect-[16/10]"
        : "aspect-square";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-mist bg-pearl ${aspectClass} ${className}`}
      aria-label={label}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          theme?.gradient ?? "from-mist/40 via-pearl to-ice/20"
        }`}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full border-2 border-dashed border-navy/25 flex items-center justify-center mb-3">
          <svg
            className="w-8 h-8 text-navy/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-xs tracking-[0.2em] uppercase text-muted font-medium">
          صورة قريباً
        </p>
        <p className="text-sm text-navy/70 mt-1 max-w-[200px]">{label}</p>
      </div>
    </div>
  );
}
