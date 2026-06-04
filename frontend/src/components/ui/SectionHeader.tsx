type Props = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "right";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-right";

  return (
    <div className={`max-w-lg md:max-w-2xl lg:max-w-4xl mb-10 ${alignClass} ${className}`}>
      <p className="text-[0.65rem] tracking-[0.35em] uppercase text-royal font-semibold">
        {label}
      </p>
      <h2 className="font-sans text-xl md:text-2xl lg:text-[1.65rem] font-bold text-navy mt-3 leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-[0.9375rem] text-muted leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
