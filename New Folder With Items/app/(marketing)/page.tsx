import { HeroSection } from '@/components/marketing/HeroSection';
import { Navbar } from '@/components/marketing/Navbar';
import { SectionHeading } from '@/components/ui/SectionHeading';

const modules = [
  {
    title: 'MCA automation',
    text: 'Qualify business owners, collect basic underwriting data, and route deals to capital providers.',
  },
  {
    title: 'REI capital matching',
    text: 'Support acquisitions, bridge debt, refinance, and construction finance workflows.',
  },
  {
    title: 'M&A finance',
    text: 'Capture buyer and target information, qualify capital needs, and generate lender matches.',
  },
];

export default function MarketingHomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className="container-shell py-20">
        <SectionHeading
          eyebrow="How it works"
          title="One platform for intake, qualification, matching, and execution."
          description="GLINFICO combines deal intake, Twin AI lead qualification, and internal lender matching into one operating layer."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {modules.map((module) => (
            <div key={module.title} className="card p-6">
              <h3 className="text-xl font-semibold">{module.title}</h3>
              <p className="mt-2 text-slate-300">{module.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
