import { cn } from "@/lib/utils";

const steps = [
  { label: "Shopping Cart", key: "cart" },
  { label: "Checkout", key: "checkout" },
  { label: "Order Succeeded", key: "success" },
] as const;

export function CartBreadcrumb({ step }: { step: "cart" | "checkout" | "success" }) {
  const activeIndex = steps.findIndex((s) => s.key === step);
  return (
    <ol className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
      {steps.map((s, i) => (
        <li
          key={s.key}
          className={cn(
            "font-semibold",
            i === activeIndex ? "text-indigo-600" : "text-ink-400",
          )}
        >
          <span className="mr-1">{i + 1}.</span>
          {s.label}
        </li>
      ))}
    </ol>
  );
}
