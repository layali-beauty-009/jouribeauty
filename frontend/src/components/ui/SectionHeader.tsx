type Props = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "right";
  className?: string;
};

/** عناوين الأقسام — لمسة ذهبية مثل namabeauty.shop */
export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: Props) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-right";

  return (
    <div className={`mb-10 max-w-2xl ${alignClass} ${className}`}>
      <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.25em] text-gold">
        {label}
      </span>
      <h2 className="font-sans text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
