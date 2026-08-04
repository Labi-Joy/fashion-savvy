"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { useWishlist } from "@/lib/store";
import { cn } from "@/lib/utils";

export function WishlistButton({
  slug,
  className,
  size = "md",
}: {
  slug: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const toggle = useWishlist((s) => s.toggle);
  const slugs = useWishlist((s) => s.slugs);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const active = mounted && slugs.includes(slug);
  const iconSize = size === "lg" ? "h-5 w-5" : size === "md" ? "h-4 w-4" : "h-3.5 w-3.5";
  const boxSize = size === "lg" ? "h-11 w-11" : size === "md" ? "h-9 w-9" : "h-8 w-8";

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      aria-pressed={active}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      className={cn(
        boxSize,
        "grid place-items-center rounded-full bg-white/95 backdrop-blur shadow-[var(--shadow-elev-2)] transition-transform hover:scale-110 active:scale-95",
        className,
      )}
    >
      <Heart
        className={cn(
          iconSize,
          "transition-colors",
          active ? "fill-accent-400 text-accent-400" : "fill-transparent text-accent-400",
        )}
      />
    </button>
  );
}
