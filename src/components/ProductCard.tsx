'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/shopify/types';
import { formatKES } from '@/lib/shopify/products';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Eye, Star, MessageCircle, Tag, CheckCircle2 } from 'lucide-react';
import QuickViewModal from './QuickViewModal';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const discountPercent = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <>
      <div className="group bg-white rounded-2xl border border-[#F5F1EA] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative font-sans">
        
        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
          {discountPercent > 0 && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
              -{discountPercent}% OFF
            </span>
          )}
          {product.isWholesaleEligible && (
            <span className="bg-[#1A1A1A] text-[#67CECD] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center space-x-1">
              <Tag className="w-3 h-3" />
              <span>Wholesale Available</span>
            </span>
          )}
        </div>

        {/* Quick View Button on Image */}
        <div className="relative aspect-square bg-[#FAF8F5] overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <button
            onClick={() => setIsQuickViewOpen(true)}
            className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-white/95 backdrop-blur-md hover:bg-[#67CECD] hover:text-white text-[#1A1A1A] p-2 sm:p-2.5 rounded-xl shadow-md sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 touch-manipulation"
            aria-label="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            {/* Category & Rating */}
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-[#888888] font-medium text-[11px] uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex items-center space-x-1 text-amber-500 text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-bold">{product.rating}</span>
                <span className="text-gray-400 text-[10px]">({product.reviewCount})</span>
              </div>
            </div>

            {/* Title */}
            <Link href={`/product/${product.handle}`} className="block group-hover:text-[#67CECD] transition">
              <h3 className="font-heading font-semibold text-sm text-[#1A1A1A] line-clamp-2 leading-snug">
                {product.title}
              </h3>
            </Link>

            <p className="text-xs text-[#888888] mt-1 line-clamp-1">
              {product.shortDescription}
            </p>
          </div>

          {/* Price & Action */}
          <div className="mt-4 pt-3 border-t border-[#F5F1EA] flex items-center justify-between">
            <div>
              <div className="font-heading font-bold text-base text-[#67CECD]">
                {formatKES(product.price)}
              </div>
              {product.compareAtPrice && (
                <div className="text-[11px] text-gray-400 line-through">
                  {formatKES(product.compareAtPrice)}
                </div>
              )}
            </div>

            <div className="flex items-center space-x-1.5">
              <a
                href={`https://wa.me/254711401371?text=${encodeURIComponent(`Hi Bagha Pet Store! Is "${product.title}" (${formatKES(product.price)}) currently in stock?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#F5F1EA] hover:bg-[#67CECD]/20 text-gray-700 hover:text-[#67CECD] transition"
                title="Ask on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={() => addToCart(product)}
                className="bg-[#67CECD] hover:bg-[#4AACAB] text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow-md transition flex items-center space-x-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isQuickViewOpen && (
        <QuickViewModal product={product} onClose={() => setIsQuickViewOpen(false)} />
      )}
    </>
  );
}
