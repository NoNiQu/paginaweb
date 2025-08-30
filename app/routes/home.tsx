import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Card } from "../components/ui/Card";

export default function Home() {
  return (
    <div className="w-full font-body">
      {/* ===== HERO ===== */}
      <section className="relative w-full min-h-[100svh] overflow-hidden">
        {/* Fondo responsive */}
        <picture className="absolute inset-0 z-0 block">
          <source media="(max-width: 640px)" srcSet="/hero/heroB.jpg" />
          <img
            src="/hero/heroA.jpg"
            alt="Cofradía de la Esperanza"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 66%" }}
            loading="eager"
            decoding="sync"
          />
        </picture>

        {/* Velo global (ligero) */}
        <div className="absolute inset-0 z-10 bg-black/25" />

        {/* Degradado superior para el navbar */}
        <div className="absolute inset-x-0 top-0 z-20 h-40 sm:h-56 bg-gradient-to-b from-black/90 via-black/45 to-transparent pointer-events-none" />

        {/* Degradado inferior para contraste del bloque de texto */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-36 sm:h-48 bg-gradient-to-t from-black/55 via-black/35 to-transparent pointer-events-none" />

        {/* Contenido (anclado abajo) */}
        <div className="relative z-30 flex items-end justify-center text-center min-h-[100svh] px-4 pb-8 sm:pb-16 lg:pb-20">
          <div className="flex flex-col items-center">
            {/* Título como imagen (ajustado) */}
            <img
              src="/hero/headerB.png"
              alt="Nuestra Señora de la Esperanza"
              className="only-desktop block w-[min(65vw,550px)] h-auto drop-shadow-[0_6px_24px_rgba(0,0,0,1)]"
              loading="eager"
              decoding="sync"
            />
            <img
              src="/hero/headerB.png"
              alt="Nuestra Señora de la Esperanza"
              className="only-mobile block w-[min(78vw,300px)] h-auto drop-shadow-[0_6px_24px_rgba(0,0,0,1)]"
              loading="eager"
              decoding="sync"
            />

            {/* Subtítulo en desktop y móvil, sin fondo negro */}
            <p className="mt-5 sm:mt-7 text-base sm:text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,1) max-w-3xl mx-auto">
              Tradición, fe y esperanza en el corazón de Toledo
            </p>
          </div>
        </div>
      </section>

      {/* ===== BLOQUE VERDE ===== */}
      <div className="bg-emerald-50 py-16">
        <SectionContainer>
          <SectionHeader>Nuestra Cofradía</SectionHeader>
          <p className="mt-6 text-base sm:text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
            La Cofradía de la Esperanza hunde sus raíces en la devoción a la
            Virgen, manteniendo viva la tradición, el compromiso fraterno y el
            servicio en la comunidad cristiana.
          </p>
        </SectionContainer>
      </div>

      {/* ===== ACTOS ===== */}
      <SectionContainer>
        <SectionHeader>Actos</SectionHeader>
        <div className="mt-6 space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
          <p>
            Durante el año, la Cofradía organiza diversos cultos y actividades:
            procesiones, novenas, celebraciones litúrgicas y actos de
            fraternidad.
          </p>
          <p>
            Estos encuentros fortalecen la unión de los hermanos y renuevan la
            devoción a la Virgen de la Esperanza.
          </p>
        </div>
      </SectionContainer>

      {/* ===== NOTICIAS ===== */}
      <SectionContainer>
        <SectionHeader>Noticias</SectionHeader>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            as="a"
            href="/noticias"
            className="flex flex-col items-center justify-center p-6 min-h-[200px]"
          >
            <h3 className="font-display text-xl">Últimas noticias</h3>
            <p className="mt-2 text-gray-600 text-center text-sm">
              Mantente al día de todo lo que ocurre en nuestra Cofradía.
            </p>
          </Card>
        </div>
      </SectionContainer>
    </div>
  );
}
