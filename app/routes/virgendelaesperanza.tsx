// src/pages/virgendelaesperanza.tsx
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Paragraph } from "../components/shared/Paragraph";
import { FinalNote } from "../components/shared/FinalNote";
import { ImageGallery } from "../components/shared/ImageGallery";

export default function VirgenDeLaEsperanza() {
  return (
    <SectionContainer className="relative overflow-hidden">
      {/* Título principal */}
      <SectionHeader>Virgen de la Esperanza</SectionHeader>

      {/* Bloque 1: Talla (texto + imagen a la derecha) */}
      <div className="grid md:grid-cols-2 gap-10 items-start mb-6 mt-6">
        {/* Texto */}
        <div className="space-y-6">
          <Paragraph>
            La imagen de la Virgen de la Esperanza es una pequeña talla románica
            (siglo XI) de una Virgen entronizada con el Niño en el regazo, de
            apenas 50 cm de alto. A finales del siglo XVI o principios del XVII
            fue transformada en imagen vestidera, desplazando al Niño a su
            costado izquierdo para que fuese visible sobre el ropaje.
            Actualmente se la puede venerar medio año sin mantos (Noviembre a
            Abril) y medio año con sus mantos (Mayo a Octubre). Su policromía
            medieval, de tonos oscuros y serenos, refuerza su apodo popular de
            “La Morenita de San Cipriano”. Cada detalle de la talla recuerda el
            vínculo ininterrumpido de Toledo con esta antiquísima devoción.
          </Paragraph>

          <Paragraph>
            Hasta el siglo XVII esa talla románica que se venera en la Iglesia,
            por aquel entonces de San Cebrián, se la denomina “Nuestra señora
            del Destierro”. Ya en 1676 aparece en su libro de cofradías con el
            título de “Virgen de la Esperanza”, compitiendo en su devoción con
            otras tres que había entonces en la ciudad: la de San Justo y
            Pastor, la de San Vicente y, la más prestigiosa de todas, la de San
            Lucas, famosa por el “Milagro de la Salve”, donde eran cofrades la
            mayoría de los artistas toledanos y muchos personajes ilustres. La
            tradición recuerda que como Virgen del Destierro fue invocada en
            tiempos de peste, siendo considerada protectora de Toledo al
            “desterrar” los males de la ciudad. Con su nueva advocación de
            Esperanza, se consolidó como uno de los grandes referentes marianos
            de la urbe.
          </Paragraph>

          <Paragraph>
            En 2007, la talla fue restaurada en el Centro de Restauración de
            Castilla-La Mancha, recuperando su policromía románica original.
            Desde entonces, se mantiene la tradición de mostrarla medio año en
            su sencillez medieval y medio año revestida con mantos y joyas,
            recordando así la riqueza de una devoción que es a la vez humilde y
            gloriosa.
          </Paragraph>
        </div>

        {/* Imagen */}
        <div className="relative">
          <img
            src="/images/ve/portada.webp"
            alt="Virgen de la Esperanza"
            className="w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[780px] object-cover rounded-2xl shadow-xl"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>
      </div>

      {/* Sección del Trono */}
      <div className="mt-12 space-y-4">
        <SectionHeader>Trono</SectionHeader>

        <Paragraph>
          El trono de la Virgen de la Esperanza ha sido desde sus orígenes un
          signo de la unión entre arte, devoción y patrimonio. El primitivo
          trono, encargado en las primeras décadas del siglo XVII a los maestros
          plateros Alonso Sánchez e Ignacio de Pereña, fue una magnífica obra de
          plata con ricas ornamentaciones barrocas. Su misión era clara: realzar
          la majestad de la pequeña talla románica y presentarla como auténtica
          Reina del Cielo en la iglesia de San Cipriano. Aunque desaparecido con
          el paso del tiempo, sabemos de su esplendor gracias a documentos
          conservados en el Archivo Diocesano y a un lienzo del siglo XVII que
          lo representa con todo detalle, permitiendo imaginar cómo fue venerada
          entonces la Virgen.
        </Paragraph>

        <Paragraph>
          El estudio de este trono primitivo pone de relieve no solo la riqueza
          artística de la obra, sino también el profundo vínculo entre arte, fe
          y comunidad. Cada detalle de su estructura barroca estaba concebido
          para transmitir solemnidad, esperanza y devoción. Su recuerdo
          permanece vivo como patrimonio espiritual de Toledo y como parte de la
          identidad de la Cofradía.
        </Paragraph>

        <Paragraph>
          Hoy, aunque aquel trono ya no existe, la Virgen de la Esperanza sigue
          recibiendo culto en un <strong>trono actual</strong>, heredero
          espiritual de aquel primero. Este trono moderno, realizado con
          materiales más acordes a nuestro tiempo, pero con el mismo sentido de
          dignidad, acompaña a la imagen en sus cultos solemnes y procesiones.
          Es fruto del esfuerzo constante de la Cofradía y de las aportaciones
          de muchos hermanos que, generación tras generación, han querido
          mantener viva la tradición de presentar a la Virgen como Madre y
          Señora.
        </Paragraph>

        <Paragraph>
          El trono actual no solo sostiene físicamente la imagen, sino que
          simboliza el compromiso de Toledo con su Esperanza: cada procesión,
          cada función solemne, cada culto celebrado ante él recuerda que la
          devoción no ha decaído con los siglos. Con él, la Cofradía enlaza
          pasado y presente: la memoria de la plata barroca perdida se refleja
          hoy en la sobriedad y belleza de un trono que sigue siendo signo
          visible de la fe del pueblo. Así, en cada salida de la Virgen, el
          trono se convierte en altar móvil donde Toledo renueva su confianza en
          la Esperanza que nunca abandona a sus hijos.
        </Paragraph>
      </div>

      {/* Galería de imágenes (más larga) */}
      <ImageGallery
        images={[
          { src: "/images/ve/trono_1.webp", alt: "Imagen 1" },
          { src: "/images/ve/trono_2.webp", alt: "Imagen 2" },
          { src: "/images/ve/trono_3.webp", alt: "Imagen 3" },
          { src: "/images/ve/trono_4.webp", alt: "Imagen 4" },
        ]}
        /* altura media para hacerlo más solemne */
        thumbClassName="h-[20rem] md:h-[15rem] lg:h-[25rem]"
      />

      {/* Agradecimiento final */}
      <FinalNote>
        La Cofradía manifiesta su gratitud a Teresa López-Brea Alarza por su
        dedicación en la redacción y cuidado de los textos.
      </FinalNote>

      {/* espacio extra móvil */}
      <div className="mb-12 md:mb-0" />
    </SectionContainer>
  );
}
