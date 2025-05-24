'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to authenticate the user
    console.log('Form submitted:', formData);
    // For now, just redirect to home page
    router.push('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <main className="max-w-xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
              خوش آمدید
            </h1>
            <p className="text-gray-600">
              برای ورود به حساب کاربری، اطلاعات خود را وارد کنید
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
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
                    placeholder="********"
                    required
                    dir="ltr"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-5 w-5 rounded border-2 border-gray-300 text-blue-600 focus:ring-blue-500 transition duration-150"
                />
                <label htmlFor="remember" className="mr-3 block text-sm text-gray-700">
                  مرا به خاطر بسپار
                </label>
              </div>

              <Link 
                href="/auth/forgot-password" 
                className="text-sm text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                رمز عبور را فراموش کرده‌اید؟
              </Link>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-medium text-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02]"
              >
                ورود به حساب کاربری
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-base text-gray-600">
                حساب کاربری ندارید؟{' '}
                <Link 
                  href="/auth/register" 
                  className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  ثبت نام کنید
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