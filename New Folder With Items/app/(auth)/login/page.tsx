export default function LoginPage() {
  return (
    <main className="container-shell flex min-h-screen items-center justify-center py-20">
      <div className="card w-full max-w-md p-6">
        <h1 className="text-3xl font-bold">Login</h1>
        <form className="mt-6 grid gap-4">
          <input className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3" placeholder="Email" type="email" />
          <input className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3" placeholder="Password" type="password" />
          <button className="btn-primary">Login</button>
        </form>
      </div>
    </main>
  );
}
