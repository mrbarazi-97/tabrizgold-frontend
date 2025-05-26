import React from 'react';

export default function GoldInvestmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-amber-700/20 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              سرمایه‌گذاری در <span className="text-amber-600">طلا</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              با اطمینان در طلا سرمایه‌گذاری کنید و از مزایای این فلز ارزشمند بهره‌مند شوید
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-amber-600 mb-2">۲۰+</div>
              <div className="text-gray-600">سال تجربه در بازار طلا</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-amber-600 mb-2">۵۰۰۰+</div>
              <div className="text-gray-600">سرمایه‌گذار فعال</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-amber-600 mb-2">۹۹٪</div>
              <div className="text-gray-600">رضایت مشتریان</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              چرا سرمایه‌گذاری در طلا؟
            </h2>
            <p className="text-xl text-gray-600">
              مزایای منحصر به فرد سرمایه‌گذاری در طلا با تبریز گلد
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">حفظ ارزش سرمایه</h3>
              <p className="text-gray-600 text-center">
                طلا به عنوان یک دارایی امن، ارزش سرمایه شما را در برابر تورم حفظ می‌کند
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">نقدشوندگی بالا</h3>
              <p className="text-gray-600 text-center">
                امکان تبدیل سریع طلا به نقد در هر زمان که نیاز دارید
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">امنیت سرمایه</h3>
              <p className="text-gray-600 text-center">
                سرمایه‌گذاری با پشتوانه فیزیکی و نگهداری در گاوصندوق‌های استاندارد
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">بازدهی مناسب</h3>
              <p className="text-gray-600 text-center">
                کسب سود پایدار با توجه به روند صعودی قیمت طلا در بلندمدت
              </p>
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
                  همین حالا شروع کنید
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  با سرمایه‌گذاری در طلا، آینده مالی خود را تضمین کنید. کارشناسان ما آماده مشاوره به شما هستند.
                </p>
                <div className="flex gap-4">
                  <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                    مشاوره رایگان
                  </button>
                  <button className="border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors">
                    اطلاعات بیشتر
                  </button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/gold-investment.jpg" 
                  alt="سرمایه‌گذاری در طلا" 
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