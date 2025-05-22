'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Sample data - In a real app, this would come from an API
const products = [
  {
    id: 1,
    title: 'انگشتر طلا ۱۸ عیار',
    price: 45800000,
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Ring',
    status: 'active',
    stock: 5,
    sales: 12,
  },
  {
    id: 2,
    title: 'گردنبند طلا و جواهر',
    price: 68500000,
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Necklace',
    status: 'active',
    stock: 3,
    sales: 8,
  },
];

export default function SellerDashboard() {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            پنل فروشنده
          </h1>
          <Link
            href="/dashboard/seller/add-product"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            افزودن محصول جدید
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              فروش کل
            </h3>
            <p className="text-3xl font-bold text-blue-600">
              {formatPrice(1250000000)} تومان
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              تعداد محصولات
            </h3>
            <p className="text-3xl font-bold text-blue-600">
              {products.length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              سفارشات در انتظار
            </h3>
            <p className="text-3xl font-bold text-blue-600">
              ۳
            </p>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              محصولات شما
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
                    محصول
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
                    قیمت
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
                    موجودی
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
                    فروش
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
                    وضعیت
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
                    عملیات
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 relative rounded-lg overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="mr-4">
                          <div className="text-sm font-medium text-gray-900">
                            {product.title}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatPrice(product.price)} تومان
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.stock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.sales}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        فعال
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-500 hover:text-blue-600">
                        ویرایش
                      </button>
                      <span className="mx-2">|</span>
                      <button className="text-red-500 hover:text-red-600">
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 