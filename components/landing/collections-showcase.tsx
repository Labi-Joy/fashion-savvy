"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/common/section-heading";
import { collections } from "@/lib/data";
import { useWishlist } from "@/lib/store";
import { useEffect, useState } from "react";

export function CollectionsShowcase() {
  const toggle = useWishlist((s) => s.toggle);
  const slugs = useWishlist((s) => s.slugs);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Explore Collections"
          description="We have many styles that you can explore"
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collections.map((c, i) => {
            const liked = mounted && slugs.includes(c.slug);
            return (
              <motion.article
                key={c.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="group relative"
              >
                <Link
                  href={c.href}
                  className="block rounded-[var(--radius-card)] overflow-hidden bg-white shadow-[var(--shadow-elev-1)] hover:shadow-[var(--shadow-elev-3)] transition-shadow"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <button
                  onClick={() => toggle(c.slug)}
                  aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
                  className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full bg-white shadow-[var(--shadow-elev-2)] transition-transform hover:scale-110 active:scale-95"
                >
                  <Heart
                    className={`h-5 w-5 ${liked ? "fill-accent-400 text-accent-400" : "fill-accent-400 text-accent-400"}`}
                  />
                </button>
                <h3 className="mt-4 text-indigo-600 font-bold text-lg text-center">
                  {c.name}
                </h3>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
