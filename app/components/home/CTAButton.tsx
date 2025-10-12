type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
  ariaLabel?: string;
};

export function CTAButton({
  href,
  children,
  variant = "light",
  className = "",
  ariaLabel,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full font-body font-medium sc px-6 py-3 text-base shadow-md transition";
  const styles =
    variant === "light"
      ? "bg-white text-[#053C2F] hover:bg-emerald-50"
      : "bg-[#5B4636] text-white hover:opacity-95";
  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
