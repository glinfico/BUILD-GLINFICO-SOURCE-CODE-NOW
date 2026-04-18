import { Vertical } from '@/types';

interface ScoreLeadInput {
  vertical: Vertical;
  revenue?: number;
  noi?: number;
  dscr?: number;
  ebitda?: number;
  requestedAmount?: number;
}

export function scoreLead(input: ScoreLeadInput): number {
  let score = 50;

  if (input.vertical === 'mca') {
    if ((input.revenue ?? 0) >= 50000) score += 20;
    if ((input.requestedAmount ?? 0) <= 250000) score += 10;
  }

  if (input.vertical === 'rei') {
    if ((input.noi ?? 0) >= 100000) score += 15;
    if ((input.dscr ?? 0) >= 1.2) score += 20;
  }

  if (input.vertical === 'ma') {
    if ((input.ebitda ?? 0) >= 500000) score += 20;
    if ((input.requestedAmount ?? 0) >= 1000000) score += 10;
  }

  return Math.min(100, score);
}
