import Link from 'next/link';
import { Deal } from '@/types';

export function DealTable({ deals }: { deals: Deal[] }) {
  return (
    <div className="card overflow-hidden">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-slate-900 text-slate-300">
          <tr>
            <th className="px-4 py-3">Vertical</th>
            <th className="px-4 py-3">Stage</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Open</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) => (
            <tr key={deal.id} className="border-t border-slate-800">
              <td className="px-4 py-3 uppercase">{deal.vertical}</td>
              <td className="px-4 py-3">{deal.stage}</td>
              <td className="px-4 py-3">${deal.requestedAmount.toLocaleString()}</td>
              <td className="px-4 py-3">{deal.location ?? '—'}</td>
              <td className="px-4 py-3">
                <Link href={`/dashboard/deals/${deal.id}`} className="text-brand-300 hover:text-brand-200">
                  View deal
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
