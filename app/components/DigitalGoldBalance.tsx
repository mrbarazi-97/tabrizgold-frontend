'use client';

import { UserGoldBalance, DigitalGoldTransaction } from '../types/digital-gold';

interface DigitalGoldBalanceProps {
  balance: UserGoldBalance;
}

export default function DigitalGoldBalance({ balance }: DigitalGoldBalanceProps) {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getTransactionStatusText = (status: DigitalGoldTransaction['status']) => {
    switch (status) {
      case 'completed':
        return 'تکمیل شده';
      case 'pending':
        return 'در حال انجام';
      case 'cancelled':
        return 'لغو شده';
      default:
        return status;
    }
  };

  const getTransactionTypeText = (type: DigitalGoldTransaction['type']) => {
    return type === 'buy' ? 'خرید' : 'فروش';
  };

  return (
    <div className="glass-card">
      <div className="relative overflow-hidden p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-full blur-3xl transform translate-x-32 -translate-y-16" />
        <div className="relative">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">موجودی طلای دیجیتال</h2>
            <div className="glass p-6 rounded-2xl bg-gradient-to-br from-amber-500/5 to-amber-600/5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 mb-1">موجودی کل</p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                    {balance.totalWeight.toFixed(3)}
                    <span className="text-base font-normal text-gray-600 mr-2">گرم</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-200/50">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">تاریخچه معاملات</h3>
            <div className="space-y-4">
              {balance.transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="glass p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'buy'
                          ? 'bg-gradient-to-br from-green-500 to-green-600'
                          : 'bg-gradient-to-br from-red-500 to-red-600'
                      } shadow-lg ${
                        transaction.type === 'buy'
                          ? 'shadow-green-200/50'
                          : 'shadow-red-200/50'
                      }`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {transaction.type === 'buy' ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          )}
                        </svg>
                      </div>
                      <div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          transaction.type === 'buy'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {getTransactionTypeText(transaction.type)}
                        </span>
                        <div className="text-sm text-gray-500 mt-1">
                          {formatDate(transaction.createdAt)}
                        </div>
                      </div>
                    </div>
                    <span className={`modern-badge ${
                      transaction.status === 'completed'
                        ? 'modern-badge-success'
                        : transaction.status === 'cancelled'
                        ? 'modern-badge-error'
                        : 'modern-badge-warning'
                    }`}>
                      {getTransactionStatusText(transaction.status)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass p-3 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">وزن</div>
                      <div className="font-medium">{transaction.weight.toFixed(3)} گرم</div>
                    </div>
                    
                    <div className="glass p-3 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">قیمت هر گرم</div>
                      <div className="font-medium">{formatPrice(transaction.price)} تومان</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 glass p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">کارمزد:</span>
                      <span className="font-medium">{formatPrice(transaction.fee)} تومان</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                      <span className="font-medium">مبلغ کل:</span>
                      <span className={`text-lg font-bold ${transaction.type === 'buy' ? 'text-red-600' : 'text-green-600'}`}>
                        {formatPrice(transaction.price * transaction.weight + transaction.fee)} تومان
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 