import { DashboardShell } from "@/components/layout/dashboard-shell";
import { PanelHeading } from "@/components/dashboard/panel";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import { Plus } from "lucide-react";

export const metadata = { title: "Catalogue — FashionSavvy" };

export default function SellerCataloguePage() {
  return (
    <DashboardShell role="seller">
      <PanelHeading
        title="Catalogue"
        action={
          <Button size="md">
            <Plus className="h-4 w-4" />
            New product
          </Button>
        }
      />
      <p className="mt-2 text-ink-500">All products currently on your storefront.</p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} variant="compact" />
        ))}
      </div>
    </DashboardShell>
  );
}
