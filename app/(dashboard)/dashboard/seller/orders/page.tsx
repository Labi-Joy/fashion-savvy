import Image from "next/image";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { PanelHeading } from "@/components/dashboard/panel";
import { orders } from "@/lib/data";
import { formatPrice, cn } from "@/lib/utils";

export const metadata = { title: "Ordered Items — FashionSavvy" };

const statusStyles: Record<string, string> = {
  delivered: "bg-primary-100 text-primary-700",
  shipped: "bg-accent-300/30 text-accent-500",
  pending: "bg-ink-100 text-ink-500",
  cancelled: "bg-red-100 text-red-600",
};

export default function SellerOrdersPage() {
  return (
    <DashboardShell role="seller">
      <PanelHeading title="Ordered Items" />
      <p className="mt-2 text-ink-500">All orders currently placed against your store.</p>
      <div className="mt-8 grid gap-4">
        {orders.map((o) => (
          <article
            key={o.id}
            className="grid grid-cols-[80px_minmax(0,1fr)] md:grid-cols-[100px_minmax(0,1.5fr)_140px_140px_120px] items-center gap-4 rounded-2xl bg-white p-4 md:p-5 shadow-[var(--shadow-elev-1)]"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden bg-primary-50">
              <Image src={o.itemImage} alt={o.itemName} fill sizes="100px" className="object-cover" />
            </div>
            <div className="min-w-0">
              <p className="text-indigo-600 font-bold truncate">{o.itemName}</p>
              <p className="text-ink-500 text-xs mt-0.5">{o.id} · {o.itemCount} item(s)</p>
              <p className="text-ink-400 text-xs mt-1 md:hidden">{o.date} · {formatPrice(o.total)}</p>
            </div>
            <p className="hidden md:block text-ink-500 text-sm">{o.date}</p>
            <p className="hidden md:block text-indigo-600 font-bold">{formatPrice(o.total)}</p>
            <span className={cn("hidden md:inline-flex justify-center items-center h-8 px-3 rounded-full text-xs font-semibold capitalize", statusStyles[o.status])}>
              {o.status}
            </span>
          </article>
        ))}
      </div>
    </DashboardShell>
  );
}
