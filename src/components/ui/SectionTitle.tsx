export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[32px] font-semibold leading-tight text-text-primary sm:text-[40px]">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-[1.8] text-text-secondary">{description}</p>
      )}
    </div>
  );
}
