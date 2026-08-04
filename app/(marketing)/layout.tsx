import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
