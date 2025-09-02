// src/pages/virgendelaesperanza.tsx
import { useState, useEffect } from "react";
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";

export default function VirgenDeLaEsperanza() {
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
    <SectionContainer className="relative overflow-hidden">
      {/* Título principal */}
      <SectionHeader>Virgen de la Esperanza</SectionHeader>

      {/* Bloque 1: Talla (texto + imagen a la derecha) */}
      <div className="grid md:grid-cols-2 gap-10 items-start mb-6 mt-6">
        {/* Texto */}
        <div className="space-y-6 font-body text-gray-900">
          <p className="text-sm sm:text-base leading-relaxed">
            La imagen de la Virgen de la Esperanza es una pequeña talla románica
            (siglo XI) de una Virgen entronizada con el Niño en el regazo, de
            apenas 50 cm. de alto. A finales del siglo XVI o principios del XVII
            fue transformada en imagen vestidera, desplazando al Niño a su
            costado izquierdo para que fuese visible sobre el ropaje. La talla
            ha sido restaurada en 2007 en el Centro de Restauración de
            Castilla-La Mancha, recuperando su apariencia original. Actualmente
            se la puede venerar medio año sin mantos (Noviembre a Abril) y medio
            año con sus mantos (Mayo a Octubre). Su policromía medieval, de
            tonos oscuros y serenos, refuerza su apodo popular de “la Morenita
            de San Cipriano”. Cada detalle de la talla recuerda el vínculo
            ininterrumpido de Toledo con esta antiquísima devoción.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            Hasta el siglo XVII esa talla románica que se venera en la Iglesia
            por aquel entonces de San Cebrián, se la denomina “Nuestra señora
            del Destierro”. Ya en 1676 aparece en su libro de cofradías con el
            título de “Virgen de la Esperanza”, compitiendo en su devoción con
            otras tres que había entonces en la ciudad: la de San Justo y
            Pastor, la de San Vicente y, la más prestigiosa de todas, la de San
            Lucas, famosa por el “Milagro de la Salve”, donde eran cófrades la
            mayoría de los artistas toledanos y muchos personajes ilustres. La
            tradición recuerda que como Virgen del Destierro fue invocada en
            tiempos de peste, siendo considerada protectora de Toledo al
            “desterrar” los males de la ciudad. Con su nueva advocación de
            Esperanza, se consolidó como uno de los grandes referentes marianos
            de la urbe.
          </p>
        </div>
        {/* Imagen */}
        <div className="relative">
          <img
            src="portada.jpg"
            alt="Virgen de la Esperanza"
            className="w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[650px] object-cover rounded-2xl shadow-xl"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>
      </div>

      {/* Texto complementario (bajo el bloque) */}
      <div className="font-body text-gray-900 space-y-4 mb-16">
        <p className="text-sm sm:text-base leading-relaxed">
          Esta imagen tiene el privilegio de haber sido coronada canónicamente
          en solemne ceremonia celebrada en la Plaza de Zocodover el 8 de junio
          de 1952. Una vez autorizada por el Vaticano la solicitud del cardenal
          Pla y Deniel, se emitió un decreto por la patriarcal basílica vaticana
          firmado por el Cardenal Tedeschini. Se llevó a cabo un “Programa de
          solemnes cultos y novena” entre el 2 y el 11. El día 3 la Virgen fue
          llevada en procesión a la iglesia de San Ildefonso, donde durante
          varios días se hicieron solemnes misas y otros actos religiosos. El
          día 7 fue trasladada a la catedral, donde al día siguiente se celebró
          Misa de Pontifical, y luego fue llevada en procesión a la plaza de
          Zocodover para su coronación canónica en una gran tribuna ubicada bajo
          el Arco de la Sangre; una espléndida ceremonia acompañada de más de
          diez mil personas que llenaban a rebosar la plaza de Zocodover, parte
          de la Calle Ancha y toda la Cuesta de Carlos V, la calle de las Armas.
          El Sr. Alcalde de la ciudad entregó la corona al Sr. Cardenal Pla y
          Deniel, quien la coronó ante el júbilo de los asistentes y un mar de
          pañuelos que se agitaban como signo de alegría. Una gran muchedumbre,
          salvas de artillería, vuelo de palomas mensajeras y lluvia de flores.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          Hubo una circunstancia que no podemos callar: en el mismo momento en
          que su Eminencia colocaba la corona sobre la pequeña cabecita de la
          Virgen, apareció en el sol un halo luminoso, un círculo grande, de
          color anaranjado, un disco que envolvía el sol. Aquella coronación
          fue, como dijo un cronista de entonces, triple: la corona de metales
          preciosos y pedrería sobre su cabeza, la corona de la devoción, de las
          oraciones y de la piedad de sus fieles, y la corona que se dibujó en
          el cielo. Lo vieron miles de fieles, de los cuales hoy todavía viven
          muchos y pueden dar fe al que esto escribe. No fue una alucinación, ni
          una visión, ni un invento, pues han transcurrido solamente cincuenta
          años y está vivo el ¿milagro? o fenómeno que se dio curiosamente en
          aquella circunstancia.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          La Presidencia del Gobierno Español concedió a la Virgen de la
          Esperanza los máximos honores militares, con las salvas de ordenanza.
          Asistió el Ayuntamiento en pleno, así como representaciones de muchos
          pueblos de la comarca toledana vestidos con sus trajes regionales.
          Solamente de Bargas vinieron sesenta mujeres ataviadas de bargueñas
          que pusieron una nota de tipismo y alegría. Finalizada la ceremonia,
          la Virgen fue trasladada de nuevo a San Cipriano donde se le ofició
          una novena. Los actos concluyeron con una misa cantada el día 11. Hay
          una placa cerámica que conmemora la ceremonia junto al retablo de San
          Cipriano.
        </p>
      </div>

      {/* Galería de imágenes */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Sección del Trono */}
      <div className="font-body text-gray-900 space-y-4 mb-16 mt-6">
        <SectionHeader>Trono</SectionHeader>
        <p className="text-sm sm:text-base leading-relaxed">
          La Virgen de la Esperanza, titular de nuestra Cofradía, no solo es un
          símbolo de fe y devoción, sino también un testimonio vivo del
          patrimonio artístico y religioso de Toledo. Uno de los elementos más
          importantes de este legado es el trono primitivo de la Virgen, un
          encargo realizado en las primeras décadas del siglo XVII, en pleno
          auge del arte sacro tras el Concilio de Trento (1545-1563).
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          Este trono fue encargado a los reconocidos orfebres Alonso Sánchez e
          Ignacio de Pereña, quienes trabajaron con esmero para crear una pieza
          de gran valor litúrgico y artístico, destinada a resaltar la
          solemnidad y la devoción a la Virgen en la Iglesia de San Cipriano,
          sede canónica de nuestra cofradía. La obra, realizada en plata y
          enriquecida con detalles ornamentales propios del barroco, tenía como
          finalidad ofrecer a los fieles un soporte digno para la veneración de
          la Virgen de la Esperanza, reforzando su papel central en la vida
          espiritual de Toledo.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          Aunque el trono original ha desaparecido, se ha preservado el arco del
          trono, una pieza fundamental que permite conocer el diseño y la
          ornamentación originales. La investigación reciente ha permitido
          reconstruir su aspecto y significado a partir de documentos inéditos
          conservados en el Archivo Diocesano de Toledo, así como de un lienzo
          fechado hacia 1660 que representa a la Virgen entronizada. Esta
          pintura, de autoría desconocida, muestra con gran precisión la
          disposición y el diseño del trono, convirtiéndose en una fuente
          invaluable para comprender cómo era venerada la Virgen y la
          importancia que se le otorgaba dentro de la iglesia y de la comunidad
          cofrade.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          El estudio del trono primitivo de la Virgen de la Esperanza pone de
          relieve no sólo la riqueza artística de la obra, sino también el
          profundo vínculo entre arte, devoción y comunidad. Cada detalle del
          trono, desde sus ornamentos hasta su diseño estructural, refleja la
          intención de transmitir fe, esperanza y solemnidad, valores que la
          Cofradía continúa promoviendo en la actualidad.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          Para la Cofradía de la Esperanza, esta investigación no es solo un
          ejercicio académico: es también un recordatorio de la importancia de
          preservar y poner en valor nuestro patrimonio histórico y religioso.
          En definitiva, el redescubrimiento del trono primitivo de la Virgen de
          la Esperanza refuerza la identidad de nuestra cofradía, conecta a los
          fieles con generaciones pasadas y nos invita a continuar transmitiendo
          la fe y la devoción que han hecho de la Virgen de la Esperanza un
          referente espiritual y cultural en Toledo.
        </p>
      </div>

      {/* Galería de imágenes */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
