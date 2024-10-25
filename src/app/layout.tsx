import './globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import QueryProvider from '@/contexts/QueryContext';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'E-commerce App',
  description: 'Cloth E-commerce | buy clothes | buy shirts | buy shoes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={roboto.className} lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
