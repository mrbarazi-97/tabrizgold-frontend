'use client';

import { useState } from 'react';
import { DigitalGoldPrice } from '../types/digital-gold';

interface DigitalGoldTradingProps {
  currentPrice: DigitalGoldPrice;
  onBuy: (weight: number) => void;
  onSell: (weight: number) => void;
}

export default function DigitalGoldTrading({
  currentPrice,
  onBuy,
  onSell,
}: DigitalGoldTradingProps) {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [weight, setWeight] = useState('');
  const [amount, setAmount] = useState('');

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleWeightChange = (value: string) => {
    setWeight(value);
    if (value) {
      const price = tradeType === 'buy' ? currentPrice.buyPrice : currentPrice.sellPrice;
      const baseAmount = parseFloat(value) * price;
      const feeAmount = baseAmount * (currentPrice.fee / 100);
      setAmount(String(baseAmount + (tradeType === 'buy' ? feeAmount : -feeAmount)));
    } else {
      setAmount('');
    }
  };

  const handleAmountChange = (value: string) => {
    setAmount(value);
    if (value) {
      const price = tradeType === 'buy' ? currentPrice.buyPrice : currentPrice.sellPrice;
      const feeMultiplier = 1 + (tradeType === 'buy' ? currentPrice.fee / 100 : -currentPrice.fee / 100);
      const weightValue = parseFloat(value) / (price * feeMultiplier);
      setWeight(String(weightValue.toFixed(3)));
    } else {
      setWeight('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const weightValue = parseFloat(weight);
    if (weightValue > 0) {
      if (tradeType === 'buy') {
        onBuy(weightValue);
      } else {
        onSell(weightValue);
      }
      setWeight('');
      setAmount('');
    }
  };

  return (
    <div className="glass-card">
      <div className="relative overflow-hidden p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl transform translate-x-32 -translate-y-16" />
        <div className="relative">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">معاملات طلای آبشده دیجیتال</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Trade Type Selection */}
            <div className="glass p-2 rounded-xl">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setTradeType('buy');
                    handleWeightChange(weight);
                  }}
                  className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                    tradeType === 'buy'
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-200/50 transform scale-[1.02]'
                      : 'bg-white/50 text-gray-600 hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    خرید
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTradeType('sell');
                    handleWeightChange(weight);
                  }}
                  className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                    tradeType === 'sell'
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-200/50 transform scale-[1.02]'
                      : 'bg-white/50 text-gray-600 hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                    فروش
                  </div>
                </button>
              </div>
            </div>

            {/* Weight Input */}
            <div>
              <label htmlFor="weight" className="modern-label">
                وزن (گرم)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <input
                  type="number"
                  id="weight"
                  value={weight}
                  onChange={(e) => handleWeightChange(e.target.value)}
                  step="0.001"
                  min="0.001"
                  className="modern-input pr-12"
                  placeholder="مثال: 1.234"
                  required
                  dir="ltr"
                />
              </div>
            </div>

            {/* Amount Input */}
            <div>
              <label htmlFor="amount" className="modern-label">
                مبلغ (تومان)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => handleAmountChange(e.target.value)}
                  step="1000"
                  min="0"
                  className="modern-input pr-12"
                  placeholder="مثال: 1,000,000"
                  required
                  dir="ltr"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-4 px-6 rounded-xl text-white font-medium text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                tradeType === 'buy'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-200/50'
                  : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-200/50'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {tradeType === 'buy' ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    خرید طلا
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                    فروش طلا
                  </>
                )}
              </div>
            </button>

            {/* Fee Information */}
            <div className="glass p-4 rounded-xl">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>کارمزد معامله:</span>
                <span className="font-medium">
                  {formatPrice(parseFloat(amount || '0') * (currentPrice.fee / 100))} تومان
                </span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-600">مبلغ نهایی:</span>
                <span className={`font-bold ${tradeType === 'buy' ? 'text-green-600' : 'text-red-600'}`}>
                  {formatPrice(parseFloat(amount || '0'))} تومان
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 