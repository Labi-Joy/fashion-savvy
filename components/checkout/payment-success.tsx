"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, ButtonLink } from "@/components/ui/button";

export function PaymentSuccess({ orderId }: { orderId: string }) {
  return (
    <div className="text-center py-8">
      <motion.svg
        viewBox="0 0 200 160"
        className="h-32 w-auto mx-auto text-indigo-600"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        aria-hidden
      >
        <motion.path
          d="M20 100 Q 50 20, 110 60 T 180 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <motion.polygon
          points="110,60 160,30 130,80 145,60"
          fill="currentColor"
          initial={{ opacity: 0, x: -8, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.6 }}
        />
        <motion.circle cx="60" cy="30" r="2.5" fill="currentColor"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} />
        <motion.circle cx="170" cy="120" r="2.5" fill="currentColor"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
        <motion.text x="130" y="30" fontSize="12" fill="currentColor"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
          ✦
        </motion.text>
      </motion.svg>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="mt-6 text-2xl md:text-3xl font-bold text-indigo-600">
          Payment Successful
        </h2>
        <p className="mt-2 text-ink-500 text-sm">
          Your order <span className="font-semibold text-indigo-600">{orderId}</span> has been
          confirmed. A copy of your invoice is on its way to your inbox.
        </p>
      </motion.div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <ButtonLink href="/dashboard/buyer/orders" size="md">View my orders</ButtonLink>
        <Link href="/shop" className="text-primary-500 font-semibold text-sm hover:underline">
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
