"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CartBreadcrumb } from "@/components/cart/cart-breadcrumb";
import {
  PaymentMethodSelect,
  type PaymentMethod,
} from "@/components/checkout/payment-method-select";
import { AddCardForm } from "@/components/checkout/add-card-form";
import { PaymentSuccess } from "@/components/checkout/payment-success";
import { cartSubtotal, useCart } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

type Step = "method" | "card" | "confirm" | "success";

export default function CheckoutPage() {
  const [step, setStep] = useState<Step>("method");
  const [method, setMethod] = useState<PaymentMethod | null>(null);
  const lines = useCart((s) => s.lines);
  const clear = useCart((s) => s.clear);
  const subtotal = cartSubtotal(lines);
  const orderId = useMemo(
    () => `ORD-${Math.floor(10000 + Math.random() * 89999)}`,
    [],
  );
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const goToPayment = () => {
    if (!method) return;
    setStep(method === "card" ? "card" : "confirm");
  };

  const submitPayment = () => {
    setStep("success");
    setTimeout(() => clear(), 400);
  };

  const step2 = step === "success" ? "success" : "checkout";

  return (
    <div className="py-8 md:py-12">
      <Container className="max-w-3xl">
        <CartBreadcrumb step={step2} />
        <h1 className="mt-4 text-3xl md:text-5xl font-bold text-indigo-600">Checkout</h1>

        {mounted && lines.length === 0 && step !== "success" ? (
          <div className="mt-12 text-center border-2 border-dashed border-ink-100 rounded-2xl p-12">
            <p className="text-indigo-600 font-bold">Your cart is empty</p>
            <p className="text-ink-500 text-sm mt-2">Add something you love before checking out.</p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1fr)_240px] items-start">
            <div className="rounded-2xl border border-ink-100 bg-white p-6 md:p-8 min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  {step === "method" && (
                    <>
                      <PaymentMethodSelect value={method} onChange={setMethod} />
                      <div className="mt-8">
                        <Button size="lg" block onClick={goToPayment} disabled={!method}>
                          Continue
                        </Button>
                      </div>
                    </>
                  )}
                  {step === "card" && (
                    <AddCardForm onBack={() => setStep("method")} onPay={() => setStep("confirm")} />
                  )}
                  {step === "confirm" && (
                    <ConfirmStep
                      method={method}
                      total={subtotal}
                      onBack={() => setStep(method === "card" ? "card" : "method")}
                      onConfirm={submitPayment}
                    />
                  )}
                  {step === "success" && <PaymentSuccess orderId={orderId} />}
                </motion.div>
              </AnimatePresence>
            </div>

            {step !== "success" && (
              <aside className="rounded-2xl border border-ink-100 bg-white p-5 sticky top-24 text-sm">
                <h3 className="font-bold text-indigo-600 mb-3">Order summary</h3>
                <ul className="space-y-2 text-ink-500 max-h-40 overflow-y-auto pr-2">
                  {lines.map((l) => (
                    <li key={l.slug} className="flex justify-between gap-2">
                      <span className="truncate">
                        {l.name} × {l.quantity}
                      </span>
                      <span className="font-semibold text-indigo-600 shrink-0">
                        {formatPrice(l.price * l.quantity)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-ink-100 flex items-center justify-between">
                  <span className="text-indigo-600 font-bold">Total</span>
                  <span className="text-indigo-600 font-bold text-lg">{formatPrice(subtotal)}</span>
                </div>
              </aside>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}

function ConfirmStep({
  method,
  total,
  onBack,
  onConfirm,
}: {
  method: PaymentMethod | null;
  total: number;
  onBack: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="text-center py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-600">Confirm Payment</h2>
      <p className="mt-2 text-ink-500 text-sm">
        You are about to pay <span className="font-bold text-indigo-600">{formatPrice(total)}</span>
        {method ? ` via ${method === "card" ? "Debit Card" : method === "bank" ? "Bank Transfer" : "USSD"}` : ""}.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Button variant="outlined" size="md" onClick={onBack}>Back</Button>
        <Button size="md" onClick={onConfirm}>Confirm & Pay</Button>
      </div>
    </div>
  );
}
