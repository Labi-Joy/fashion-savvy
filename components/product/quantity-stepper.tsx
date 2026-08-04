"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
  className,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-4 select-none", className)}>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="h-8 w-8 grid place-items-center rounded-full text-indigo-600 hover:bg-primary-50 disabled:text-ink-300 disabled:hover:bg-transparent"
        aria-label="Decrease quantity"
        disabled={value <= min}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-8 text-center font-bold text-indigo-600">{value}</span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        className="h-8 w-8 grid place-items-center rounded-full text-indigo-600 hover:bg-primary-50 disabled:text-ink-300 disabled:hover:bg-transparent"
        aria-label="Increase quantity"
        disabled={value >= max}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
