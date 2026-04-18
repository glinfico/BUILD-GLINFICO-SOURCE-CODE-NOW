import { DashboardShell } from '@/components/dashboard/DashboardShell';
import { DealTable } from '@/components/dashboard/DealTable';
import { StatsCard } from '@/components/ui/StatsCard';
import { mockDeals } from '@/lib/utils/mockData';

export default function ClientDashboardPage() {
  return (
    <DashboardShell title="Client Dashboard">
      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard label="Active deals" value={3} />
        <StatsCard label="Matched lenders" value={6} />
        <StatsCard label="Term sheets" value={2} />
      </div>
      <DealTable deals={mockDeals} />
    </DashboardShell>
  );
}
