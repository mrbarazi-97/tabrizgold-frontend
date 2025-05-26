'use client';

import { useGoldPrice } from '../context/GoldPriceContext';
import { FaSync } from 'react-icons/fa';

export default function GoldPriceDisplay() {
  const { prices, loading, error, updatePrices } = useGoldPrice();

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR').format(amount);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('fa-IR', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  if (error) {
    return (
      <div className="text-red-500 text-sm">
        <span>خطا در دریافت قیمت‌ها</span>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 text-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">طلای ۱۸ عیار:</span>
          {loading ? (
            <span className="animate-pulse">...</span>
          ) : (
            <span className="font-semibold">{formatPrice(prices?.gram18 ?? 0)} تومان</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">طلای ۲۴ عیار:</span>
          {loading ? (
            <span className="animate-pulse">...</span>
          ) : (
            <span className="font-semibold">{formatPrice(prices?.gram24 ?? 0)} تومان</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">مثقال طلا:</span>
          {loading ? (
            <span className="animate-pulse">...</span>
          ) : (
            <span className="font-semibold">{formatPrice(prices?.mesghal ?? 0)} تومان</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">انس جهانی:</span>
          {loading ? (
            <span className="animate-pulse">...</span>
          ) : (
            <span className="font-semibold">${prices?.ounce ?? 0}</span>
          )}
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>به‌روزرسانی:</span>
          {loading ? (
            <span className="animate-pulse">...</span>
          ) : (
            <span>{prices?.lastUpdated ? formatTime(prices.lastUpdated) : '--:--'}</span>
          )}
        </div>
        <button
          onClick={updatePrices}
          disabled={loading}
          className={`p-1 rounded hover:bg-gray-100 transition-colors ${
            loading ? 'animate-spin' : ''
          }`}
        >
          <FaSync className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
} 