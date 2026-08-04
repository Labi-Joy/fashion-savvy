import { DashboardShell } from "@/components/layout/dashboard-shell";
import { PanelHeading } from "@/components/dashboard/panel";
import { Button } from "@/components/ui/button";
import { BookkeepingTabs } from "@/components/dashboard/bookkeeping-tabs";

export const metadata = { title: "Book Keeping & Documentation — FashionSavvy" };

export default function BookkeepingPage() {
  return (
    <DashboardShell role="seller">
      <PanelHeading title="Book Keeping & Documentation" />
      <p className="mt-2 text-ink-500">
        Track customer records, measurements and preferences for every order.
      </p>

      <BookkeepingTabs />

      <div className="mt-8 flex justify-center">
        <Button size="lg" className="min-w-[280px]">Save your changes</Button>
      </div>
    </DashboardShell>
  );
}
