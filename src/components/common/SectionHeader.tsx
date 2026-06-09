interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeader({ eyebrow, title, description, center }: Props) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <span className="inline-block rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      {description && <p className="mt-3 text-base text-muted-foreground">{description}</p>}
    </div>
  );
}
