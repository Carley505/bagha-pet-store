'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Search, Menu, X, Phone, MapPin, Sparkles, Truck } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { openCart, totalItems } = useCart();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop All', href: '/shop' },
    { name: 'Wholesale & Bulk', href: '/wholesale' },
    { name: 'About Us', href: '/about' },
    { name: 'Delivery & Shipping', href: '/delivery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full font-sans">
      {/* Top Announcement Strip */}
      <div className="bg-[#1A1A1A] text-[#FDFDFB] text-xs py-2 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-4 text-gray-300">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-[#67CECD]" />
              <span>Langoni Road, Mombasa, Kenya</span>
            </span>
            <span className="hidden sm:inline-block text-gray-600">|</span>
            <span className="hidden sm:flex items-center space-x-1">
              <Phone className="w-3.5 h-3.5 text-[#67CECD]" />
              <a href="tel:+254711401371" className="hover:underline">+254 711 401 371</a>
            </span>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <span className="flex items-center space-x-1 text-[#67CECD] font-medium">
              <Truck className="w-3.5 h-3.5" />
              <span>Shipping across Kenya 🇰🇪, Uganda 🇺🇬, Tanzania 🇹🇿</span>
            </span>
            <span className="hidden md:inline-block bg-[#67CECD]/20 text-[#67CECD] px-2 py-0.5 rounded text-[10px] font-semibold">
              Mon–Sat 9AM–5:30PM
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="glass-nav transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2.5 sm:space-x-3 group min-w-0">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-xl bg-white p-1 shadow-sm border border-[#F5F1EA] group-hover:border-[#67CECD] transition flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Bagha Pet Store Logo"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-heading font-extrabold text-base sm:text-lg tracking-wide text-[#1A1A1A] group-hover:text-[#67CECD] transition-colors leading-tight truncate">
                  BAGHA PET STORE
                </span>
                <span className="font-script text-[11px] sm:text-xs text-[#888888] font-medium leading-none">
                  your pet expert
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative py-1 ${
                      isActive
                        ? 'text-[#67CECD] font-semibold'
                        : 'text-[#1A1A1A] hover:text-[#67CECD]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#67CECD] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              
              {/* Search Toggle */}
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 sm:p-2.5 rounded-full text-gray-700 hover:text-[#67CECD] hover:bg-[#F5F1EA] transition touch-manipulation"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>

                {isSearchOpen && (
                  <div className="absolute -right-16 sm:right-0 mt-2 w-[calc(100vw-2.5rem)] sm:w-80 max-w-sm bg-white p-3 rounded-2xl shadow-xl border border-[#F5F1EA] z-50 animate-in fade-in slide-in-from-top-2">
                    <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Search dog food, treats, toys..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#F5F1EA] text-sm text-[#1A1A1A] px-3.5 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#67CECD]"
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="bg-[#67CECD] text-white p-2 rounded-xl hover:bg-[#4AACAB] transition flex-shrink-0"
                      >
                        <Search className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                )}
              </div>

              {/* Cart Drawer Trigger */}
              <button
                onClick={openCart}
                className="relative p-2.5 rounded-full bg-[#F5F1EA] hover:bg-[#67CECD]/20 text-[#1A1A1A] hover:text-[#67CECD] transition flex items-center justify-center"
                aria-label="View Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#67CECD] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white shadow-sm animate-bounce">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-[#1A1A1A] hover:bg-[#F5F1EA] transition"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#F5F1EA] bg-[#FDFDFB] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium ${
                  pathname === link.href
                    ? 'bg-[#67CECD] text-white'
                    : 'text-[#1A1A1A] hover:bg-[#F5F1EA]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
