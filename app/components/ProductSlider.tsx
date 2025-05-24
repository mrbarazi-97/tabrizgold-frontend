'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Product, LaborCost } from '../types/product';
import 'swiper/css';
import 'swiper/css/navigation';

interface ProductSliderProps {
  title: string;
  products: Product[];
}

export default function ProductSlider({ title, products }: ProductSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);

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

  return (
    <div className="relative py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link href={`/product/${product.id}`}>
              <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:-translate-y-1">
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-1">
                    {product.title}
                  </h3>
                  
                  {/* Product Details */}
                  <div className="space-y-1 mb-2">
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
                  </div>
                  
                  <div className="flex items-baseline">
                    {product.discount && (
                      <span className="text-xs text-gray-400 line-through ml-2">
                        {formatPrice(product.price)} تومان
                      </span>
                    )}
                    <span className="text-sm font-bold text-gray-900">
                      {formatPrice(product.price * (1 - (product.discount || 0) / 100))} تومان
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 