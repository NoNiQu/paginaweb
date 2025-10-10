import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";

export default function Historia() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Bloquea el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Limpieza por si el componente se desmonta con el modal abierto
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedImage]);
  return (
    <SectionContainer>
      {/* Título */}
      <SectionHeader>Historia</SectionHeader>
      {/* Texto adicional */}
      <div className="grid md:grid-cols-2 gap-10 items-start mb-6 mt-6">
        {/* Texto */}
        <div className="space-y-6 font-body text-gray-900">
          <p className="text-sm sm:text-base leading-relaxed">
            La devoción a la Virgen de la Esperanza en Toledo hunde sus raíces
            en la Edad Media. Según la tradición, en torno al año 1200, la
            ciudad sufría una terrible peste que cesó milagrosamente al ser
            sacada en procesión una pequeña talla románica de la Virgen,
            conocida entonces como “Nuestra Señora del Destierro”. Desde aquel
            prodigio se estableció el voto solemne de gratitud a María, que
            Toledo sigue renovando cada año con la histórica
            <strong> Procesión del Voto</strong>, una de las más antiguas que se
            conservan en la ciudad.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            A lo largo de los siglos se multiplicaron los relatos de favores y
            milagros atribuidos a la Virgen: un albañil que salió ileso tras
            caer de gran altura en 1616, una niña de Ajofrín rescatada de un
            pozo en 1622, o la misteriosa iluminación espontánea de una lámpara
            en San Cipriano en 1613. Estos hechos reforzaron su fama de
            protectora y afianzaron su culto entre los toledanos.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            En ese mismo tiempo, la advocación de “Destierro” fue dando paso a
            la de
            <strong> Virgen de la Esperanza</strong>. La primera referencia
            documental aparece en 1676 en los libros de la Cofradía,
            consolidando así su nuevo título y rivalizando en devoción con otras
            advocaciones marianas de Toledo, como las de San Justo y Pastor, San
            Vicente o San Lucas. Esta advocación, profundamente arraigada en la
            tradición hispánica, honra a la Virgen María en el tiempo de la{" "}
            <em>expectación del parto</em>, cuando espera con fe y serenidad el
            nacimiento de su Hijo. Desde entonces, la Virgen de la Esperanza fue
            signo de confianza, consuelo y fe para los toledanos, recibiendo
            cariñosamente el nombre de la “Morenita de San Cebrián”.
          </p>
        </div>

        {/* Imagen */}
        <div className="relative">
          <img
            src="/images/historia/portada.webp"
            alt="Virgen de la Esperanza"
            className="w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover rounded-2xl shadow-xl"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>
      </div>

      <p className="font-body text-gray-900 text-sm sm:text-base leading-relaxed mt-8">
        La Cofradía quedó formalmente constituida en el siglo XVII, formada por
        clérigos, artesanos y vecinos del barrio. Desde sus orígenes organizó
        novenas, misas solemnes y la Procesión del Voto, además de cultos en la
        fiesta de la Expectación de María (18 de diciembre) y en Pentecostés. A
        pesar de las guerras y desamortizaciones, la hermandad supo mantener
        viva la devoción y custodiar la iglesia de San Cipriano como faro
        espiritual del barrio.
      </p>

      <div className="mt-6 font-body text-base sm:text-lg text-gray-800 space-y-4 mb-8">
        <div className="mt-6 font-body text-gray-900 space-y-6">
          {/* Galería centrada */}
          <div className="flex justify-center my-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
              {[1, 2, 3].map((i) => {
                const imgSrc = `/images/historia/${i}.webp`;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setSelectedImage(imgSrc)}
                  >
                    <img
                      src={imgSrc}
                      alt={`Imagen ${i}`}
                      className="w-full h-80 object-cover rounded-2xl shadow-md transition-transform duration-200 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <SectionHeader>Coronación Canónica</SectionHeader>

          <div className="font-body text-gray-900 space-y-6 mt-6 mb-8">
            <p className="text-sm sm:text-base leading-relaxed">
              La Virgen de la Esperanza tuvo el privilegio de ser coronada
              canónicamente en una solemne ceremonia celebrada en la Plaza de
              Zocodover el
              <strong> 8 de junio de 1952</strong>. La Santa Sede autorizó la
              petición del cardenal Pla y Deniel mediante decreto de la Basílica
              Vaticana firmado por el cardenal Tedeschini, organizándose un
              programa de cultos y novena entre los días 2 y 11 de junio.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              El día 3 la Virgen fue llevada en procesión a la iglesia de San
              Ildefonso, donde se celebraron solemnes misas y actos religiosos.
              El día 7 fue trasladada a la Catedral, y al día siguiente presidió
              una Misa de Pontifical antes de ser conducida en procesión hasta
              la plaza de Zocodover, donde aguardaban más de{" "}
              <strong>diez mil fieles</strong>.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              Una gran tribuna bajo el Arco de la Sangre acogió la ceremonia. El
              alcalde entregó la corona al cardenal Pla y Deniel, quien la
              impuso sobre la pequeña imagen en medio del júbilo popular:
              pañuelos ondeando, salvas de artillería, vuelo de palomas y lluvia
              de flores. La corona, elaborada en oro y pedrería procedente de
              Roma, simbolizaba la gratitud y devoción de todo el pueblo
              toledano hacia su patrona. En ese instante se produjo un fenómeno
              que muchos interpretaron como un milagro: un halo luminoso,
              circular y anaranjado, envolvió el sol. Según un cronista de la
              época, fue una coronación triple: la corona de metales preciosos
              sobre su cabeza, la corona de oraciones de los fieles y la corona
              que se dibujó en el cielo.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              La Presidencia del Gobierno concedió a la Virgen los máximos
              honores militares, asistiendo el Ayuntamiento en pleno y numerosas
              delegaciones de pueblos de la comarca. Destacó la presencia de
              sesenta mujeres de Bargas, vestidas con su traje regional, que
              añadieron una nota de tipismo y alegría al acto.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              Finalizada la ceremonia, la Virgen fue devuelta a su parroquia de
              San Cipriano, donde se celebró la novena y una misa cantada el día
              11. Una placa cerámica junto al retablo mayor recuerda hasta hoy
              aquel día memorable, cuando Toledo proclamó a su Esperanza como
              Reina y Madre en presencia de toda la ciudad.
            </p>
          </div>

          {/* Galería de imágenes 
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedImage("portada.jpg")}
              >
                <img
                  src="portada.jpg"
                  alt={`Imagen ${i}`}
                  className="w-full h-72 object-cover rounded-2xl shadow-md"
                  loading="lazy"
                />
                <p className="mt-3 text-sm text-gray-900 text-center">
                  Imagen {i} - descripción breve
                </p>
              </div>
            ))}
          </div>

          {/* Modal para ver imagen en grande 
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

          */}

          <p className="text-sm sm:text-base leading-relaxed">
            Hoy, la Cofradía de la Virgen de la Esperanza continúa viva y
            activa, organizando cultos, procesiones y obras de caridad. Con la
            <strong> Procesión del Voto</strong> y otras celebraciones, Toledo
            sigue renovando su confianza en la Virgen, que permanece como faro
            de fe y esperanza para generaciones pasadas, presentes y futuras.
          </p>
        </div>
      </div>

      {/* Galería de imágenes */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {["a1", "a2", "a3", "a4"].map((name, i) => {
          const imgSrc = `/images/historia/${name}.webp`;
          return (
            <div
              key={name}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedImage(imgSrc)}
            >
              <img
                src={imgSrc}
                alt={`Imagen ${i + 1}`}
                className="w-full h-72 object-cover rounded-2xl shadow-md transition-transform duration-200 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          );
        })}
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

      <div>
        {/* Texto invitación a colaborar */}
        <p className="text-sm sm:text-base font-body leading-relaxed text-center italic mt-12">
          Estamos reuniendo con esmero la memoria y la historia de nuestra
          Cofradía y de la venerada Virgen de la Esperanza. Si guardas algún
          testimonio, documento, imagen o recuerdo que pueda enriquecer este
          legado, te invitamos a compartirlo en{" "}
          <Link
            to="/contacto"
            className="font-medium underline underline-offset-4 hover:text-emerald-700"
          >
            Contacto
          </Link>
          .
        </p>
      </div>

      <div className="font-body text-gray-900 space-y-4 my-12">
        <p className="text-sm sm:text-base leading-relaxed text-center italic">
          La Cofradía manifiesta su gratitud a Teresa López-Brea Alarza por su
          dedicación en la redacción y cuidado de los textos.
        </p>
      </div>
    </SectionContainer>
  );
}
