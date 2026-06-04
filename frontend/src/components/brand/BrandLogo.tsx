import { BrandLogoMark } from "@/components/brand/BrandLogoMark";

type Props = {
  variant?: "light" | "dark";
  className?: string;
  iconClassName?: string;
};

/** شعار جوري — SVG شفاف (الهيدر والفوتر) */
export function BrandLogo({
  variant = "light",
  className = "",
  iconClassName = "h-11 w-auto",
}: Props) {
  return (
    <BrandLogoMark
      variant={variant}
      className={`shrink-0 ${iconClassName} ${className}`.trim()}
    />
  );
}
