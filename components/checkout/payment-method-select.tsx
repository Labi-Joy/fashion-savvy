"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type PaymentMethod = "card" | "bank" | "ussd";

const methods: { id: PaymentMethod; label: string }[] = [
  { id: "card", label: "Debit Card" },
  { id: "bank", label: "Bank Transfer" },
  { id: "ussd", label: "USSD" },
];

export function PaymentMethodSelect({
  value,
  onChange,
}: {
  value: PaymentMethod | null;
  onChange: (m: PaymentMethod) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-600">Select Payment Methods</h2>
      <ul className="mt-6 divide-y divide-ink-100">
        {methods.map((m) => {
          const active = value === m.id;
          return (
            <li key={m.id}>
              <button
                onClick={() => onChange(m.id)}
                className={cn(
                  "w-full flex items-center justify-between gap-4 py-4 md:py-5 transition-colors",
                  active ? "text-primary-500" : "text-indigo-600 hover:text-primary-500",
                )}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={cn(
                      "h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors",
                      active ? "border-primary-400" : "border-ink-300",
                    )}
                  >
                    {active && <span className="h-2.5 w-2.5 rounded-full bg-primary-400" />}
                  </span>
                  <span className="font-bold text-lg">{m.label}</span>
                </span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
