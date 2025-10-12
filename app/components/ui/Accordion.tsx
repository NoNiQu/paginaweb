import { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  titleClassName?: string;
};

export function Accordion({
  title,
  children,
  defaultOpen = false,
  className = "",
  titleClassName = "",
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`border-t border-white/30 pt-2 ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex justify-between items-center font-medium text-white cursor-pointer ${titleClassName}`}
      >
        {title}
        <span aria-hidden>{open ? "–" : "+"}</span>
      </button>
      {open && <div className="mt-2 text-sm text-white/90">{children}</div>}
    </div>
  );
}
