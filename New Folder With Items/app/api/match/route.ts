import { NextResponse } from 'next/server';
import { getMockMatches } from '@/lib/matching/mockMatches';
import { Vertical } from '@/types';

export async function POST(request: Request) {
  const body = (await request.json()) as { vertical?: Vertical };
  const vertical = body.vertical ?? 'mca';

  return NextResponse.json({ success: true, matches: getMockMatches(vertical) });
}
