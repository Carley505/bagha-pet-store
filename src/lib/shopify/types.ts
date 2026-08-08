export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number; // in KES
  compareAtPrice?: number;
  category: string;
  tags: string[];
  images: string[];
  inStock: boolean;
  stockQuantity: number;
  weight: string;
  brand: string;
  rating: number;
  reviewCount: number;
  specifications: Record<string, string>;
  isWholesaleEligible?: boolean;
  wholesaleMinQty?: number;
  wholesalePrice?: number;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export interface Cart {
  id: string;
  items: CartItem[];
  subtotal: number;
  totalItems: number;
  checkoutUrl?: string;
}
