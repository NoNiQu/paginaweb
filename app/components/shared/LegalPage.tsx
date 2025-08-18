import type { ReactElement } from "react";
import { SectionContainer } from "app/components/shared/SectionContainer";

type LegalPageProps = {
  title: string;
  children: ReactElement | ReactElement[] | string;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <SectionContainer className="max-w-3xl mx-auto">
      <h1 className="text-center font-display tracking-tight text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10">
        {title}
      </h1>

      <article
        className="prose prose-slate prose-headings:font-display prose-headings:font-semibold prose-p:leading-relaxed md:prose-lg max-w-none
                   text-gray-900 font-body
                   [&_a]:text-emerald-800 [&_a:hover]:text-emerald-900 [&_a]:underline
                   space-y-4"
      >
        {children}
      </article>
    </SectionContainer>
  );
}
