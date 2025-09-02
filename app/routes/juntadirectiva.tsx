import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Card } from "../components/ui/Card";

type Cargo = {
  cargo: string;
  nombre: string;
};

// 👉 Edita solo los nombres aquí
const DIRECTIVA: Cargo[] = [
  { cargo: "Presidente", nombre: "Nombre y Apellidos" },
  { cargo: "Vicepresidente", nombre: "Nombre y Apellidos" },
  { cargo: "Secretario", nombre: "Nombre y Apellidos" },
  { cargo: "Tesorero", nombre: "Nombre y Apellidos" },
  { cargo: "Consiliario", nombre: "Nombre y Apellidos" },
  { cargo: "Mayordomo de Ceremonias", nombre: "Nombre y Apellidos" },
  { cargo: "Mayordomo de Alhajas", nombre: "Nombre y Apellidos" },
  { cargo: "Mayordomo de Fiestas", nombre: "Marcos Alarcón Alguacil" },
  { cargo: "Capataz", nombre: "Nombre y Apellidos" },
  { cargo: "Camarera titular", nombre: "Nombre y Apellidos" },
];

export default function JuntaDirectiva() {
  const currentYear = new Date().getFullYear();

  return (
    <SectionContainer>
      {/* Título */}
      <SectionHeader>Junta Directiva</SectionHeader>

      {/* Texto explicativo */}
      <div className="mt-6 font-body text-base sm:text-lg text-gray-800 space-y-4">
        <p className="leading-relaxed">
          La Junta Directiva es el órgano ejecutivo de la Cofradía. Ejerce la
          coordinación general, impulsa el plan anual de actividades y vela por
          el cumplimiento de los acuerdos de la Asamblea General.
        </p>
        <p className="leading-relaxed">
          Entre sus funciones están: preparar la memoria anual, revisar las
          cuentas y el presupuesto antes de presentarlos a la Asamblea, fijar el
          orden del día de las reuniones, admitir nuevos miembros y, en su caso,
          tramitar bajas o cambios de condición. También puede otorgar poderes
          notariales y representar a la Cofradía en asuntos jurídicos cuando sea
          necesario.
        </p>
        <p className="leading-relaxed">
          La Junta celebra al menos tres reuniones ordinarias al año y cuantas
          extraordinarias se convoquen. Se busca la unanimidad en las decisiones
          y, si no fuese posible, se aprueban por mayoría cualificada.
        </p>
        <p className="leading-relaxed">
          Los cargos son gratuitos y se ejercen en espíritu de servicio,
          procurando la continuidad de la Cofradía y el cuidado de sus bienes y
          tradiciones.
        </p>
      </div>

      {/* Texto antes de las cards */}
      <div className="mt-12 text-center">
        <p className="font-body text-lg sm:text-xl text-gray-800 font-medium">
          Estos son los actuales cargos a{" "}
          <span className="font-semibold">{currentYear}</span>
        </p>
      </div>

      {/* Cards de cargos */}
      <div className="mt-10 space-y-8">
        {/* Fila 1: Presidente */}
        <div className="grid grid-cols-1 sm:max-w-md mx-auto">
          {DIRECTIVA.slice(0, 1).map((item) => (
            <Card
              key={item.cargo}
              className="px-6 py-5 text-center font-body bg-[#053C2F] text-white"
              aria-label={`${item.cargo}: ${item.nombre}`}
            >
              <div className="text-sm uppercase tracking-wide opacity-80">
                {item.cargo}
              </div>
              <div className="mt-1 text-xl font-semibold">{item.nombre}</div>
            </Card>
          ))}
        </div>

        {/* Fila 2: Vicepresidente – Secretario – Tesorero */}
        <div className="grid gap-6 sm:grid-cols-3">
          {DIRECTIVA.slice(1, 4).map((item) => (
            <Card
              key={item.cargo}
              className="px-6 py-5 text-center font-body bg-[#053C2F] text-white"
              aria-label={`${item.cargo}: ${item.nombre}`}
            >
              <div className="text-sm uppercase tracking-wide opacity-80">
                {item.cargo}
              </div>
              <div className="mt-1 text-lg font-semibold">{item.nombre}</div>
            </Card>
          ))}
        </div>

        {/* Fila 3: Consiliario */}
        <div className="grid grid-cols-1 sm:max-w-sm mx-auto">
          {DIRECTIVA.slice(4, 5).map((item) => (
            <Card
              key={item.cargo}
              className="px-6 py-5 text-center font-body bg-[#053C2F] text-white"
              aria-label={`${item.cargo}: ${item.nombre}`}
            >
              <div className="text-sm uppercase tracking-wide opacity-80">
                {item.cargo}
              </div>
              <div className="mt-1 text-lg font-semibold">{item.nombre}</div>
            </Card>
          ))}
        </div>

        {/* Fila 4: Mayordomías */}
        <div className="grid gap-6 sm:grid-cols-3">
          {DIRECTIVA.slice(5, 8).map((item) => (
            <Card
              key={item.cargo}
              className="px-6 py-5 text-center font-body bg-[#053C2F] text-white"
              aria-label={`${item.cargo}: ${item.nombre}`}
            >
              <div className="text-sm uppercase tracking-wide opacity-80">
                {item.cargo}
              </div>
              <div className="mt-1 text-lg font-semibold">{item.nombre}</div>
            </Card>
          ))}
        </div>

        {/* Fila 5: Capataz – Camarera titular */}
        <div className="grid gap-6 sm:grid-cols-2 sm:max-w-2xl mx-auto">
          {DIRECTIVA.slice(8, 10).map((item) => (
            <Card
              key={item.cargo}
              className="px-6 py-5 text-center font-body bg-[#053C2F] text-white"
              aria-label={`${item.cargo}: ${item.nombre}`}
            >
              <div className="text-sm uppercase tracking-wide opacity-80">
                {item.cargo}
              </div>
              <div className="mt-1 text-lg font-semibold">{item.nombre}</div>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
