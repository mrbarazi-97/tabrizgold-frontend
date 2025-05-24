'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Order {
  id: number;
  customerName: string;
  orderDate: string;
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: Array<{
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  shippingAddress: string;
  phoneNumber: string;
}

// Mock data - would come from an API in a real application
const mockOrders: Order[] = [
  {
    id: 1,
    customerName: 'علی محمدی',
    orderDate: '1402/12/15',
    totalAmount: 45800000,
    status: 'pending',
    items: [
      {
        id: 1,
        title: 'انگشتر طلا ۱۸ عیار',
        price: 45800000,
        quantity: 1,
        image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Ring+1',
      }
    ],
    shippingAddress: 'تهران، خیابان ولیعصر، پلاک ۱۲۳',
    phoneNumber: '09123456789'
  },
  // Add more mock orders as needed
];

export default function AdminOrders() {
  const [orders, setOrders] = useState(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const handleStatusChange = (orderId: number, newStatus: Order['status']) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'در انتظار تایید';
      case 'processing':
        return 'در حال پردازش';
      case 'shipped':
        return 'ارسال شده';
      case 'delivered':
        return 'تحویل داده شده';
      case 'cancelled':
        return 'لغو شده';
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">مدیریت سفارشات</h1>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">شماره سفارش</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">نام مشتری</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">تاریخ</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">مبلغ کل</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">وضعیت</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">عملیات</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.customerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.orderDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatPrice(order.totalAmount)} تومان
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 space-x-reverse">
                  <button
                    onClick={() => {
                      setSelectedOrder(order);
                      setIsDetailsModalOpen(true);
                    }}
                    className="text-blue-600 hover:text-blue-900 ml-2"
                  >
                    جزئیات
                  </button>
                  {order.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleStatusChange(order.id, 'processing')}
                        className="text-green-600 hover:text-green-900 ml-2"
                      >
                        تایید و پردازش
                      </button>
                      <button
                        onClick={() => handleStatusChange(order.id, 'cancelled')}
                        className="text-red-600 hover:text-red-900"
                      >
                        لغو
                      </button>
                    </>
                  )}
                  {order.status === 'processing' && (
                    <button
                      onClick={() => handleStatusChange(order.id, 'shipped')}
                      className="text-purple-600 hover:text-purple-900"
                    >
                      ارسال شد
                    </button>
                  )}
                  {order.status === 'shipped' && (
                    <button
                      onClick={() => handleStatusChange(order.id, 'delivered')}
                      className="text-green-600 hover:text-green-900"
                    >
                      تحویل شد
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {isDetailsModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">جزئیات سفارش #{selectedOrder.id}</h2>
              <button
                onClick={() => setIsDetailsModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">اطلاعات مشتری</h3>
                  <p className="mt-1 text-sm text-gray-900">{selectedOrder.customerName}</p>
                  <p className="mt-1 text-sm text-gray-900">{selectedOrder.phoneNumber}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">آدرس تحویل</h3>
                  <p className="mt-1 text-sm text-gray-900">{selectedOrder.shippingAddress}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">اقلام سفارش</h3>
                <div className="space-y-2">
                  {selectedOrder.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 space-x-reverse">
                      <div className="relative w-16 h-16">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-500">
                          {formatPrice(item.price)} تومان × {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-500">مبلغ کل</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatPrice(selectedOrder.totalAmount)} تومان
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsDetailsModalOpen(false)}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 