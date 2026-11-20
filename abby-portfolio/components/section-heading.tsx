export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="mb-9 max-w-2xl">
    {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
    <h2 className="section-title">{title}</h2>
    {description && <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{description}</p>}
  </div>;
}
