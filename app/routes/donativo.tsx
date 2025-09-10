// src/pages/donativo.tsx
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Card } from "../components/ui/Card";
import { CopiableText } from "../components/ui/CopiableText";
import { config } from "../config";
import { Link } from "react-router-dom";

export default function Donativos() {
  return (
    <SectionContainer>
      <SectionHeader>Donativos</SectionHeader>

      <div className="grid gap-8 lg:grid-cols-2 items-start">
        {/* Izquierda: texto + consultas */}
        <section className="font-body text-base sm:text-lg text-gray-800 space-y-4">
          <p className="leading-relaxed">
            Tu generosidad nos permite sostener el culto a la Virgen y conservar
            el patrimonio de nuestra Cofradía. Puedes colaborar de forma
            sencilla a través de <span className="font-semibold">Bizum</span>.
          </p>

          <div className="mt-6 space-y-3">
            <h2 className="text-lg font-semibold">Consultas</h2>
            <p className="leading-relaxed">
              Si tienes cualquier pregunta, consulta nuestra página de{" "}
              <Link
                to="/contacto"
                className="font-medium underline underline-offset-4 hover:text-emerald-700"
              >
                Contacto
              </Link>
              .
            </p>
            <p className="text-sm text-slate-700">
              Los donativos se realizan a través de plataformas bancarias
              externas (Bizum). En este sitio web no se procesan datos
              financieros.
            </p>
          </div>
        </section>

        {/* Derecha: tarjeta Bizum */}
        <Card className="min-h-[220px]">
          <div className="w-full grid place-items-center mb-5">
            <img
              src="/iconos/bizumlogo.png"
              alt="Bizum"
              className="h-14 w-auto"
              loading="lazy"
            />
          </div>

          <div className="space-y-5">
            {/* Código Bizum: número centrado + botón copiar a la derecha */}
            <div className="grid grid-cols-[1fr_auto] items-center bg-white/10 rounded-lg px-4 py-3">
              <code className="justify-self-center font-mono tracking-widest text-xl sm:text-2xl">
                {config.bizumCode}
              </code>
              <CopiableText
                variant="icon-only"
                text={config.bizumCode}
                label="código Bizum"
                iconSrc="/iconos/copy.svg"
                iconAlt="Copiar código Bizum"
                iconClassName="w-6 h-6 invert hover:cursor-pointer"
                className="ml-4"
              />
            </div>

            {/* Pasos */}
            <ul className="font-body list-decimal pl-6 space-y-2 text-left">
              <li>Abre tu app bancaria.</li>
              <li>Elige Bizum → Donar a ONG.</li>
              <li>Introduce el código y elige la cantidad.</li>
              <li>
                Concepto: <strong>DONATIVO</strong> (obligatorio) + nombre y
                apellidos si lo desea.
              </li>
            </ul>

            <p className="font-body text-sm text-white/80 text-left">
              Si tu banco no muestra la opción “ONG”, usa la búsqueda por código
              Bizum (si está disponible) o contacta con nosotros.
            </p>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}
