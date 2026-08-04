"use client";

import { useEffect } from "react";
import { products } from "@/lib/data";
import { useCart } from "@/lib/store";

const SEED_KEY = "fs-cart-seeded";
const SEED_SLUGS = ["amali-dress", "urbano-jacket"] as const;

function runSeed() {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem(SEED_KEY)) return;

  const state = useCart.getState();
  if (state.lines.length === 0) {
    for (const slug of SEED_SLUGS) {
      const product = products.find((p) => p.slug === slug);
      if (!product) continue;
      state.addItem(product, {
        size: product.sizes.includes("M") ? "M" : product.sizes[0],
        color: product.colors[0]?.name,
        quantity: 1,
      });
    }
  }
  window.localStorage.setItem(SEED_KEY, "1");
}

export function DemoCartSeed() {
  useEffect(() => {
    if (useCart.persist.hasHydrated()) {
      runSeed();
      return;
    }
    const unsub = useCart.persist.onFinishHydration(runSeed);
    return () => unsub();
  }, []);

  return null;
}
