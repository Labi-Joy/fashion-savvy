"use client";

import Image from "next/image";
import { Trash2, Heart } from "lucide-react";
import { QuantityStepper } from "@/components/product/quantity-stepper";
import { useCart, useWishlist, type CartLine as CartLineType } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

export function CartLine({ line }: { line: CartLineType }) {
  const remove = useCart((s) => s.removeItem);
  const updateQty = useCart((s) => s.updateQuantity);
  const toggleWishlist = useWishlist((s) => s.toggle);

  return (
    <article className="grid grid-cols-[110px_minmax(0,1fr)] md:grid-cols-[160px_minmax(0,1fr)] gap-4 md:gap-6 py-6 border-b border-ink-100 last:border-0">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-primary-50">
        <Image
          src={line.image}
          alt={line.name}
          fill
          sizes="(min-width: 768px) 160px, 110px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0">
        <h3 className="text-indigo-600 font-bold text-lg md:text-xl truncate">{line.name}</h3>
        <p className="text-ink-500 text-xs mt-0.5">{line.vendor}</p>

        <dl className="mt-3 grid grid-cols-[70px_1fr] gap-y-2 text-sm">
          <dt className="text-indigo-600 font-semibold">Size</dt>
          <dd className="text-ink-500">{line.size ?? "M"}</dd>
          <dt className="text-indigo-600 font-semibold">Colour</dt>
          <dd className="text-ink-500">{line.color ?? "Default"}</dd>
          <dt className="text-indigo-600 font-semibold">Quantity</dt>
          <dd>
            <QuantityStepper
              value={line.quantity}
              onChange={(v) => updateQty(line.slug, v)}
              min={0}
            />
          </dd>
        </dl>

        <div className="mt-4 flex flex-wrap items-center gap-3 justify-between">
          <p className="text-indigo-600 font-bold text-xl md:text-2xl">
            {formatPrice(line.price * line.quantity)}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => remove(line.slug)}
              className="h-10 w-10 grid place-items-center rounded-lg border-2 border-primary-400 text-primary-500 hover:bg-primary-50"
              aria-label="Remove item"
            >
              <Trash2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                toggleWishlist(line.slug);
                remove(line.slug);
              }}
              className="h-10 px-4 inline-flex items-center gap-2 rounded-lg border-2 border-primary-400 text-primary-500 font-semibold text-sm hover:bg-primary-50"
            >
              Wishlist
              <Heart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
