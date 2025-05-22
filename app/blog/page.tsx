'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Mock data - would come from an API in a real application
const blogPosts = [
  {
    id: 1,
    title: 'راهنمای خرید طلا و جواهرات',
    excerpt: 'در این مقاله به نکات مهم در خرید طلا و جواهرات می‌پردازیم و شما را با اصطلاحات رایج در این حوزه آشنا می‌کنیم.',
    image: 'https://fakeimg.pl/800x400/cccccc/909090?text=Jewelry+Guide',
    category: 'راهنمای خرید',
    author: 'سارا احمدی',
    date: '۱۵ اسفند ۱۴۰۲',
    readTime: '۸ دقیقه',
  },
  {
    id: 2,
    title: 'ترندهای طلا و جواهرات در سال ۱۴۰۳',
    excerpt: 'بررسی جدیدترین ترندهای طراحی طلا و جواهرات در سال جدید و پیش‌بینی سبک‌های محبوب آینده.',
    image: 'https://fakeimg.pl/800x400/cccccc/909090?text=Jewelry+Trends',
    category: 'ترندها',
    author: 'مریم کریمی',
    date: '۱۰ اسفند ۱۴۰۲',
    readTime: '۶ دقیقه',
  },
  {
    id: 3,
    title: 'نگهداری از جواهرات',
    excerpt: 'آموزش اصولی نگهداری از طلا و جواهرات برای افزایش طول عمر و حفظ زیبایی آنها.',
    image: 'https://fakeimg.pl/800x400/cccccc/909090?text=Jewelry+Care',
    category: 'نگهداری',
    author: 'علی محمدی',
    date: '۵ اسفند ۱۴۰۲',
    readTime: '۵ دقیقه',
  },
  {
    id: 4,
    title: 'تاریخچه جواهرسازی در ایران',
    excerpt: 'مروری بر تاریخ هنر جواهرسازی در ایران و تأثیر آن بر صنعت جهانی جواهرات.',
    image: 'https://fakeimg.pl/800x400/cccccc/909090?text=Jewelry+History',
    category: 'تاریخچه',
    author: 'دکتر رضا کریمی',
    date: '۱ اسفند ۱۴۰۲',
    readTime: '۱۰ دقیقه',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Post */}
        <div className="mb-12">
          <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
            <Image
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
              <div className="absolute bottom-0 p-6 text-white">
                <span className="inline-block px-3 py-1 bg-blue-500 rounded-full text-sm font-medium mb-2">
                  {blogPosts[0].category}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  {blogPosts[0].title}
                </h1>
                <p className="text-gray-200 mb-4">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-sm">
                  <span>{blogPosts[0].author}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readTime} مطالعه</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-2">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} مطالعه</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            عضویت در خبرنامه
          </h2>
          <p className="text-gray-600 mb-6">
            برای دریافت آخرین مقالات و اخبار دنیای جواهرات در خبرنامه ما عضو شوید.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              عضویت
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
} 