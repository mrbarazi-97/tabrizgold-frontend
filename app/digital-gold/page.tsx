'use client';

import { useState, useEffect } from 'react';
import DigitalGoldTrading from '../components/DigitalGoldTrading';
import DigitalGoldBalance from '../components/DigitalGoldBalance';
import { DigitalGoldTransaction } from '../types/digital-gold';

// Sample data - In a real app, this would come from an API
const currentPrice = {
  buyPrice: 28500000, // 28.5 million tomans per gram
  sellPrice: 28000000, // 28 million tomans per gram
  fee: 0.5, // 0.5% transaction fee
  lastUpdated: new Date().toISOString(),
};

// Sample user data - In a real app, this would come from an API
const initialBalance = {
  totalWeight: 10.523,
  transactions: [
    {
      id: 1,
      userId: 1,
      type: 'buy',
      weight: 5.321,
      price: 27800000,
      fee: 738000,
      status: 'completed',
      createdAt: '2024-03-15T10:30:00Z',
    },
    {
      id: 2,
      userId: 1,
      type: 'buy',
      weight: 3.202,
      price: 28100000,
      fee: 450000,
      status: 'completed',
      createdAt: '2024-03-16T14:15:00Z',
    },
    {
      id: 3,
      userId: 1,
      type: 'sell',
      weight: 2.000,
      price: 28300000,
      fee: 283000,
      status: 'completed',
      createdAt: '2024-03-17T09:45:00Z',
    },
  ] as DigitalGoldTransaction[],
};

export default function DigitalGoldPage() {
  const [balance, setBalance] = useState(initialBalance);
  const [showPriceAnimation, setShowPriceAnimation] = useState(false);

  useEffect(() => {
    // Simulate price updates
    const interval = setInterval(() => {
      setShowPriceAnimation(true);
      setTimeout(() => setShowPriceAnimation(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleBuy = (weight: number) => {
    const fee = (weight * currentPrice.buyPrice * currentPrice.fee) / 100;
    const newTransaction: DigitalGoldTransaction = {
      id: balance.transactions.length + 1,
      userId: 1,
      type: 'buy',
      weight,
      price: currentPrice.buyPrice,
      fee,
      status: 'completed',
      createdAt: new Date().toISOString(),
    };

    setBalance({
      totalWeight: balance.totalWeight + weight,
      transactions: [newTransaction, ...balance.transactions],
    });
  };

  const handleSell = (weight: number) => {
    if (weight <= balance.totalWeight) {
      const fee = (weight * currentPrice.sellPrice * currentPrice.fee) / 100;
      const newTransaction: DigitalGoldTransaction = {
        id: balance.transactions.length + 1,
        userId: 1,
        type: 'sell',
        weight,
        price: currentPrice.sellPrice,
        fee,
        status: 'completed',
        createdAt: new Date().toISOString(),
      };

      setBalance({
        totalWeight: balance.totalWeight - weight,
        transactions: [newTransaction, ...balance.transactions],
      });
    } else {
      alert('موجودی کافی نیست');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">      
      <main className="pt-22">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-amber-600/10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-6">
                طلای آبشده دیجیتال
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                با تبریزگلد، به راحتی و با امنیت کامل طلای آبشده خریداری کنید. بدون نیاز به مراجعه حضوری و با بهترین قیمت بازار.
              </p>
            </div>
          </div>
        </div>

        {/* Price Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Buy Price Card */}
            <div className={`glass-card hover-float hover-glow ${showPriceAnimation ? 'scale-105' : ''} transition-all duration-300`}>
              <div className="relative overflow-hidden p-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full blur-2xl transform translate-x-12 -translate-y-6" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">قیمت خرید</h3>
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </div>
                  <div className={`text-3xl font-bold text-gray-900 ${showPriceAnimation ? 'animate-pulse' : ''}`}>
                    {new Intl.NumberFormat('fa-IR').format(currentPrice.buyPrice)}
                    <span className="text-base font-normal text-gray-600 mr-2">تومان</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">به ازای هر گرم</p>
                </div>
              </div>
            </div>

            {/* Sell Price Card */}
            <div className={`glass-card hover-float hover-glow ${showPriceAnimation ? 'scale-105' : ''} transition-all duration-300`}>
              <div className="relative overflow-hidden p-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full blur-2xl transform translate-x-12 -translate-y-6" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">قیمت فروش</h3>
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </div>
                  </div>
                  <div className={`text-3xl font-bold text-gray-900 ${showPriceAnimation ? 'animate-pulse' : ''}`}>
                    {new Intl.NumberFormat('fa-IR').format(currentPrice.sellPrice)}
                    <span className="text-base font-normal text-gray-600 mr-2">تومان</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">به ازای هر گرم</p>
                </div>
              </div>
            </div>

            {/* Fee Card */}
            <div className="glass-card hover-float hover-glow">
              <div className="relative overflow-hidden p-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-2xl transform translate-x-12 -translate-y-6" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">کارمزد معاملات</h3>
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {currentPrice.fee}
                    <span className="text-base font-normal text-gray-600 mr-2">درصد</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">برای خرید و فروش</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DigitalGoldTrading
              currentPrice={currentPrice}
              onBuy={handleBuy}
              onSell={handleSell}
            />
            <DigitalGoldBalance balance={balance} />
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card hover-float hover-glow">
              <div className="relative overflow-hidden p-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-full blur-2xl transform translate-x-12 -translate-y-6" />
                <div className="relative">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">امنیت بالا</h3>
                  <p className="text-gray-600">
                    تمامی معاملات با بالاترین استانداردهای امنیتی انجام می‌شود و موجودی شما در گاوصندوق‌های استاندارد نگهداری می‌شود.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card hover-float hover-glow">
              <div className="relative overflow-hidden p-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-full blur-2xl transform translate-x-12 -translate-y-6" />
                <div className="relative">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">سرعت بالا</h3>
                  <p className="text-gray-600">
                    معاملات به صورت آنی انجام می‌شود و نیازی به مراجعه حضوری نیست. قیمت‌ها به صورت لحظه‌ای به‌روزرسانی می‌شود.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card hover-float hover-glow">
              <div className="relative overflow-hidden p-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-full blur-2xl transform translate-x-12 -translate-y-6" />
                <div className="relative">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">قیمت رقابتی</h3>
                  <p className="text-gray-600">
                    بهترین قیمت‌های بازار را با کمترین کارمزد ارائه می‌دهیم. قیمت‌ها بر اساس بازار جهانی و داخلی تعیین می‌شود.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 