// src/pages/secretaria.tsx
import { SectionContainer } from "../components/shared/SectionContainer";
import { Card } from "../components/ui/Card";
import { CopiableText } from "../components/ui/CopiableText";
import { config } from "../config";
import { Link } from "react-router-dom";

export default function Secretaria() {
  return (
    <SectionContainer className="relative">
      {/* Título móvil encima de la imagen */}
      <h1 className="block md:hidden mb-4 text-3xl font-display font-semibold tracking-tight text-center">
        ¿Quieres hacerte hermano/a?
      </h1>

      {/* Layout: imagen + texto. En móvil se apilan */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Imagen (izquierda en desktop, arriba en móvil) */}
        <div>
          <img
            src="portada.jpg"
            alt="Nuestra Señora de la Esperanza"
            className="w-full h-[340px] sm:h-[420px] md:h-[520px] lg:h-[575px] object-cover rounded-2xl shadow-xl"
            loading="eager"
          />
        </div>

        {/* Texto */}
        <div className="space-y-6 font-body">
          {/* Título desktop en la columna de texto */}
          <h1 className="hidden md:block text-4xl font-display font-semibold tracking-tight">
            ¿Quieres hacerte hermano/a?
          </h1>

          <p className="text-base sm:text-lg leading-relaxed">
            La cuota de hermano es de <span className="font-semibold">10€</span>{" "}
            anuales. Puedes hacerte hermano de manera online enviando un correo
            a:
          </p>

          {/* Email copiable */}
          <Card className="bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200 p-4 flex items-center justify-center gap-2">
            <CopiableText
              text={config.contactEmail}
              label="correo"
              iconSrc="/copy.svg"
              iconAlt="Copiar correo"
              iconClassName="w-5 h-5"
              className="text-emerald-900"
              textClassName="font-medium break-all text-xs sm:text-sm md:text-base"
              truncate
            />
          </Card>

          <p className="text-base leading-relaxed">
            La Secretaría te pedirá los datos necesarios para el ingreso. Para
            el método de pago, tienes aquí la página de{" "}
            <Link
              to="/donativo"
              className="underline font-medium hover:text-emerald-700"
            >
              Bizum
            </Link>
            ; por favor, indica tu{" "}
            <span className="font-medium">nombre completo</span> para
            identificar la persona.
          </p>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Actualizar datos
            </h2>
            <p className="text-base leading-relaxed">
              Si quieres actualizar cualquier dato, escribe al correo de
              Secretaría.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Hacerlo de manera presencial
            </h2>
            <p className="text-base leading-relaxed">
              También puedes hacerlo en las semanas de fiestas de la Novena y en
              el Día del Patrocinio. Allí puedes realizar también el pago de la
              cuota anual en persona.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
