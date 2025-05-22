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
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Ring+1',
    discount: 15,
  },
  {
    id: 2,
    title: 'گردنبند طلا با نگین الماس',
    price: 68500000,
    category: 'necklaces',
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Necklace+1',
    discount: 0,
  },
  {
    id: 3,
    title: 'گوشواره طلا سفید',
    price: 32000000,
    category: 'earrings',
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Earring+1',
    discount: 10,
  },
  {
    id: 4,
    title: 'دستبند طلا و چرم',
    price: 28900000,
    category: 'bracelets',
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Bracelet+1',
    discount: 0,
  },
];

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState('all');

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
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
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {product.title}
                      </h3>
                      <div className="flex items-baseline">
                        {product.discount > 0 && (
                          <span className="text-gray-500 line-through text-sm ml-2">
                            {formatPrice(product.price)} تومان
                          </span>
                        )}
                        <span className="text-lg font-bold text-gray-900">
                          {formatPrice(product.price * (1 - product.discount / 100))} تومان
                        </span>
                        {product.discount > 0 && (
                          <span className="mr-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                            {product.discount}٪ تخفیف
                          </span>
                        )}
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