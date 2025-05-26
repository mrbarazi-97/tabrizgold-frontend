import React from 'react';

export default function GoldDeliveryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-700 to-amber-900">
        <div className="absolute inset-0 bg-[url('/images/delivery-pattern.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              تحویل <span className="text-amber-300">طلا در محل</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 max-w-3xl mx-auto leading-relaxed">
              خرید مطمئن طلا با تحویل در محل مورد نظر شما، با رعایت کامل اصول امنیتی
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ویژگی‌های خدمات ما
            </h2>
            <p className="text-xl text-gray-600">
              تحویل امن و مطمئن طلا با بالاترین استانداردهای امنیتی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">تحویل سریع</h3>
              <p className="text-gray-600 text-center">
                تحویل در سریع‌ترین زمان ممکن در محل مورد نظر شما
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">امنیت کامل</h3>
              <p className="text-gray-600 text-center">
                تحویل با حفاظت کامل و بیمه محموله در تمام مراحل
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">پرداخت در محل</h3>
              <p className="text-gray-600 text-center">
                امکان پرداخت در محل پس از بررسی و تأیید محصول
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">تضمین اصالت</h3>
              <p className="text-gray-600 text-center">
                بررسی اصالت و کیفیت محصول در حضور شما
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Map Section */}
      <div className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                پوشش سراسری خدمات
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                ما در تمامی مناطق شهر تبریز و شهرهای اطراف، خدمات تحویل در محل ارائه می‌دهیم. برای اطلاع از زمان دقیق تحویل در منطقه خود، با ما تماس بگیرید.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  تبریز و حومه
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  شهرهای اطراف تا شعاع ۵۰ کیلومتر
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  خدمات ویژه برای مشتریان VIP
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/images/delivery-map.jpg" 
                alt="نقشه پوشش خدمات" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* How to Order Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              نحوه سفارش
            </h2>
            <p className="text-xl text-gray-600">
              در سه مرحله ساده، سفارش خود را ثبت کنید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 relative z-10">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ۱
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">انتخاب محصول</h3>
                <p className="text-gray-600">
                  محصول مورد نظر خود را از فروشگاه آنلاین ما انتخاب کنید.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-amber-200 -z-10"></div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 relative z-10">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ۲
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">تعیین زمان و مکان</h3>
                <p className="text-gray-600">
                  زمان و مکان مورد نظر خود را برای تحویل مشخص کنید.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-amber-200 -z-10"></div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 relative z-10">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ۳
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">تحویل و پرداخت</h3>
                <p className="text-gray-600">
                  در زمان مقرر، محصول را تحویل بگیرید و پرداخت را انجام دهید.
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
                  همین حالا سفارش دهید
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  برای ثبت سفارش یا کسب اطلاعات بیشتر درباره خدمات تحویل در محل با ما تماس بگیرید.
                </p>
                <div className="flex gap-4">
                  <a href="tel:09142498601" className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    تماس با ما
                  </a>
                  <button className="border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors">
                    ثبت سفارش آنلاین
                  </button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/gold-delivery.jpg" 
                  alt="تحویل طلا در محل" 
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