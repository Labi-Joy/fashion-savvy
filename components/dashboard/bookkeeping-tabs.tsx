"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { customerRecords, customerPreferences } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "details" | "preferences";

export function BookkeepingTabs() {
  const [tab, setTab] = useState<Tab>("details");

  return (
    <>
      <div className="mt-6 inline-flex gap-3 rounded-xl bg-primary-50 p-1">
        {(["details", "preferences"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "inline-flex items-center gap-2 px-4 h-10 rounded-lg font-semibold text-sm transition-all",
              tab === t
                ? t === "details"
                  ? "bg-indigo-600 text-white shadow-[var(--shadow-elev-1)]"
                  : "bg-primary-400 text-indigo-900 shadow-[var(--shadow-elev-1)]"
                : "text-indigo-600 hover:bg-white",
            )}
          >
            {t === "details" ? "Customer Details" : "Preferences"}
            <Pencil className="h-3.5 w-3.5" />
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {tab === "details" ? (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-6 overflow-x-auto rounded-2xl border border-ink-100 bg-white"
          >
            <table className="min-w-full text-sm">
              <thead className="bg-primary-50 text-indigo-600">
                <tr>
                  {["Customer Name", "Email", "Phone Number", "Location", "Measurements", "Orders"].map((h) => (
                    <th key={h} className="text-left font-bold px-5 py-3.5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {customerRecords.map((r) => (
                  <tr key={r.email} className="hover:bg-primary-50/40">
                    <td className="px-5 py-4 font-semibold text-indigo-600 whitespace-nowrap">{r.name}</td>
                    <td className="px-5 py-4 text-ink-500 whitespace-nowrap">{r.email}</td>
                    <td className="px-5 py-4 text-ink-500 whitespace-nowrap">{r.phone}</td>
                    <td className="px-5 py-4 text-ink-500 whitespace-nowrap">{r.location}</td>
                    <td className="px-5 py-4 text-indigo-600 font-semibold uppercase">{r.measurements}</td>
                    <td className="px-5 py-4 text-indigo-600 font-semibold whitespace-nowrap">{r.orderId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        ) : (
          <motion.div
            key="preferences"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-6 overflow-x-auto rounded-2xl border border-ink-100 bg-white"
          >
            <table className="min-w-full text-sm">
              <thead className="bg-primary-50 text-indigo-600">
                <tr>
                  {["Customer Name", "Fabric Type", "Color Preference", "Style choices"].map((h) => (
                    <th key={h} className="text-left font-bold px-5 py-3.5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {customerPreferences.map((r) => (
                  <tr key={r.name} className="hover:bg-primary-50/40">
                    <td className="px-5 py-4 font-semibold text-indigo-600 whitespace-nowrap">{r.name}</td>
                    <td className="px-5 py-4 text-ink-500">{r.fabric}</td>
                    <td className="px-5 py-4 text-ink-500">{r.color}</td>
                    <td className="px-5 py-4 text-ink-500">{r.style}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
