import { notFound } from "next/navigation";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { PanelHeading } from "@/components/dashboard/panel";
import { Button } from "@/components/ui/button";
import { sampleInvoice } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Pencil, Trash2 } from "lucide-react";

export function generateStaticParams() {
  return [{ id: sampleInvoice.id }];
}

export default async function InvoiceCustomizePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (id !== sampleInvoice.id) notFound();
  const invoice = sampleInvoice;
  const total = invoice.lines.reduce((s, l) => s + l.qty * l.price, 0);

  return (
    <DashboardShell role="seller">
      <PanelHeading title="Customize Invoice" />

      <section className="mt-8 rounded-2xl bg-primary-400 p-6 md:p-10 grid gap-6 md:grid-cols-3 items-start">
        <div>
          <p className="text-indigo-900 font-bold text-lg">INVOICE NO:</p>
          <p className="text-indigo-900 font-bold text-2xl md:text-3xl mt-1">{invoice.number}</p>
          <div className="mt-6 flex items-center gap-3">
            <button
              aria-label="Delete invoice"
              className="h-11 w-11 grid place-items-center rounded-xl border-2 border-indigo-900 text-indigo-900 hover:bg-white/20"
            >
              <Trash2 className="h-4 w-4" />
            </button>
            <button className="h-11 px-5 rounded-xl bg-white text-indigo-600 font-semibold text-sm shadow-[var(--shadow-elev-2)]">
              Send Invoice
            </button>
          </div>
        </div>
        <InvoiceBlock title="FROM" party={invoice.from} />
        <InvoiceBlock title="BILL TO" party={invoice.to} />
      </section>

      <section className="mt-6 rounded-2xl bg-primary-50 p-5 md:p-7 grid gap-4 md:grid-cols-[1fr_1fr_48px] items-center">
        <dl className="grid grid-cols-[70px_1fr] gap-y-2 text-sm">
          <dt className="text-indigo-600 font-bold">Date</dt>
          <dd className="text-ink-900">{invoice.date}</dd>
          <dt className="text-indigo-600 font-bold">Order</dt>
          <dd className="text-ink-900">#{invoice.number.split("-").slice(0, 3).join("-")}</dd>
        </dl>
        <dl className="grid grid-cols-[70px_1fr] gap-y-2 text-sm">
          <dt className="text-indigo-600 font-bold">Start</dt>
          <dd className="text-ink-900">{invoice.start}</dd>
          <dt className="text-indigo-600 font-bold">Stop</dt>
          <dd className="text-ink-900">{invoice.stop}</dd>
        </dl>
        <button
          aria-label="Edit dates"
          className="h-11 w-11 grid place-items-center rounded-xl bg-primary-400 text-indigo-900 justify-self-end"
        >
          <Pencil className="h-4 w-4" />
        </button>
      </section>

      <section className="mt-6 rounded-2xl bg-primary-50 p-5 md:p-7">
        <table className="hidden md:table min-w-full text-sm">
          <thead>
            <tr className="text-indigo-600 font-bold">
              <th className="text-left py-2 pr-4">Qty</th>
              <th className="text-left py-2 pr-4">Name Product</th>
              <th className="text-left py-2 pr-4">Duration</th>
              <th className="text-left py-2 pr-4">Price</th>
              <th className="text-left py-2 pr-4">Total</th>
              <th className="w-12" />
            </tr>
          </thead>
          <tbody className="text-ink-900">
            {invoice.lines.map((l) => (
              <tr key={l.name}>
                <td className="py-3 pr-4">{l.qty}</td>
                <td className="py-3 pr-4 font-semibold">{l.name}</td>
                <td className="py-3 pr-4">{l.duration}</td>
                <td className="py-3 pr-4">{formatPrice(l.price)}</td>
                <td className="py-3 pr-4">{formatPrice(l.qty * l.price)}</td>
                <td className="py-3">
                  <button
                    aria-label="Edit line"
                    className="h-9 w-9 grid place-items-center rounded-xl bg-primary-400 text-indigo-900"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ul className="md:hidden flex flex-col gap-3">
          {invoice.lines.map((l) => (
            <li
              key={l.name}
              className="rounded-xl bg-white p-4 shadow-[var(--shadow-elev-1)] flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-ink-900 font-semibold text-base">{l.name}</p>
                <button
                  aria-label="Edit line"
                  className="shrink-0 h-9 w-9 grid place-items-center rounded-xl bg-primary-400 text-indigo-900"
                >
                  <Pencil className="h-4 w-4" />
                </button>
              </div>
              <dl className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                <dt className="text-indigo-600 font-bold">Qty</dt>
                <dd className="text-ink-900 text-right">{l.qty}</dd>
                <dt className="text-indigo-600 font-bold">Duration</dt>
                <dd className="text-ink-900 text-right">{l.duration}</dd>
                <dt className="text-indigo-600 font-bold">Price</dt>
                <dd className="text-ink-900 text-right">{formatPrice(l.price)}</dd>
                <dt className="text-indigo-600 font-bold">Total</dt>
                <dd className="text-ink-900 text-right font-semibold">
                  {formatPrice(l.qty * l.price)}
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-2xl bg-primary-50 p-6 md:p-8 flex items-center justify-between md:justify-end gap-4 md:gap-6">
        <p className="text-indigo-600 font-bold text-xl md:text-2xl">Grand Total</p>
        <p className="text-indigo-600 font-bold text-2xl md:text-3xl">{formatPrice(total)}</p>
      </section>

      <div className="mt-8 flex flex-wrap items-center justify-end gap-3">
        <Button variant="link" className="text-accent-400">Print Invoice</Button>
        <Button variant="link" className="text-accent-400">Download Invoice</Button>
      </div>

      <p className="mt-10 text-center text-sm text-ink-500">
        Any question? Feel free to contact us at email{" "}
        <a href="mailto:support@fashionsavvy.co" className="text-accent-400 font-semibold hover:underline">
          support@fashionsavvy.co
        </a>
      </p>
    </DashboardShell>
  );
}

function InvoiceBlock({
  title,
  party,
}: {
  title: string;
  party: { name: string; address: string; email: string; phone: string };
}) {
  return (
    <div className="relative rounded-2xl border-2 border-indigo-900 p-5 pr-14">
      <button
        aria-label="Edit"
        className="absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-lg bg-white text-indigo-600"
      >
        <Pencil className="h-4 w-4" />
      </button>
      <p className="text-indigo-900 font-bold text-xs tracking-widest uppercase">{title}</p>
      <p className="mt-2 text-indigo-900 font-bold">{party.name}</p>
      <p className="text-indigo-900/80 text-sm">{party.address}</p>
      <p className="text-indigo-900/80 text-sm">{party.email}</p>
      <p className="text-indigo-900/80 text-sm">{party.phone}</p>
    </div>
  );
}
