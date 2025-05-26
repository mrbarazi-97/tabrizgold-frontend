import React from 'react';

export default function OldGoldExchangePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-800/90 to-amber-900/90 z-0" />
        <div className="absolute inset-0 bg-[url('/images/gold-pattern.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              تبدیل <span className="text-amber-400">طلای کهنه</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 max-w-3xl mx-auto leading-relaxed">
              طلای کهنه خود را با بهترین قیمت و در کمترین زمان به طلای نو تبدیل کنید
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              چرا تبریز گلد را انتخاب کنید؟
            </h2>
            <p className="text-xl text-gray-600">
              خدمات حرفه‌ای و قابل اعتماد برای تبدیل طلای شما
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">قیمت منصفانه</h3>
              <p className="text-gray-600 text-center">
                بهترین قیمت روز برای طلای شما با محاسبه دقیق عیار و وزن
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">سرعت بالا</h3>
              <p className="text-gray-600 text-center">
                تبدیل سریع طلای کهنه به طلای نو در کمترین زمان ممکن
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">تضمین اصالت</h3>
              <p className="text-gray-600 text-center">
                ضمانت اصالت و کیفیت تمامی محصولات با گواهی معتبر
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">کارشناسان مجرب</h3>
              <p className="text-gray-600 text-center">
                ارزیابی تخصصی توسط کارشناسان با تجربه و متخصص
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              مراحل تبدیل طلا
            </h2>
            <p className="text-xl text-gray-600">
              فرآیند ساده و شفاف تبدیل طلای کهنه به نو
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 relative z-10">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ۱
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">ارزیابی رایگان</h3>
                <p className="text-gray-600">
                  کارشناسان ما طلای شما را به صورت رایگان ارزیابی می‌کنند و عیار و وزن دقیق آن را تعیین می‌کنند.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 relative z-10">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ۲
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">اعلام قیمت</h3>
                <p className="text-gray-600">
                  بر اساس قیمت روز و وزن طلای شما، بهترین قیمت را پیشنهاد می‌دهیم.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 relative z-10">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ۳
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">تحویل طلای نو</h3>
                <p className="text-gray-600">
                  پس از توافق، می‌توانید از بین مدل‌های متنوع ما، طلای جدید خود را انتخاب کنید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  همین حالا تماس بگیرید
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  کارشناسان ما آماده پاسخگویی به سوالات شما هستند. برای مشاوره رایگان و تعیین وقت قبلی با ما تماس بگیرید.
                </p>
                <div className="flex gap-4">
                  <a href="tel:09142498601" className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    تماس با ما
                  </a>
                  <button className="border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors">
                    اطلاعات بیشتر
                  </button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/gold-exchange.jpg" 
                  alt="تبدیل طلای کهنه" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 