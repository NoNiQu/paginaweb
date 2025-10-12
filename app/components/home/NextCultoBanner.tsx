import { Card } from "../ui/Card";

type Props = {
  title: string;
  href: string;
  detail: string;
};

export function NextCultoBanner({ title, href, detail }: Props) {
  return (
    <Card className="mt-6 p-6 bg-[#053C2F] text-white">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="uppercase tracking-wide text-white/80 text-sm">
            Próximo culto
          </p>
          <h3 className="text-2xl font-body">{title}</h3>
          <p className="mt-1 opacity-90">{detail}</p>
        </div>
        <div>
          <a
            href={href}
            className="inline-flex items-center justify-center rounded-full bg-white text-[#053C2F] hover:bg-emerald-50 font-body font-medium sc px-5 py-2 text-base shadow-md transition"
          >
            VER DETALLES
          </a>
        </div>
      </div>
    </Card>
  );
}
