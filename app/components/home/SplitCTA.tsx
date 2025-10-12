type Props = {
  title: string;
  text: string;
  href: string;
  buttonLabel: string;
  bgClass: string; // p. ej. "bg-[#5B4636] text-white"
  buttonVariant?: "light" | "dark";
};

import { CTAButton } from "./CTAButton";

export function SplitCTA({
  title,
  text,
  href,
  buttonLabel,
  bgClass,
  buttonVariant = "light",
}: Props) {
  return (
    <div className={bgClass}>
      <div className="relative flex min-h-[380px] md:min-h-[420px] flex-col justify-between p-8 sm:p-12 text-center">
        <h2 className="font-display sc text-3xl sm:text-4xl">{title}</h2>
        <div className="flex-grow flex items-center">
          <p className="text-base sm:text-lg leading-relaxed w-full opacity-95">
            {text}
          </p>
        </div>
        <div className="mt-8 sm:mt-10">
          <CTAButton href={href} variant={buttonVariant}>
            {buttonLabel}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
