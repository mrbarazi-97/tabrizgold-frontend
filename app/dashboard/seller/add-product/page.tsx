'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

interface ProductForm {
  title: string;
  description: string;
  weight: string; // Weight in grams
  laborCost: string; // Labor cost (اجرت)
  profitMargin: string; // Profit margin (سود)
  tax: string; // Tax percentage
  category: string;
  purity: string;
  images: FileList | null;
}

export default function AddProduct() {
  const router = useRouter();
  const [formData, setFormData] = useState<ProductForm>({
    title: '',
    description: '',
    weight: '',
    laborCost: '',
    profitMargin: '',
    tax: '',
    category: 'rings',
    purity: '18',
    images: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be an API call to save the product
    console.log('Saving product:', formData);
    // Redirect to the seller's products page
    router.push('/dashboard/seller');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, images: e.target.files }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              افزودن محصول جدید
            </h1>
            <button
              onClick={() => router.back()}
              className="text-gray-600 hover:text-gray-900"
            >
              بازگشت
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  نام محصول
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  دسته‌بندی
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="rings">انگشتر</option>
                  <option value="necklaces">گردنبند</option>
                  <option value="earrings">گوشواره</option>
                  <option value="bracelets">دستبند</option>
                </select>
              </div>

              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                  وزن (گرم)
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  step="0.01"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="purity" className="block text-sm font-medium text-gray-700 mb-1">
                  عیار
                </label>
                <select
                  id="purity"
                  name="purity"
                  value={formData.purity}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="18">۱۸ عیار</option>
                  <option value="24">۲۴ عیار</option>
                </select>
              </div>

              <div>
                <label htmlFor="laborCost" className="block text-sm font-medium text-gray-700 mb-1">
                  اجرت (تومان)
                </label>
                <input
                  type="number"
                  id="laborCost"
                  name="laborCost"
                  value={formData.laborCost}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="profitMargin" className="block text-sm font-medium text-gray-700 mb-1">
                  سود (درصد)
                </label>
                <input
                  type="number"
                  id="profitMargin"
                  name="profitMargin"
                  value={formData.profitMargin}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="tax" className="block text-sm font-medium text-gray-700 mb-1">
                  مالیات (درصد)
                </label>
                <input
                  type="number"
                  id="tax"
                  name="tax"
                  value={formData.tax}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="images" className="block text-sm font-medium text-gray-700 mb-1">
                  تصاویر محصول
                </label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  onChange={handleFileChange}
                  accept="image/*"
                  multiple
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  حداکثر ۵ تصویر با فرمت JPG یا PNG
                </p>
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                توضیحات محصول
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                ثبت محصول
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
} 