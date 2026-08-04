"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { Button, ButtonLink } from "@/components/ui/button";
import { products } from "@/lib/data";
import { useCart, useWishlist } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

export default function WishlistPage() {
  const slugs = useWishlist((s) => s.slugs);
  const remove = useWishlist((s) => s.remove);
  const addItem = useCart((s) => s.addItem);
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => setMounted(true), []);

  const items = useMemo(
    () =>
      products
        .filter((p) => slugs.includes(p.slug))
        .filter((p) => (query ? p.name.toLowerCase().includes(query.toLowerCase()) : true)),
    [slugs, query],
  );

  return (
    <div className="py-8 md:py-12">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-600">My Wishlist</h1>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-900" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search here"
              className="w-full h-12 pl-11 pr-4 rounded-xl bg-primary-400 text-indigo-900 placeholder:text-indigo-900/60 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/40"
            />
          </div>
        </div>

        {!mounted ? (
          <div className="mt-16 text-ink-500">Loading your wishlist…</div>
        ) : items.length === 0 ? (
          <div className="mt-16 text-center border-2 border-dashed border-ink-100 rounded-2xl p-12 max-w-xl mx-auto">
            <div className="h-16 w-16 grid place-items-center rounded-full bg-primary-50 mx-auto">
              <Heart className="h-7 w-7 text-primary-500" />
            </div>
            <h2 className="mt-4 text-indigo-600 font-bold text-xl">Your wishlist is empty</h2>
            <p className="mt-2 text-ink-500 text-sm">
              Tap the heart on any product to save it here.
            </p>
            <ButtonLink href="/shop" size="md" className="mt-6">
              Browse the shop
            </ButtonLink>
          </div>
        ) : (
          <>
            <div className="mt-8 hidden md:grid grid-cols-[80px_minmax(0,1.5fr)_120px_100px_160px_60px] items-center gap-4 rounded-xl bg-primary-400 text-indigo-900 px-6 h-14 font-bold">
              <span />
              <span>Product Name</span>
              <span>Price</span>
              <span>Quantity</span>
              <span />
              <span />
            </div>

            <ul className="mt-2 divide-y divide-ink-100">
              {items.map((p) => (
                <li
                  key={p.slug}
                  className="py-4 grid grid-cols-[80px_minmax(0,1fr)] md:grid-cols-[80px_minmax(0,1.5fr)_120px_100px_160px_60px] items-center gap-4"
                >
                  <Link
                    href={`/product/${p.slug}`}
                    className="relative aspect-square rounded-xl overflow-hidden bg-primary-50"
                  >
                    <Image src={p.image} alt={p.name} fill sizes="80px" className="object-cover" />
                  </Link>
                  <div className="min-w-0">
                    <Link
                      href={`/product/${p.slug}`}
                      className="text-indigo-600 font-bold text-base md:text-lg truncate hover:text-primary-500"
                    >
                      {p.name}
                    </Link>
                    <p className="text-ink-500 text-xs md:hidden mt-1">{formatPrice(p.price)} · Qty 1</p>
                  </div>
                  <span className="hidden md:block text-indigo-600 font-bold">{formatPrice(p.price)}</span>
                  <span className="hidden md:block text-indigo-600 font-semibold">1</span>
                  <div className="hidden md:flex justify-start">
                    <Button size="sm" onClick={() => addItem(p, { quantity: 1 })}>
                      Add to Cart
                    </Button>
                  </div>
                  <div className="hidden md:flex justify-center">
                    <button
                      onClick={() => remove(p.slug)}
                      aria-label="Remove"
                      className="h-9 w-9 grid place-items-center rounded-full hover:bg-primary-50"
                    >
                      <Heart className="h-5 w-5 fill-accent-400 text-accent-400" />
                    </button>
                  </div>
                  <div className="md:hidden col-span-2 flex items-center gap-2">
                    <Button size="sm" onClick={() => addItem(p, { quantity: 1 })} className="flex-1">
                      <ShoppingBag className="h-4 w-4" />
                      Add to Cart
                    </Button>
                    <button
                      onClick={() => remove(p.slug)}
                      aria-label="Remove"
                      className="h-10 w-10 grid place-items-center rounded-full hover:bg-primary-50"
                    >
                      <Heart className="h-5 w-5 fill-accent-400 text-accent-400" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </Container>
    </div>
  );
}
