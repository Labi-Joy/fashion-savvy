import { DashboardShell } from "@/components/layout/dashboard-shell";
import { PanelHeading } from "@/components/dashboard/panel";
import { ReviewCard } from "@/components/product/review-card";
import { reviews } from "@/lib/data";

export const metadata = { title: "Reviews — FashionSavvy" };

export default function BuyerReviewsPage() {
  return (
    <DashboardShell role="buyer">
      <PanelHeading title="Reviews" />
      <p className="mt-2 text-ink-500">Feedback you have shared on your purchases.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    </DashboardShell>
  );
}
