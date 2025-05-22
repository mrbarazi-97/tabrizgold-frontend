'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  discount?: number;
}

export default function ProductCard({ id, title, price, image, discount }: ProductCardProps) {
  const finalPrice = discount ? price - (price * discount) / 100 : price;

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add to cart functionality here
    console.log('Adding to cart:', id);
  };

  return (
    <Link href={`/product/${id}`}>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {formatPrice(discount)}٪ تخفیف
            </div>
          )}
        </div>
        
        <div className="p-3">
          <h3 className="text-sm text-gray-800 font-medium mb-2 line-clamp-2">
            {title}
          </h3>
          
          <div className="flex justify-between items-center">
            <div>
              {discount && (
                <span className="text-xs text-gray-400 line-through ml-2">
                  {formatPrice(price)} تومان
                </span>
              )}
              <span className="text-sm font-bold text-gray-900">
                {formatPrice(finalPrice)} تومان
              </span>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1 rounded transition-colors"
            >
              افزودن به سبد
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
} 