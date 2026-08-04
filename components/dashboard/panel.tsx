import { cn } from "@/lib/utils";

export function PanelHeading({
  title,
  action,
  className,
}: {
  title: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-600">{title}</h1>
      {action}
    </div>
  );
}

export function BandLabel({ children, tone = "primary" }: { children: React.ReactNode; tone?: "primary" | "muted" }) {
  return (
    <div
      className={cn(
        "rounded-xl px-5 md:px-8 py-3 md:py-4",
        tone === "primary"
          ? "bg-primary-400 text-indigo-900"
          : "bg-primary-50 text-indigo-600",
      )}
    >
      <h2 className="font-bold text-lg md:text-xl">{children}</h2>
    </div>
  );
}
