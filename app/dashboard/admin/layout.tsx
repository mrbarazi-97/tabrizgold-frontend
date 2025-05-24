'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const isActive = (path: string) => pathname?.startsWith(path);

  return (
    <div className="min-h-screen bg-gray-100 font-vazir">
      {/* Sidebar */}
      <aside className={`fixed top-0 right-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <div className="flex items-center justify-between mb-5 px-2">
            <h2 className="text-xl font-semibold text-white">پنل مدیریت</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-400 hover:text-white lg:hidden"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/dashboard/admin"
                className={`flex items-center p-2 rounded-lg ${
                  isActive('/dashboard/admin') && pathname === '/dashboard/admin'
                    ? 'bg-blue-600 text-white'
                    : 'text-white hover:bg-gray-700'
                }`}
              >
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                داشبورد
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/admin/products"
                className={`flex items-center p-2 rounded-lg ${
                  isActive('/dashboard/admin/products')
                    ? 'bg-blue-600 text-white'
                    : 'text-white hover:bg-gray-700'
                }`}
              >
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                مدیریت محصولات
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/admin/orders"
                className={`flex items-center p-2 rounded-lg ${
                  isActive('/dashboard/admin/orders')
                    ? 'bg-blue-600 text-white'
                    : 'text-white hover:bg-gray-700'
                }`}
              >
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                مدیریت سفارشات
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/admin/articles"
                className={`flex items-center p-2 rounded-lg ${
                  isActive('/dashboard/admin/articles')
                    ? 'bg-blue-600 text-white'
                    : 'text-white hover:bg-gray-700'
                }`}
              >
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8" />
                </svg>
                مدیریت مقالات
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/admin/users"
                className={`flex items-center p-2 rounded-lg ${
                  isActive('/dashboard/admin/users')
                    ? 'bg-blue-600 text-white'
                    : 'text-white hover:bg-gray-700'
                }`}
              >
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                مدیریت کاربران
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Mobile sidebar toggle */}
      <div className="sticky top-0 z-30 lg:hidden bg-gray-800 p-2">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-gray-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Main content */}
      <div className={`p-4 lg:mr-64 ${isSidebarOpen ? 'lg:mr-64' : 'lg:mr-0'}`}>
        {children}
      </div>
    </div>
  );
} 