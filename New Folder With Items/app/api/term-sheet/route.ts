import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    success: true,
    message: 'Indicative term sheet generated.',
    data: {
      title: `${body.vertical ?? 'Deal'} Term Sheet`,
      amount: body.requestedAmount ?? null,
      disclaimer: 'Prototype output. Replace with formal underwriting logic.',
    },
  });
}
