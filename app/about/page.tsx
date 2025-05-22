'use client';

import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
          <Image
            src="https://fakeimg.pl/1200x400/cccccc/909090?text=Jewelry+Store"
            alt="طلای تبریز"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              درباره طلای تبریز
            </h1>
          </div>
        </div>

        {/* About Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* History Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">تاریخچه ما</h2>
              <p className="text-gray-600 leading-relaxed">
                طلای تبریز از سال ۱۳۵۰ با هدف ارائه بهترین و با کیفیت‌ترین جواهرات به مشتریان عزیز فعالیت خود را آغاز کرد. 
                در طول این سال‌ها، همواره تلاش کرده‌ایم تا با بهره‌گیری از هنر اصیل ایرانی و تکنولوژی روز دنیا، 
                محصولاتی منحصر به فرد و با کیفیت را به مشتریان خود ارائه دهیم.
              </p>
            </section>

            {/* Values Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">ارزش‌های ما</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">کیفیت برتر</h3>
                  <p className="text-gray-600">استفاده از بهترین مواد اولیه و دقت در ساخت</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">صداقت</h3>
                  <p className="text-gray-600">شفافیت در قیمت‌گذاری و اصالت محصولات</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">نوآوری</h3>
                  <p className="text-gray-600">ترکیب هنر سنتی با طراحی‌های مدرن</p>
                </div>
              </div>
            </section>

            {/* Team Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">تیم ما</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src="https://fakeimg.pl/200x200/cccccc/909090?text=CEO"
                      alt="مدیر عامل"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900">محمد محمدی</h3>
                  <p className="text-gray-600">مدیر عامل</p>
                </div>
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src="https://fakeimg.pl/200x200/cccccc/909090?text=Designer"
                      alt="طراح ارشد"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900">سارا احمدی</h3>
                  <p className="text-gray-600">طراح ارشد</p>
                </div>
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src="https://fakeimg.pl/200x200/cccccc/909090?text=Craftsman"
                      alt="استاد طلاساز"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900">استاد رضا کریمی</h3>
                  <p className="text-gray-600">استاد طلاساز</p>
                </div>
              </div>
            </section>

            {/* Certificates Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">گواهینامه‌ها و افتخارات</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-900">استاندارد طلا و جواهر</p>
                  <p className="text-sm text-gray-600">۱۳۹۵</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-900">برترین طراح سال</p>
                  <p className="text-sm text-gray-600">۱۳۹۸</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-900">نشان کیفیت برتر</p>
                  <p className="text-sm text-gray-600">۱۴۰۰</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-900">فروشنده برتر</p>
                  <p className="text-sm text-gray-600">۱۴۰۲</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 