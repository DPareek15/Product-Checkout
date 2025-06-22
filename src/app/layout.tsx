import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Product Checkout',
  description: 'Created as part of the assignment from Cloudplay Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`p-0 m-0 flex flex-col items-center justify-center gap-0 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
