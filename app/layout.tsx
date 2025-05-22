import './globals.css';
import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';

const vazirmatn = Vazirmatn({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'طلای تبریز | جواهرات اصیل ایرانی',
  description: 'فروشگاه آنلاین طلا و جواهرات با بیش از ۵۰ سال سابقه درخشان',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
