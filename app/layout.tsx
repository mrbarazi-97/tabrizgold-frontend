import './globals.css';
import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';

const vazir = Vazirmatn({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'تبریزگلد | فروشگاه آنلاین طلا و جواهرات اصیل ایرانی',
  description: 'تبریزگلد، معتبرترین فروشگاه آنلاین طلا و جواهرات در ایران با بیش از ۵۰ سال سابقه درخشان. خرید و فروش انواع طلا، جواهرات و سنگ‌های قیمتی با قیمت روز',
  keywords: 'طلا, جواهرات, تبریزگلد, خرید طلا, فروش طلا, طلای آنلاین, جواهرات ایرانی, انگشتر, گردنبند, دستبند, گوشواره, سرویس طلا',
  openGraph: {
    title: 'تبریزگلد | فروشگاه آنلاین طلا و جواهرات اصیل ایرانی',
    description: 'تبریزگلد، معتبرترین فروشگاه آنلاین طلا و جواهرات در ایران با بیش از ۵۰ سال سابقه درخشان',
    url: 'https://tabriz.gold',
    siteName: 'تبریزگلد',
    locale: 'fa_IR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // Add your Google Search Console verification token
  },
  alternates: {
    canonical: 'https://tabriz.gold',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#B8860B" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="تبریزگلد" />
      </head>
      <body className={vazir.className}>{children}</body>
    </html>
  );
}
