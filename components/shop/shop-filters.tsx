"use client";

import { Search, ChevronRight } from "lucide-react";
import { useState } from "react";
import { categories } from "@/lib/data";
import { cn } from "@/lib/utils";

const groupLabels: Record<string, string> = {
  mens: "Men's Wear",
  womens: "Women's Wear",
};

export function ShopFilters({
  query,
  onQueryChange,
  selected,
  onSelect,
}: {
  query: string;
  onQueryChange: (v: string) => void;
  selected: string | null;
  onSelect: (slug: string | null) => void;
}) {
  const [openGroup, setOpenGroup] = useState<string | null>("mens");

  const groups = Array.from(new Set(categories.map((c) => c.group)));

  return (
    <aside className="lg:sticky lg:top-24 space-y-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search products"
          className="w-full h-11 pl-11 pr-4 rounded-full border border-ink-200 bg-white text-sm placeholder:text-ink-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/30"
        />
      </div>

      <div>
        <h3 className="text-indigo-600 font-bold text-lg mb-3">Catalogue Categories</h3>
        <div className="space-y-2">
          {groups.map((group) => {
            const isOpen = openGroup === group;
            const items = categories.filter((c) => c.group === group);
            return (
              <div key={group} className="rounded-xl bg-white overflow-hidden border border-ink-100">
                <button
                  onClick={() => setOpenGroup(isOpen ? null : group)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 h-11 font-semibold text-sm transition-colors",
                    isOpen
                      ? "bg-primary-400 text-indigo-900"
                      : "text-indigo-600 hover:bg-primary-50",
                  )}
                >
                  {groupLabels[group]}
                  <ChevronRight className={cn("h-4 w-4 transition-transform", isOpen && "rotate-90")} />
                </button>
                {isOpen && (
                  <ul className="p-2">
                    {items.map((c) => {
                      const active = selected === c.slug;
                      return (
                        <li key={c.slug}>
                          <button
                            onClick={() => onSelect(active ? null : c.slug)}
                            className={cn(
                              "w-full flex items-center justify-between px-3 h-10 rounded-lg text-sm font-medium transition-colors",
                              active
                                ? "bg-primary-50 text-primary-500"
                                : "text-ink-500 hover:bg-ink-50 hover:text-indigo-600",
                            )}
                          >
                            {c.label}
                            <ChevronRight className="h-3.5 w-3.5" />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
