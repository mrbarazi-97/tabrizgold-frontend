import { Metadata } from 'next';

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
    google: 'verification_token',
  },
  alternates: {
    canonical: 'https://tabriz.gold',
  },
}; 