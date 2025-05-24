'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  status: 'draft' | 'pending' | 'published' | 'rejected';
  image: string;
  category: string;
}

// Mock data - would come from an API in a real application
const mockArticles: Article[] = [
  {
    id: 1,
    title: 'راهنمای خرید طلا',
    excerpt: 'آنچه باید قبل از خرید طلا بدانید...',
    content: 'محتوای کامل مقاله در مورد راهنمای خرید طلا...',
    author: 'رضا احمدی',
    publishDate: '1402/12/15',
    status: 'pending',
    image: 'https://fakeimg.pl/600x400/cccccc/909090?text=Article+1',
    category: 'راهنمای خرید'
  },
  // Add more mock articles as needed
];

export default function AdminArticles() {
  const [articles, setArticles] = useState(mockArticles);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleStatusChange = (articleId: number, newStatus: Article['status']) => {
    setArticles(articles.map(article => 
      article.id === articleId ? { ...article, status: newStatus } : article
    ));
  };

  const handleEdit = (article: Article) => {
    setSelectedArticle(article);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (editedArticle: Article) => {
    setArticles(articles.map(article => 
      article.id === editedArticle.id ? editedArticle : article
    ));
    setIsEditModalOpen(false);
    setSelectedArticle(null);
  };

  const getStatusColor = (status: Article['status']) => {
    switch (status) {
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
    }
  };

  const getStatusText = (status: Article['status']) => {
    switch (status) {
      case 'draft':
        return 'پیش‌نویس';
      case 'pending':
        return 'در انتظار تایید';
      case 'published':
        return 'منتشر شده';
      case 'rejected':
        return 'رد شده';
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">مدیریت مقالات</h1>
        <button
          onClick={() => {
            setSelectedArticle({
              id: articles.length + 1,
              title: '',
              excerpt: '',
              content: '',
              author: '',
              publishDate: new Date().toLocaleDateString('fa-IR'),
              status: 'draft',
              image: '',
              category: ''
            });
            setIsEditModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          افزودن مقاله جدید
        </button>
      </div>

      {/* Articles Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">تصویر</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">عنوان</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">نویسنده</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">دسته‌بندی</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">تاریخ</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">وضعیت</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">عملیات</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {articles.map((article) => (
              <tr key={article.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="relative w-16 h-12">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {article.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {article.author}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {article.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {article.publishDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(article.status)}`}>
                    {getStatusText(article.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 space-x-reverse">
                  <button
                    onClick={() => handleEdit(article)}
                    className="text-blue-600 hover:text-blue-900 ml-2"
                  >
                    ویرایش
                  </button>
                  {article.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleStatusChange(article.id, 'published')}
                        className="text-green-600 hover:text-green-900 ml-2"
                      >
                        تایید
                      </button>
                      <button
                        onClick={() => handleStatusChange(article.id, 'rejected')}
                        className="text-red-600 hover:text-red-900"
                      >
                        رد
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit/Create Modal */}
      {isEditModalOpen && selectedArticle && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {selectedArticle.id === articles.length + 1 ? 'افزودن مقاله جدید' : 'ویرایش مقاله'}
              </h2>
              <button
                onClick={() => {
                  setIsEditModalOpen(false);
                  setSelectedArticle(null);
                }}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              handleSaveEdit(selectedArticle);
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    عنوان مقاله
                  </label>
                  <input
                    type="text"
                    value={selectedArticle.title}
                    onChange={(e) => setSelectedArticle({
                      ...selectedArticle,
                      title: e.target.value
                    })}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    خلاصه مقاله
                  </label>
                  <textarea
                    value={selectedArticle.excerpt}
                    onChange={(e) => setSelectedArticle({
                      ...selectedArticle,
                      excerpt: e.target.value
                    })}
                    rows={2}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    محتوای مقاله
                  </label>
                  <textarea
                    value={selectedArticle.content}
                    onChange={(e) => setSelectedArticle({
                      ...selectedArticle,
                      content: e.target.value
                    })}
                    rows={10}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      نویسنده
                    </label>
                    <input
                      type="text"
                      value={selectedArticle.author}
                      onChange={(e) => setSelectedArticle({
                        ...selectedArticle,
                        author: e.target.value
                      })}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      دسته‌بندی
                    </label>
                    <input
                      type="text"
                      value={selectedArticle.category}
                      onChange={(e) => setSelectedArticle({
                        ...selectedArticle,
                        category: e.target.value
                      })}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    تصویر مقاله
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-2 space-x-reverse">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setSelectedArticle(null);
                  }}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  ذخیره
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 