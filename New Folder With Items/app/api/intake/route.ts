import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const vertical = formData.get('vertical');

  return NextResponse.json({
    success: true,
    message: 'Intake received.',
    vertical,
    received: Object.fromEntries(formData.entries()),
  });
}
