// src/pages/serportador.tsx
import { SectionContainer } from "../components/shared/SectionContainer";
import { Card } from "../components/ui/Card";
import { Paragraph } from "../components/shared/Paragraph";
import { DownloadButton } from "../components/ui/DownloadButton";
import { CopiableEmail } from "../components/ui/CopiableEmail";
import { SectionTitle } from "../components/shared/SectionTitle";
import { BulletList, BulletItem } from "../components/shared/BulletList";
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
        {/* Imagen (inline, sin componente) */}
        <div className="relative">
          <img
            src="/images/portadores.webp"
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

          <Paragraph>
            Ser portador es un privilegio que nace del compromiso y la devoción.
            No es solo una tarea física: es una vocación de fe y amor hacia la
            Virgen. Si sientes este llamado, descarga la solicitud, complétala y
            envíala por correo electrónico al capataz de los portadores.
          </Paragraph>

          {/* Botón descarga solicitud */}
          <DownloadButton
            href="/descargas/SOLICITUD_PORTADOR_VIRGEN_DE_LA_ESPERANZA_SAN_CIPRIANO.pdf"
            label="Descargar solicitud de portador"
            ariaLabel="Descargar solicitud para ser portador (PDF)"
          />

          {/* Email copiable con feedback */}
          <CopiableEmail email={config.portersEmail} />

          {/* Requisitos básicos */}
          <div className="space-y-3">
            <SectionTitle>Requisitos básicos</SectionTitle>
            <BulletList>
              <BulletItem>Ser hermano o hermana de la Cofradía.</BulletItem>
              <BulletItem>Ser mayor de 18 años.</BulletItem>
            </BulletList>
          </div>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="space-y-10 font-body mt-10">
        {/* Qué implica ser portador/a */}
        <div className="space-y-3">
          <SectionTitle>Qué implica ser portador/a</SectionTitle>
          <BulletList>
            <BulletItem>
              Aceptar y cumplir los{" "}
              <Link
                to="/estatutos"
                className="font-medium underline underline-offset-4 hover:text-emerald-600"
              >
                reglamentos de los portadores
              </Link>{" "}
              de la Virgen de la Esperanza de Toledo.
            </BulletItem>
            <BulletItem>
              Colaborar en el cuidado del trono y la preparación de la Imagen
              tras las procesiones.
            </BulletItem>
            <BulletItem>
              Participar en las juntas y ensayos convocados, mostrando
              compromiso con la Hermandad.
            </BulletItem>
            <BulletItem>
              Comprometerse con la puntualidad y la asistencia en cultos y
              salidas procesionales.
            </BulletItem>
            <BulletItem>
              Respetar la indumentaria oficial (traje, zapatos, cinturón y
              pajarita negros).
            </BulletItem>
            <BulletItem>
              Observar las indicaciones del capataz y del equipo responsable.
            </BulletItem>
            <BulletItem>
              Mantener en todo momento una actitud de servicio, respeto y
              fraternidad.
            </BulletItem>
          </BulletList>
        </div>
        {/* Proceso de incorporación */}
        <div className="space-y-3">
          <SectionTitle>Proceso de incorporación</SectionTitle>
          <BulletList>
            <BulletItem>
              Descarga y completa la solicitud de portador.
            </BulletItem>
            <BulletItem>
              Envía la solicitud por correo electrónico al capataz de los
              portadores.
            </BulletItem>
            <BulletItem>
              Un miembro de la plantilla de portadores deberá{" "}
              <span className="font-medium">apadrinar o amadrinar</span> tu
              solicitud.
            </BulletItem>
            <BulletItem>
              La Secretaría confirmará que eres hermano o hermana de la Cofradía{" "}
              y firmará la solicitud.
            </BulletItem>
            <BulletItem>
              Antes de las fiestas, el capataz se pondrá en contacto para
              confirmar tu deseo de portar.
            </BulletItem>
            <BulletItem>
              En la reunión de portadores se verificará la disponibilidad de
              huecos y se realizará votación.
            </BulletItem>
            <BulletItem>
              El capataz dará la bienvenida y enhorabuena a los nuevos
              portadores.
            </BulletItem>
          </BulletList>
        </div>
        {/* Aviso salud y seguridad */}
        <Card className="bg-slate-50 text-slate-900 ring-1 ring-slate-200 p-5">
          <Paragraph className="!text-black">
            ℹ️ <span className="font-semibold">Salud y seguridad:</span> Si
            tienes antecedentes médicos relevantes, por favor háznoslo saber de
            forma confidencial. Nuestro objetivo es que el servicio sea
            responsable y seguro para todos.
          </Paragraph>
        </Card>
        {/* espacio extra móvil */}
        <div className="mb-12 md:mb-0" />
      </div>
    </SectionContainer>
  );
}
