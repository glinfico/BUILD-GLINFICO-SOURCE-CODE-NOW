import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GLINFICO',
  description: 'Automated funding and deal matching for MCA, REI, and M&A.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
