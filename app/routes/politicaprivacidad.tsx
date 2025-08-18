import { LegalPage } from "../components/shared/LegalPage";
import { config } from "../config";

export default function PoliticaPrivacidad() {
  return (
    <LegalPage title="Política de Privacidad">
      <>
        <p>
          En la Cofradía de la Virgen de la Esperanza nos tomamos en serio la
          protección de los datos personales. Por ello, informamos a los
          usuarios de este sitio web lo siguiente:
        </p>

        <p>
          Este portal es de carácter informativo y no recopila datos personales
          mediante formularios ni cookies. Los únicos datos que pueden tratarse
          son los que el usuario nos facilite voluntariamente al ponerse en
          contacto con la Cofradía a través del correo electrónico facilitado.
        </p>

        <p>
          Los datos recibidos se emplearán únicamente para responder a consultas
          o comunicaciones relacionadas con la Cofradía. No se utilizarán con
          fines comerciales ni se cederán a terceros, salvo obligación legal o
          servicios técnicos necesarios (como el alojamiento web).
        </p>

        <p>
          Los donativos a la Cofradía se realizan a través de Bizum u otras
          plataformas bancarias externas, fuera de este sitio web. La Cofradía
          no recoge ni trata datos financieros en la web.
        </p>

        <p>
          Los datos se conservarán únicamente el tiempo necesario para atender
          la consulta o cumplir con obligaciones legales aplicables. En todo
          momento, el usuario puede ejercer sus derechos de acceso,
          rectificación, supresión, oposición, limitación y portabilidad
          escribiendo a nuestro correo electrónico: {config.contactEmail}.
        </p>

        <p>
          Asimismo, el usuario puede presentar una reclamación ante la{" "}
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800 underline hover:text-green-950"
          >
            Agencia Española de Protección de Datos
          </a>
          .
        </p>
      </>
    </LegalPage>
  );
}
