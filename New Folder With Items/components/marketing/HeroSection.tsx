import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="container-shell grid gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">MCA • REI • M&A</p>
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Automated funding and deal matching with Twin AI built in.
        </h1>
        <p className="max-w-2xl text-lg text-slate-300">
          Capture leads, qualify them automatically, route them into MCA, REI, or M&amp;A workflows, and produce lender matches and indicative term sheets faster.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/apply" className="btn-primary">Submit a Deal</Link>
          <Link href="/pricing" className="btn-secondary">See Pricing</Link>
        </div>
      </div>
      <div className="card p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-800 p-4">
            <p className="text-sm text-slate-400">Client Pricing</p>
            <p className="mt-2 text-2xl font-semibold">Free</p>
            <p className="mt-1 text-sm text-slate-400">+ 3% success commission</p>
          </div>
          <div className="rounded-xl border border-slate-800 p-4">
            <p className="text-sm text-slate-400">Twin AI</p>
            <p className="mt-2 text-2xl font-semibold">24/7</p>
            <p className="mt-1 text-sm text-slate-400">Lead capture and qualification</p>
          </div>
          <div className="rounded-xl border border-slate-800 p-4 sm:col-span-2">
            <p className="text-sm text-slate-400">Broker Plans</p>
            <p className="mt-2 text-xl font-semibold">$25 / $99 / $125 / $199</p>
            <p className="mt-1 text-sm text-slate-400">MCA only, REI only, M&amp;A only, or full package.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
