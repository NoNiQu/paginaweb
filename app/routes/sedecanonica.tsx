// src/pages/sedecanonica.tsx
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { useState, useEffect } from "react";
import { Paragraph } from "../components/shared/Paragraph";
import { SectionTitle } from "../components/shared/SectionTitle";
import { FinalNote } from "../components/shared/FinalNote";
import { ImageGallery } from "../components/shared/ImageGallery";

export default function Sedecanonica() {
  const [selectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedImage]);

  return (
    <SectionContainer className="relative overflow-hidden">
      <SectionHeader>Sede Canónica</SectionHeader>

      {/* Bloque 1 */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center md:items-start mb-16 mt-6">
        <SectionTitle className="md:hidden text-center">
          Iglesia de San Cipriano
        </SectionTitle>

        <div className="relative order-2 md:order-2 w-full">
          <img
            src="/images/sedecanonica/P1.webp"
            alt="Iglesia de San Cipriano"
            className="w-full md:w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[675px] object-cover rounded-2xl shadow-xl mx-auto"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>

        <div className="space-y-6 order-3 md:order-1 w-full">
          <SectionTitle className="hidden md:block">
            Iglesia de San Cipriano
          </SectionTitle>
          <Paragraph>
            La Cofradía de la Esperanza tiene su sede canónica en la histórica
            Iglesia de San Cipriano, ubicada en la Plaza de San Cipriano, 7, en
            el corazón del casco antiguo de Toledo. Este templo es un testimonio
            vivo de la fe, la historia y el arte religioso de la ciudad, y
            representa un vínculo profundo entre los cofrades y la devoción a la
            Virgen de la Esperanza.
          </Paragraph>
          <Paragraph>
            La Iglesia de San Cipriano se remonta al siglo XII, siendo uno de
            los templos más antiguos de Toledo. En el año 1125 ya se cita como
            parroquia latina y, a comienzos del siglo XVII, Don Carlos Venero y
            Leyva, canónigo de la ciudad, promovió la reconstrucción del templo,
            siendo la torre lo único que se conserva de la primera época, tras
            atribuir su recuperación de una grave enfermedad a la Virgen de la
            Esperanza. La obra se llevó a cabo entre 1612 y 1613, combinando la
            tradición arquitectónica local con el arte barroco emergente de la
            época, incorporando retablos, ornamentos y espacios destinados a la
            veneración de la Virgen.
          </Paragraph>
        </div>
      </div>

      {/* Bloque 2 */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center md:items-start mb-16">
        <SectionTitle className="md:hidden text-center">
          Capilla Mayor
        </SectionTitle>

        <div className="relative order-2 md:order-1 w-full">
          <img
            src="/images/sedecanonica/P2.webp"
            alt="Capilla Mayor"
            className="w-full md:w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[675px] object-cover rounded-2xl shadow-xl mx-auto"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>

        <div className="space-y-6 order-3 md:order-2 w-full">
          <SectionTitle className="hidden md:block">Capilla Mayor</SectionTitle>
          <Paragraph>
            La capilla mayor de la Iglesia de San Cipriano es el espacio central
            de veneración dentro del templo y está dedicada a la Virgen de la
            Esperanza, titular de la Cofradía. Originalmente concebida en el
            siglo XVII, fue ampliada en 1662 para permitir la construcción de un
            camarín que facilita a los fieles una veneración más cercana de la
            imagen de la Virgen.
          </Paragraph>
          <Paragraph>
            El retablo de la capilla mayor es un ejemplo destacado del barroco
            toledano, con columnas salomónicas, molduras doradas y una
            ornamentación que combina escultura, pintura y dorado, reflejando la
            devoción y la riqueza artística de la época. Se representan escenas
            religiosas vinculadas a la Virgen y a la historia de la salvación,
            convirtiendo la capilla en un lugar de meditación y contemplación.
          </Paragraph>
          <Paragraph>
            Además, la capilla mayor alberga otros elementos litúrgicos y
            decorativos de gran valor, como pequeños retablos laterales,
            imágenes de santos y ornamentos que han sido preservados a lo largo
            de los siglos, mostrando el cuidado y la dedicación de la cofradía y
            de la comunidad religiosa por mantener viva la tradición.
          </Paragraph>
        </div>
      </div>

      {/* Bloque 3 */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center md:items-start mb-16">
        <SectionTitle className="md:hidden text-center">
          Torre Mudéjar
        </SectionTitle>

        <div className="relative order-2 md:order-2 w-full">
          <img
            src="/images/sedecanonica/P3.webp"
            alt="Torre Mudéjar de San Cipriano"
            className="w-full md:w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[675px] object-cover rounded-2xl shadow-xl mx-auto"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>

        <div className="space-y-6 order-3 md:order-1 w-full">
          <SectionTitle className="hidden md:block">Torre Mudéjar</SectionTitle>
          <Paragraph>
            La torre mudéjar de San Cipriano es uno de los elementos más
            visibles y emblemáticos del templo. Conserva parte de la estructura
            original del siglo XII, aunque fue reconstruida en 1708 para
            reforzar su estabilidad y adaptar su diseño a las necesidades del
            templo barroco.
          </Paragraph>
          <Paragraph>
            Esta torre combina rasgos arquitectónicos mudéjares, como el uso de
            ladrillo visto, arcos de medio punto y decoración geométrica, con
            elementos posteriores del barroco, creando un diálogo entre épocas y
            estilos que refleja la evolución arquitectónica de Toledo.
          </Paragraph>
          <Paragraph>
            Además de su función estética, la torre ha servido históricamente
            como campanario, llamando a los fieles a la oración y marcando los
            ritmos de la vida religiosa de la ciudad. Su silueta se reconoce
            fácilmente en el perfil urbano de Toledo, siendo un símbolo de la
            historia y la tradición que conecta a los cofrades con generaciones
            anteriores de devotos.
          </Paragraph>
        </div>
      </div>

      {/* Bloque 4 */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center md:items-start mb-16">
        <SectionTitle className="md:hidden text-center">
          Capilla Mayor
        </SectionTitle>

        <div className="relative order-2 md:order-1 w-full">
          <img
            src="/images/sedecanonica/P4.webp"
            alt="Fresco de la Asunción de la Virgen"
            className="w-full md:w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[675px] object-cover rounded-2xl shadow-xl mx-auto"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>

        <div className="space-y-6 order-3 md:order-2 w-full">
          <SectionTitle className="hidden md:block">
            Fresco de la Asunción de la Virgen
          </SectionTitle>
          <Paragraph>
            Mirando hacia arriba, vemos como se despliega un majestuoso fresco
            que representa la Coronación de la Virgen María, una escena de
            profunda carga espiritual y belleza artística. La composición se
            abre en un cielo luminoso donde Dios Padre y Dios Hijo, rodeados de
            resplandores dorados, coronan a la Virgen mientras la paloma del
            Espíritu Santo desciende sobre ella como símbolo de gracia divina.
          </Paragraph>
          <Paragraph>
            La Virgen, envuelta en un manto azul que destaca sobre las nubes
            blancas, eleva sus brazos en actitud de entrega y glorificación,
            rodeada por coros celestiales de ángeles y querubines que portan
            flores y coronas. El equilibrio de las figuras, la suavidad de las
            tonalidades y la riqueza de los detalles crean una atmósfera de
            armonía y trascendencia.
          </Paragraph>
          <Paragraph>
            Este fresco no es solo una obra decorativa: es una profesión visual
            de fe, que invita al recogimiento, a la contemplación y a renovar la
            devoción mariana bajo la mirada de la Reina del Cielo.
          </Paragraph>
        </div>
      </div>

      <SectionHeader>
        Hermandad del Santísimo Cristo de la Esperanza
      </SectionHeader>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center md:items-start mb-12">
        <div className="relative order-2 md:order-2 w-full">
          <img
            src="/images/cristodelaesperanza.jpg"
            alt="Santísimo Cristo de la Esperanza"
            className="w-full md:w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[575px] object-cover rounded-2xl shadow-xl mx-auto"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>

        <div className="space-y-6 order-3 md:order-1 w-full">
          <Paragraph>
            Esta cofradía también comparte sede canónica con la Hermandad del
            Santísimo Cristo de la Esperanza.
          </Paragraph>
          <Paragraph>
            La Hermandad del Santísimo Cristo de la Esperanza tiene su sede
            canónica en la Parroquia de San Andrés y San Cipriano, en Toledo.
            Fue fundada en 1665 con la aprobación del Cardenal Pascual de Aragón
            y, tras desaparecer durante la Guerra de la Independencia, fue
            refundada en 1983 por un grupo de feligreses de la misma parroquia.
          </Paragraph>
          <Paragraph>
            La imagen del Cristo de la Esperanza, de autor anónimo del siglo
            XVIII, muestra a Jesús expirado en la Cruz y es objeto de profunda
            devoción. Cada Lunes Santo la hermandad celebra su solemne Vía
            Crucis procesional, marcado por el silencio, la oración y la
            austeridad, partiendo desde la iglesia de San Andrés y recorriendo
            las calles del casco histórico de Toledo.
          </Paragraph>
          <Paragraph>
            El Cristo de la Esperanza recibe culto durante todo el año en la
            Iglesia de San Cipriano, donde cuenta con un altar propio para la
            veneración de los fieles.
          </Paragraph>

          <div className="flex justify-center mt-6">
            <a
              href="https://semanasantatoledo.com/hermandad-del-santisimo-cristo-de-la-esperanza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 h-14 w-full max-w-lg rounded-2xl bg-[#053C2F] text-white font-semibold shadow-md text-center"
              aria-label="Página de la Junta de Cofradías de Toledo - Cristo de la Esperanza"
            >
              Página de la Junta de Semana Santa
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <Paragraph>
          Para la Cofradía de la Esperanza, San Cipriano no es solo un templo:
          es un espacio de encuentro, oración y comunidad. Cada rincón refleja
          la fe de los cofrades, y la iglesia se convierte en el centro de la
          vida espiritual de la cofradía, especialmente durante la festividad de
          la Virgen de la Esperanza, celebrada en su novena.
        </Paragraph>

        <div className="w-full my-8">
          <img
            src="/images/sedecanonica/fotocamarin.webp"
            alt="Camarín de la Virgen"
            className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>

        <Paragraph>
          Este espacio permite a los fieles reunirse, reforzar la fe y mantener
          viva la tradición, conectando generaciones y preservando el legado de
          devoción a la Virgen de la Esperanza en Toledo.
        </Paragraph>
      </div>

      <FinalNote>
        La Cofradía manifiesta su gratitud a Teresa López-Brea Alarza por su
        dedicación en la redacción y cuidado de los textos.
      </FinalNote>

      {/* Galería 1 (a, P4, c) */}
      <ImageGallery
        images={[
          { src: "/images/sedecanonica/a.webp", alt: "Imagen 0" },
          { src: "/images/sedecanonica/P4.webp", alt: "Imagen 1" },
          { src: "/images/sedecanonica/c.webp", alt: "Imagen 2" },
        ]}
        thumbClassName="h-[18rem] md:h-[24rem] lg:h-[30rem]"
      />

      {/* Galería 2 (1, 2, 3) */}
      <ImageGallery
        images={[
          { src: "/images/sedecanonica/1.webp", alt: "Imagen 1" },
          { src: "/images/sedecanonica/2.webp", alt: "Imagen 2" },
          { src: "/images/sedecanonica/3.webp", alt: "Imagen 3" },
        ]}
        /* altura media */
        thumbClassName="h-[18rem] md:h-[24rem] lg:h-[30rem]"
      />
      {/* espacio extra móvil */}
      <div className="mb-12 md:mb-0" />
    </SectionContainer>
  );
}
