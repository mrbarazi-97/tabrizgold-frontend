'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 font-vazir">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">درباره تبریزگلد</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              تبریزگلد، ارائه دهنده بهترین و با کیفیت‌ترین جواهرات با بیش از ۵۰ سال سابقه درخشان در صنعت طلا و جواهر ایران. ما با تضمین اصالت و کیفیت محصولات، بهترین قیمت‌ها را به مشتریان عزیز ارائه می‌دهیم.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">دسترسی سریع</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-400 hover:text-gold transition-colors">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  تماس با ما
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-gold transition-colors">
                  وبلاگ
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-gold transition-colors">
                  سوالات متداول
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">دسته‌بندی محصولات</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/categories?category=rings" className="text-gray-400 hover:text-gold transition-colors">
                  انگشتر
                </a>
              </li>
              <li>
                <a href="/categories?category=necklaces" className="text-gray-400 hover:text-gold transition-colors">
                  گردنبند
                </a>
              </li>
              <li>
                <a href="/categories?category=earrings" className="text-gray-400 hover:text-gold transition-colors">
                  گوشواره
                </a>
              </li>
              <li>
                <a href="/categories?category=bracelets" className="text-gray-400 hover:text-gold transition-colors">
                  دستبند
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">اطلاعات تماس</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                ۰۹۱۴۲۴۹۸۶۰۱
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@tabriz.gold
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                تبریز، بازار تاریخی، راسته بازار طلافروشان
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} تبریزگلد - تمامی حقوق محفوظ است
            </p>
            <p className="mt-2">
              طراحی و توسعه با ❤️ در تبریز
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 