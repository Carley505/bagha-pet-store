'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/shopify/types';
import { formatKES } from '@/lib/shopify/products';
import { useCart } from '@/context/CartContext';
import {
  ShoppingBag,
  MessageCircle,
  Star,
  Plus,
  Minus,
  CheckCircle2,
  Truck,
  ShieldCheck,
  MapPin,
  Tag,
  Check,
} from 'lucide-react';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const whatsappMessage = `Hi! I'm interested in ${product.title} (${formatKES(product.price)}) — is it in stock at Langoni Road?`;
  const whatsappUrl = `https://wa.me/254711401371?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Left Column: Image Gallery */}
      <div className="lg:col-span-6 space-y-4">
        <div className="relative aspect-square rounded-3xl bg-[#FAF8F5] overflow-hidden border border-[#F5F1EA] shadow-sm group">
          <Image
            src={selectedImage}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />

          {product.isWholesaleEligible && (
            <div className="absolute top-4 left-4 bg-[#1A1A1A] text-[#67CECD] text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center space-x-1">
              <Tag className="w-3.5 h-3.5" />
              <span>Wholesale Eligible</span>
            </div>
          )}
        </div>

        {product.images.length > 1 && (
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition ${
                  selectedImage === img ? 'border-[#67CECD] ring-2 ring-[#67CECD]/20' : 'border-transparent opacity-80 hover:opacity-100'
                }`}
              >
                <Image src={img} alt={`Thumb ${idx}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right Column: Product Meta & Purchase Box */}
      <div className="lg:col-span-6 space-y-6">
        
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">
            <span>{product.brand}</span>
            <span>•</span>
            <span className="text-[#67CECD]">{product.category}</span>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1A1A1A] leading-tight">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center space-x-3 mt-3">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#1A1A1A]">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviewCount} verified pet parent reviews)</span>
          </div>
        </div>

        {/* Pricing Box */}
        <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#F5F1EA] flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500 font-medium">Price in Kenya Shillings</span>
            <div className="flex items-baseline space-x-3 mt-0.5">
              <span className="font-heading font-black text-3xl text-[#67CECD]">
                {formatKES(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {formatKES(product.compareAtPrice)}
                </span>
              )}
            </div>
          </div>

          <div className="text-right">
            <span className="inline-flex items-center space-x-1 bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>In Stock in Mombasa</span>
            </span>
            <p className="text-[11px] text-gray-400 mt-1">Weight: {product.weight}</p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h3 className="font-heading font-semibold text-sm text-[#1A1A1A]">Description</h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Technical Specifications */}
        <div className="space-y-2">
          <h3 className="font-heading font-semibold text-sm text-[#1A1A1A]">Specifications & Info</h3>
          <div className="bg-white rounded-2xl border border-[#F5F1EA] divide-y divide-[#F5F1EA] text-xs">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between p-3">
                <span className="text-gray-500 font-medium">{key}</span>
                <span className="font-semibold text-[#1A1A1A]">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quantity & CTA Buttons */}
        <div className="space-y-4 pt-4 border-t border-[#F5F1EA]">
          
          <div className="flex items-center space-x-4">
            <span className="text-xs font-semibold text-gray-700">Quantity:</span>
            <div className="flex items-center space-x-3 bg-[#F5F1EA] rounded-xl px-4 py-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-gray-600 hover:text-black p-1"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-bold w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-gray-600 hover:text-black p-1"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <button
              onClick={handleAddToCart}
              className="sm:col-span-7 bg-[#67CECD] hover:bg-[#4AACAB] text-white py-4 rounded-2xl font-bold text-sm shadow-lg hover:shadow-xl transition flex items-center justify-center space-x-2"
            >
              {isAdded ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Cart ({formatKES(product.price * quantity)})</span>
                </>
              )}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:col-span-5 bg-[#1A1A1A] hover:bg-black text-[#67CECD] py-4 rounded-2xl font-bold text-sm shadow-md transition flex items-center justify-center space-x-2 border border-[#67CECD]/30"
            >
              <MessageCircle className="w-5 h-5 text-[#67CECD]" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-gray-500">
            <div className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-gray-100">
              <Truck className="w-4 h-4 text-[#67CECD]" />
              <span>Ships across KE, UG & TZ</span>
            </div>
            <div className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-gray-100">
              <MapPin className="w-4 h-4 text-[#67CECD]" />
              <span>In-Store Pickup Available</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
