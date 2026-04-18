export function MCAIntakeForm() {
  return (
    <form action="/api/intake" method="post" className="card grid gap-4 p-6">
      <input type="hidden" name="vertical" value="mca" />
      <label className="grid gap-2">
        <span>Business name</span>
        <input name="businessName" className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3" required />
      </label>
      <label className="grid gap-2">
        <span>Owner name</span>
        <input name="ownerName" className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3" required />
      </label>
      <label className="grid gap-2">
        <span>Monthly revenue</span>
        <input name="monthlyRevenue" type="number" className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3" required />
      </label>
      <label className="grid gap-2">
        <span>Funding requested</span>
        <input name="requestedAmount" type="number" className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3" required />
      </label>
      <button className="btn-primary w-fit" type="submit">Submit MCA request</button>
    </form>
  );
}
