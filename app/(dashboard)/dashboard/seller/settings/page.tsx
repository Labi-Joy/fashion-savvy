import { DashboardShell } from "@/components/layout/dashboard-shell";
import { PanelHeading } from "@/components/dashboard/panel";

export const metadata = { title: "Seller settings — FashionSavvy" };

export default function SellerSettingsPage() {
  const rows = [
    { label: "Public store name", value: "Caroline Kelvin Fashions" },
    { label: "Payout method", value: "GTBank ****4128" },
    { label: "Delivery partner", value: "GIG Logistics" },
    { label: "Automated invoicing", value: "Enabled" },
    { label: "Weekend orders", value: "Paused" },
  ];
  return (
    <DashboardShell role="seller">
      <PanelHeading title="Setting" />
      <p className="mt-2 text-ink-500">Preferences for your storefront and payouts.</p>
      <ul className="mt-8 divide-y divide-ink-100 rounded-2xl bg-white shadow-[var(--shadow-elev-1)]">
        {rows.map((r) => (
          <li key={r.label} className="flex items-center justify-between px-6 py-5">
            <span className="text-indigo-600 font-semibold">{r.label}</span>
            <span className="text-ink-500">{r.value}</span>
          </li>
        ))}
      </ul>
    </DashboardShell>
  );
}
