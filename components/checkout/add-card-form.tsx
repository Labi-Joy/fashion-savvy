"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AddCardForm({
  onBack,
  onPay,
}: {
  onBack: () => void;
  onPay: () => void;
}) {
  const [name, setName] = useState("Jackson Tiago");
  const [number, setNumber] = useState("5489 2222 7456 8645");
  const [expiry, setExpiry] = useState("02/26");
  const [cvv, setCvv] = useState("123");
  const [save, setSave] = useState(true);

  const last4 = number.replace(/\s/g, "").slice(-4);

  return (
    <div>
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm mb-4 hover:text-primary-500"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-600">Add Your Card</h2>
      <p className="mt-2 text-ink-500 text-sm">
        Connect your debit card to enable you easily make payments.
      </p>

      <div className="mt-6 rounded-2xl bg-indigo-500/20 p-6 relative overflow-hidden">
        <div className="flex items-center justify-between text-indigo-900">
          <span className="font-bold">Debit Card</span>
          <span className="text-indigo-900/70">›)))</span>
        </div>
        <div className="mt-14 flex items-center justify-between text-sm text-indigo-900">
          <span>{name}</span>
          <span>{expiry}</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
            ))}
            <span className="ml-2 font-bold text-indigo-600">{last4}</span>
          </div>
          <span className="inline-flex items-center gap-1">
            <span className="h-6 w-6 rounded-full bg-red-500/80" />
            <span className="h-6 w-6 -ml-3 rounded-full bg-amber-400/80" />
          </span>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onPay();
        }}
        className="mt-6 space-y-4"
      >
        <Field label="Name on Card" value={name} onChange={setName} />
        <Field label="Card Number" value={number} onChange={setNumber} />
        <div className="grid grid-cols-2 gap-4">
          <Field label="Expiry Date" value={expiry} onChange={setExpiry} />
          <Field label="CVV" value={cvv} onChange={setCvv} />
        </div>
        <label className="flex items-center gap-2 text-sm text-ink-500 cursor-pointer">
          <input
            type="checkbox"
            checked={save}
            onChange={(e) => setSave(e.target.checked)}
            className="h-4 w-4 accent-primary-400"
          />
          Save your card&apos;s information. It is safe.
        </label>
        <Button type="submit" size="lg" block className="mt-4">
          Pay Now
        </Button>
      </form>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="block text-sm text-ink-500 mb-1.5">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 rounded-xl border-2 border-primary-400 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400/30"
      />
    </label>
  );
}
