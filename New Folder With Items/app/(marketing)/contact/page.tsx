import { Navbar } from '@/components/marketing/Navbar';

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <section className="container-shell py-20">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-6 text-slate-300">Use this page to route demo requests, broker onboarding, and lender partnership inquiries.</p>
      </section>
    </div>
  );
}
