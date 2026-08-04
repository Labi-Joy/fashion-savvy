import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Rating({
  value,
  count,
  size = "sm",
  showCount = false,
  className,
}: {
  value: number;
  count?: number;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
  className?: string;
}) {
  const px = size === "lg" ? "h-5 w-5" : size === "md" ? "h-4 w-4" : "h-3.5 w-3.5";
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center gap-0.5" aria-label={`Rating ${value} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              px,
              i < Math.round(value) ? "fill-accent-400 text-accent-400" : "fill-ink-200 text-ink-200",
            )}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-xs text-ink-500">({count})</span>
      )}
    </div>
  );
}
