'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/shopify/types';
import { formatKES } from '@/lib/shopify/products';
import { useCart } from '@/context/CartContext';
import { X, ShoppingBag, MessageCircle, Star, Check, ShieldCheck, Tag, Plus, Minus } from 'lucide-react';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-4">
        <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white p-5 sm:p-8 shadow-2xl border border-[#F5F1EA] z-10 animate-in zoom-in-95 duration-200">
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full text-gray-400 hover:text-black hover:bg-[#F5F1EA] transition z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl bg-[#FAF8F5] overflow-hidden border border-gray-100">
                <Image
                  src={selectedImage}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {product.images.length > 1 && (
                <div className="flex space-x-3 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition ${
                        selectedImage === img ? 'border-[#67CECD]' : 'border-transparent'
                      }`}
                    >
                      <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Meta */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-xs text-[#888888] font-medium uppercase tracking-wider mb-1">
                  <span>{product.brand}</span>
                  <span>•</span>
                  <span>{product.category}</span>
                </div>

                <h2 className="font-heading font-bold text-xl text-[#1A1A1A]">
                  {product.title}
                </h2>

                {/* Rating */}
                <div className="flex items-center space-x-2 mt-2">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#1A1A1A]">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviewCount} reviews)</span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-baseline space-x-3">
                  <span className="font-heading font-extrabold text-2xl text-[#67CECD]">
                    {formatKES(product.price)}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {formatKES(product.compareAtPrice)}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Specs list */}
                <div className="mt-4 bg-[#F5F1EA] p-3 rounded-xl space-y-1 text-xs">
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key} className="flex justify-between text-gray-700">
                      <span className="font-medium">{key}:</span>
                      <span className="font-semibold text-[#1A1A1A]">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3 border-t border-[#F5F1EA] pt-4">
                
                {/* Quantity */}
                <div className="flex items-center space-x-4">
                  <span className="text-xs font-semibold text-gray-700">Quantity:</span>
                  <div className="flex items-center space-x-3 bg-[#F5F1EA] rounded-xl px-3 py-1.5">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-gray-600 hover:text-black"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold w-6 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-gray-600 hover:text-black"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-[#67CECD] hover:bg-[#4AACAB] text-white py-3 rounded-xl font-semibold text-xs shadow-md transition flex items-center justify-center space-x-2"
                  >
                    {added ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart ({formatKES(product.price * quantity)})</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/254711401371?text=${encodeURIComponent(`Hi Bagha Pet Store! I'm interested in ${product.title} (Qty: ${quantity}). Is it available at Langoni Road?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#F5F1EA] hover:bg-[#67CECD]/20 text-[#1A1A1A] hover:text-[#67CECD] rounded-xl transition"
                    title="Ask on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>

                <div className="text-center">
                  <Link
                    href={`/product/${product.handle}`}
                    onClick={onClose}
                    className="text-xs font-medium text-gray-500 hover:text-[#67CECD] underline"
                  >
                    View Full Product Details & Reviews →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
