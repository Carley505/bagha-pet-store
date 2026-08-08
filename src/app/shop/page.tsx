import React, { Suspense } from 'react';
import { getProducts, getCategories } from '@/lib/shopify/products';
import ShopClient from './ShopClient';

export default async function ShopPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-10 text-center text-xs text-gray-400">Loading catalog...</div>}>
      <ShopClient initialProducts={products} categories={categories} />
    </Suspense>
  );
}
