import { Card } from "../ui/Card";

type Props = { href: string; icon: string; label: string };

export function HomeSocialCard({ href, icon, label }: Props) {
  return (
    <Card
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row items-center justify-center gap-4 p-4 h-14 w-full"
      aria-label={`${label} de la Cofradía`}
    >
      <img src={icon} alt={label} className="w-7 h-7" loading="lazy" />
      <strong className="text-white text-lg">{label}</strong>
    </Card>
  );
}
