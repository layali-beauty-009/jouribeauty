type Props = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "right";
  accentColor?: string;
};

export function LpSectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  accentColor = "#2a7a85",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-right";

  return (
    <div className={`mb-6 md:mb-8 ${alignClass} max-w-xl`}>
      <p
        className="text-[0.65rem] tracking-[0.25em] font-semibold"
        style={{ color: accentColor }}
      >
        {label}
      </p>
      <h2 className="font-sans text-lg md:text-xl font-bold text-navy mt-2 leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm text-muted leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
