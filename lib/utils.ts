import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value: number, currency = "NGN") {
  const formatted = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
  // en-NG occasionally returns "NGN 1,500" instead of "₦1,500" depending on ICU version
  return formatted.replace(/^NGN\s?/, "₦");
}

export function formatPriceRange(min: number, max?: number) {
  if (!max || max === min) return formatPrice(min);
  return `${formatPrice(min)} - ${formatPrice(max)}`;
}
