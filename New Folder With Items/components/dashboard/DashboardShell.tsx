import Link from 'next/link';
import { ReactNode } from 'react';

interface DashboardShellProps {
  title: string;
  children: ReactNode;
}

export function DashboardShell({ title, children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="container-shell grid gap-8 py-10 lg:grid-cols-[240px_1fr]">
        <aside className="card h-fit p-5">
          <p className="text-lg font-bold">GLINFICO</p>
          <nav className="mt-6 flex flex-col gap-3 text-sm text-slate-300">
            <Link href="/dashboard/client">Client</Link>
            <Link href="/dashboard/broker">Broker</Link>
            <Link href="/dashboard/admin">Admin</Link>
            <Link href="/dashboard/lenders">Lenders</Link>
            <Link href="/dashboard/term-sheets">Term Sheets</Link>
            <Link href="/dashboard/documents">Documents</Link>
          </nav>
        </aside>
        <main className="space-y-6">
          <header>
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
