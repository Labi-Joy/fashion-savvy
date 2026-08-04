"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/landing/cta-banner";
import { brand, faqs } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function SupportPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_360px]">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-600">Contact us</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="mt-8 grid gap-5 max-w-xl"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" placeholder="Your name" />
                <Field label="Mobile Number" placeholder="+234" />
              </div>
              <Field label="Email" placeholder="Email address" type="email" />
              <label>
                <span className="block text-sm text-ink-500 mb-1.5">Notes</span>
                <textarea
                  rows={5}
                  placeholder="Enter a note"
                  className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/30"
                />
              </label>
              <div>
                <Button type="submit" size="md">Send a request</Button>
              </div>
            </form>
          </div>

          <aside className="lg:pl-8 lg:border-l lg:border-ink-100 space-y-6 text-sm">
            <ContactRow label="Phone Call" value={brand.phone} />
            <ContactRow label="WhatsApp" value={brand.phone} />
            <ContactRow label="Marketing" value="marketing@fashionsavvy.co" tone="accent" />
            <ContactRow label="Support" value={brand.email} tone="accent" />
          </aside>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-primary-50">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600">
              Frequently Asked
              <br />
              Questions
            </h2>
            <div className="mt-8 space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-ink-200 bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between text-left px-5 py-4 gap-4"
                    aria-expanded={open === i}
                  >
                    <span className="text-indigo-600 font-semibold text-sm md:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-indigo-600 shrink-0 transition-transform ${
                        open === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-ink-500 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-xl bg-white border border-ink-100 p-5 self-start lg:sticky lg:top-24">
            <h3 className="text-indigo-600 font-bold mb-4">Table of Content</h3>
            <ul className="space-y-3 text-sm">
              {["General", "Trust and safety", "Services", "Billing", "Office and Cleaning"].map(
                (item, i) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={
                        i === 0
                          ? "text-indigo-600 font-semibold"
                          : "text-ink-500 hover:text-indigo-600"
                      }
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </aside>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm text-ink-500 mb-1.5">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-12 rounded-xl border border-ink-200 bg-white px-4 text-sm placeholder:text-ink-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/30"
      />
    </label>
  );
}

function ContactRow({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "accent";
}) {
  return (
    <div className="pb-5 border-b border-ink-100 last:border-0">
      <p className="text-indigo-600 font-bold">{label}</p>
      <p className={`mt-1 ${tone === "accent" ? "text-accent-400" : "text-ink-500"}`}>{value}</p>
    </div>
  );
}
