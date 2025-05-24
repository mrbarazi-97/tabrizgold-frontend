'use client';

import { useState } from 'react';
import Link from 'next/link';

interface DashboardStats {
  products: {
    total: number;
    pending: number;
    approved: number;
    rejected: number;
  };
  orders: {
    total: number;
    pending: number;
    processing: number;
    shipped: number;
    delivered: number;
    cancelled: number;
  };
  articles: {
    total: number;
    draft: number;
    pending: number;
    published: number;
    rejected: number;
  };
  users: {
    total: number;
    buyers: number;
    sellers: number;
    pendingSellers: number;
  };
}

// Mock data - would come from an API in a real application
const mockStats: DashboardStats = {
  products: {
    total: 150,
    pending: 15,
    approved: 120,
    rejected: 15
  },
  orders: {
    total: 500,
    pending: 50,
    processing: 30,
    shipped: 20,
    delivered: 380,
    cancelled: 20
  },
  articles: {
    total: 45,
    draft: 5,
    pending: 8,
    published: 30,
    rejected: 2
  },
  users: {
    total: 250,
    buyers: 200,
    sellers: 50,
    pendingSellers: 5
  }
};

export default function AdminDashboard() {
  const [stats] = useState(mockStats);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('fa-IR').format(num);
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">داشبورد مدیریت</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Products Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">محصولات</h2>
            <Link
              href="/dashboard/admin/products"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              مشاهده همه
            </Link>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">کل محصولات:</span>
              <span className="font-medium">{formatNumber(stats.products.total)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-yellow-600">در انتظار تایید:</span>
              <span className="font-medium">{formatNumber(stats.products.pending)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-green-600">تایید شده:</span>
              <span className="font-medium">{formatNumber(stats.products.approved)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-600">رد شده:</span>
              <span className="font-medium">{formatNumber(stats.products.rejected)}</span>
            </div>
          </div>
        </div>

        {/* Orders Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">سفارشات</h2>
            <Link
              href="/dashboard/admin/orders"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              مشاهده همه
            </Link>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">کل سفارشات:</span>
              <span className="font-medium">{formatNumber(stats.orders.total)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-yellow-600">در انتظار تایید:</span>
              <span className="font-medium">{formatNumber(stats.orders.pending)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-600">در حال پردازش:</span>
              <span className="font-medium">{formatNumber(stats.orders.processing)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-purple-600">ارسال شده:</span>
              <span className="font-medium">{formatNumber(stats.orders.shipped)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-green-600">تحویل شده:</span>
              <span className="font-medium">{formatNumber(stats.orders.delivered)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-600">لغو شده:</span>
              <span className="font-medium">{formatNumber(stats.orders.cancelled)}</span>
            </div>
          </div>
        </div>

        {/* Articles Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">مقالات</h2>
            <Link
              href="/dashboard/admin/articles"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              مشاهده همه
            </Link>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">کل مقالات:</span>
              <span className="font-medium">{formatNumber(stats.articles.total)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">پیش‌نویس:</span>
              <span className="font-medium">{formatNumber(stats.articles.draft)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-yellow-600">در انتظار تایید:</span>
              <span className="font-medium">{formatNumber(stats.articles.pending)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-green-600">منتشر شده:</span>
              <span className="font-medium">{formatNumber(stats.articles.published)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-600">رد شده:</span>
              <span className="font-medium">{formatNumber(stats.articles.rejected)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">عملیات سریع</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/dashboard/admin/products?status=pending"
            className="flex items-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
          >
            <div className="flex-1">
              <h3 className="font-medium text-yellow-800">محصولات در انتظار تایید</h3>
              <p className="text-sm text-yellow-600">{formatNumber(stats.products.pending)} محصول</p>
            </div>
            <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/dashboard/admin/orders?status=pending"
            className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <div className="flex-1">
              <h3 className="font-medium text-blue-800">سفارشات جدید</h3>
              <p className="text-sm text-blue-600">{formatNumber(stats.orders.pending)} سفارش</p>
            </div>
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/dashboard/admin/articles?status=pending"
            className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <div className="flex-1">
              <h3 className="font-medium text-green-800">مقالات در انتظار تایید</h3>
              <p className="text-sm text-green-600">{formatNumber(stats.articles.pending)} مقاله</p>
            </div>
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/dashboard/admin/users?status=pending"
            className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <div className="flex-1">
              <h3 className="font-medium text-purple-800">فروشندگان در انتظار تایید</h3>
              <p className="text-sm text-purple-600">{formatNumber(stats.users.pendingSellers)} فروشنده</p>
            </div>
            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 