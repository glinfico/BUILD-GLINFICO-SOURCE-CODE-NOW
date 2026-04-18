import { NextResponse } from 'next/server';
import { scoreLead } from '@/lib/matching/scoreLead';
import { Vertical } from '@/types';

export async function POST(request: Request) {
  const body = (await request.json()) as {
    contactName?: string;
    email?: string;
    phone?: string;
    sourceChannel?: string;
    vertical?: Vertical;
    revenue?: number;
    noi?: number;
    dscr?: number;
    ebitda?: number;
    requestedAmount?: number;
  };

  const vertical = body.vertical ?? 'mca';
  const qualificationScore = scoreLead({
    vertical,
    revenue: body.revenue,
    noi: body.noi,
    dscr: body.dscr,
    ebitda: body.ebitda,
    requestedAmount: body.requestedAmount,
  });

  return NextResponse.json({
    success: true,
    message: 'Lead accepted from Twin AI webhook.',
    lead: {
      id: `lead_${Math.random().toString(36).slice(2, 10)}`,
      source: 'Twin AI',
      sourceChannel: body.sourceChannel ?? 'unknown',
      vertical,
      contactName: body.contactName ?? 'Unknown',
      email: body.email ?? '',
      phone: body.phone ?? '',
      qualificationScore,
      twinStatus: qualificationScore >= 70 ? 'qualified' : 'nurture',
    },
  });
}
