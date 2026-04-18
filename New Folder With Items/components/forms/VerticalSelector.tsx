import Link from 'next/link';

const options = [
  { href: '/apply/mca', title: 'MCA', text: 'Merchant cash advance workflows for working capital requests.' },
  { href: '/apply/rei', title: 'REI', text: 'Real estate finance for acquisition, bridge, refinance, and construction.' },
  { href: '/apply/ma', title: 'M&A', text: 'Business acquisition and merger financing workflows.' },
];

export function VerticalSelector() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {options.map((option) => (
        <Link key={option.href} href={option.href} className="card p-6 transition hover:border-brand-500">
          <h3 className="text-xl font-semibold">{option.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{option.text}</p>
        </Link>
      ))}
    </div>
  );
}
