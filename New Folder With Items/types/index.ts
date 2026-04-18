export type UserRole = 'client' | 'broker' | 'admin';
export type Vertical = 'mca' | 'rei' | 'ma';
export type DealStage = 'new' | 'qualified' | 'submitted' | 'matched' | 'term_sheet' | 'closing' | 'closed' | 'lost';

export interface Lead {
  id: string;
  source: string;
  sourceChannel: string;
  vertical: Vertical;
  contactName: string;
  companyName?: string;
  email: string;
  phone?: string;
  qualificationScore: number;
  twinStatus: 'new' | 'contacted' | 'qualified' | 'incomplete' | 'nurture' | 'submitted' | 'matched' | 'closed' | 'lost';
}

export interface Deal {
  id: string;
  vertical: Vertical;
  stage: DealStage;
  requestedAmount: number;
  location?: string;
  summary: string;
}

export interface MatchResult {
  lenderName: string;
  matchScore: number;
  indicativeTerms: string;
  requiredDocs: string[];
}
