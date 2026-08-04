import Image from "next/image";
import Link from "next/link";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { PanelHeading, BandLabel } from "@/components/dashboard/panel";
import { orders, sampleInvoice } from "@/lib/data";
import { Icon } from "@iconify/react";

export const metadata = { title: "Invoice Generator — FashionSavvy" };

export default function InvoiceGeneratorPage() {
  const featured = orders[0];
  return (
    <DashboardShell role="seller">
      <PanelHeading title="Invoice Generator" />

      <div className="mt-8 space-y-6">
        <BandLabel>Customize Invoice</BandLabel>
        <article className="grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-6 items-center bg-white rounded-2xl p-5 shadow-[var(--shadow-elev-1)]">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-primary-50">
            <Image src={featured.itemImage} alt={featured.itemName} fill sizes="220px" className="object-cover" />
          </div>
          <div>
            <h3 className="text-indigo-600 font-bold text-2xl">{featured.itemName}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={`/dashboard/invoices/${sampleInvoice.id}`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-400 text-indigo-600 font-semibold text-sm px-4 h-11 hover:bg-primary-50"
              >
                Customize Invoice
                <Icon icon="solar:pen-square-bold" className="h-4 w-4" />
              </Link>
              <button className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-400 text-indigo-600 font-semibold text-sm px-4 h-11 hover:bg-primary-50">
                Make Payment Now
                <Icon icon="solar:dollar-bold" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </article>

        <BandLabel>Select Order for Invoice</BandLabel>
        <ul className="space-y-4">
          {orders.map((o) => (
            <li
              key={o.id}
              className="grid grid-cols-1 md:grid-cols-[180px_minmax(0,1fr)_auto] items-center gap-4 bg-white rounded-2xl p-4 shadow-[var(--shadow-elev-1)]"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-primary-50">
                <Image src={o.itemImage} alt={o.itemName} fill sizes="180px" className="object-cover" />
              </div>
              <div>
                <h4 className="text-indigo-600 font-bold text-lg">{o.itemName}</h4>
                <dl className="mt-3 grid grid-cols-[80px_1fr] gap-y-2 text-sm">
                  <dt className="text-indigo-600 font-semibold">Size</dt>
                  <dd className="text-ink-500">M</dd>
                  <dt className="text-indigo-600 font-semibold">Quantity</dt>
                  <dd className="text-indigo-600 font-bold">{o.itemCount}</dd>
                </dl>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-lg border border-ink-200 px-3 py-1.5 text-xs text-indigo-600 font-semibold">
                    <Icon icon="solar:tag-bold" className="h-3.5 w-3.5" /> {o.id}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg border border-ink-200 px-3 py-1.5 text-xs text-indigo-600 font-semibold">
                    <Icon icon="solar:delivery-bold" className="h-3.5 w-3.5" /> Logistics
                  </span>
                </div>
              </div>
              <Link
                href={`/dashboard/invoices/${sampleInvoice.id}`}
                className="justify-self-start md:justify-self-end inline-flex items-center gap-2 rounded-xl border-2 border-primary-400 text-indigo-600 font-semibold text-sm px-4 h-11 hover:bg-primary-50"
              >
                Generate Invoice
                <Icon icon="solar:pen-square-bold" className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </DashboardShell>
  );
}
