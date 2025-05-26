'use client';

import React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Product } from '@/app/types/product';
import { useCart } from '@/app/context/CartContext';
import { useGoldPrice } from '@/app/context/GoldPriceContext';
import { toast } from 'react-hot-toast';

export default function ProductPage({ params }: { params: { id: string } }) {
  const { dispatch } = useCart();
  const { prices } = useGoldPrice();
  
  const product: Product = {
    id: 1,
    name: 'انگشتر طلا ۱۸ عیار با نگین الماس',
    description: 'انگشتر طلا ۱۸ عیار با نگین الماس و طراحی منحصر به فرد',
    weight: 4.2,
    purity: 0.750,
    basePrice: 45800000,
    laborCost: 2500000,
    profitMargin: 12,
    discount: 15,
    images: [
      'https://fakeimg.pl/600x600/cccccc/909090?text=Ring+1',
      'https://fakeimg.pl/600x600/cccccc/909090?text=Ring+2',
      'https://fakeimg.pl/600x600/cccccc/909090?text=Ring+3'
    ],
    category: 'rings',
    inStock: true
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR').format(amount);
  };

  const calculateCurrentPrice = () => {
    if (!prices) return product.basePrice;
    
    // محاسبه قیمت بر اساس وزن و عیار طلا
    const pricePerGram = prices.gram18; // قیمت هر گرم طلای 18 عیار
    const purityFactor = product.purity / 0.750; // تبدیل عیار به ضریب (مثلاً 18 عیار = 0.750)
    const goldPrice = product.weight * pricePerGram * purityFactor;
    
    // اعمال تخفیف اگر وجود داشته باشد
    const finalGoldPrice = product.discount
      ? goldPrice * (1 - product.discount / 100)
      : goldPrice;
    
    return finalGoldPrice + product.laborCost;
  };

  const currentPrice = calculateCurrentPrice();
  const originalPrice = prices
    ? product.weight * prices.gram18 * (product.purity / 0.750) + product.laborCost
    : product.basePrice + product.laborCost;

  const handleAddToCart = () => {
    if (!product.inStock) return;
    
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id.toString(),
        name: product.name,
        price: currentPrice,
        quantity: 1,
        image: product.images[0]
      }
    });
    
    toast.success('محصول به سبد خرید اضافه شد');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <ol className="flex items-center space-x-2 space-x-reverse">
            <li>
              <a href="/" className="text-gray-500 hover:text-amber-600">خانه</a>
            </li>
            <li>
              <span className="text-gray-400 mx-2">/</span>
            </li>
            <li>
              <a href="/category" className="text-gray-500 hover:text-amber-600">دستبند</a>
            </li>
            <li>
              <span className="text-gray-400 mx-2">/</span>
            </li>
            <li className="text-amber-600">دستبند طلا طرح کارتیه</li>
          </ol>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-white shadow-lg">
              <Image
                src="/images/products/bracelet-1.jpg"
                alt="دستبند طلا طرح کارتیه"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <button key={i} className="aspect-square relative rounded-lg overflow-hidden bg-white shadow hover:ring-2 hover:ring-amber-500 transition-all">
                  <Image
                    src={`/images/products/bracelet-${i}.jpg`}
                    alt={`تصویر ${i}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                دستبند طلا طرح کارتیه
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>۴.۸</span>
                  <span className="text-gray-400">(۱۲۳ نظر)</span>
                </div>
                <span>|</span>
                <span>کد محصول: TB-BR-1234</span>
              </div>
            </div>

            {/* Real-time Price Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">قیمت آنی طلا (هر گرم):</span>
                <span className="font-semibold text-gray-900">۳,۲۵۰,۰۰۰ تومان</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">وزن:</span>
                <span className="font-semibold text-gray-900">۴.۲۵ گرم</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">اجرت ساخت:</span>
                <span className="font-semibold text-gray-900">۱۵٪</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">سود:</span>
                <span className="font-semibold text-gray-900">۷٪</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">مالیات بر ارزش افزوده:</span>
                <span className="font-semibold text-gray-900">۹٪</span>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-bold">قیمت نهایی:</span>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-amber-600">۱۵,۸۵۰,۰۰۰ تومان</div>
                    <div className="text-sm text-gray-500">قیمت به روز شده در ۱۰ دقیقه پیش</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">گالری طلای محمد</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    فروشنده رسمی
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-semibold text-gray-900">۹۸٪</div>
                  <div className="text-gray-500">رضایت خریداران</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-semibold text-gray-900">۵ سال</div>
                  <div className="text-gray-500">سابقه فعالیت</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-semibold text-gray-900">۳,۵۴۲</div>
                  <div className="text-gray-500">محصول فعال</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-amber-600 text-white py-4 rounded-xl hover:bg-amber-700 transition-colors font-semibold">
                افزودن به سبد خرید
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-200 hover:border-amber-600 hover:text-amber-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="features" className="bg-white rounded-2xl shadow-lg p-6">
          <TabsList className="border-b border-gray-200 mb-6">
            <TabsTrigger value="features">ویژگی‌ها</TabsTrigger>
            <TabsTrigger value="description">توضیحات</TabsTrigger>
            <TabsTrigger value="reviews">نظرات کاربران</TabsTrigger>
          </TabsList>

          <TabsContent value="features">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">مشخصات فنی</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">جنس</span>
                    <span className="font-semibold text-gray-900">طلای ۱۸ عیار</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">وزن</span>
                    <span className="font-semibold text-gray-900">۴.۲۵ گرم</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">عیار</span>
                    <span className="font-semibold text-gray-900">۷۵۰</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">کد محصول</span>
                    <span className="font-semibold text-gray-900">TB-BR-1234</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">ویژگی‌های ظاهری</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">رنگ</span>
                    <span className="font-semibold text-gray-900">زرد</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">طول</span>
                    <span className="font-semibold text-gray-900">۱۹ سانتی‌متر</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">عرض</span>
                    <span className="font-semibold text-gray-900">۳ میلی‌متر</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">قفل</span>
                    <span className="font-semibold text-gray-900">قفل مخفی</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="description">
            <div className="prose prose-amber max-w-none">
              <p>
                دستبند طلا طرح کارتیه یکی از محبوب‌ترین و کلاسیک‌ترین مدل‌های دستبند طلا است که با الهام از طراحی‌های برند معروف کارتیه ساخته شده است. این دستبند با طراحی ظریف و زیبا، مناسب استفاده روزمره و مجالس است.
              </p>
              <h3>ویژگی‌های برجسته:</h3>
              <ul>
                <li>طراحی کلاسیک و همیشه مد</li>
                <li>ساخته شده از طلای ۱۸ عیار با خلوص بالا</li>
                <li>قفل مخفی مستحکم و ایمن</li>
                <li>قابلیت تنظیم سایز</li>
                <li>مناسب برای هدیه</li>
              </ul>
              <p>
                این دستبند با گارانتی اصالت و خدمات پس از فروش ارائه می‌شود و دارای شناسنامه و کد رهگیری از اتحادیه طلا و جواهر است.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-8">
              {/* Reviews Summary */}
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900">۴.۸</div>
                  <div className="flex items-center justify-center gap-1 text-amber-400 my-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">از ۱۲۳ نظر</div>
                </div>
                <div className="flex-1 space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-4">
                      <div className="text-sm text-gray-500 w-3">{rating}</div>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-amber-400 rounded-full"
                          style={{ width: `${rating === 5 ? 70 : rating === 4 ? 20 : 5}%` }}
                        />
                      </div>
                      <div className="text-sm text-gray-500 w-12">
                        {rating === 5 ? '70%' : rating === 4 ? '20%' : '5%'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review List */}
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b border-gray-100 pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="font-semibold text-gray-900">علی محمدی</div>
                        <div className="text-sm text-gray-500">۲ هفته پیش</div>
                      </div>
                      <div className="flex items-center gap-1 text-amber-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">
                      کیفیت ساخت عالی، قفل بسیار مطمئن و راحت. از خریدم راضی هستم و به دیگران هم پیشنهاد می‌کنم.
                    </p>
                  </div>
                ))}
              </div>

              {/* Write Review Button */}
              <div className="text-center">
                <button className="bg-amber-600 text-white px-8 py-3 rounded-xl hover:bg-amber-700 transition-colors font-semibold">
                  ثبت نظر جدید
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 