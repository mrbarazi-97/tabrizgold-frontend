'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import GoldPriceWidget from './GoldPriceWidget';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass bg-white/80 backdrop-blur-lg' : 'bg-white/50 backdrop-blur-md'
      }`}>
        {/* Top Bar */}
        <div className={`border-b transition-all duration-300 ${
          isScrolled ? 'border-gray-200/50 py-1' : 'border-gray-200/30 py-2'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-4">
                <a href="tel:09142498601" className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  ۰۹۱۴۲۴۹۸۶۰۱
                </a>
                <a href="mailto:info@tabriz.gold" className="hidden sm:flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@tabriz.gold
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <Link href="/track-order" className="modern-nav-link">
                  پیگیری سفارش
                </Link>
                <Link href="/support" className="modern-nav-link">
                  پشتیبانی
                </Link>
                <Link href="/auth/login" className="modern-nav-link">
                  ورود / ثبت نام
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Gold Prices Bar */}
        <GoldPriceWidget />

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover-float">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
                تبریزگلد
              </span>
              <span className="text-xs text-gray-500">خلاق و بینظیر</span>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="جستجوی طلا و جواهرات..."
                  className="modern-input pl-10"
                />
                <button className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="modern-nav-link">
                صفحه اصلی
              </Link>
              <div className="relative group">
                <button className="modern-nav-link flex items-center gap-1">
                  خدمات
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full right-0 mt-2 py-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[200px]">
                  <Link href="/gold-investment" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                    سرمایه‌گذاری در طلا
                  </Link>
                  <Link href="/golden-savings" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                    پس‌انداز طلایی
                  </Link>
                  <Link href="/old-gold-exchange" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                    تبدیل طلای کهنه
                  </Link>
                  <Link href="/gold-delivery" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                    تحویل طلا در محل
                  </Link>
                </div>
              </div>
              <Link href="/digital-gold" className="modern-nav-link">
                طلای آبشده دیجیتال
              </Link>
              <Link href="/blog" className="modern-nav-link">
                وبلاگ
              </Link>
              <Link href="/contact" className="modern-nav-link">
                تماس با ما
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="glass-button p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Search (visible only on mobile) */}
          <div className="mt-4 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="جستجوی طلا و جواهرات..."
                className="modern-input pl-10"
              />
              <button className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-white/10">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="modern-nav-link">
                  صفحه اصلی
                </Link>
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">خدمات</div>
                  <div className="space-y-2 pr-4">
                    <Link href="/gold-investment" className="block text-gray-600 hover:text-amber-600 transition-colors">
                      سرمایه‌گذاری در طلا
                    </Link>
                    <Link href="/golden-savings" className="block text-gray-600 hover:text-amber-600 transition-colors">
                      پس‌انداز طلایی
                    </Link>
                    <Link href="/old-gold-exchange" className="block text-gray-600 hover:text-amber-600 transition-colors">
                      تبدیل طلای کهنه
                    </Link>
                    <Link href="/gold-delivery" className="block text-gray-600 hover:text-amber-600 transition-colors">
                      تحویل طلا در محل
                    </Link>
                  </div>
                </div>
                <Link href="/digital-gold" className="modern-nav-link">
                  طلای آبشده دیجیتال
                </Link>
                <Link href="/blog" className="modern-nav-link">
                  وبلاگ
                </Link>
                <Link href="/contact" className="modern-nav-link">
                  تماس با ما
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
      {/* Spacer div to prevent content from appearing under header */}
      <div className="h-[140px]"></div>
    </>
  );
} 