"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { buyerNav, sellerNav, currentUser } from "@/lib/data";
import { cn } from "@/lib/utils";

type Role = "buyer" | "seller";

export function DashboardShell({
  role,
  children,
}: {
  role: Role;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const nav = role === "buyer" ? buyerNav : sellerNav;
  const user = currentUser[role];
  const label = role === "buyer" ? "BUYER" : "SELLER";
  const icon = role === "buyer" ? "solar:bag-4-bold" : "solar:shop-bold";

  return (
    <div className="relative min-h-[calc(100vh-5rem)]">
      <div className="container-page py-8 lg:py-10 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* Mobile toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-primary-400 text-indigo-900 px-4 py-2.5 font-semibold text-sm shadow-[var(--shadow-elev-2)]"
          >
            <Menu className="h-5 w-5" />
            {label} menu
          </button>
        </div>

        {/* Desktop sidebar */}
        <aside className="hidden lg:block">
          <SidebarInner role={role} label={label} icon={icon} user={user} nav={nav} />
        </aside>

        {/* Content */}
        <main className="min-w-0">{children}</main>
      </div>

      {/* Mobile drawer */}
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
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="absolute left-0 top-0 h-full w-[86%] max-w-xs bg-primary-400 shadow-[var(--shadow-elev-4)] flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-full text-indigo-900 hover:bg-white/30"
              >
                <X className="h-4 w-4" />
              </button>
              <SidebarInner role={role} label={label} icon={icon} user={user} nav={nav} onNavigate={() => setOpen(false)} />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SidebarInner({
  role,
  label,
  icon,
  user,
  nav,
  onNavigate,
}: {
  role: Role;
  label: string;
  icon: string;
  user: { name: string; email: string; avatar: string };
  nav: { label: string; href: string; icon: string }[];
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  return (
    <div className="h-full min-h-[560px] rounded-[var(--radius-card)] bg-primary-400 p-6 flex flex-col gap-6 lg:sticky lg:top-24">
      <div className="flex items-center gap-2 text-indigo-900 font-bold text-xl">
        <Icon icon={icon} className="h-6 w-6" />
        {label}
      </div>

      <nav className="flex flex-col gap-1.5">
        {nav.map((item) => {
          const active =
            item.href === `/dashboard/${role}`
              ? pathname === item.href
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-colors",
                active
                  ? "bg-indigo-600 text-white shadow-[var(--shadow-elev-2)]"
                  : "text-indigo-900 hover:bg-white/30",
              )}
            >
              <Icon icon={item.icon} className="h-5 w-5 shrink-0" />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 flex items-center gap-3">
        <div className="relative h-11 w-11 rounded-full overflow-hidden bg-indigo-600/30">
          <Image src={user.avatar} alt={user.name} fill sizes="44px" className="object-cover" />
        </div>
        <div className="min-w-0">
          <p className="text-indigo-900 font-bold text-sm truncate">{user.name}</p>
          <p className="text-indigo-900/70 text-xs truncate">{user.email}</p>
        </div>
      </div>
    </div>
  );
}
