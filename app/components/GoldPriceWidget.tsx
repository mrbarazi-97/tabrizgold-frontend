'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GoldPrice {
    type: string;
    price: number;
    change: number;
    changePercent: number;
    unit: string;
}

interface GoldPriceResponse {
    prices: GoldPrice[];
    lastUpdated: string;
    source: string;
}

export default function GoldPriceWidget() {
    const [prices, setPrices] = useState<GoldPrice[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchPrices = async () => {
        try {
            const response = await fetch('https://localhost:7003/api/goldprices');
            if (!response.ok) {
                throw new Error('Failed to fetch gold prices');
            }
            const data: GoldPriceResponse = await response.json();
            setPrices(data.prices.filter(p => 
                p.type.includes('طلا') || p.type.includes('سکه')
            ));
            setError('');
        } catch (err) {
            setError('خطا در دریافت قیمت‌ها');
            console.error('Error fetching gold prices:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPrices();
        const interval = setInterval(fetchPrices, 300000); // Update every 5 minutes
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (prices.length > 0) {
            const rotationInterval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % prices.length);
            }, 5000); // Rotate every 5 seconds
            return () => clearInterval(rotationInterval);
        }
    }, [prices.length]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-8 text-sm text-gray-600">
                <span className="animate-pulse">در حال دریافت قیمت‌ها...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-8 text-sm text-red-600">
                {error}
            </div>
        );
    }

    if (prices.length === 0) {
        return null;
    }

    const currentPrice = prices[currentIndex];

    return (
        <div className="h-8 overflow-hidden bg-gradient-to-r from-yellow-50 to-yellow-100 px-4 flex items-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex items-center gap-2 text-sm"
                >
                    <span className="font-semibold text-gray-800">{currentPrice.type}:</span>
                    <span className="text-gray-900">
                        {currentPrice.price.toLocaleString('fa-IR')} {currentPrice.unit}
                    </span>
                    <span className={`${currentPrice.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ({currentPrice.change >= 0 ? '+' : ''}
                        {currentPrice.changePercent.toFixed(2)}%)
                    </span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
} 