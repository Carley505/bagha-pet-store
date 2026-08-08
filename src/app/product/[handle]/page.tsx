import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductByHandle, getProducts, formatKES } from '@/lib/shopify/products';
import ProductCard from '@/components/ProductCard';
import ProductDetailClient from './ProductDetailClient';
import { Star, Truck, ShieldCheck, RefreshCw, MapPin, MessageCircle, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

interface PDPProps {
  params: Promise<{ handle: string }>;
}

export async function generateMetadata({ params }: PDPProps): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProductByHandle(handle);
  if (!product) return { title: 'Product Not Found — Bagha Pet Store' };

  return {
    title: `${product.title} — Bagha Pet Store Mombasa`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: product.title,
      description: product.shortDescription,
      images: [product.images[0]],
    },
  };
}

export default async function ProductDetailPage({ params }: PDPProps) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  const allProducts = await getProducts();
  const relatedProducts = allProducts
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  // Product JSON-LD schema
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.title,
    'image': product.images,
    'description': product.description,
    'brand': {
      '@type': 'Brand',
      'name': product.brand,
    },
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'KES',
      'price': product.price,
      'availability': product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      'seller': {
        '@type': 'Organization',
        'name': 'Bagha Pet Store',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs text-[#888888]">
          <Link href="/" className="hover:text-[#67CECD]">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#67CECD]">Shop</Link>
          <span>/</span>
          <span className="text-[#1A1A1A] font-semibold truncate max-w-xs">{product.title}</span>
        </div>

        {/* Client Product Interactive Section */}
        <ProductDetailClient product={product} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="pt-12 border-t border-[#F5F1EA] space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-bold text-2xl text-[#1A1A1A]">
                You May Also Like
              </h2>
              <Link href="/shop" className="text-xs font-semibold text-[#67CECD] hover:underline">
                View All {product.category} →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </section>
        )}

      </div>
    </>
  );
}
