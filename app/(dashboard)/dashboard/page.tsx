import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardStats } from "@/components/dashboard/stats";
import { ArtworkGrid } from "@/components/dashboard/artwork-grid";

export default function DashboardPage() {
  return (
    <div className="container space-y-8 py-8">
      <DashboardHeader />
      <DashboardStats />
      <ArtworkGrid />
    </div>
  );
}