// src/pages/secretaria.tsx
import { useState } from "react";
import { SectionContainer } from "../components/shared/SectionContainer";
import { Card } from "../components/ui/Card";
import { config } from "../config";

export default function Secretaria() {
  const [copiado, setCopiado] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    navigator.clipboard.writeText(config.contactEmail);
    setPos({ x: e.clientX, y: e.clientY });
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1800);
  };

  return (
    <SectionContainer className="relative overflow-hidden">
      {/* Título móvil encima de la imagen */}
      <h1 className="block md:hidden mb-4 text-3xl font-display font-semibold tracking-tight text-center">
        ¿Quieres hacerte hermano/a?
      </h1>

      {/* Layout: imagen + texto. En móvil se apilan */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Imagen */}
        <div className="relative">
          <img
            src="portada.jpg"
            alt="Nuestra Señora de la Esperanza"
            className="w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[570px] object-cover rounded-2xl shadow-xl"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>

        {/* Texto */}
        <div className="space-y-6 font-body">
          {/* Título desktop en la columna de texto */}
          <h1 className="hidden md:block text-4xl font-display font-semibold tracking-tight">
            ¿Quieres hacerte hermano/a?
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-gray-900">
            Para hacerte hermano/a, solo tienes que descargar la solicitud,
            cumplimentarla y enviarla por correo electrónico a la Secretaría.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-gray-900">
            Ser hermano/a significa formar parte activa de una comunidad de fe y
            tradición de Toledo en nuestros cultos y mantener vivas nuestras
            costumbres.
          </p>

          {/* Botón descarga solicitud */}
          <Card
            as="a"
            href="/descargas/SOLICITUD_ALTA_COFRADE_VIRGEN_DE_LA_ESPERANZA_SAN_CIPRIANO.pdf"
            className="bg-emerald-900 p-4 flex items-center justify-center gap-2 font-medium"
            download
            aria-label="Descargar solicitud para hacerse hermano (PDF)"
          >
            <span className="text-white">Descargar solicitud de hermano</span>
            <img src="/descargar.svg" alt="Descargar" className="w-5 h-5" />
          </Card>
          {/* Email copiable con feedback */}
          <div className="relative">
            <Card
              onClick={handleCopy}
              className="cursor-pointer select-none bg-emerald-900 !text-white p-4 flex items-center justify-center gap-2 transition"
            >
              <span className="font-medium break-all text-xs sm:text-sm md:text-base">
                {config.contactEmail}
              </span>
              <img
                src="/copy.svg"
                alt="Copiar correo"
                className="w-5 h-5 invert"
              />
            </Card>

            {copiado && pos && (
              <div
                style={{
                  position: "fixed",
                  left: pos.x + 20,
                  top: pos.y - 30,
                  background: "#fff",
                  color: "#053C2F",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                  padding: "6px 16px",
                  fontSize: "14px",
                  pointerEvents: "none",
                  zIndex: 9999,
                  fontWeight: 500,
                }}
                aria-live="polite"
              >
                Correo copiado
              </div>
            )}
          </div>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Hacerlo de manera presencial
            </h2>
            <p className="text-base leading-relaxed">
              También puedes hacerlo en las semanas de fiestas de la Novena y en
              el Día del Patrocinio. Allí la Secretaría recogerá las
              inscripciones de nuevos hermanos y actualizará datos en persona.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
