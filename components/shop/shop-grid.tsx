"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/product-card";
import { ShopFilters } from "./shop-filters";
import { products } from "@/lib/data";

export function ShopGrid() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [visible, setVisible] = useState(8);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selected && p.category !== selected) return false;
      if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [query, selected]);

  const items = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <section className="py-12 md:py-16">
      <Container className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
        <ShopFilters
          query={query}
          onQueryChange={setQuery}
          selected={selected}
          onSelect={setSelected}
        />
        <div>
          {items.length === 0 ? (
            <div className="text-center py-24 border-2 border-dashed border-ink-100 rounded-2xl">
              <p className="text-indigo-600 font-bold text-lg">No products match your filters</p>
              <p className="text-ink-500 text-sm mt-2">Try adjusting your search or category.</p>
            </div>
          ) : (
            <>
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {items.map((p) => (
                  <motion.div
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={p} variant="overlay" />
                  </motion.div>
                ))}
              </motion.div>
              {hasMore && (
                <div className="mt-10 flex justify-center">
                  <Button onClick={() => setVisible((v) => v + 4)} size="md">
                    See More
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
