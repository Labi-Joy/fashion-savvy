"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

export function CartSummary({
  subtotal,
  onCheckout,
}: {
  subtotal: number;
  onCheckout: () => void;
}) {
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState<string | null>(null);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="space-y-6">
      <section className="bg-white rounded-2xl border border-ink-100 p-5">
        <h3 className="text-indigo-600 font-bold mb-3">Have a Coupon?</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (coupon.trim()) setApplied(coupon.trim());
          }}
          className="space-y-3"
        >
          <input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Input coupon code"
            className="w-full h-11 px-4 rounded-lg border-2 border-primary-400 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
          />
          <Button type="submit" size="md" block>
            Apply
          </Button>
          {applied && (
            <p className="text-xs text-primary-500 font-semibold">Coupon “{applied}” applied</p>
          )}
        </form>
      </section>

      <section className="bg-white rounded-2xl border border-ink-100 p-5">
        <h3 className="text-indigo-600 font-bold mb-4">Cart Totals</h3>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <dt className="text-indigo-600 font-semibold">Subtotal</dt>
            <dd className="text-indigo-600 font-bold">{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex justify-between items-start">
            <dt className="text-indigo-600 font-semibold">Shipping</dt>
            <dd className="text-right">
              <p className="text-indigo-600 font-medium">Free Shipping</p>
              <p className="text-ink-400 text-xs mt-1">
                Shipping to Lagos ·{" "}
                <button className="text-primary-500 font-semibold hover:underline">Change</button>
              </p>
            </dd>
          </div>
          <div className="flex justify-between items-center border-t border-ink-100 pt-3">
            <dt className="text-indigo-600 font-bold text-base">Total</dt>
            <dd className="text-indigo-600 font-bold text-lg">{formatPrice(total)}</dd>
          </div>
        </dl>

        <Button onClick={onCheckout} size="lg" block className="mt-5">
          Checkout
        </Button>
      </section>
    </div>
  );
}
