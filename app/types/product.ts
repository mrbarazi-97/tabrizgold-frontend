export type ProductCondition = 'new' | 'used';

export interface ProductSeller {
  name: string;
  rating: number;
  location: string;
  totalSales?: number;
  memberSince?: string;
}

export interface Product {
  id: string;
  title: string;
  description?: string;
  images?: string[];
  image: string;
  price: number;
  wage: number;
  weight: number;
  condition: ProductCondition;
  seller: ProductSeller;
  specifications?: Array<{
    label: string;
    value: string;
  }>;
}

export interface ProductCardProps extends Product {} 