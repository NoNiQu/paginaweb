import { Card } from "../ui/Card";
import { formatLong } from "../../utils/dates";

export type CultoCard =
  | {
      id: string;
      title: string;
      start: Date;
      href: string;
      type: "single";
      end?: undefined;
    }
  | {
      id: string;
      title: string;
      start: Date;
      end: Date;
      href: string;
      type: "range";
    };

export function HomeCultoCard({
  e,
  formatRange,
}: {
  e: CultoCard;
  formatRange: (a: Date, b: Date) => string;
}) {
  return (
    <Card as="a" href={e.href} className="p-5">
      <h5 className="text-xl font-display">{e.title}</h5>
      <p className="mt-1 text-gray-700">
        {e.type === "single"
          ? formatLong(e.start)
          : formatRange(e.start, e.end!)}
      </p>
    </Card>
  );
}
