import { Bell } from "lucide-react";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { PanelHeading } from "@/components/dashboard/panel";
import { Button } from "@/components/ui/button";

export const metadata = { title: "My Account — FashionSavvy" };

export default function BuyerAccountPage() {
  return (
    <DashboardShell role="buyer">
      <div className="relative">
        <PanelHeading
          title="Account"
          action={
            <button
              aria-label="Notifications"
              className="h-11 w-11 grid place-items-center rounded-2xl border border-ink-100 bg-white text-indigo-600 hover:border-primary-400"
            >
              <Bell className="h-5 w-5" />
            </button>
          }
        />

        <div className="mt-6 inline-flex rounded-xl bg-primary-50 p-1">
          <button className="px-5 py-2 rounded-lg bg-primary-400 text-indigo-900 font-semibold text-sm">
            General
          </button>
          <button className="px-5 py-2 rounded-lg text-indigo-600 font-semibold text-sm">
            Password
          </button>
          <button className="px-5 py-2 rounded-lg text-indigo-600 font-semibold text-sm">
            Notifications
          </button>
        </div>

        <form className="mt-10 grid gap-6 md:grid-cols-2">
          <Field label="First Name" placeholder="Input your first name" />
          <Field label="Last Name" placeholder="Input your last name" />
          <Field label="Email Address" placeholder="Input your email" hint="*verification purpose" />
          <Field label="Phone Number" placeholder="Input your phone" hint="*verification purpose" />
        </form>

        <div className="mt-10 flex justify-center">
          <Button size="lg" className="min-w-[280px]">Save your changes</Button>
        </div>

        <section className="mt-16 pt-10 border-t border-ink-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-indigo-600 font-bold text-lg">Delete Your Account</h3>
            <p className="mt-1 text-ink-500 text-sm max-w-lg">
              Deleting your account will permanently remove all your data and you will no longer
              have access to your account or any associated services. This action cannot be undone.
            </p>
          </div>
          <Button variant="outlined" size="md" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
            Delete
          </Button>
        </section>
      </div>
    </DashboardShell>
  );
}

function Field({ label, placeholder, hint }: { label: string; placeholder: string; hint?: string }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-indigo-600 mb-2">{label}</span>
      <input
        placeholder={placeholder}
        className="w-full h-12 rounded-xl border border-ink-200 bg-white px-4 text-sm placeholder:text-ink-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/30"
      />
      {hint && <span className="mt-1.5 block text-xs text-indigo-600 italic">{hint}</span>}
    </label>
  );
}
