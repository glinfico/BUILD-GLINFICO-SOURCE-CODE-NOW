import Link from 'next/link';

export function Navbar() {
  return (
    <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-wide">GLINFICO</Link>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex gap-3">
          <Link href="/login" className="btn-secondary">Login</Link>
          <Link href="/apply" className="btn-primary">Start Free</Link>
        </div>
      </div>
    </header>
  );
}
