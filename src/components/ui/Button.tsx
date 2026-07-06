import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  target,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[32px] px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-accent"
      : "border border-primary text-text-primary hover:bg-primary hover:text-white";

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
