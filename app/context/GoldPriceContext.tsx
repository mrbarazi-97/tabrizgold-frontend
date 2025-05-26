'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface GoldPrices {
  gram18: number;  // قیمت هر گرم طلای 18 عیار
  gram24: number;  // قیمت هر گرم طلای 24 عیار
  ounce: number;   // قیمت هر اونس جهانی
  mesghal: number; // قیمت هر مثقال طلا
  lastUpdated: Date;
}

const GoldPriceContext = createContext<{
  prices: GoldPrices | null;
  loading: boolean;
  error: string | null;
  updatePrices: () => Promise<void>;
}>({
  prices: null,
  loading: false,
  error: null,
  updatePrices: async () => {},
});

export const GoldPriceProvider = ({ children }: { children: React.ReactNode }) => {
  const [prices, setPrices] = useState<GoldPrices | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPrices = async () => {
    setLoading(true);
    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/gold-prices');
      const data = await response.json();
      setPrices(data);
      setError(null);
    } catch (err) {
      setError('خطا در دریافت قیمت‌های طلا');
      console.error('Error fetching gold prices:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <GoldPriceContext.Provider value={{ prices, loading, error, updatePrices: fetchPrices }}>
      {children}
    </GoldPriceContext.Provider>
  );
};

export const useGoldPrice = () => {
  const context = useContext(GoldPriceContext);
  if (!context) {
    throw new Error('useGoldPrice must be used within a GoldPriceProvider');
  }
  return context;
}; 