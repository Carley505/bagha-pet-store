import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, ArrowLeft, Store } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-6 font-sans">
      
      <div className="relative w-32 h-32 rounded-3xl bg-[#FAF8F5] p-3 border border-[#F5F1EA] shadow-xl overflow-hidden">
        <Image
          src="/logo.png"
          alt="Bagha Pet Store"
          fill
          className="object-contain p-2"
        />
      </div>

      <div className="space-y-2 max-w-md">
        <span className="bg-[#67CECD]/20 text-[#67CECD] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          404 — Page Not Found
        </span>
        <h1 className="font-heading font-extrabold text-3xl text-[#1A1A1A]">
          Oops! This page strayed off the leash.
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          The link you followed might be broken, or the product may have been moved. Let's guide you back to our catalog!
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <Link
          href="/shop"
          className="bg-[#67CECD] hover:bg-[#4AACAB] text-white px-7 py-3 rounded-2xl font-bold text-xs shadow-lg transition flex items-center space-x-2"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Back to Product Catalog</span>
        </Link>

        <Link
          href="/"
          className="bg-[#1A1A1A] text-white px-6 py-3 rounded-2xl font-bold text-xs shadow-md transition flex items-center space-x-2"
        >
          <Store className="w-4 h-4 text-[#67CECD]" />
          <span>Return Home</span>
        </Link>
      </div>

    </div>
  );
}
