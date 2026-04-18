import { MatchResult, Vertical } from '@/types';

export function getMockMatches(vertical: Vertical): MatchResult[] {
  switch (vertical) {
    case 'mca':
      return [
        {
          lenderName: 'FastCap Funding',
          matchScore: 92,
          indicativeTerms: '6-12 months, daily or weekly remittance, fast close',
          requiredDocs: ['3 months bank statements', 'ID', 'Voided check'],
        },
        {
          lenderName: 'Merchant Advance Group',
          matchScore: 84,
          indicativeTerms: '9-15 months, revenue-based advance structure',
          requiredDocs: ['Bank statements', 'Driver license', 'Merchant statements'],
        },
      ];
    case 'rei':
      return [
        {
          lenderName: 'BridgeCore Capital',
          matchScore: 95,
          indicativeTerms: '70-80% LTC, bridge execution, 12-24 months',
          requiredDocs: ['Rent roll', 'T12', 'Purchase contract'],
        },
        {
          lenderName: 'Atlas Real Estate Credit',
          matchScore: 88,
          indicativeTerms: 'Stabilized or transitional asset financing',
          requiredDocs: ['OM', 'NOI summary', 'Sponsor bio'],
        },
      ];
    case 'ma':
    default:
      return [
        {
          lenderName: 'GrowthBuy Capital',
          matchScore: 90,
          indicativeTerms: 'Senior + mezz structure for acquisition finance',
          requiredDocs: ['CIM', 'Financial statements', 'Buyer profile'],
        },
        {
          lenderName: 'Summit Acquisition Partners',
          matchScore: 82,
          indicativeTerms: 'Cash-flow structure for lower middle-market deals',
          requiredDocs: ['EBITDA support', 'LOI', 'Capital stack summary'],
        },
      ];
  }
}
