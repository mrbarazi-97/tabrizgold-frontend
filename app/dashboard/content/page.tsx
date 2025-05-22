'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  status: 'draft' | 'published';
  createdAt: string;
}

export default function ContentDashboard() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [newArticle, setNewArticle] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'راهنمای خرید',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be an API call
    const article: Article = {
      id: Date.now(),
      ...newArticle,
      status: 'draft',
      createdAt: new Date().toISOString(),
    };
    setArticles([article, ...articles]);
    setNewArticle({
      title: '',
      excerpt: '',
      content: '',
      category: 'راهنمای خرید',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            پنل مدیریت محتوا
          </h1>

          {/* Create New Article Form */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  عنوان مقاله
                </label>
                <input
                  type="text"
                  id="title"
                  value={newArticle.title}
                  onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
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
                  value={newArticle.category}
                  onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="راهنمای خرید">راهنمای خرید</option>
                  <option value="ترندها">ترندها</option>
                  <option value="نگهداری">نگهداری</option>
                  <option value="تاریخچه">تاریخچه</option>
                </select>
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                  خلاصه مقاله
                </label>
                <textarea
                  id="excerpt"
                  value={newArticle.excerpt}
                  onChange={(e) => setNewArticle({ ...newArticle, excerpt: e.target.value })}
                  rows={2}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  متن مقاله
                </label>
                <textarea
                  id="content"
                  value={newArticle.content}
                  onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
                  rows={10}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  ذخیره پیش‌نویس
                </button>
              </div>
            </div>
          </form>

          {/* Articles List */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              مقالات شما
            </h2>
            <div className="space-y-4">
              {articles.map((article) => (
                <div key={article.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">{article.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      article.status === 'published' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {article.status === 'published' ? 'منتشر شده' : 'پیش‌نویس'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{article.category}</span>
                    <span>{new Date(article.createdAt).toLocaleDateString('fa-IR')}</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="text-blue-500 hover:text-blue-600 text-sm">
                      ویرایش
                    </button>
                    <button className="text-green-500 hover:text-green-600 text-sm">
                      انتشار
                    </button>
                    <button className="text-red-500 hover:text-red-600 text-sm">
                      حذف
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 