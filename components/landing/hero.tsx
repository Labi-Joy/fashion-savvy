"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const bullets = [
  "Attract customers",
  "Drive sales",
  "Track of customer details",
  "Stay organized",
];

export function Hero() {
  return (
    <section className="bg-primary-50 overflow-hidden">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center py-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <span className="block h-1 w-14 rounded-full bg-primary-400 mb-5" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-600 leading-[1.05]">
            Discover Your Style
            <br />
            with FashionSavvy
          </h1>
          <ul className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 max-w-md">
            {bullets.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-2 text-indigo-600 font-medium text-sm"
              >
                <span className="h-2 w-2 rounded-full bg-accent-400" />
                {b}
              </motion.li>
            ))}
          </ul>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 bg-white p-2 rounded-2xl shadow-[var(--shadow-elev-2)] max-w-lg"
          >
            <input
              type="email"
              placeholder="Insert your email"
              className="flex-1 min-w-0 px-4 h-12 rounded-xl bg-transparent text-ink-900 placeholder:text-ink-400 focus:outline-none"
              aria-label="Email address"
            />
            <Button type="submit" size="md" className="shrink-0">
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative aspect-[4/3.6] lg:aspect-[5/4.4]"
        >
          <div className="absolute inset-6 lg:inset-8 rounded-[2rem] bg-primary-400" />
          <div className="absolute top-4 lg:top-6 left-4 lg:left-6 h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-accent-400" />
          <div className="absolute inset-0 flex items-end justify-center pt-2">
            <Image
              src="/landing/heroimg.png"
              alt="Two fashion models"
              width={880}
              height={880}
              priority
              className="relative z-10 h-[92%] w-auto object-contain drop-shadow-2xl"
            />
          </div>
          <DotPattern className="absolute -bottom-1 left-2 lg:left-6 text-indigo-600/40" />
        </motion.div>
      </Container>
    </section>
  );
}

function DotPattern({ className }: { className?: string }) {
  return (
    <svg width="72" height="128" viewBox="0 0 72 128" fill="currentColor" aria-hidden className={className}>
      {Array.from({ length: 8 }).flatMap((_, row) =>
        Array.from({ length: 5 }).map((__, col) => (
          <circle key={`${row}-${col}`} cx={4 + col * 14} cy={4 + row * 14} r={2.4} />
        )),
      )}
    </svg>
  );
}
