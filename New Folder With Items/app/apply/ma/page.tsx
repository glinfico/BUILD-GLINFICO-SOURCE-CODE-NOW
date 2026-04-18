import { MAIntakeForm } from '@/components/forms/MAIntakeForm';

export default function ApplyMAPage() {
  return (
    <main className="container-shell py-20">
      <h1 className="text-4xl font-bold">M&A application</h1>
      <div className="mt-8 max-w-2xl">
        <MAIntakeForm />
      </div>
    </main>
  );
}
