"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/common/section-heading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-primary-50">
      <Container>
        <SectionHeading
          eyebrow="Loved by our community"
          title="What people say about FashionSavvy"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-white rounded-[var(--radius-card)] p-6 md:p-8 shadow-[var(--shadow-elev-2)] relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-400/50" />
              <p className="text-ink-900 leading-relaxed text-sm md:text-base">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-primary-100">
                  <Image src={t.avatar} alt={t.author} fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <p className="text-indigo-600 font-bold text-sm">{t.author}</p>
                  <p className="text-ink-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
