'use client';

import { Product } from '@/app/types/product';
import ProductCard from '@/app/components/ProductCard';

const products: Product[] = [
  {
    id: 1,
    name: 'انگشتر طلا ۱۸ عیار با نگین الماس',
    description: 'انگشتر طلا ۱۸ عیار با نگین الماس و طراحی منحصر به فرد',
    weight: 4.2,
    purity: 0.750,
    basePrice: 45800000,
    laborCost: 2500000,
    profitMargin: 12,
    discount: 15,
    images: ['https://fakeimg.pl/600x600/cccccc/909090?text=Ring'],
    category: 'rings',
    inStock: true
  },
  {
    id: 2,
    name: 'گردنبند طلا با طرح فیوژن',
    description: 'گردنبند طلا با طرح فیوژن و زنجیر ظریف',
    weight: 6.8,
    purity: 0.750,
    basePrice: 28500000,
    laborCost: 1950000,
    profitMargin: 10,
    images: ['https://fakeimg.pl/600x600/cccccc/909090?text=Necklace'],
    category: 'necklaces',
    inStock: true
  },
  {
    id: 3,
    name: 'دستبند طلا و چرم',
    description: 'دستبند طلا و چرم با طراحی مدرن',
    weight: 3.5,
    purity: 0.750,
    basePrice: 12500000,
    laborCost: 950000,
    profitMargin: 15,
    discount: 10,
    images: ['https://fakeimg.pl/600x600/cccccc/909090?text=Bracelet'],
    category: 'bracelets',
    inStock: true
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">محصولات</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
} 