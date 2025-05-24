'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Sample data - In a real app, this would come from an API
const product = {
  id: '1',
  title: 'دستبند طلا طرح کارتیه',
  description: 'دستبند طلا طرح کارتیه با طراحی ظریف و زیبا، مناسب برای استفاده روزمره. این دستبند با طلای 18 عیار ساخته شده و دارای قفل محکم و مطمئن است.',
  images: [
    '/images/products/bracelet1.jpg',
    '/images/products/bracelet2.jpg',
    '/images/products/bracelet3.jpg',
    '/images/products/bracelet4.jpg',
  ],
  price: 12500000,
  wage: 7,
  weight: 4.25,
  condition: 'new' as const,
  seller: {
    name: 'جواهری پارسیان',
    rating: 4.8,
    location: 'تبریز، بازار طلافروشان',
    totalSales: 1250,
    memberSince: '1398',
  },
  specifications: [
    { label: 'عیار', value: '18' },
    { label: 'وزن', value: '4.25 گرم' },
    { label: 'اجرت', value: '7%' },
    { label: 'نوع قفل', value: 'قفل مخفی' },
    { label: 'طول', value: '19 سانتی‌متر' },
    { label: 'عرض', value: '3 میلی‌متر' },
  ],
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR').format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="glass-card overflow-hidden rounded-2xl aspect-square relative">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                {/* Condition Badge */}
                <div className={`absolute top-4 right-4 px-4 py-2 rounded-xl text-sm font-medium ${
                  product.condition === 'new'
                    ? 'bg-green-500/90 text-white'
                    : 'bg-amber-500/90 text-white'
                }`}>
                  {product.condition === 'new' ? 'نو' : 'دست دوم'}
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`glass-card rounded-xl overflow-hidden aspect-square relative ${
                      selectedImage === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} - تصویر ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>

                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="glass p-4 rounded-xl">
                      <div className="text-sm text-gray-600 mb-1">{spec.label}</div>
                      <div className="font-medium">{spec.value}</div>
                    </div>
                  ))}
                </div>

                <div className="glass p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-blue-600/5 mb-6">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-gray-600">قیمت نهایی:</span>
                    <div className="text-3xl font-bold text-blue-600">
                      {formatPrice(product.price)}
                      <span className="text-base font-normal text-gray-600 mr-2">تومان</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02]">
                    تماس با فروشنده
                  </button>
                </div>

                {/* Seller Info */}
                <div className="glass p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                        {product.seller.name[0]}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {product.seller.name}
                        </h3>
                        <div className="text-sm text-gray-500">
                          {product.seller.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-bold text-gray-900">
                        {product.seller.rating}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {product.seller.totalSales}+
                      </div>
                      <div className="text-sm text-gray-600">
                        معامله موفق
                      </div>
                    </div>
                    <div className="glass p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {product.seller.memberSince}
                      </div>
                      <div className="text-sm text-gray-600">
                        عضویت از سال
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 