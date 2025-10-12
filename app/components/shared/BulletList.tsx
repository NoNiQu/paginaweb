// src/components/shared/BulletList.tsx
import React from "react";

export function BulletList({ children }: { children: React.ReactNode }) {
  return <ul className="pl-0 space-y-1 text-base list-none">{children}</ul>;
}

export function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <span className="text-[14px] mr-2 text-emerald-700">●</span>
      {children}
    </li>
  );
}
