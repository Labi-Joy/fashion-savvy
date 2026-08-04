"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "./data";

export type CartLine = {
  slug: string;
  name: string;
  vendor: string;
  price: number;
  image: string;
  size?: string;
  color?: string;
  quantity: number;
};

type CartState = {
  lines: CartLine[];
  addItem: (product: Product, opts?: { size?: string; color?: string; quantity?: number }) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      addItem: (product, opts = {}) =>
        set((state) => {
          const existing = state.lines.find((l) => l.slug === product.slug);
          const quantity = opts.quantity ?? 1;
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l.slug === product.slug ? { ...l, quantity: l.quantity + quantity } : l,
              ),
            };
          }
          return {
            lines: [
              ...state.lines,
              {
                slug: product.slug,
                name: product.name,
                vendor: product.vendor,
                price: product.price,
                image: product.image,
                size: opts.size,
                color: opts.color,
                quantity,
              },
            ],
          };
        }),
      removeItem: (slug) =>
        set((state) => ({ lines: state.lines.filter((l) => l.slug !== slug) })),
      updateQuantity: (slug, quantity) =>
        set((state) => ({
          lines: state.lines
            .map((l) => (l.slug === slug ? { ...l, quantity: Math.max(0, quantity) } : l))
            .filter((l) => l.quantity > 0),
        })),
      clear: () => set({ lines: [] }),
    }),
    { name: "fs-cart" },
  ),
);

export const cartCount = (lines: CartLine[]) =>
  lines.reduce((sum, l) => sum + l.quantity, 0);

export const cartSubtotal = (lines: CartLine[]) =>
  lines.reduce((sum, l) => sum + l.quantity * l.price, 0);

type WishlistState = {
  slugs: string[];
  toggle: (slug: string) => void;
  has: (slug: string) => boolean;
  remove: (slug: string) => void;
  clear: () => void;
};

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      slugs: [],
      toggle: (slug) =>
        set((state) => ({
          slugs: state.slugs.includes(slug)
            ? state.slugs.filter((s) => s !== slug)
            : [...state.slugs, slug],
        })),
      has: (slug) => get().slugs.includes(slug),
      remove: (slug) => set((state) => ({ slugs: state.slugs.filter((s) => s !== slug) })),
      clear: () => set({ slugs: [] }),
    }),
    { name: "fs-wishlist" },
  ),
);
