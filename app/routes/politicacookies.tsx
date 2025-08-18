import { LegalPage } from "../components/shared/LegalPage";

export default function PoliticaCookies() {
  return (
    <LegalPage title="Política de Cookies">
      <>
        <p>
          En cumplimiento con lo establecido en la normativa vigente (Ley
          34/2002 de la Sociedad de la Información y el Reglamento (UE)
          2016/679), informamos que este sitio web no utiliza cookies propias ni
          de terceros para recoger información personal ni con fines
          publicitarios o de análisis.
        </p>
        <p>
          El portal únicamente puede emplear cookies técnicas indispensables
          para el correcto funcionamiento de la navegación. Estas no almacenan
          datos personales ni elaboran perfiles de usuario.
        </p>
        <p>
          En el caso de que en el futuro se incorporen cookies de análisis o de
          terceros, se informará debidamente al usuario y se solicitará su
          consentimiento antes de su instalación.
        </p>
      </>
    </LegalPage>
  );
}
