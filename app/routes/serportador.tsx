// src/pages/serportador.tsx
import { SectionContainer } from "../components/shared/SectionContainer";
import { Card } from "../components/ui/Card";
import { CopiableText } from "../components/ui/CopiableText";
import { config } from "../config";
import { Link } from "react-router-dom";

export default function SerPortador() {
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
            className="w-full h-[340px] sm:h-[420px] md:h-[520px] lg:h-[575px] object-cover rounded-2xl shadow-xl"
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

          <p className="text-base sm:text-lg leading-relaxed text-gray-900">
            Cargar con Ella es un privilegio que nace del compromiso y la
            devoción. Ser portador no es solo una tarea física: es una vocación
            de entrega, un testimonio público de fe y un signo de amor hacia la
            Virgen. Cada paso se convierte en oración y cada relevo en un gesto
            de gratitud. Si sientes este llamado en tu corazón, ¡esta
            oportunidad es para ti!
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-900">
            Envía un correo a nuestro capataz:
          </p>

          {/* Email copiable */}
          <Card className="bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200 p-4 flex items-center justify-center gap-2">
            <CopiableText
              text={config.portersEmail}
              label="correo"
              iconSrc="/copy.svg"
              iconAlt="Copiar correo"
              iconClassName="w-5 h-5"
              className="text-emerald-900"
              textClassName="font-medium break-all text-xs sm:text-sm md:text-base"
              truncate
            />
          </Card>

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
                estatutos
              </Link>{" "}
              y normas de los Portadores de la Virgen de la Esperanza de Toledo.
            </li>
            <li>
              Comprometerse con la puntualidad y la asistencia en cultos,
              ensayos y salidas.
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
            <li>
              Envía un correo electrónico presentándote e indicando tu interés
              por ser portador/a.
            </li>
            <li>
              Un miembro de la plantilla de Portadores deberá{" "}
              <span className="font-medium">apadrinar o amadrinar</span> tu
              solicitud.
            </li>
            <li>
              La Secretaría confirmará que eres hermano/a de la Cofradía y
              firmará la solicitud.
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
