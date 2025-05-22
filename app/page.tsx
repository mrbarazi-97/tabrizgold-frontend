'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductSlider from './components/ProductSlider';

// Sample data - In a real app, this would come from an API
const featuredProducts = [
  {
    id: 1,
    title: 'انگشتر طلا ۱۸ عیار با نگین الماس',
    price: 45800000,
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Ring',
    category: 'rings',
  },
  {
    id: 2,
    title: 'گردنبند طلا با طرح فیوژن',
    price: 28500000,
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Necklace',
    category: 'necklaces',
  },
  {
    id: 3,
    title: 'دستبند طلا و چرم',
    price: 12500000,
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Bracelet',
    category: 'bracelets',
  },
  {
    id: 4,
    title: 'نیم ست طلای عروس',
    price: 85900000,
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Bridal+Set',
    category: 'sets',
  },
];

const newArrivals = [
  {
    id: 5,
    title: 'گوشواره طلا با نگین یاقوت',
    price: 32500000,
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Earrings',
    category: 'earrings',
  },
  {
    id: 6,
    title: 'انگشتر طلا سفید',
    price: 41200000,
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=White+Gold+Ring',
    category: 'rings',
  },
  {
    id: 7,
    title: 'گردنبند مروارید',
    price: 55800000,
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Pearl+Necklace',
    category: 'necklaces',
  },
  {
    id: 8,
    title: 'دستبند النگویی طلا',
    price: 38900000,
    image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Gold+Bangle',
    category: 'bracelets',
  },
];

const categories = [
  { id: 1, name: 'انگشتر', icon: '💍' },
  { id: 2, name: 'گردنبند', icon: '📿' },
  { id: 3, name: 'گوشواره', icon: '👂' },
  { id: 4, name: 'دستبند', icon: '⌚' },
  { id: 5, name: 'ست عروس', icon: '👰' },
  { id: 6, name: 'هدیه خاص', icon: '🎁' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <div className="relative h-[600px]">
          <Image
            src="https://fakeimg.pl/1920x600/cccccc/909090?text=Luxury+Jewelry"
            alt="طلای تبریز"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                طلای تبریز
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                جواهرات اصیل ایرانی با بیش از نیم قرن تجربه
              </p>
              <Link
                href="/categories"
                className="inline-block bg-gold text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                مشاهده محصولات
              </Link>
            </div>
          </div>
        </div>

        {/* Product Sliders */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Products Slider */}
          <section className="py-12">
            <ProductSlider
              title="محصولات ویژه"
              products={featuredProducts}
            />
          </section>

          {/* New Arrivals Slider */}
          <section className="py-12">
            <ProductSlider
              title="جدیدترین محصولات"
              products={newArrivals}
            />
          </section>
        </div>

        {/* Featured Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              دسته‌بندی محصولات
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'انگشتر', image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Rings', href: '/categories?category=rings' },
                { title: 'گردنبند', image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Necklaces', href: '/categories?category=necklaces' },
                { title: 'گوشواره', image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Earrings', href: '/categories?category=earrings' },
                { title: 'دستبند', image: 'https://fakeimg.pl/600x600/cccccc/909090?text=Bracelets', href: '/categories?category=bracelets' },
              ].map((category, index) => (
                <Link key={index} href={category.href} className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">تضمین اصالت</h3>
                <p className="text-gray-600">
                  تمامی محصولات دارای گواهی اصالت و ضمانت‌نامه معتبر هستند
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">تحویل سریع</h3>
                <p className="text-gray-600">
                  ارسال سریع و مطمئن به سراسر کشور با بیمه کامل محصول
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">خرید مطمئن</h3>
                <p className="text-gray-600">
                  پرداخت امن و مطمئن با درگاه‌های معتبر بانکی
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
