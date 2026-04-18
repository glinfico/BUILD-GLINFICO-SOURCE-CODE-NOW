import { DashboardShell } from '@/components/dashboard/DashboardShell';
import { DealTable } from '@/components/dashboard/DealTable';
import { StatsCard } from '@/components/ui/StatsCard';
import { mockDeals } from '@/lib/utils/mockData';

export default function BrokerDashboardPage() {
  return (
    <DashboardShell title="Broker Dashboard">
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard label="Total leads" value={128} />
        <StatsCard label="Twin-qualified" value={74} />
        <StatsCard label="Active deals" value={31} />
        <StatsCard label="Term sheets" value={12} />
      </div>
      <DealTable deals={mockDeals} />
    </DashboardShell>
  );
}
