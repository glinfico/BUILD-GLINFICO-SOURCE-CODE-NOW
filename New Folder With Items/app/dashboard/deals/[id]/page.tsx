import { DashboardShell } from '@/components/dashboard/DashboardShell';
import { getMockMatches } from '@/lib/matching/mockMatches';
import { mockDeals } from '@/lib/utils/mockData';

export default async function DealDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const deal = mockDeals.find((item) => item.id === id) ?? mockDeals[0];
  const matches = getMockMatches(deal.vertical);

  return (
    <DashboardShell title={`Deal ${deal.id}`}>
      <div className="card p-6">
        <p className="text-sm text-slate-400">Summary</p>
        <h2 className="mt-2 text-2xl font-semibold uppercase">{deal.vertical}</h2>
        <p className="mt-2 text-slate-300">{deal.summary}</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {matches.map((match) => (
          <div key={match.lenderName} className="card p-6">
            <p className="text-sm text-slate-400">Match score</p>
            <h3 className="mt-2 text-xl font-semibold">{match.lenderName} — {match.matchScore}</h3>
            <p className="mt-2 text-slate-300">{match.indicativeTerms}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
              {match.requiredDocs.map((doc) => <li key={doc}>{doc}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
