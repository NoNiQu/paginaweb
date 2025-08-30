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
    </SectionContainer>
  );
}
