'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { LaborCost } from '../../../types/product';

interface ProductForm {
  title: string;
  description: string;
  weight: string; // Weight in grams
  laborCostType: 'fixed' | 'percentage';
  laborCostValue: string;
  profitMargin: string; // Profit margin (سود)
  tax: string; // Tax percentage
  category: string;
  purity: string;
  goldType: 'new' | 'used';
  images: FileList | null;
}

export default function AddProduct() {
  const router = useRouter();
  const [formData, setFormData] = useState<ProductForm>({
    title: '',
    description: '',
    weight: '',
    laborCostType: 'fixed',
    laborCostValue: '',
    profitMargin: '',
    tax: '',
    category: 'rings',
    purity: '18',
    goldType: 'new',
    images: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be an API call to save the product
    console.log('Saving product:', {
      ...formData,
      laborCost: {
        type: formData.laborCostType,
        value: parseFloat(formData.laborCostValue)
      }
    });
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
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            افزودن محصول جدید
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  عنوان محصول
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
                <label htmlFor="goldType" className="block text-sm font-medium text-gray-700 mb-1">
                  نوع طلا
                </label>
                <select
                  id="goldType"
                  name="goldType"
                  value={formData.goldType}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="new">طلای نو</option>
                  <option value="used">طلای دست دوم</option>
                </select>
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

              {/* Labor Cost Section */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  نوع اجرت
                </label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="laborCostType"
                      value="fixed"
                      checked={formData.laborCostType === 'fixed'}
                      onChange={handleChange}
                      className="text-blue-500 focus:ring-blue-500"
                    />
                    <span className="mr-2">مقطوع (تومان)</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="laborCostType"
                      value="percentage"
                      checked={formData.laborCostType === 'percentage'}
                      onChange={handleChange}
                      className="text-blue-500 focus:ring-blue-500"
                    />
                    <span className="mr-2">درصدی</span>
                  </label>
                </div>
                <div>
                  <label htmlFor="laborCostValue" className="block text-sm font-medium text-gray-700 mb-1">
                    {formData.laborCostType === 'fixed' ? 'مبلغ اجرت (تومان)' : 'درصد اجرت'}
                  </label>
                  <input
                    type="number"
                    id="laborCostValue"
                    name="laborCostValue"
                    value={formData.laborCostValue}
                    onChange={handleChange}
                    step={formData.laborCostType === 'percentage' ? "0.1" : "1000"}
                    min="0"
                    max={formData.laborCostType === 'percentage' ? "100" : undefined}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
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
                rows={4}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            {/* Images */}
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

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                ذخیره محصول
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
} 