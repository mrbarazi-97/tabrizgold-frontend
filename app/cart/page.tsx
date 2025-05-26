'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { FaTrash } from 'react-icons/fa';

export default function CartPage() {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-semibold mb-4">سبد خرید شما خالی است</h2>
        <Link
          href="/products"
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          مشاهده محصولات
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">سبد خرید</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {state.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center gap-4 border rounded-lg p-4 mb-4"
            >
              <div className="relative w-24 h-24">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-1 text-center md:text-right">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600">
                  {item.price.toLocaleString()} تومان
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center border rounded-md"
                >
                  -
                </button>
                <span className="w-12 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center border rounded-md"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="border rounded-lg p-4 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">خلاصه سفارش</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>تعداد اقلام:</span>
                <span>{state.items.reduce((acc, item) => acc + item.quantity, 0)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>جمع کل:</span>
                <span>{state.total.toLocaleString()} تومان</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="block w-full bg-primary text-white text-center py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              ادامه فرآیند خرید
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 