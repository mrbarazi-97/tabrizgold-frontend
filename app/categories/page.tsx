'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Mock data - would come from an API in a real application
const categories = [
  { id: 'all', name: 'همه محصولات' },
  { id: 'rings', name: 'انگشتر' },
  { id: 'necklaces', name: 'گردنبند' },
  { id: 'earrings', name: 'گوشواره' },
  { id: 'bracelets', name: 'دستبند' },
];

const products = [
  {
    id: 1,
    title: 'انگشتر طلا ۱۸ عیار',
    price: 45800000,
    category: 'rings',
    goldType: 'new',
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Ring+1',
    discount: 15,
    weight: 4.2,
    laborCost: {
      type: 'fixed',
      value: 2500000
    },
    profitMargin: 12,
    tax: 9
  },
  {
    id: 2,
    title: 'گردنبند طلا با نگین الماس',
    price: 68500000,
    category: 'necklaces',
    goldType: 'new',
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Necklace+1',
    discount: 0,
    weight: 8.5,
    laborCost: {
      type: 'percentage',
      value: 8
    },
    profitMargin: 10,
    tax: 9
  },
  {
    id: 3,
    title: 'گوشواره طلا سفید',
    price: 32000000,
    category: 'earrings',
    goldType: 'used',
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Earring+1',
    discount: 10,
    weight: 3.2,
    laborCost: {
      type: 'fixed',
      value: 1800000
    },
    profitMargin: 12,
    tax: 9
  },
  {
    id: 4,
    title: 'دستبند طلا و چرم',
    price: 28900000,
    category: 'bracelets',
    goldType: 'used',
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Bracelet+1',
    discount: 0,
    weight: 5.1,
    laborCost: {
      type: 'percentage',
      value: 6
    },
    profitMargin: 15,
    tax: 9
  },
];

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedGoldType, setSelectedGoldType] = useState('all');

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatLaborCost = (laborCost: { type: string; value: number }) => {
    if (laborCost.type === 'percentage') {
      return `${laborCost.value}٪`;
    }
    return `${formatPrice(laborCost.value)} تومان`;
  };

  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .filter(product => selectedGoldType === 'all' || product.goldType === selectedGoldType)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return b.id - a.id; // newest
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 space-y-6">
            {/* Categories */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">دسته‌بندی‌ها</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`block w-full text-right px-2 py-1 rounded ${
                      selectedCategory === category.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Gold Type Filter */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">نوع طلا</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedGoldType('all')}
                  className={`block w-full text-right px-2 py-1 rounded ${
                    selectedGoldType === 'all'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  همه
                </button>
                <button
                  onClick={() => setSelectedGoldType('new')}
                  className={`block w-full text-right px-2 py-1 rounded ${
                    selectedGoldType === 'new'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  طلای نو
                </button>
                <button
                  onClick={() => setSelectedGoldType('used')}
                  className={`block w-full text-right px-2 py-1 rounded ${
                    selectedGoldType === 'used'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  طلای دست دوم
                </button>
              </div>
            </div>

            {/* Sort Options */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">مرتب‌سازی</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="newest">جدیدترین</option>
                <option value="price-asc">ارزان‌ترین</option>
                <option value="price-desc">گران‌ترین</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">محدوده قیمت</h3>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="all">همه قیمت‌ها</option>
                <option value="0-30">تا ۳۰ میلیون تومان</option>
                <option value="30-50">۳۰ تا ۵۰ میلیون تومان</option>
                <option value="50+">بالای ۵۰ میلیون تومان</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link href={`/product/${product.id}`} key={product.id}>
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative aspect-square">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                      {product.discount > 0 && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          {product.discount}٪ تخفیف
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                        {product.title}
                      </h3>
                      
                      {/* Product Details */}
                      <div className="space-y-2 mb-3">
                        {product.weight && (
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>وزن:</span>
                            <span>{product.weight} گرم</span>
                          </div>
                        )}
                        {product.laborCost && (
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>اجرت:</span>
                            <span>{formatLaborCost(product.laborCost)}</span>
                          </div>
                        )}
                        {product.profitMargin && (
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>سود:</span>
                            <span>{product.profitMargin}٪</span>
                          </div>
                        )}
                        {product.tax && (
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>مالیات:</span>
                            <span>{product.tax}٪</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-baseline justify-between">
                        <div>
                          {product.discount > 0 && (
                            <span className="text-xs text-gray-400 line-through block">
                              {formatPrice(product.price)} تومان
                            </span>
                          )}
                          <span className="text-sm font-bold text-gray-900">
                            {formatPrice(product.price * (1 - (product.discount || 0) / 100))} تومان
                          </span>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            // Add to cart functionality here
                            console.log('Adding to cart:', product.id);
                          }}
                          className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1 rounded transition-colors"
                        >
                          افزودن به سبد
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 