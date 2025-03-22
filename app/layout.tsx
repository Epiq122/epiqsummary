import type { Metadata } from 'next';
import { Source_Sans_3 as FontSans } from 'next/font/google';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'EpiqSummary - AI-Powered PDF Summarization',
  description: 'EpiqSummary is a tool that summarizes PDF documents.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${fontSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
