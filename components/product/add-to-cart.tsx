"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuantityStepper } from "./quantity-stepper";
import { useCart } from "@/lib/store";
import { formatPriceRange } from "@/lib/utils";
import type { Product } from "@/lib/data";

export function AddToCart({ product }: { product: Product }) {
  const addItem = useCart((s) => s.addItem);
  const [size, setSize] = useState(product.sizes[2] ?? product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]?.name);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    addItem(product, { size, color, quantity: qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-2xl md:text-4xl font-bold text-indigo-600">
          {formatPriceRange(product.price, product.priceMax)}
        </p>
      </div>

      <div>
        <h3 className="text-indigo-600 font-bold mb-2">Product Details</h3>
        <p className="text-ink-500 text-sm leading-relaxed">{product.description}</p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-indigo-600">Size</span>
          <button className="text-xs text-primary-500 font-semibold hover:underline">
            Size guide
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`h-10 min-w-10 px-3 rounded-lg border-2 text-sm font-semibold transition-colors ${
                size === s
                  ? "border-primary-400 bg-primary-50 text-indigo-600"
                  : "border-ink-200 text-ink-500 hover:border-primary-300 hover:text-indigo-600"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <span className="text-sm font-semibold text-indigo-600">Colour</span>
        <div className="flex gap-3">
          {product.colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setColor(c.name)}
              aria-label={c.name}
              className={`h-9 w-9 rounded-full ring-offset-2 transition-all ${
                color === c.name
                  ? "ring-2 ring-primary-400 scale-105"
                  : "ring-1 ring-ink-200 hover:scale-105"
              }`}
              style={{ background: c.hex }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-ink-100 pt-6">
        <div className="flex items-center gap-6">
          <span className="text-sm font-semibold text-indigo-600">Quantity</span>
          <QuantityStepper value={qty} onChange={setQty} />
        </div>
        <button className="text-sm text-accent-400 font-semibold hover:underline">
          Add note
        </button>
      </div>

      <Button onClick={onAdd} size="lg" className="w-full sm:w-auto" disabled={added}>
        {added ? (
          <>
            <Check className="h-5 w-5" />
            Added to Cart
          </>
        ) : (
          <>
            Add to Cart
            <ShoppingBag className="h-5 w-5" />
          </>
        )}
      </Button>
    </div>
  );
}
