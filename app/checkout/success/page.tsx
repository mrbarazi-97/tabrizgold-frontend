'use client';

import React from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
      <div className="text-green-500 text-6xl mb-4">
        <FaCheckCircle />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-center">سفارش شما با موفقیت ثبت شد</h1>
      <p className="text-gray-600 mb-8 text-center">
        از خرید شما متشکریم. به زودی با شما تماس خواهیم گرفت.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          بازگشت به صفحه اصلی
        </Link>
        <Link
          href="/products"
          className="bg-gray-100 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-200 transition-colors"
        >
          مشاهده محصولات بیشتر
        </Link>
      </div>
    </div>
  );
} 