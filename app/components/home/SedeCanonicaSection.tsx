import { CTAButton } from "./CTAButton";

type Props = {
  title: string;
  paragraph: string;
  href: string;
  buttonLabel: string;
};

export function SedeCanonicaSection({
  title,
  paragraph,
  href,
  buttonLabel,
}: Props) {
  return (
    <section aria-label="Sede Canónica" className="w-full bg-[#F4EAE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10 sm:py-14">
          <div className="flex justify-center md:justify-start">
            <img
              src="/iconos/sede_canonica.png"
              alt="Iglesia de San Cipriano - Sede Canónica"
              className="w-[220px] sm:w-[300px] h-auto"
              loading="lazy"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="hidden md:block font-display sc text-3xl sm:text-4xl text-[#5B4636]">
              {title}
            </h2>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#3C3128]">
              {paragraph}
            </p>

            <div className="mt-6">
              <CTAButton href={href} variant="dark">
                {buttonLabel}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
