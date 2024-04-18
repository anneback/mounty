import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/components/Layout';
import StoreProvider from './StoreProvider';

export const metadata: Metadata = {
  title: 'Game show',
  description: 'Monty Hall problem',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <StoreProvider>
          <Layout>{children}</Layout>
        </StoreProvider>
      </body>
    </html>
  );
}
