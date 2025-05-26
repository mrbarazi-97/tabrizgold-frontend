'use client';

import { ReactNode } from 'react';
import { CartProvider } from './context/CartContext';
import { GoldPriceProvider } from './context/GoldPriceContext';
import { Toaster } from 'react-hot-toast';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <GoldPriceProvider>
      <CartProvider>
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              fontFamily: 'IRANSans, sans-serif',
            },
          }}
        />
      </CartProvider>
    </GoldPriceProvider>
  );
} 