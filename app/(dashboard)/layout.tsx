import { Nav } from "@/components/layout/nav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div className="bg-primary-50/30">{children}</div>
    </>
  );
}
