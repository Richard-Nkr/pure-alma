import type { ReactNode } from "react";

type Variant = "primary" | "navy" | "outline";
type Size = "md" | "lg";

type CtaButtonProps = {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  size?: Size;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-md font-condensed font-semibold uppercase tracking-wide transition hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-amla-blue/40";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-9 py-4 text-base sm:text-lg",
};

const variants: Record<Variant, string> = {
  primary: "bg-amla-yellow text-amla-blue hover:bg-amla-yellow-deep shadow-lg shadow-amla-yellow/20",
  navy: "bg-amla-blue text-white hover:bg-amla-blue-deep",
  outline: "border-2 border-white/70 text-white hover:bg-white/10",
};

export default function CtaButton({
  label,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "lg",
  className = "",
}: CtaButtonProps) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {label}
    </button>
  );
}
