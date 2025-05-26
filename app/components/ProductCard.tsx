'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';
import { useGoldPrice } from '../context/GoldPriceContext';
import { toast } from 'react-hot-toast';

export default function ProductCard({
  id,
  name,
  images,
  basePrice,
  laborCost,
  weight,
  purity,
  inStock,
}: Product) {
  const { dispatch } = useCart();
  const { prices } = useGoldPrice();
  
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR').format(amount);
  };

  const calculateCurrentPrice = () => {
    if (!prices) return basePrice;
    
    // محاسبه قیمت بر اساس وزن و عیار طلا
    const pricePerGram = prices.gram18; // قیمت هر گرم طلای 18 عیار
    const purityFactor = purity / 0.750; // تبدیل عیار به ضریب (مثلاً 18 عیار = 0.750)
    const goldPrice = weight * pricePerGram * purityFactor;
    
    return goldPrice + laborCost;
  };

  const currentPrice = calculateCurrentPrice();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!inStock) return;
    
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: id.toString(),
        name,
        price: currentPrice,
        quantity: 1,
        image: images[0]
      }
    });
    
    toast.success('محصول به سبد خرید اضافه شد');
  };

  return (
    <div className="card max-w-sm mx-auto">
      <div className="relative h-48 w-full">
        <Image
          src={images[0]}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          quality={75}
        />
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold px-4 py-2 bg-red-500 rounded-lg">ناموجود</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-1">
          وزن: {weight} گرم
        </p>
        <p className="text-gray-600 text-sm mb-1">
          عیار: {purity * 24} عیار
        </p>
        <p className="text-primary-600 font-medium mb-1">
          قیمت طلا: {formatPrice(currentPrice - laborCost)} تومان
        </p>
        <p className="text-gray-600 text-sm mb-1">
          اجرت: {formatPrice(laborCost)} تومان
        </p>
        <p className="text-lg font-bold text-blue-600 mb-4">
          قیمت نهایی: {formatPrice(currentPrice)} تومان
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            disabled={!inStock}
            className={`btn-primary flex-1 ${!inStock ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90 transition-colors'}`}
          >
            {inStock ? 'افزودن به سبد خرید' : 'ناموجود'}
          </button>
          <Link href={`/product/${id}`} className="btn-secondary">
            جزئیات بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
} 