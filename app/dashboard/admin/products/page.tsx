'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/app/types/product';

// Mock data - would come from an API in a real application
const mockProducts: (Product & { status: 'pending' | 'approved' | 'rejected' })[] = [
  {
    id: 1,
    name: 'النگو طلا 18 عیار',
    description: 'النگو طلا 18 عیار با طراحی زیبا و ظریف',
    weight: 4.2,
    purity: 0.750,
    basePrice: 12500000,
    laborCost: 2500000,
    profitMargin: 10,
    discount: 5,
    images: [
      'https://fakeimg.pl/600x400/FFD700/000/?text=النگو+طلا',
      'https://fakeimg.pl/600x400/FFD700/000/?text=النگو+طلا+2'
    ],
    category: 'النگو',
    inStock: true,
    status: 'pending'
  },
  {
    id: 2,
    name: 'گردنبند طلا 18 عیار',
    description: 'گردنبند طلا 18 عیار با زنجیر ظریف',
    weight: 2.8,
    purity: 0.750,
    basePrice: 8500000,
    laborCost: 1800000,
    profitMargin: 12,
    images: [
      'https://fakeimg.pl/600x400/FFD700/000/?text=گردنبند+طلا',
      'https://fakeimg.pl/600x400/FFD700/000/?text=گردنبند+طلا+2'
    ],
    category: 'گردنبند',
    inStock: true,
    status: 'pending'
  },
  // Add more mock products as needed
];

export default function AdminProducts() {
  const [products, setProducts] = useState(mockProducts);
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleStatusChange = (productId: number, newStatus: 'approved' | 'rejected') => {
    setProducts(products.map(product => 
      product.id === productId ? { ...product, status: newStatus } : product
    ));
  };

  const handleEdit = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (editedProduct: (typeof products)[0]) => {
    setProducts(products.map(product => 
      product.id === editedProduct.id ? editedProduct : product
    ));
    setIsEditModalOpen(false);
    setSelectedProduct(null);
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">مدیریت محصولات</h1>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">تصویر</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">عنوان</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">قیمت</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">وضعیت</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">عملیات</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="relative w-12 h-12">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatPrice(product.basePrice)} تومان
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${product.status === 'approved' ? 'bg-green-100 text-green-800' : 
                      product.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'}`}
                  >
                    {product.status === 'approved' ? 'تایید شده' :
                     product.status === 'rejected' ? 'رد شده' : 'در انتظار تایید'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 space-x-reverse">
                  {product.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleStatusChange(product.id, 'approved')}
                        className="text-green-600 hover:text-green-900 ml-2"
                      >
                        تایید
                      </button>
                      <button
                        onClick={() => handleStatusChange(product.id, 'rejected')}
                        className="text-red-600 hover:text-red-900 ml-2"
                      >
                        رد
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => handleEdit(product)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h2 className="text-xl font-bold mb-4">ویرایش محصول</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSaveEdit(selectedProduct);
            }}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    عنوان محصول
                  </label>
                  <input
                    type="text"
                    value={selectedProduct.name}
                    onChange={(e) => setSelectedProduct({
                      ...selectedProduct,
                      name: e.target.value
                    })}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    قیمت (تومان)
                  </label>
                  <input
                    type="number"
                    value={selectedProduct.basePrice}
                    onChange={(e) => setSelectedProduct({
                      ...selectedProduct,
                      basePrice: parseInt(e.target.value)
                    })}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 space-x-reverse">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  ذخیره تغییرات
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 