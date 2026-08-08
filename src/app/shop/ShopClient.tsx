'use client';

import React, { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Product, Category } from '@/lib/shopify/types';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { Filter, Tag, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

interface ShopClientProps {
  initialProducts: Product[];
  categories: Category[];
}

export default function ShopClient({ initialProducts, categories }: ShopClientProps) {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category') || undefined;
  const searchQuery = searchParams.get('search') || undefined;
  const sortBy = searchParams.get('sort') || 'popular';
  const isWholesale = searchParams.get('wholesale') === 'true';

  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    if (categorySlug) {
      const categoryObj = categories.find(c => c.slug === categorySlug);
      if (categoryObj) {
        result = result.filter(p => p.category.toLowerCase() === categoryObj.name.toLowerCase());
      }
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (isWholesale) {
      result = result.filter(p => p.isWholesaleEligible);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [initialProducts, categorySlug, searchQuery, sortBy, isWholesale]);

  const currentCategory = categories.find(c => c.slug === categorySlug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 font-sans">
      
      {/* Header Banner */}
      <ScrollReveal direction="up" duration={0.7} className="bg-sand-gradient p-8 rounded-3xl border border-[#F5F1EA] space-y-3">
        <div className="flex items-center space-x-2 text-xs text-[#888888]">
          <Link href="/" className="hover:text-[#67CECD]">Home</Link>
          <span>/</span>
          <span className="text-[#1A1A1A] font-semibold">
            {currentCategory ? currentCategory.name : 'Shop All Products'}
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A1A1A]">
          {currentCategory ? currentCategory.name : searchQuery ? `Search Results for "${searchQuery}"` : 'Pet Supply Catalog'}
        </h1>

        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl">
          {currentCategory
            ? currentCategory.description
            : 'Explore our complete collection of veterinary nutrition, grooming products, toys, aquatics, and bulk packs. Delivered to Kenya, Uganda, and Tanzania.'}
        </p>
      </ScrollReveal>

      {/* Mobile Horizontal Category Pills */}
      <div className="lg:hidden space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
            Filter by Category:
          </span>
          {(categorySlug || searchQuery || isWholesale) && (
            <Link href="/shop" className="text-xs font-semibold text-red-500 hover:underline">
              Reset Filters
            </Link>
          )}
        </div>

        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <Link
            href="/shop"
            className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-medium transition flex-shrink-0 ${
              !categorySlug && !isWholesale
                ? 'bg-[#67CECD] text-white font-bold shadow-sm'
                : 'bg-white text-[#1A1A1A] border border-[#F5F1EA]'
            }`}
          >
            All Products ({initialProducts.length})
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.slug}`}
              className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-medium transition flex-shrink-0 ${
                categorySlug === cat.slug
                  ? 'bg-[#67CECD] text-white font-bold shadow-sm'
                  : 'bg-white text-[#1A1A1A] border border-[#F5F1EA]'
              }`}
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href={isWholesale ? '/shop' : '/shop?wholesale=true'}
            className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-medium transition flex-shrink-0 flex items-center space-x-1.5 ${
              isWholesale
                ? 'bg-[#1A1A1A] text-[#67CECD] font-bold shadow-sm'
                : 'bg-white text-gray-700 border border-[#F5F1EA]'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            <span>Wholesale Only</span>
          </Link>
        </div>
      </div>

      {/* Main Filter & Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-[#F5F1EA] shadow-sm space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#F5F1EA] pb-3">
              <h3 className="font-heading font-bold text-sm text-[#1A1A1A] flex items-center space-x-2">
                <Filter className="w-4 h-4 text-[#67CECD]" />
                <span>Categories</span>
              </h3>
              {(categorySlug || searchQuery || isWholesale) && (
                <Link href="/shop" className="text-[11px] font-semibold text-red-500 hover:underline">
                  Reset Filters
                </Link>
              )}
            </div>

            {/* Category Links */}
            <ul className="space-y-1 text-xs">
              <li>
                <Link
                  href="/shop"
                  className={`block px-3 py-2 rounded-xl transition font-medium ${
                    !categorySlug && !isWholesale
                      ? 'bg-[#67CECD] text-white font-semibold'
                      : 'text-[#1A1A1A] hover:bg-[#F5F1EA]'
                  }`}
                >
                  All Products ({initialProducts.length})
                </Link>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/shop?category=${cat.slug}`}
                    className={`block px-3 py-2 rounded-xl transition font-medium ${
                      categorySlug === cat.slug
                        ? 'bg-[#67CECD] text-white font-semibold'
                        : 'text-[#1A1A1A] hover:bg-[#F5F1EA]'
                    }`}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Wholesale Filter Toggle */}
            <div className="pt-4 border-t border-[#F5F1EA]">
              <Link
                href={isWholesale ? '/shop' : '/shop?wholesale=true'}
                className={`flex items-center justify-between p-3 rounded-xl border text-xs font-semibold transition ${
                  isWholesale
                    ? 'bg-[#1A1A1A] text-[#67CECD] border-[#1A1A1A]'
                    : 'border-gray-200 text-gray-700 hover:border-[#67CECD]'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Tag className="w-4 h-4 text-[#67CECD]" />
                  <span>Show Wholesale Packs Only</span>
                </span>
                {isWholesale && <CheckCircle2 className="w-4 h-4 text-[#67CECD]" />}
              </Link>
            </div>

          </div>
        </aside>

        {/* Product Grid Header & Items */}
        <main className="lg:col-span-3 space-y-6">
          
          {/* Top Bar Sort & Count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#F5F1EA] shadow-sm">
            <p className="text-xs text-gray-500 font-medium">
              Showing <strong className="text-[#1A1A1A]">{filteredProducts.length}</strong> products
            </p>

            {/* Sorting */}
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-gray-500">Sort by:</span>
              <div className="flex space-x-1">
                <Link
                  href={`/shop?${categorySlug ? `category=${categorySlug}&` : ''}sort=popular`}
                  className={`px-3 py-1.5 rounded-lg border font-medium transition ${
                    sortBy === 'popular'
                      ? 'bg-[#67CECD] text-white border-[#67CECD]'
                      : 'border-gray-200 text-gray-700 hover:bg-[#F5F1EA]'
                  }`}
                >
                  Popularity
                </Link>
                <Link
                  href={`/shop?${categorySlug ? `category=${categorySlug}&` : ''}sort=price-asc`}
                  className={`px-3 py-1.5 rounded-lg border font-medium transition ${
                    sortBy === 'price-asc'
                      ? 'bg-[#67CECD] text-white border-[#67CECD]'
                      : 'border-gray-200 text-gray-700 hover:bg-[#F5F1EA]'
                  }`}
                >
                  Price: Low to High
                </Link>
                <Link
                  href={`/shop?${categorySlug ? `category=${categorySlug}&` : ''}sort=price-desc`}
                  className={`px-3 py-1.5 rounded-lg border font-medium transition ${
                    sortBy === 'price-desc'
                      ? 'bg-[#67CECD] text-white border-[#67CECD]'
                      : 'border-gray-200 text-gray-700 hover:bg-[#F5F1EA]'
                  }`}
                >
                  Price: High to Low
                </Link>
              </div>
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-[#F5F1EA] text-center space-y-4">
              <p className="font-heading font-semibold text-[#1A1A1A] text-lg">
                No products found matching your filter criteria.
              </p>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Try searching with another keyword or reset category filters.
              </p>
              <Link
                href="/shop"
                className="inline-block bg-[#67CECD] text-white px-6 py-2.5 rounded-xl text-xs font-semibold shadow-md"
              >
                Clear All Filters
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        </main>

      </div>

    </div>
  );
}
