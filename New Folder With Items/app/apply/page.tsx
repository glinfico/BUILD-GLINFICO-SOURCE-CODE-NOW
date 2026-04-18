import { VerticalSelector } from '@/components/forms/VerticalSelector';

export default function ApplyPage() {
  return (
    <main className="container-shell py-20">
      <h1 className="text-4xl font-bold">Choose your deal type</h1>
      <p className="mt-4 max-w-2xl text-slate-300">Start a new request and GLINFICO will route it into the correct intake and qualification flow.</p>
      <div className="mt-10">
        <VerticalSelector />
      </div>
    </main>
  );
}
