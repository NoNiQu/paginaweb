// src/pages/sedecanonica.tsx
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Card } from "../components/ui/Card";
import { useState, useEffect } from "react";

export default function Sedecanonica() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Bloquea el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedImage]);

  return (
    <SectionContainer className="relative overflow-hidden">
      {/* Título principal */}
      <SectionHeader>Sede Canónica</SectionHeader>

      {/* Bloque 1: img derecha en desktop */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center md:items-start mb-16 mt-6">
        {/* Título (solo móvil, centrado) */}
        <h2 className="text-xl sm:text-2xl font-semibold md:hidden text-center">
          Iglesia de San Cipriano
        </h2>

        {/* Imagen -> derecha en desktop (centrada en móvil) */}
        <div className="relative order-2 md:order-2 w-full">
          <img
            src="/images/sedecanonica/P1.webp"
            alt="Iglesia de San Cipriano"
            className="w-full md:w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[675px] object-cover rounded-2xl shadow-xl mx-auto"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>

        {/* Texto -> izquierda en desktop (móvil ancho completo) */}
        <div className="space-y-6 font-body text-gray-900 order-3 md:order-1 w-full">
          <h2 className="text-xl sm:text-2xl font-semibold hidden md:block">
            Iglesia de San Cipriano
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            La Cofradía de la Esperanza tiene su sede canónica en la histórica
            Iglesia de San Cipriano, ubicada en la Plaza de San Cipriano, 7, en
            el corazón del casco antiguo de Toledo. Este templo es un testimonio
            vivo de la fe, la historia y el arte religioso de la ciudad, y
            representa un vínculo profundo entre los cofrades y la devoción a la
            Virgen de la Esperanza.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            La Iglesia de San Cipriano se remonta al siglo XII, siendo uno de
            los templos más antiguos de Toledo. En el año 1125 ya se cita como
            parroquia latina y a comienzos del siglo XVII, Don Carlos Venero y
            Leyva, canónigo de la ciudad, promovió la reconstrucción del templo,
            siendo la torre lo único que se conserva de la primera época, tras
            atribuir su recuperación de una grave enfermedad a la Virgen de la
            Esperanza. La obra se llevó a cabo entre 1612 y 1613, combinando la
            tradición arquitectónica local con el arte barroco emergente de la
            época, incorporando retablos, ornamentos y espacios destinados a la
            veneración de la Virgen.
          </p>
        </div>
      </div>

      {/* Bloque 2: img izquierda en desktop */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center md:items-start mb-16">
        {/* Título (solo móvil, centrado) */}
        <h2 className="text-xl sm:text-2xl font-semibold md:hidden text-center">
          Capilla Mayor
        </h2>

        {/* Imagen -> izquierda en desktop (centrada en móvil) */}
        <div className="relative order-2 md:order-1 w-full">
          <img
            src="/images/sedecanonica/P2.webp"
            alt="Capilla Mayor"
            className="w-full md:w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[675px] object-cover rounded-2xl shadow-xl mx-auto"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>

        {/* Texto -> derecha en desktop */}
        <div className="space-y-6 font-body text-gray-900 order-3 md:order-2 w-full">
          <h2 className="text-xl sm:text-2xl font-semibold hidden md:block">
            Capilla Mayor
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            La capilla mayor de la Iglesia de San Cipriano es el espacio central
            de veneración dentro del templo y está dedicada a la Virgen de la
            Esperanza, titular de la Cofradía. Originalmente concebida en el
            siglo XVII, fue ampliada en 1662 para permitir la construcción de un
            camarín que facilita a los fieles una veneración más cercana de la
            imagen de la Virgen.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            El retablo de la capilla mayor es un ejemplo destacado del barroco
            toledano, con columnas salomónicas, molduras doradas y una
            ornamentación que combina escultura, pintura y dorado, reflejando la
            devoción y la riqueza artística de la época. Se representan escenas
            religiosas vinculadas a la Virgen y a la historia de la salvación,
            convirtiendo la capilla en un lugar de meditación y contemplación.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            Además, la capilla mayor alberga otros elementos litúrgicos y
            decorativos de gran valor, como pequeños retablos laterales,
            imágenes de santos y ornamentos que han sido preservados a lo largo
            de los siglos, mostrando el cuidado y la dedicación de la cofradía y
            de la comunidad religiosa por mantener viva la tradición.
          </p>
        </div>
      </div>

      {/* Bloque 3: img derecha en desktop */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center md:items-start mb-16">
        {/* Título (solo móvil, centrado) */}
        <h2 className="text-xl sm:text-2xl font-semibold md:hidden text-center">
          Torre Mudéjar
        </h2>

        {/* Imagen -> derecha en desktop (centrada en móvil) */}
        <div className="relative order-2 md:order-2 w-full">
          <img
            src="/images/sedecanonica/P3.webp"
            alt="Torre Mudéjar de San Cipriano"
            className="w-full md:w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[675px] object-cover rounded-2xl shadow-xl mx-auto"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>

        {/* Texto -> izquierda en desktop */}
        <div className="space-y-6 font-body text-gray-900 order-3 md:order-1 w-full">
          <h2 className="text-xl sm:text-2xl font-semibold hidden md:block">
            Torre Mudéjar
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            La torre mudéjar de San Cipriano es uno de los elementos más
            visibles y emblemáticos del templo. Conserva parte de la estructura
            original del siglo XII, aunque fue reconstruida en 1708 para
            reforzar su estabilidad y adaptar su diseño a las necesidades del
            templo barroco.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            Esta torre combina rasgos arquitectónicos mudéjares, como el uso de
            ladrillo visto, arcos de medio punto y decoración geométrica, con
            elementos posteriores del barroco, creando un diálogo entre épocas y
            estilos que refleja la evolución arquitectónica de Toledo.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            Además de su función estética, la torre ha servido históricamente
            como campanario, llamando a los fieles a la oración y marcando los
            ritmos de la vida religiosa de la ciudad. Su silueta se reconoce
            fácilmente en el perfil urbano de Toledo, siendo un símbolo de la
            historia y la tradición que conecta a los cofrades con generaciones
            anteriores de devotos.
          </p>
        </div>
      </div>

      <SectionHeader>
        Hermandad del Santísimo Cristo de la Esperanza
      </SectionHeader>

      {/* Bloque 4: img izquierda en desktop */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center md:items-start mb-12">
        {/* Imagen -> izquierda en desktop (centrada en móvil) */}
        <div className="relative order-2 md:order-1 w-full">
          <img
            src="/images/cristodelaesperanza.jpg"
            alt="Santísimo Cristo de la Esperanza"
            className="w-full md:w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[570px] object-cover rounded-2xl shadow-xl mx-auto"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>

        {/* Texto -> derecha en desktop */}
        <div className="space-y-6 font-body text-gray-900 order-3 md:order-2 w-full">
          <p className="text-sm sm:text-base leading-relaxed">
            Esta cofradía también comparte sede canónica con la Hermandad del
            Santísimo Cristo de la Esperanza.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            La Hermandad del Santísimo Cristo de la Esperanza tiene su sede
            canónica en la Parroquia de San Andrés y San Cipriano, en Toledo.
            Fue fundada en 1665 con la aprobación del Cardenal Pascual de Aragón
            y, tras desaparecer durante la Guerra de la Independencia, fue
            refundada en 1983 por un grupo de feligreses de la misma parroquia.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            La imagen del Cristo de la Esperanza, de autor anónimo del siglo
            XVIII, muestra a Jesús expirado en la Cruz y es objeto de profunda
            devoción. Cada Lunes Santo la hermandad celebra su solemne Vía
            Crucis procesional, marcado por el silencio, la oración y la
            austeridad, partiendo desde la iglesia de San Andrés y recorriendo
            las calles del casco histórico de Toledo.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            El Cristo de la Esperanza recibe culto durante todo el año en la
            Iglesia de San Cipriano, donde cuenta con un altar propio para la
            veneración de los fieles.
          </p>

          {/* Botones*/}
          <div className="flex justify-center mt-6">
            <Card
              as="a"
              href="https://semanasantatoledo.com/hermandad-del-santisimo-cristo-de-la-esperanza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center gap-3 px-3 py-3 h-14 w-full max-w-md"
              aria-label="Página de la Junta de Cofradías de Toledo - Cristo de la Esperanza"
            >
              <strong className="text-white text-center text-lg">
                Página de la Junta de Semana Santa
              </strong>
            </Card>
          </div>
        </div>
      </div>

      {/* Cierre */}
      <div className="font-body text-gray-900 space-y-4 mb-8">
        <p className="text-sm sm:text-base leading-relaxed">
          Para la Cofradía de la Esperanza, San Cipriano no es solo un templo:
          es un espacio de encuentro, oración y comunidad. Cada rincón refleja
          la fe de los cofrades, y la iglesia se convierte en el centro de la
          vida espiritual de la cofradía, especialmente durante la festividad de
          la Virgen de la Esperanza, celebrada el 18 de diciembre.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          Este espacio permite a los fieles reunirse, reforzar la fe y mantener
          viva la tradición, conectando generaciones y preservando el legado de
          devoción a la Virgen de la Esperanza en Toledo.
        </p>
      </div>

      {/* Agradecimiento */}
      <div className="font-body text-gray-900 space-y-4 mb-12">
        <p className="text-sm sm:text-base leading-relaxed text-center italic">
          La Cofradía manifiesta su gratitud a Teresa López-Brea Alarza por su
          dedicación en la redacción y cuidado de los textos.
        </p>
      </div>

      {/* Galería de imágenes */}
      {/* Galería 1 (a, b) */}
      <div className="w-full mt-12 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl w-full px-4">
          {["a", "b", "c"].map((name, i) => {
            const imgSrc = `/images/sedecanonica/${name}.webp`;
            return (
              <div
                key={name}
                className="cursor-pointer flex justify-center"
                onClick={() => setSelectedImage(imgSrc)}
              >
                <img
                  src={imgSrc}
                  alt={`Imagen ${i + 1}`}
                  className="w-full h-[520px] md:h-[560px] object-cover rounded-2xl shadow-md transition-transform duration-200 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Galería 2 (1, 2, 3) */}
      <div className="w-full mt-12 mb-12 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
          {[1, 2, 3].map((i) => {
            const imgSrc = `/images/sedecanonica/${i}.webp`;
            return (
              <div
                key={i}
                className="cursor-pointer flex justify-center"
                onClick={() => setSelectedImage(imgSrc)}
              >
                <img
                  src={imgSrc}
                  alt={`Imagen ${i}`}
                  className="w-full h-[520px] md:h-[560px] object-cover rounded-2xl shadow-md transition-transform duration-200 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal para ver imagen en grande */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-60"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Imagen ampliada"
            className="max-w-[90%] max-h-[90%] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </SectionContainer>
  );
}
