'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ProductCardProps } from '../types/product';

export default function ProductCard({
  id,
  title,
  image,
  price,
  wage,
  weight,
  condition,
  seller,
}: ProductCardProps) {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR').format(amount);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add to cart functionality here
    console.log('Adding to cart:', id);
  };

  return (
    <Link href={`/products/${id}`}>
      <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
        <div className="relative aspect-square overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Condition Badge */}
          <div className={`absolute top-3 right-3 px-3 py-1.5 rounded-lg text-sm font-medium ${
            condition === 'new' 
              ? 'bg-green-500/90 text-white' 
              : 'bg-amber-500/90 text-white'
          }`}>
            {condition === 'new' ? 'نو' : 'دست دوم'}
          </div>
          
          {/* Quick View Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
            <button className="glass-button px-4 py-2 text-sm">
              مشاهده سریع
            </button>
          </div>

          {/* Add to Cart Floating Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 flex items-center justify-center transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>

        <div className="p-4">
          {/* Title */}
          <h3 className="text-gray-900 font-medium mb-2 line-clamp-1">
            {title}
          </h3>

          {/* Specifications */}
          <div className="space-y-2 mb-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">وزن:</span>
              <span className="font-medium">{weight} گرم</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">اجرت:</span>
              <span className="font-medium">{wage}%</span>
            </div>
          </div>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-3">
            <div>
              <div className="text-sm text-gray-600 mb-1">قیمت:</div>
              <div className="text-lg font-bold text-blue-600">
                {formatPrice(price)}
                <span className="text-sm font-normal text-gray-600 mr-1">تومان</span>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              افزودن به سبد
            </button>
          </div>

          {/* Seller Info */}
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm">
                  {seller.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{seller.name}</div>
                  <div className="text-xs text-gray-500">{seller.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium">{seller.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 