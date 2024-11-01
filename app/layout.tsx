import './globals.css';

import type { Metadata } from 'next';

import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { oxanium } from '@/src/ui/fonts';

export const metadata: Metadata = {
  title: 'KALKATTAK',
  description: 'KALKATTAK: your friendly video guys',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oxanium.className} antialiased bg-stone-50 text-stone-900`}
      >
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
          <Header />
          <main className="container mx-auto pt-36 px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
