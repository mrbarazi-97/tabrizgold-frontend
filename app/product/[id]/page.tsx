'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Product, LaborCost } from '../../types/product';

// This would come from an API in a real application
const product: Product = {
  id: 1,
  title: 'انگشتر طلا ۱۸ عیار با نگین الماس',
  description: 'انگشتر طلا ۱۸ عیار با طراحی منحصر به فرد و نگین الماس اصل. مناسب برای مراسم‌های ویژه و هدیه‌های خاص.',
  price: 45800000,
  discount: 15,
  weight: 4.2,
  laborCost: {
    type: 'fixed',
    value: 2500000
  },
  profitMargin: 12,
  tax: 9,
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

  const formatLaborCost = (laborCost: LaborCost) => {
    if (laborCost.type === 'percentage') {
      return `${laborCost.value}٪`;
    }
    return `${formatPrice(laborCost.value)} تومان`;
  };

  const finalPrice = product.discount 
    ? product.price - (product.price * product.discount) / 100 
    : product.price;

  // Calculate the base gold price and other components
  const calculatePriceComponents = () => {
    if (!product.laborCost) return null;

    const baseGoldPrice = product.price;
    const laborCostAmount = product.laborCost.type === 'percentage'
      ? baseGoldPrice * (product.laborCost.value / 100)
      : product.laborCost.value;
    
    const profitAmount = product.profitMargin 
      ? ((baseGoldPrice + laborCostAmount) * product.profitMargin) / 100
      : 0;
      
    const taxAmount = product.tax
      ? ((baseGoldPrice + laborCostAmount + profitAmount) * product.tax) / 100
      : 0;

    return {
      baseGoldPrice,
      laborCostAmount,
      profitAmount,
      taxAmount
    };
  };

  const priceComponents = calculatePriceComponents();

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

              {/* Price Breakdown */}
              {priceComponents && (
                <div className="border rounded-lg p-4 space-y-3">
                  <h2 className="text-lg font-bold text-gray-900 mb-3">جزئیات قیمت</h2>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">قیمت پایه طلا:</span>
                      <span className="font-medium">{formatPrice(priceComponents.baseGoldPrice)} تومان</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">اجرت ساخت ({product.laborCost?.type === 'percentage' ? `${product.laborCost.value}٪` : 'مقطوع'}):</span>
                      <span className="font-medium">{formatPrice(priceComponents.laborCostAmount)} تومان</span>
                    </div>
                    {product.profitMargin && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">سود ({product.profitMargin}٪):</span>
                        <span className="font-medium">{formatPrice(priceComponents.profitAmount)} تومان</span>
                      </div>
                    )}
                    {product.tax && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">مالیات ({product.tax}٪):</span>
                        <span className="font-medium">{formatPrice(priceComponents.taxAmount)} تومان</span>
                      </div>
                    )}
                    <div className="pt-2 border-t">
                      <div className="flex justify-between text-sm font-bold">
                        <span>قیمت نهایی:</span>
                        <span className="text-blue-600">{formatPrice(product.price)} تومان</span>
                      </div>
                      {product.discount && (
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-red-500">تخفیف ({product.discount}٪):</span>
                          <span className="text-sm font-bold text-red-500">
                            {formatPrice(product.price - finalPrice)} تومان
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Specifications */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-gray-900">مشخصات محصول</h2>
                <div className="grid grid-cols-2 gap-4">
                  {product.specifications?.map((spec) => (
                    <div key={spec.key} className="flex justify-between">
                      <span className="text-gray-600">{spec.key}:</span>
                      <span className="font-medium text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seller Info */}
              <div className="border-t pt-4">
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