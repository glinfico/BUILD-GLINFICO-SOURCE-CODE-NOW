import { Navbar } from '@/components/marketing/Navbar';

const plans = [
  ['Client', 'Free', '3% commission on successful automated solutions'],
  ['MCA Only', '$25/mo', 'Broker access for MCA lead and lender workflows'],
  ['REI Only', '$99/mo', 'Broker access for real estate capital matching'],
  ['M&A Only', '$125/mo', 'Broker access for acquisition finance workflows'],
  ['Full Package', '$199/mo', 'All three verticals in one platform'],
];

export default function PricingPage() {
  return (
    <div>
      <Navbar />
      <section className="container-shell py-20">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {plans.map(([name, price, text]) => (
            <div key={name} className="card p-6">
              <h2 className="text-2xl font-semibold">{name}</h2>
              <p className="mt-3 text-3xl font-bold text-brand-300">{price}</p>
              <p className="mt-3 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
