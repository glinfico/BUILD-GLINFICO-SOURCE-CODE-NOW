import { Deal } from '@/types';

export const mockDeals: Deal[] = [
  {
    id: 'deal_001',
    vertical: 'mca',
    stage: 'matched',
    requestedAmount: 150000,
    location: 'New York, NY',
    summary: 'Working capital request for a retail operator.',
  },
  {
    id: 'deal_002',
    vertical: 'rei',
    stage: 'term_sheet',
    requestedAmount: 3200000,
    location: 'White Plains, NY',
    summary: 'Bridge loan request for multifamily acquisition.',
  },
  {
    id: 'deal_003',
    vertical: 'ma',
    stage: 'qualified',
    requestedAmount: 2500000,
    location: 'Miami, FL',
    summary: 'Acquisition financing for lower middle-market business.',
  },
];
