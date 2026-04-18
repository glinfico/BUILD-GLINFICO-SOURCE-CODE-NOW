import { Navbar } from '@/components/marketing/Navbar';

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <section className="container-shell py-20">
        <h1 className="text-4xl font-bold">About GLINFICO</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-300">
          GLINFICO is a fintech operating layer for funding and deal execution across merchant cash advance, commercial real estate, and M&amp;A. It combines intake, Twin AI qualification, lender matching, and pipeline management.
        </p>
      </section>
    </div>
  );
}
