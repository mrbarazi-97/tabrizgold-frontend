'use client';

import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/about-store.jpg"
              alt="نمای فروشگاه تبریزگلد - طراحی مدرن و خلاقانه"
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
                طلای تبریز یکی از معتبرترین فروشگاه‌های طلا و جواهر در تبریز است که با بیش از ۲۰ سال سابقه درخشان، همواره در تلاش برای ارائه بهترین محصولات با کیفیت و قیمت مناسب به مشتریان عزیز بوده است.
              </p>

              <p>
                ما در طلای تبریز با تکیه بر تجربه و تخصص خود، مجموعه‌ای از زیباترین و با کیفیت‌ترین محصولات طلا را گردآوری کرده‌ایم تا بتوانیم سلیقه‌های مختلف مشتریان را پاسخگو باشیم.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">چرا طلای تبریز؟</h2>
              <ul>
                <li>تضمین اصالت و کیفیت محصولات</li>
                <li>قیمت‌گذاری منصفانه و شفاف</li>
                <li>ارائه فاکتور رسمی و معتبر</li>
                <li>امکان سفارش آنلاین و ارسال به سراسر کشور</li>
                <li>پشتیبانی ۲۴ ساعته</li>
                <li>گارانتی مادام‌العمر اصالت</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">تماس با ما</h2>
              <p>
                آدرس: تبریز، بازار قدیم، راسته کوچه، پاساژ امیر
                <br />
                تلفن: ۰۴۱-۳۵۲۳۴۵۶۷
                <br />
                ایمیل: info@tabrizgold.com
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">۱۰۰۰+</div>
                <div className="text-sm text-gray-600">طرح منحصر به فرد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">۱۰۰۰۰+</div>
                <div className="text-sm text-gray-600">مشتری راضی</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">۲۴/۷</div>
                <div className="text-sm text-gray-600">پشتیبانی آنلاین</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            تیم خلاق ما
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/images/team-1.jpg"
                  alt="مدیر خلاقیت تبریزگلد"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">علی محمدی</h3>
              <p className="text-gray-600">مدیر خلاقیت</p>
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
                  alt="مدیر هنری تبریزگلد"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">رضا کریمی</h3>
              <p className="text-gray-600">مدیر هنری</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 