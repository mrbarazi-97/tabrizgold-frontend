'use client';

import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'درباره تبریزگلد | تاریخچه و ارزش‌های ما',
  description: 'تبریزگلد با بیش از ۵۰ سال سابقه در صنعت طلا و جواهر، پیشگام در ارائه محصولات با کیفیت و خدمات برتر به مشتریان است. آشنایی با تاریخچه و ارزش‌های ما.',
  keywords: 'تبریزگلد, درباره ما, تاریخچه تبریزگلد, طلا و جواهر تبریز, جواهرات اصیل',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/about-store.jpg"
              alt="تبریزگلد"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">
              درباره تبریزگلد
            </h1>

            <div className="prose prose-lg text-gray-600">
              <p>
                تبریزگلد از سال ۱۳۵۰ با هدف ارائه بهترین و با کیفیت‌ترین جواهرات به مشتریان عزیز فعالیت خود را آغاز کرد. امروز، با گذشت بیش از نیم قرن، ما همچنان به اصول و ارزش‌های خود پایبند هستیم.
              </p>

              <p>
                ما در تبریزگلد با تکیه بر تجربه و دانش متخصصان خود، بهترین محصولات را با قیمت‌های منصفانه و شفاف به مشتریان ارائه می‌دهیم. تمامی محصولات ما دارای گواهی اصالت و ضمانت کیفیت هستند.
              </p>

              <p>
                مزیت‌های خرید از تبریزگلد:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>تضمین اصالت و کیفیت محصولات</li>
                <li>قیمت‌گذاری شفاف و منصفانه</li>
                <li>پشتیبانی ۲۴/۷ از مشتریان</li>
                <li>ارسال سریع و مطمئن</li>
                <li>امکان مرجوعی تا ۷ روز</li>
                <li>خدمات پس از فروش</li>
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">۵۰+</div>
                <div className="text-sm text-gray-600">سال سابقه</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">۱۰۰۰۰+</div>
                <div className="text-sm text-gray-600">مشتری راضی</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">۵۰۰۰+</div>
                <div className="text-sm text-gray-600">محصول متنوع</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            تیم متخصص ما
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/images/team-1.jpg"
                  alt="مدیر عامل تبریزگلد"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">علی محمدی</h3>
              <p className="text-gray-600">مدیر عامل</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/images/team-2.jpg"
                  alt="طراح ارشد تبریزگلد"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">سارا احمدی</h3>
              <p className="text-gray-600">طراح ارشد</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/images/team-3.jpg"
                  alt="مدیر تولید تبریزگلد"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">رضا کریمی</h3>
              <p className="text-gray-600">مدیر تولید</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 