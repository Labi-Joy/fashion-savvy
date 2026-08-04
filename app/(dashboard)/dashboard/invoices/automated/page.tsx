import Image from "next/image";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { PanelHeading } from "@/components/dashboard/panel";
import { sampleInvoice, currentUser } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export const metadata = { title: "Automated Invoice — FashionSavvy" };

export default function AutomatedInvoicePage() {
  const invoice = sampleInvoice;
  const total = invoice.lines.reduce((s, l) => s + l.qty * l.price, 0);
  const buyer = currentUser.buyer;

  return (
    <DashboardShell role="seller">
      <PanelHeading title="Automated Invoice" />

      <section className="mt-8 rounded-2xl bg-primary-400 p-6 md:p-12 grid gap-8 md:grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)] items-start">
        <div className="relative aspect-square max-w-[220px] rounded-2xl bg-white/95 grid place-items-center overflow-hidden">
          <Image src="/brand/logo.png" alt="FashionSavvy" width={140} height={140} className="h-28 w-auto" />
        </div>
        <dl className="text-sm text-indigo-900 space-y-2">
          <Row label="Order Date" value={invoice.date} />
          <Row label="Order No" value="192221470" />
          <Row label="Package No" value="192221470-5755" />
          <Row label="Payment Type" value="Cash on Delivery" />
        </dl>
        <dl className="text-sm text-indigo-900 space-y-2">
          <Row label="Name" value={buyer.name} />
          <Row label="Phone No" value="+234123456" />
          <Row label="Address" value="Lagos Island in Ikeja, Lagos, Nigeria." />
        </dl>
      </section>

      <section className="mt-8">
        <h2 className="text-indigo-600 font-bold text-xl mb-4">Package Contents</h2>
        <div className="rounded-2xl bg-primary-50 p-5 md:p-7 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-indigo-600 font-bold">
                {["Qty", "Name Product", "Duration", "Price", "Total"].map((h) => (
                  <th key={h} className="text-left py-2 pr-4">{h}</th>
                ))}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 rounded-2xl bg-primary-50 p-6 md:p-8 flex items-center justify-end gap-6">
        <p className="text-indigo-600 font-bold text-2xl">Grand Total</p>
        <p className="text-indigo-600 font-bold text-2xl md:text-3xl">{formatPrice(total)}</p>
      </section>
      <p className="mt-2 text-ink-500 text-sm">(All prices are tax inclusive)</p>

      <section className="mt-10 rounded-2xl bg-primary-50 p-6 md:p-8 space-y-3 text-ink-900 text-sm leading-relaxed">
        <p>Dear {buyer.name},</p>
        <p>
          We hope that you enjoy your order! If you did not receive all the products you
          ordered for, please note that they may arrive in multiple deliveries. Items sold by
          our partner sellers will always be sent separately from the rest of your order.
        </p>
        <p>
          Should you need any further assistance, our support team is only an email away —
          <a href="mailto:support@fashionsavvy.co" className="text-accent-400 font-semibold hover:underline"> support@fashionsavvy.co</a>.
        </p>
        <p>Warmly,<br /><span className="font-bold text-indigo-600">The FashionSavvy team</span></p>
      </section>
    </DashboardShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <dt className="font-bold min-w-[120px]">{label}:</dt>
      <dd>{value}</dd>
    </div>
  );
}
