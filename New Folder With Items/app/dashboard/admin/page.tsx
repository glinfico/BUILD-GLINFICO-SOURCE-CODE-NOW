import { DashboardShell } from '@/components/dashboard/DashboardShell';
import { StatsCard } from '@/components/ui/StatsCard';

export default function AdminDashboardPage() {
  return (
    <DashboardShell title="Admin Dashboard">
      <div className="grid gap-4 md:grid-cols-5">
        <StatsCard label="Submissions" value={412} />
        <StatsCard label="Qualified leads" value={233} />
        <StatsCard label="Matched deals" value={96} />
        <StatsCard label="Closed deals" value={21} />
        <StatsCard label="Commissions due" value="$48,300" />
      </div>
    </DashboardShell>
  );
}
