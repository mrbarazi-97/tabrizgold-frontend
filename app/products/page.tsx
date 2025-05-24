'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

// Sample data - In a real app, this would come from an API
const products = [
  {
    id: '1',
    title: 'دستبند طلا طرح کارتیه',
    image: '/images/products/bracelet1.jpg',
    price: 12500000,
    wage: 7,
    weight: 4.25,
    condition: 'new' as const,
    seller: {
      name: 'جواهری پارسیان',
      rating: 4.8,
      location: 'تبریز',
    },
  },
  {
    id: '2',
    title: 'گردنبند طلا طرح فرشته',
    image: '/images/products/necklace1.jpg',
    price: 18700000,
    wage: 9,
    weight: 6.12,
    condition: 'new' as const,
    seller: {
      name: 'طلای محمد',
      rating: 4.9,
      location: 'تبریز',
    },
  },
  {
    id: '3',
    title: 'انگشتر طلا و الماس',
    image: '/images/products/ring1.jpg',
    price: 8900000,
    wage: 12,
    weight: 2.85,
    condition: 'used' as const,
    seller: {
      name: 'جواهری آرین',
      rating: 4.7,
      location: 'تبریز',
    },
  },
  // Add more products...
];

const categories = [
  { id: 'all', name: 'همه محصولات' },
  { id: 'bracelets', name: 'دستبند' },
  { id: 'necklaces', name: 'گردنبند' },
  { id: 'rings', name: 'انگشتر' },
  { id: 'earrings', name: 'گوشواره' },
];

const conditions = [
  { id: 'all', name: 'همه' },
  { id: 'new', name: 'نو' },
  { id: 'used', name: 'دست دوم' },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              محصولات طلا و جواهر
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              مجموعه‌ای از بهترین طلا و جواهرات با قیمت‌های مناسب و تضمین اصالت
            </p>
          </div>

          {/* Filters */}
          <div className="glass-card p-6 rounded-2xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  دسته‌بندی
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                          : 'glass hover:bg-white/80'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Condition Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  وضعیت
                </label>
                <div className="flex flex-wrap gap-2">
                  {conditions.map((condition) => (
                    <button
                      key={condition.id}
                      onClick={() => setSelectedCondition(condition.id)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        selectedCondition === condition.id
                          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                          : 'glass hover:bg-white/80'
                      }`}
                    >
                      {condition.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  مرتب‌سازی
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="modern-input"
                >
                  <option value="newest">جدیدترین</option>
                  <option value="price-asc">ارزان‌ترین</option>
                  <option value="price-desc">گران‌ترین</option>
                  <option value="weight-asc">کمترین وزن</option>
                  <option value="weight-desc">بیشترین وزن</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 