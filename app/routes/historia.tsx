import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";

export default function Historia() {
  return (
    <SectionContainer>
      {/* Título */}
      <SectionHeader>Historia</SectionHeader>

      {/* Texto adicional */}
      <div className="mt-6 font-body text-base sm:text-lg text-gray-800 space-y-4">
        <p className="leading-relaxed">EN CREACIÓN</p>
      </div>

      <div className="font-body text-gray-900 space-y-4 my-12">
        <p className="text-sm sm:text-base leading-relaxed text-center italic">
          La Cofradía manifiesta su gratitud a la Archidiocesis y Arzobispado
          por la ayuda de reecontrarnos con nuestra historia y a Teresa
          López-Brea Alarza por su dedicación en la redacción y cuidado de los
          textos.
        </p>
      </div>
    </SectionContainer>
  );
}
