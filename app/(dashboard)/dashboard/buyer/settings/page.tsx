import { DashboardShell } from "@/components/layout/dashboard-shell";
import { PanelHeading } from "@/components/dashboard/panel";

export const metadata = { title: "Settings — FashionSavvy" };

export default function BuyerSettingsPage() {
  const options = [
    { label: "Email notifications", desc: "Receive updates when your order status changes.", on: true },
    { label: "SMS notifications", desc: "Get a text when a package is out for delivery.", on: false },
    { label: "Marketing emails", desc: "Occasional style tips and promotions.", on: true },
    { label: "Two-factor authentication", desc: "Add an extra step at sign-in for security.", on: false },
  ];
  return (
    <DashboardShell role="buyer">
      <PanelHeading title="Setting" />
      <p className="mt-2 text-ink-500">Preferences for notifications, security and privacy.</p>
      <div className="mt-8 grid gap-4">
        {options.map((o) => (
          <label key={o.label} className="flex items-start justify-between gap-4 rounded-2xl bg-white p-5 shadow-[var(--shadow-elev-1)] cursor-pointer">
            <div>
              <p className="text-indigo-600 font-bold">{o.label}</p>
              <p className="text-ink-500 text-sm mt-1">{o.desc}</p>
            </div>
            <span
              className={`inline-flex shrink-0 h-7 w-12 rounded-full transition-colors ${
                o.on ? "bg-primary-400" : "bg-ink-200"
              } relative`}
            >
              <span
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                  o.on ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </span>
          </label>
        ))}
      </div>
    </DashboardShell>
  );
}
