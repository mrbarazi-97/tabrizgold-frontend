'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-gray-900 to-gray-800 text-white font-vazir">
      {/* Top Bar */}
      <div className="bg-black/30 py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                ۰۴۱-۳۳۳۳۳۳۳۳
              </span>
              <span className="hidden sm:flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@tabrizgold.com
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/track-order" className="hover:text-gold transition-colors">
                پیگیری سفارش
              </Link>
              <Link href="/support" className="hover:text-gold transition-colors">
                پشتیبانی
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gold">طلای تبریز</span>
            <span className="text-xs text-gray-400">از سال ۱۳۴۰</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="جستجوی طلا و جواهرات..."
                className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent placeholder-gray-400 text-sm"
              />
              <button className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse text-sm">
            <Link href="/categories?category=rings" className="text-gray-300 hover:text-gold transition-colors">
              انگشتر
            </Link>
            <Link href="/categories?category=necklaces" className="text-gray-300 hover:text-gold transition-colors">
              گردنبند
            </Link>
            <Link href="/categories?category=earrings" className="text-gray-300 hover:text-gold transition-colors">
              گوشواره
            </Link>
            <Link href="/categories?category=bracelets" className="text-gray-300 hover:text-gold transition-colors">
              دستبند
            </Link>
            <div className="relative group">
              <Link href="/cart" className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-gold text-gray-900 w-4 h-4 rounded-full flex items-center justify-center text-xs">
                  ۰
                </span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-gold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search (visible only on mobile) */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="جستجوی طلا و جواهرات..."
              className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent placeholder-gray-400 text-sm"
            />
            <button className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t border-gray-700">
            <div className="flex flex-col space-y-3 text-sm">
              <Link href="/categories?category=rings" className="text-gray-300 hover:text-gold transition-colors">
                انگشتر
              </Link>
              <Link href="/categories?category=necklaces" className="text-gray-300 hover:text-gold transition-colors">
                گردنبند
              </Link>
              <Link href="/categories?category=earrings" className="text-gray-300 hover:text-gold transition-colors">
                گوشواره
              </Link>
              <Link href="/categories?category=bracelets" className="text-gray-300 hover:text-gold transition-colors">
                دستبند
              </Link>
              <Link href="/cart" className="text-gray-300 hover:text-gold transition-colors">
                سبد خرید
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 