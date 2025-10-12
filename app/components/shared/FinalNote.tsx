// components/shared/FinalNote.tsx
import React from "react";

export function FinalNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-12">
      <p className="font-body text-gray-900 text-sm sm:text-base leading-relaxed text-center italic">
        {children}
      </p>
    </div>
  );
}
