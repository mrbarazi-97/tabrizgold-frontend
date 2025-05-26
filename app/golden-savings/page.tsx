import React from 'react';

export default function GoldenSavingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-700">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              پس‌انداز <span className="text-amber-200">طلایی</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              با پس‌انداز منظم در طلا، آینده مالی خود را تضمین کنید
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              چگونه کار می‌کند؟
            </h2>
            <p className="text-xl text-gray-600">
              در چهار مرحله ساده، پس‌انداز طلایی خود را آغاز کنید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ۱
                </div>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">ثبت‌نام</h3>
                <p className="text-gray-600 text-center">
                  حساب کاربری خود را ایجاد کنید و اطلاعات اولیه را وارد نمایید
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-amber-200 -z-10"></div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ۲
                </div>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">انتخاب طرح</h3>
                <p className="text-gray-600 text-center">
                  طرح پس‌انداز مورد نظر خود را از بین گزینه‌های متنوع انتخاب کنید
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-amber-200 -z-10"></div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ۳
                </div>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">واریز ماهانه</h3>
                <p className="text-gray-600 text-center">
                  مبلغ مورد نظر خود را به صورت ماهانه واریز کنید
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-amber-200 -z-10"></div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ۴
                </div>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">کسب سود</h3>
                <p className="text-gray-600 text-center">
                  از افزایش ارزش سرمایه خود در طول زمان بهره‌مند شوید
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              طرح‌های پس‌انداز
            </h2>
            <p className="text-xl text-gray-600">
              طرح مناسب خود را انتخاب کنید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-amber-500 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">طرح پایه</h3>
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  ۵۰۰,۰۰۰
                  <span className="text-base font-normal text-gray-600"> تومان / ماه</span>
                </div>
                <p className="text-gray-600">مناسب برای شروع</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  امکان برداشت بعد از ۶ ماه
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  مشاوره رایگان
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  گزارش ماهانه
                </li>
              </ul>
              <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors">
                شروع کنید
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-amber-500 relative transform scale-105">
              <div className="absolute -top-4 right-1/2 transform translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm">
                پیشنهاد ویژه
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">طرح حرفه‌ای</h3>
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  ۱,۰۰۰,۰۰۰
                  <span className="text-base font-normal text-gray-600"> تومان / ماه</span>
                </div>
                <p className="text-gray-600">مناسب برای سرمایه‌گذاری متوسط</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  امکان برداشت بعد از ۳ ماه
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  مشاوره اختصاصی
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  گزارش هفتگی
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  تحلیل بازار
                </li>
              </ul>
              <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors">
                انتخاب طرح
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-amber-500 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">طرح VIP</h3>
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  ۲,۰۰۰,۰۰۰
                  <span className="text-base font-normal text-gray-600"> تومان / ماه</span>
                </div>
                <p className="text-gray-600">مناسب برای سرمایه‌گذاری حرفه‌ای</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  امکان برداشت آنی
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  مشاور شخصی
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  گزارش روزانه
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  خدمات ویژه VIP
                </li>
              </ul>
              <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors">
                شروع کنید
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              سوالات متداول
            </h2>
            <p className="text-xl text-gray-600">
              پاسخ سوالات رایج شما درباره پس‌انداز طلایی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">حداقل مبلغ پس‌انداز چقدر است؟</h3>
              <p className="text-gray-600">
                شما می‌توانید با مبلغ ۵۰۰,۰۰۰ تومان در ماه، پس‌انداز طلایی خود را آغاز کنید.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">چه زمانی می‌توانم برداشت کنم؟</h3>
              <p className="text-gray-600">
                بسته به نوع طرح انتخابی، از ۳ ماه تا ۶ ماه پس از شروع پس‌انداز امکان برداشت وجود دارد.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">آیا سود تضمینی است؟</h3>
              <p className="text-gray-600">
                سود شما بر اساس قیمت روز طلا محاسبه می‌شود و تابع نوسانات بازار است.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">آیا امکان تغییر طرح وجود دارد؟</h3>
              <p className="text-gray-600">
                بله، شما می‌توانید در هر زمان طرح خود را ارتقا دهید یا تغییر دهید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 