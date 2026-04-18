export function MAIntakeForm() {
  return (
    <form action="/api/intake" method="post" className="card grid gap-4 p-6">
      <input type="hidden" name="vertical" value="ma" />
      <label className="grid gap-2">
        <span>Buyer / company</span>
        <input name="buyerName" className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3" required />
      </label>
      <label className="grid gap-2">
        <span>Industry</span>
        <input name="industry" className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3" required />
      </label>
      <label className="grid gap-2">
        <span>EBITDA</span>
        <input name="ebitda" type="number" className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3" required />
      </label>
      <label className="grid gap-2">
        <span>Capital required</span>
        <input name="requestedAmount" type="number" className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3" required />
      </label>
      <button className="btn-primary w-fit" type="submit">Submit M&A request</button>
    </form>
  );
}
