"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, User, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { primaryNav } from "@/lib/data";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-indigo-900/40 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-[var(--shadow-elev-4)] p-6 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-heading font-bold text-indigo-600 text-lg">Menu</span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="h-10 w-10 grid place-items-center rounded-full text-indigo-600 hover:bg-primary-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="py-3 px-4 rounded-xl text-indigo-600 font-semibold hover:bg-primary-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-6 border-t border-ink-100 flex flex-col gap-2">
              <Link
                href="/dashboard/buyer"
                onClick={onClose}
                className="flex items-center gap-3 py-3 px-4 rounded-xl text-indigo-600 font-semibold hover:bg-primary-50"
              >
                <User className="h-5 w-5" /> Account
              </Link>
              <Link
                href="/cart"
                onClick={onClose}
                className="flex items-center gap-3 py-3 px-4 rounded-xl bg-primary-400 text-indigo-900 font-semibold hover:bg-primary-500 hover:text-white"
              >
                <ShoppingBag className="h-5 w-5" /> Cart
              </Link>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
