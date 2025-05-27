import './globals.css';
import { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import Providers from './providers';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { GoldPriceProvider } from './context/GoldPriceContext';
import InstallPrompt from './components/InstallPrompt';

const vazir = Vazirmatn({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'تبریزگلد | فروشگاه آنلاین طلا و جواهرات اصیل ایرانی',
  description: 'تبریزگلد، معتبرترین فروشگاه آنلاین طلا و جواهرات در ایران با بیش از ۵۰ سال سابقه درخشان',
  keywords: 'طلا, جواهرات, تبریزگلد, خرید طلا, فروش طلا, طلای آنلاین, جواهرات ایرانی',
  openGraph: {
    title: 'تبریزگلد | فروشگاه آنلاین طلا و جواهرات اصیل ایرانی',
    description: 'تبریزگلد، معتبرترین فروشگاه آنلاین طلا و جواهرات در ایران',
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
  metadataBase: new URL('https://tabriz.gold'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazir.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#B8860B" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="تبریزگلد" />
      </head>
      <body className={vazir.className}>
        <InstallPrompt />
        <CartProvider>
          <GoldPriceProvider>
            <Providers>
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </Providers>
          </GoldPriceProvider>
        </CartProvider>
      </body>
    </html>
  );
}
