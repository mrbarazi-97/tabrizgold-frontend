'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-32">
      {/* Newsletter Section */}
      <div className="relative -top-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  عضویت در خبرنامه
                </h3>
                <p className="text-gray-600">
                  برای اطلاع از آخرین قیمت‌ها و اخبار طلا و جواهر در خبرنامه ما عضو شوید
                </p>
              </div>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید..."
                  className="modern-input flex-1"
                />
                <button type="submit" className="modern-button-primary whitespace-nowrap">
                  عضویت
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                تبریزگلد
              </span>
              <span className="text-xs text-gray-400">خلاق و بینظیر</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              تبریزگلد، پیشگام در ارائه خدمات نوین خرید و فروش طلای آبشده دیجیتال با بیش از ۲۰ سال سابقه درخشان در صنعت طلا و جواهر
            </p>
            <div className="flex gap-4">
              <a href="#" className="glass-button p-2 hover:text-blue-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="glass-button p-2 hover:text-pink-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a href="#" className="glass-button p-2 hover:text-blue-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="glass-button p-2 hover:text-red-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.5 16.5c-.7 1.2-1.5 2.1-2.4 2.7-.9.6-1.9.9-3 .9-1.5 0-2.7-.5-3.5-1.4-.8-.9-1.3-2.2-1.3-3.7 0-1.7.5-3.1 1.6-4.3 1.1-1.2 2.5-1.8 4.1-1.8 1.3 0 2.4.4 3.3 1.2.9.8 1.4 1.9 1.4 3.2 0 1.4-.4 2.6-1.2 3.6-.8 1-1.8 1.5-3 1.5-.6 0-1.1-.2-1.5-.5-.4-.3-.6-.8-.6-1.3-.1.5-.3.9-.6 1.2-.3.3-.7.4-1.1.4-.6 0-1.1-.2-1.5-.7-.4-.5-.6-1.1-.6-1.8 0-.9.3-1.7.8-2.4s1.2-1 2-1c.6 0 1 .2 1.4.5.3.4.5.8.5 1.3l.1.4c.1.4.3.6.6.6.3 0 .5-.1.7-.4.2-.2.3-.5.3-.9 0-.4-.1-.8-.4-1.1-.3-.3-.7-.4-1.1-.4-.7 0-1.3.3-1.7.8-.4.6-.7 1.3-.7 2.1 0 .8.2 1.4.6 1.9.4.5.9.7 1.5.7.7 0 1.3-.3 1.8-.8.5-.6.8-1.3.8-2.1 0-1-.3-1.8-1-2.4-.7-.6-1.6-.9-2.7-.9-1.3 0-2.4.4-3.2 1.3-.8.9-1.3 2-1.3 3.4 0 1.3.4 2.4 1.2 3.2.8.8 1.8 1.2 3 1.2.9 0 1.7-.2 2.4-.7.7-.5 1.3-1.2 1.7-2.1h1.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">دسترسی سریع</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  قوانین و مقررات
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  حریم خصوصی
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">خدمات ما</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/digital-gold" className="text-gray-400 hover:text-white transition-colors">
                  طلای آبشده دیجیتال
                </Link>
              </li>
              <li>
                <Link href="/gold-investment" className="text-gray-400 hover:text-white transition-colors">
                  سرمایه‌گذاری در طلا
                </Link>
              </li>
              <li>
                <Link href="/golden-savings" className="text-gray-400 hover:text-white transition-colors">
                  پس‌انداز طلایی
                </Link>
              </li>
              <li>
                <Link href="/old-gold-exchange" className="text-gray-400 hover:text-white transition-colors">
                  تبدیل طلای کهنه
                </Link>
              </li>
              <li>
                <Link href="/gold-delivery" className="text-gray-400 hover:text-white transition-colors">
                  تحویل طلا در محل
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">اطلاعات تماس</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">
                  تبریز، خیابان امام، بازار تاریخی تبریز، راسته بازار، پاساژ امیر، پلاک ۱۲۳
                </span>
              </li>
              <li>
                <a href="tel:09142498601" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  ۰۹۱۴۲۴۹۸۶۰۱
                </a>
              </li>
              <li>
                <a href="mailto:info@tabriz.gold" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@tabriz.gold
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                شنبه تا پنجشنبه ۹ صبح تا ۹ شب
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-right">
              © ۱۴۰۲ تبریزگلد. تمامی حقوق محفوظ است.
            </p>
            <div className="flex items-center gap-4">
              <img src="/images/enamad.png" alt="نماد اعتماد الکترونیکی" className="h-24 glass-card p-2" />
              <img src="/images/samandehi.png" alt="نماد ساماندهی" className="h-24 glass-card p-2" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 