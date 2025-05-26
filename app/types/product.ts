export type ProductCondition = 'new' | 'used';

export interface ProductSeller {
  name: string;
  rating: number;
  location: string;
  totalSales?: number;
  memberSince?: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  weight: number;
  purity: number;
  basePrice: number;
  laborCost: number;
  profitMargin: number;
  discount?: number;
  images: string[];
  category: string;
  inStock: boolean;
}

export interface ProductCardProps extends Product {} 