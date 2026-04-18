export function REIIntakeForm() {
  return (
    <form action="/api/intake" method="post" className="card grid gap-4 p-6">
      <input type="hidden" name="vertical" value="rei" />
      <label className="grid gap-2">
        <span>Borrower / sponsor</span>
        <input name="borrowerName" className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3" required />
      </label>
      <label className="grid gap-2">
        <span>Property address</span>
        <input name="propertyAddress" className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3" required />
      </label>
      <label className="grid gap-2">
        <span>NOI</span>
        <input name="noi" type="number" className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3" required />
      </label>
      <label className="grid gap-2">
        <span>DSCR</span>
        <input name="dscr" type="number" step="0.01" className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3" required />
      </label>
      <button className="btn-primary w-fit" type="submit">Submit REI request</button>
    </form>
  );
}
