import { REIIntakeForm } from '@/components/forms/REIIntakeForm';

export default function ApplyREIPage() {
  return (
    <main className="container-shell py-20">
      <h1 className="text-4xl font-bold">REI application</h1>
      <div className="mt-8 max-w-2xl">
        <REIIntakeForm />
      </div>
    </main>
  );
}
