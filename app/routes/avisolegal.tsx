import { LegalPage } from "../components/shared/LegalPage";
import { config } from "../config";

export default function AvisoLegal() {
  return (
    <LegalPage title="Aviso Legal">
      <>
        <p>
          Esta página web es propiedad de la Cofradía de la Virgen de la
          Esperanza de Toledo y domicilio en {config.addressTitle},{" "}
          {config.addressCityLine}.
        </p>

        <p>
          Esta página web se rige por la normativa exclusivamente aplicable en
          España y en el espacio que comprende la Unión Europea, quedando
          sometida a ella, tanto nacionales como extranjeros que utilicen esta
          Web.
        </p>

        <p>
          Este portal tiene carácter informativo. Su finalidad es dar a conocer
          la historia, actividades y cultos de la Cofradía de la Virgen de la
          Esperanza de Toledo.
        </p>

        <p>
          Todos los contenidos (textos, imágenes, logotipos, diseños) son
          propiedad de la Cofradía o cuentan con autorización para su uso. Queda
          prohibida su reproducción, distribución o comunicación sin permiso
          expreso.
        </p>

        <p>
          Este sitio puede incluir enlaces a páginas externas. La Cofradía no se
          responsabiliza de los contenidos ni de las políticas de privacidad de
          dichas páginas.
        </p>

        <p>
          Aunque se procura la exactitud de la información, la Cofradía no se
          responsabiliza de los posibles errores, interrupciones del servicio o
          daños derivados del uso de este portal.
        </p>

        <p>
          El presente Aviso Legal se rige por la legislación española. Para
          cualquier controversia, las partes se someterán a los Juzgados y
          Tribunales de Toledo, salvo que la normativa aplicable en materia de
          consumo disponga otro fuero.
        </p>
      </>
    </LegalPage>
  );
}
