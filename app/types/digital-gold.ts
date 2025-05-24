export interface DigitalGoldTransaction {
  id: number;
  userId: number;
  type: 'buy' | 'sell';
  weight: number; // Weight in grams
  price: number; // Price at the time of transaction
  fee: number; // Transaction fee
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface UserGoldBalance {
  totalWeight: number; // Total weight in grams
  transactions: DigitalGoldTransaction[];
}

export interface DigitalGoldPrice {
  buyPrice: number; // Price per gram when buying
  sellPrice: number; // Price per gram when selling
  fee: number; // Fee percentage
  lastUpdated: string;
} 