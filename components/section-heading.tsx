type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = "left", light = false }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${light ? "text-orange-light" : "text-orange"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-balance text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-7 sm:text-lg ${light ? "text-slate-200" : "text-slate-600"}`}>{description}</p> : null}
    </div>
  );
}
