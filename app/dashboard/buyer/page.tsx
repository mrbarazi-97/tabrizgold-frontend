'use client';

import { useState } from 'react';
import Header from '../../components/Header';

// Mock data - would come from an API in a real application
const mockOrders = [
  {
    id: 1,
    date: '۱۴۰۲/۱۲/۱۵',
    items: [
      {
        title: 'انگشتر طلا ۱۸ عیار',
        price: 45800000,
        quantity: 1,
      }
    ],
    status: 'تحویل شده',
    totalPrice: 45800000,
  },
  {
    id: 2,
    date: '۱۴۰۲/۱۲/۱۰',
    items: [
      {
        title: 'گردنبند طلا با نگین الماس',
        price: 68500000,
        quantity: 1,
      }
    ],
    status: 'در حال ارسال',
    totalPrice: 68500000,
  },
];

const mockProfile = {
  name: 'علی محمدی',
  email: 'ali@example.com',
  phone: '۰۹۱۲۳۴۵۶۷۸۹',
  address: 'تهران، خیابان ولیعصر، پلاک ۱۲۳',
};

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState('orders');

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">پنل خریدار</h1>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8 space-x-reverse">
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-3 py-2 text-sm font-medium ${
                activeTab === 'orders'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              سفارشات من
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-3 py-2 text-sm font-medium ${
                activeTab === 'profile'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              پروفایل
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-3 py-2 text-sm font-medium ${
                activeTab === 'favorites'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              علاقه‌مندی‌ها
            </button>
          </nav>
        </div>

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {mockOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      سفارش #{order.id}
                    </h3>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === 'تحویل شده' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-2">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-500">تعداد: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {formatPrice(item.price)} تومان
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">مجموع</span>
                  <span className="text-lg font-bold text-gray-900">
                    {formatPrice(order.totalPrice)} تومان
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="max-w-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    defaultValue={mockProfile.name}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    defaultValue={mockProfile.email}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    شماره تماس
                  </label>
                  <input
                    type="tel"
                    defaultValue={mockProfile.phone}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    آدرس
                  </label>
                  <textarea
                    defaultValue={mockProfile.address}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    ذخیره تغییرات
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Favorites Tab */}
        {activeTab === 'favorites' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-500 text-center">به زودی...</p>
          </div>
        )}
      </div>
    </div>
  );
} 