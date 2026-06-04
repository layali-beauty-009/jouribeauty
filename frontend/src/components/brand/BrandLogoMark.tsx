import { businessConfig } from "@/config/business";

type Variant = "light" | "dark";

type Props = {
  variant?: Variant;
  className?: string;
};

/** شعار J شفاف — SVG مضمّن، بلا خلفية بيضاء */
export function BrandLogoMark({ variant = "light", className = "h-11 w-auto" }: Props) {
  const main = variant === "dark" ? "#EEF6F4" : "#0F5661";
  const accent = variant === "dark" ? "#8FD4C8" : "#5BA89E";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 128"
      fill="none"
      role="img"
      aria-label={`${businessConfig.brand.nameLocal} — ${businessConfig.brand.nameEnglish}`}
      className={className}
    >
      <path
        d="M52 10H38v72c0 16 9 26 26 26 7 0 13-2 18-5v10c-6 3-13 5-21 5-20 0-32-12-32-34V10h14Z"
        fill={main}
      />
      <path
        d="M14 72c6-22 28-36 54-32 10 2 18 7 24 14l-9 7c-5-5-12-8-20-9-18-3-34 8-40 26l-9-6Z"
        fill={main}
      />
      <path d="M50 108l7 11-7 9-7-9 7-11Z" fill={accent} />
    </svg>
  );
}
