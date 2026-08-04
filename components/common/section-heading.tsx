import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-primary-500 font-semibold tracking-widest text-xs uppercase">
          <span className="h-[3px] w-6 rounded-full bg-primary-400" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-600">
        {title}
      </h2>
      {description && (
        <p className="text-ink-500 max-w-2xl text-sm md:text-base">{description}</p>
      )}
    </div>
  );
}
