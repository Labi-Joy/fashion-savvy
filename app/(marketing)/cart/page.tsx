"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { CartBreadcrumb } from "@/components/cart/cart-breadcrumb";
import { CartLine } from "@/components/cart/cart-line";
import { CartSummary } from "@/components/cart/cart-summary";
import { cartSubtotal, useCart } from "@/lib/store";
import { useEffect, useState } from "react";

export default function CartPage() {
  const lines = useCart((s) => s.lines);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const subtotal = cartSubtotal(lines);

  return (
    <div className="py-8 md:py-12">
      <Container>
        <CartBreadcrumb step="cart" />
        <h1 className="mt-4 text-3xl md:text-5xl font-bold text-indigo-600">My Cart</h1>

        {!mounted ? (
          <div className="mt-16 text-ink-500">Loading your cart…</div>
        ) : lines.length === 0 ? (
          <div className="mt-16 text-center border-2 border-dashed border-ink-100 rounded-2xl p-12 max-w-xl mx-auto">
            <div className="h-16 w-16 grid place-items-center rounded-full bg-primary-50 mx-auto">
              <ShoppingBag className="h-7 w-7 text-primary-500" />
            </div>
            <h2 className="mt-4 text-indigo-600 font-bold text-xl">Your cart is empty</h2>
            <p className="mt-2 text-ink-500 text-sm">
              Add pieces you love from the shop and they will appear here.
            </p>
            <ButtonLink href="/shop" size="md" className="mt-6">
              Browse the shop
            </ButtonLink>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              {lines.map((l) => (
                <CartLine key={l.slug} line={l} />
              ))}
              <div className="mt-6">
                <Link
                  href="/shop"
                  className="text-primary-500 font-semibold hover:underline text-sm"
                >
                  ← Continue shopping
                </Link>
              </div>
            </div>
            <CartSummary subtotal={subtotal} onCheckout={() => router.push("/checkout")} />
          </div>
        )}
      </Container>
    </div>
  );
}
