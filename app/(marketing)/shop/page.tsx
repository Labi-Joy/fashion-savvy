import { ShopHero } from "@/components/shop/shop-hero";
import { ShopGrid } from "@/components/shop/shop-grid";

export const metadata = {
  title: "Shop — FashionSavvy",
  description: "Browse curated African-inspired fashion from verified sellers.",
};

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      <ShopGrid />
    </>
  );
}
