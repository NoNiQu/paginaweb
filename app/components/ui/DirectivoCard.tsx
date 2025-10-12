import { Card } from "./Card";

export type Cargo = {
  cargo: string;
  nombre: string;
  apellidos: string;
};

export function DirectivoCard({ item }: { item: Cargo }) {
  return (
    <Card
      className="px-6 py-5 text-center font-body bg-[#053C2F] text-white"
      aria-label={`${item.cargo}: ${item.nombre} ${item.apellidos}`}
    >
      <div className="text-sm uppercase tracking-wide opacity-90">
        {item.cargo}
      </div>
      <div className="mt-1">
        <div className="text-lg font-semibold">{item.nombre}</div>
        <div className="text-lg font-semibold">{item.apellidos}</div>
      </div>
    </Card>
  );
}
