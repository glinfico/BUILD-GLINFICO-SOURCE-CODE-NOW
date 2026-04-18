import { MCAIntakeForm } from '@/components/forms/MCAIntakeForm';

export default function ApplyMCAPage() {
  return (
    <main className="container-shell py-20">
      <h1 className="text-4xl font-bold">MCA application</h1>
      <div className="mt-8 max-w-2xl">
        <MCAIntakeForm />
      </div>
    </main>
  );
}
