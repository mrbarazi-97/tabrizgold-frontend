'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// This would come from an API in a real application
const product = {
  id: 1,
  title: 'انگشتر طلا ۱۸ عیار با نگین الماس',
  description: 'انگشتر طلا ۱۸ عیار با طراحی منحصر به فرد و نگین الماس اصل. مناسب برای مراسم‌های ویژه و هدیه‌های خاص.',
  price: 45800000,
  discount: 15,
  specifications: [
    { key: 'عیار', value: '۱۸' },
    { key: 'وزن', value: '۴.۲ گرم' },
    { key: 'نوع نگین', value: 'الماس' },
    { key: 'رنگ طلا', value: 'زرد' },
  ],
  images: [
    'https://fakeimg.pl/600x600/cccccc/909090?text=Ring+1',
    'https://fakeimg.pl/600x600/cccccc/909090?text=Ring+2',
    'https://fakeimg.pl/600x600/cccccc/909090?text=Ring+3',
  ],
  seller: {
    name: 'جواهری محمدی',
    rating: 4.8,
    sales: 156,
  }
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const finalPrice = product.discount 
    ? product.price - (product.price * product.discount) / 100 
    : product.price;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Images Section */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-md overflow-hidden border-2 ${
                      selectedImage === index ? 'border-blue-500' : 'border-transparent'
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
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="border-t border-b border-gray-200 py-4">
                <div className="flex items-baseline">
                  {product.discount && (
                    <span className="text-gray-500 line-through ml-2">
                      {formatPrice(product.price)} تومان
                    </span>
                  )}
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(finalPrice)} تومان
                  </span>
                  {product.discount && (
                    <span className="mr-2 px-2 py-1 bg-red-500 text-white text-sm rounded-full">
                      {product.discount}٪ تخفیف
                    </span>
                  )}
                </div>
              </div>

              {/* Specifications */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-gray-900">مشخصات محصول</h2>
                <div className="grid grid-cols-2 gap-4">
                  {product.specifications.map((spec) => (
                    <div key={spec.key} className="flex justify-between">
                      <span className="text-gray-600">{spec.key}:</span>
                      <span className="font-medium text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seller Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{product.seller.name}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 ml-1">★</span>
                    <span className="text-sm text-gray-600">{product.seller.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  {product.seller.sales} فروش موفق
                </p>
              </div>

              {/* Add to Cart Section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <label className="text-gray-700">تعداد:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-x border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 