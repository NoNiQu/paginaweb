import { useEffect, useRef, useState } from "react";

export function HomeHero() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) setImgLoaded(true);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden min-h-hero bg-[#0b0b0b]"
      aria-label="Portada Cofradía de la Esperanza"
    >
      <div
        className={`absolute inset-0 z-[5] hero-placeholder ${
          imgLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-hidden="true"
        style={{
          backgroundColor: "#0b0b0b",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 66%",
          backgroundSize: "cover",
        }}
      />

      <picture className="absolute inset-0 z-0 block">
        {/* móvil */}
        <source
          type="image/webp"
          media="(max-width: 640px)"
          srcSet="/hero/heroB.webp"
        />
        <source media="(max-width: 640px)" srcSet="/hero/heroB.png" />
        {/* tablet vertical */}
        <source
          type="image/webp"
          media="(min-width: 641px) and (max-width: 1024px) and (orientation: portrait)"
          srcSet="/hero/heroM.webp"
        />
        <source
          media="(min-width: 641px) and (max-width: 1024px) and (orientation: portrait)"
          srcSet="/hero/heroM.png"
        />
        {/* tablet apaisado */}
        <source
          type="image/webp"
          media="(min-width: 641px) and (max-width: 1024px) and (orientation: landscape)"
          srcSet="/hero/heroT.webp"
        />
        <source
          media="(min-width: 641px) and (max-width: 1024px) and (orientation: landscape)"
          srcSet="/hero/heroT.png"
        />
        {/* desktop */}
        <source
          type="image/webp"
          media="(min-width: 1025px)"
          srcSet="/hero/heroO.webp"
        />
        <source media="(min-width: 1025px)" srcSet="/hero/heroO.png" />

        <img
          ref={imgRef}
          src="/hero/heroO.png"
          alt="Cofradía de la Esperanza"
          className={`w-full h-full object-cover hero-img ${imgLoaded ? "is-loaded" : ""}`}
          style={{ objectPosition: "center 66%" }}
          sizes="100vw"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setImgLoaded(true)}
        />
      </picture>

      {/* overlays */}
      <div className="absolute inset-0 z-10 bg-black/25" />
      <div className="absolute inset-x-0 top-0 z-20 h-40 sm:h-56 bg-gradient-to-b from-black/90 via-black/45 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-36 sm:h-48 bg-gradient-to-t from-black/55 via-black/35 to-transparent pointer-events-none" />

      {/* stack central */}
      <div className="relative z-30 flex flex-col justify-end items-center text-center min-h-hero px-4 pb-8 sm:pb-16 lg:pb-20 pt-safe-nav hero-stack">
        <div className="flex flex-col items-center">
          <img
            src="/hero/headerB.png"
            alt="Nuestra Señora de la Esperanza"
            className="only-desktop block drop-shadow-[0_6px_24px_rgba(0,0,0,1)]"
            style={{ width: "min(65vw, 550px)" }}
            width={550}
            height={180}
            loading="eager"
            decoding="sync"
          />
          <img
            src="/hero/headerB.png"
            alt="Nuestra Señora de la Esperanza"
            className="only-mobile block drop-shadow-[0_6px_24px_rgba(0,0,0,1)]"
            style={{ width: "min(78vw, 300px)" }}
            width={300}
            height={98}
            loading="eager"
            decoding="sync"
          />
          <p className="mt-5 sm:mt-7 text-base sm:text-xl text-white drop-shadow-lg max-w-3xl mx-auto">
            Tradición, Fe y Esperanza en el corazón de Toledo
          </p>
        </div>
      </div>
    </section>
  );
}
