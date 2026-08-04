import Image from "next/image";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { PanelHeading } from "@/components/dashboard/panel";
import { orders, transactions, currentUser } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Icon } from "@iconify/react";

export const metadata = { title: "Seller overview — FashionSavvy" };

export default function SellerOverviewPage() {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((s, t) => s + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((s, t) => s + t.amount, 0);

  const stats = [
    { label: "Total sales", value: formatPrice(income), icon: "solar:wallet-money-bold", tone: "primary" },
    { label: "Expenses", value: formatPrice(expense), icon: "solar:card-2-bold", tone: "accent" },
    { label: "Orders", value: orders.length.toString(), icon: "solar:bag-4-bold", tone: "indigo" },
    { label: "Repeat buyers", value: "72%", icon: "solar:users-group-two-rounded-bold", tone: "primary" },
  ];

  const toneMap: Record<string, string> = {
    primary: "bg-primary-400 text-indigo-900",
    accent: "bg-accent-400 text-indigo-900",
    indigo: "bg-indigo-600 text-white",
  };

  return (
    <DashboardShell role="seller">
      <PanelHeading title={`Welcome, ${currentUser.seller.name.split(" ")[0]}!`} />
      <p className="mt-2 text-ink-500">Here is what is happening with your store today.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className={`rounded-2xl p-5 ${toneMap[s.tone]}`}>
            <div className="flex items-start justify-between">
              <Icon icon={s.icon} className="h-7 w-7 opacity-90" />
            </div>
            <p className="mt-6 text-2xl md:text-3xl font-bold">{s.value}</p>
            <p className="mt-1 text-sm opacity-80">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <section className="bg-white rounded-2xl shadow-[var(--shadow-elev-1)] p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-indigo-600 font-bold text-lg">Recent orders</h2>
          </div>
          <ul className="divide-y divide-ink-100">
            {orders.map((o) => (
              <li key={o.id} className="py-3 grid grid-cols-[56px_minmax(0,1fr)_auto] items-center gap-3">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-primary-50">
                  <Image src={o.itemImage} alt={o.itemName} fill sizes="56px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="text-indigo-600 font-semibold truncate">{o.itemName}</p>
                  <p className="text-ink-500 text-xs">{o.id} · {o.date}</p>
                </div>
                <p className="text-indigo-600 font-bold">{formatPrice(o.total)}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-[var(--shadow-elev-1)] p-5">
          <h2 className="text-indigo-600 font-bold text-lg mb-4">Recent transactions</h2>
          <ul className="space-y-3 text-sm">
            {transactions.slice(0, 5).map((t) => (
              <li key={t.id} className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="text-indigo-600 font-semibold truncate">{t.description}</p>
                  <p className="text-ink-400 text-xs">{t.date}</p>
                </div>
                <p className={t.type === "income" ? "text-primary-500 font-bold" : "text-accent-500 font-bold"}>
                  {t.type === "income" ? "+" : "-"}{formatPrice(t.amount)}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </DashboardShell>
  );
}
