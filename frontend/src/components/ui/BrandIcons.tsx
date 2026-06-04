import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

const base = {
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconShield({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} {...base} {...props}>
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

export function IconTruck({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} {...base} {...props}>
      <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0h4m-4 0a2 2 0 104 0m6 0a2 2 0 104 0M3 16h10" />
    </svg>
  );
}

export function IconPackage({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} {...base} {...props}>
      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

export function IconLeaf({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} {...base} {...props}>
      <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

export function IconFlask({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} {...base} {...props}>
      <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-2.106 4.211a1.5 1.5 0 01-1.342.829H7.648a1.5 1.5 0 01-1.342-.829L4.2 14.5" />
    </svg>
  );
}

export function IconHeart({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} {...base} {...props}>
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

export function IconQuote({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} {...base} {...props}>
      <path d="M7.5 8.25h3m-3 3h3m6-3h3m-3 3h3M4.5 19.5h15a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 6v12a1.5 1.5 0 001.5 1.5z" />
    </svg>
  );
}

export function IconCheck({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} {...base} {...props}>
      <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function IconSparkles({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} {...base} {...props}>
      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  );
}

export type BrandIconName =
  | "shield"
  | "truck"
  | "cod"
  | "vegan"
  | "flask"
  | "heart"
  | "sparkles"
  | "package";

const map: Record<BrandIconName, ComponentType<IconProps>> = {
  shield: IconShield,
  truck: IconTruck,
  cod: IconPackage,
  vegan: IconLeaf,
  flask: IconFlask,
  heart: IconHeart,
  sparkles: IconSparkles,
  package: IconPackage,
};

export function BrandIcon({ name, className }: { name: BrandIconName; className?: string }) {
  const C = map[name] ?? IconShield;
  return <C className={className} aria-hidden />;
}
