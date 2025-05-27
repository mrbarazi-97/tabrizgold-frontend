'use client';

import Image from 'next/image';
import Link from 'next/link';

import ProductSlider from './ProductSlider';
import { Product } from '../types/product';

export default function HomePage() {
  const categories = [
    { 
      title: 'طلای زنانه', 
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&auto=format&fit=crop&q=60' 
    },
    { 
      title: 'طلای مردانه', 
      image: 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=800&auto=format&fit=crop&q=60' 
    },
    { 
      title: 'طلای بچگانه', 
      image: 'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?w=800&auto=format&fit=crop&q=60' 
    },
    { 
      title: 'طلای دیجیتال', 
      image: 'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=800&auto=format&fit=crop&q=60' 
    },
  ];

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: 'النگو طلا 18 عیار',
      description: 'النگو طلا 18 عیار زنانه با طراحی منحصر به فرد',
      weight: 15.5,
      purity: 18,
      basePrice: 15000000,
      laborCost: 1200000,
      profitMargin: 7,
      discount: 5,
      images: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=60'],
      category: 'women',
      inStock: true
    },
    {
      id: 2,
      name: 'گردنبند طلا',
      description: 'گردنبند طلا 18 عیار با نگین برلیان',
      weight: 12.3,
      purity: 18,
      basePrice: 25000000,
      laborCost: 2500000,
      profitMargin: 8,
      images: ['https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&auto=format&fit=crop&q=60'],
      category: 'women',
      inStock: true
    },
    {
      id: 3,
      name: 'انگشتر طلا مردانه',
      description: 'انگشتر طلا 18 عیار مردانه',
      weight: 8.2,
      purity: 18,
      basePrice: 8500000,
      laborCost: 850000,
      profitMargin: 6,
      discount: 10,
      images: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=60'],
      category: 'men',
      inStock: true
    },
    {
      id: 4,
      name: 'دستبند طلا بچگانه',
      description: 'دستبند طلا 18 عیار مخصوص کودکان',
      weight: 4.5,
      purity: 18,
      basePrice: 5500000,
      laborCost: 500000,
      profitMargin: 5,
      images: ['https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&auto=format&fit=crop&q=60'],
      category: 'kids',
      inStock: true
    }
  ];

  return (
    <div>
    
      
      {/* Hero Section */}
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-400 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full md:w-2/3">
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 text-center shadow-xl border border-white/20">
                <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-8">
                  طلای تبریز
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  معتبرترین فروشگاه آنلاین طلا و جواهرات در ایران
                </p>
                <p className="text-gray-600 mb-8">
                  با بیش از نیم قرن تجربه در ارائه محصولات با کیفیت و اصیل
                </p>
                <Link 
                  href="/products"
                  className="btn-primary inline-block text-lg px-8 py-3"
                >
                  مشاهده محصولات
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            دسته‌بندی محصولات
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="card p-4 text-center transform transition-transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    priority={index < 2}
                  />
                </div>
                <h3 className="text-lg font-semibold">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            محصولات ویژه
          </h2>
          <ProductSlider title="محصولات پرفروش" products={featuredProducts} />
        </div>
      </div>

   
    </div>
  );
} 