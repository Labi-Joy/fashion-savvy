"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ShoppingCart, User } from "lucide-react";
import { primaryNav } from "@/lib/data";
import { cartCount, useCart } from "@/lib/store";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";

export function Nav({ variant = "solid" }: { variant?: "solid" | "transparent" }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lines = useCart((s) => s.lines);
  const count = cartCount(lines);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-all",
          variant === "transparent" && !scrolled
            ? "bg-transparent"
            : "bg-primary-50/90 backdrop-blur-md",
          scrolled && "shadow-[var(--shadow-elev-1)]",
        )}
      >
        <div className="container-page flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/brand/logo.png"
              alt="FashionSavvy"
              width={56}
              height={56}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {primaryNav.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold transition-colors relative py-2",
                    active ? "text-primary-500" : "text-indigo-600 hover:text-primary-500",
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-primary-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <Link
              href="/dashboard/buyer"
              className="hidden sm:flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:text-primary-500"
            >
              <User className="h-5 w-5" />
              Account
            </Link>
            <Link
              href="/cart"
              className="relative flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:text-primary-500"
              aria-label={`Cart, ${count} items`}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Cart</span>
              {mounted && count > 0 && (
                <span className="absolute -top-2 -right-3 bg-accent-400 text-indigo-900 text-[10px] font-bold h-5 min-w-5 px-1 rounded-full grid place-items-center">
                  {count}
                </span>
              )}
            </Link>
            <button
              className="lg:hidden h-10 w-10 grid place-items-center rounded-full text-indigo-600 hover:bg-white/60"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
