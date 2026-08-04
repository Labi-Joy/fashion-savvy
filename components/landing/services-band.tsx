"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { services } from "@/lib/data";

export function ServicesBand() {
  return (
    <section id="services" className="relative py-16 md:py-24">
      <Container>
        <div className="rounded-[2rem] bg-primary-400 relative overflow-hidden px-6 md:px-10 py-10 md:py-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2 className="text-white text-3xl md:text-5xl font-bold">Our Services</h2>
            <ButtonLink href="/dashboard/buyer" variant="indigo" size="md">
              Signup Now
            </ButtonLink>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-white rounded-2xl p-4 shadow-[var(--shadow-elev-2)] hover:-translate-y-1 hover:shadow-[var(--shadow-elev-3)] transition-all"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-primary-50">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(min-width: 1024px) 180px, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 text-indigo-600 font-bold text-sm leading-tight">{s.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
