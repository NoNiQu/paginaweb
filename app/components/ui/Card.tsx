// components/ui/Card.tsx
import React, { forwardRef } from "react";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  className?: string;
};

// Variante <div>
type CardDivProps = BaseProps &
  React.HTMLAttributes<HTMLDivElement> & {
    as?: "div";
    href?: never;
  };

// Variante <a>
type CardAnchorProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

// Unión discriminada
export type CardProps = CardDivProps | CardAnchorProps;

export const Card = forwardRef<HTMLDivElement | HTMLAnchorElement, CardProps>(
  (props, ref) => {
    const base = "rounded-xl bg-[#053C2F] text-white shadow-sm transition p-6";

    if (props.as === "a") {
      // Variante enlace
      const { as, className = "", children, href, ...rest } = props;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={`${base} ${className}`}
          {...rest}
        >
          {children}
        </a>
      );
    }

    // Variante div (por defecto)
    const { as, className = "", children, ...rest } = props;
    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={`${base} ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
