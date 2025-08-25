// src/pages/serportador.tsx
import { useState } from "react";
import { SectionContainer } from "../components/shared/SectionContainer";
import { Card } from "../components/ui/Card";
import { CopiableText } from "../components/ui/CopiableText";
import { config } from "../config";
import { Link } from "react-router-dom";

export default function SerPortador() {
  const [copiado, setCopiado] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    navigator.clipboard.writeText(config.portersEmail);
    setPos({ x: e.clientX, y: e.clientY });
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1800);
  };

  return (
    <SectionContainer className="relative overflow-hidden">
      {/* Título móvil encima de la imagen */}
      <h1 className="block md:hidden mb-4 text-3xl font-display font-semibold tracking-tight text-center">
        ¿Te gustaría ser portador/a de Nuestra Señora de la Esperanza?
      </h1>

      {/* Layout: imagen + texto. En móvil se apilan */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Imagen */}
        <div className="relative">
          <img
            src="portadores.png"
            alt="Portadores llevando a Nuestra Señora de la Esperanza"
            className="w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[570px] object-cover rounded-2xl shadow-xl"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>

        {/* Texto */}
        <div className="space-y-6 font-body">
          {/* Título desktop en la columna de texto */}
          <h1 className="hidden md:block text-4xl font-display font-semibold tracking-tight">
            ¿Te gustaría ser portador/a de{" "}
            <span className="md:whitespace-nowrap">
              Nuestra Señora de la Esperanza
            </span>
            ?
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-gray-900">
            Ser portador es un privilegio que nace del compromiso y la devoción.
            No es solo una tarea física: es una vocación de fe y amor hacia la
            Virgen. Si sientes este llamado, descarga la solicitud, complétala y
            envíala por correo electrónico al capataz de los portadores.
          </p>

          {/* Botón descarga solicitud */}
          <Card
            as="a"
            href="/descargas/solicitud_portadores.pdf"
            className="bg-emerald-50 !text-emerald-900 ring-1 ring-emerald-200 p-4 flex items-center justify-center gap-2 font-medium"
            download
            aria-label="Descargar solicitud para ser portador (PDF)"
          >
            <span className="text-emerald-900">
              Descargar solicitud de portador
            </span>
            <img
              src="/descargar.svg"
              alt="Descargar"
              className="w-5 h-5 invert"
            />
          </Card>

          {/* Email copiable con feedback */}
          <div className="relative">
            <Card
              onClick={handleCopy}
              className="cursor-pointer select-none bg-emerald-50 !text-emerald-900 ring-1 ring-emerald-200 p-4 flex items-center justify-center gap-2 htransition"
            >
              <span className="font-medium break-all text-xs sm:text-sm md:text-base">
                {config.portersEmail}
              </span>
              <img src="/copy.svg" alt="Copiar correo" className="w-5 h-5" />
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

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Requisitos básicos
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li>Ser hermano o hermana de la Cofradía.</li>
              <li>Ser mayor de 18 años.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="space-y-10 font-body mt-10">
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Qué implica ser Portador/a
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li>
              Aceptar y cumplir los{" "}
              <Link
                to="/estatutos"
                className="font-medium underline underline-offset-4 hover:text-emerald-600"
              >
                reglamentos de los Portadores
              </Link>{" "}
              de la Virgen de la Esperanza de Toledo.
            </li>
            <li>
              Colaborar en el cuidado del trono y la preparación de la Imagen
              tras las procesiones.
            </li>
            <li>
              Participar en las juntas y ensayos convocados, mostrando
              compromiso con la Hermandad.
            </li>
            <li>
              Comprometerse con la puntualidad y la asistencia en cultos y
              salidas procesionales.
            </li>
            <li>
              Respetar la indumentaria oficial (traje, zapatos, cinturón y
              pajarita negros).
            </li>
            <li>
              Observar las indicaciones del capataz y del equipo responsable.
            </li>
            <li>
              Mantener en todo momento una actitud de servicio, respeto y
              fraternidad.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Proceso de incorporación
          </h2>
          <ol className="list-decimal pl-5 space-y-2 text-base">
            <li>Descarga y completa la solicitud de portador.</li>
            <li>
              Envía la solicitud por correo electrónico al capataz de los
              portadores.
            </li>
            <li>
              Un miembro de la plantilla de Portadores deberá{" "}
              <span className="font-medium">apadrinar o amadrinar</span> tu
              solicitud.
            </li>
            <li>
              La Secretaría confirmará que eres hermano o hermana de la Cofradía
              y firmará la solicitud.
            </li>
            <li>
              Antes de las fiestas, el capataz se pondrá en contacto para
              confirmar tu deseo de portar.
            </li>
            <li>
              En la reunión de portadores se verificará la disponibilidad de
              huecos y se realizará votación.
            </li>
            <li>
              El capataz dará la bienvenida y enhorabuena a los nuevos
              portadores.
            </li>
          </ol>
        </div>

        <Card className="bg-slate-50 text-slate-900 ring-1 ring-slate-200 p-5">
          <p className="text-base leading-relaxed text-black">
            ℹ️ <span className="font-semibold">Salud y seguridad:</span> Si
            tienes antecedentes médicos relevantes, por favor háznoslo saber de
            forma confidencial. Nuestro objetivo es que el servicio sea
            responsable y seguro para todos.
          </p>
        </Card>
      </div>
    </SectionContainer>
  );
}
