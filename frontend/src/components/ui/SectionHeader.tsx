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
    <div className={`mb-9 max-w-2xl sm:mb-10 ${alignClass} ${className}`}>
      <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.28em] text-gold">
        {label}
      </span>
      <h2 className="font-sans text-2xl font-extrabold leading-[1.25] text-navy sm:text-3xl lg:text-[2rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
