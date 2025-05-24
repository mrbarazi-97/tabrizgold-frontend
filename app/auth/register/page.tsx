'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface RegisterFormData {
  userType: 'buyer' | 'seller';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  // Additional seller fields
  shopName?: string;
  businessLicense?: string;
  address?: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterFormData>({
    userType: 'buyer',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to register the user
    console.log('Form submitted:', formData);
    // Redirect to appropriate dashboard after successful registration
    router.push(formData.userType === 'seller' ? '/dashboard/seller' : '/dashboard/buyer');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <main className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
              ثبت نام در تبریزگلد
            </h1>
            <p className="text-gray-600">
              برای ایجاد حساب کاربری، اطلاعات خود را وارد کنید
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* User Type Selection */}
            <div className="flex justify-center space-x-4 space-x-reverse">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, userType: 'buyer' })}
                className={`flex-1 max-w-[200px] py-4 px-6 rounded-xl text-lg font-medium transition-all duration-200 ${
                  formData.userType === 'buyer'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 transform scale-[1.02]'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                خریدار
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, userType: 'seller' })}
                className={`flex-1 max-w-[200px] py-4 px-6 rounded-xl text-lg font-medium transition-all duration-200 ${
                  formData.userType === 'seller'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 transform scale-[1.02]'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                فروشنده
              </button>
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-base font-medium text-gray-700 mb-2">
                  نام
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full pr-12 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-base font-medium text-gray-700 mb-2">
                  نام خانوادگی
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full pr-12 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-200"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                  ایمیل
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pr-12 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-200"
                    placeholder="example@email.com"
                    required
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-base font-medium text-gray-700 mb-2">
                  شماره موبایل
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full pr-12 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-200"
                    placeholder="09123456789"
                    required
                    dir="ltr"
                  />
                </div>
              </div>
            </div>

            {/* Seller-specific fields */}
            {formData.userType === 'seller' && (
              <div className="space-y-6 border-2 border-blue-100 rounded-xl p-6 bg-blue-50">
                <h3 className="text-lg font-bold text-blue-900 mb-4">اطلاعات فروشگاه</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="shopName" className="block text-base font-medium text-gray-700 mb-2">
                      نام فروشگاه
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="shopName"
                        name="shopName"
                        value={formData.shopName || ''}
                        onChange={handleChange}
                        className="block w-full pr-12 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="businessLicense" className="block text-base font-medium text-gray-700 mb-2">
                      شماره جواز کسب
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="businessLicense"
                        name="businessLicense"
                        value={formData.businessLicense || ''}
                        onChange={handleChange}
                        className="block w-full pr-12 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-base font-medium text-gray-700 mb-2">
                    آدرس فروشگاه
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 right-4 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address || ''}
                      onChange={handleChange}
                      rows={3}
                      className="block w-full pr-12 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-200"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="password" className="block text-base font-medium text-gray-700 mb-2">
                  رمز عبور
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pr-12 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-200"
                    required
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-base font-medium text-gray-700 mb-2">
                  تکرار رمز عبور
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="block w-full pr-12 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-200"
                    required
                    dir="ltr"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-medium text-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02]"
              >
                ثبت نام
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-base text-gray-600">
                قبلاً ثبت نام کرده‌اید؟{' '}
                <Link 
                  href="/auth/login" 
                  className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  ورود به حساب کاربری
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
} 