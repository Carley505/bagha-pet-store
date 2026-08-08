'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Globe, ShieldCheck, Heart } from 'lucide-react';
import InstagramIcon from '@/components/icons/InstagramIcon';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FDFDFB] font-sans pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-white p-1 shadow-md">
                <Image
                  src="/logo.png"
                  alt="Bagha Pet Store Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg tracking-wide text-white group-hover:text-[#67CECD] transition">
                  BAGHA PET STORE
                </span>
                <span className="font-script text-xs text-[#67CECD] font-medium">
                  your pet expert
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed">
              Mombasa’s premier pet care concierge and wholesale distributor. Supplying high-grade pet nutrition, veterinary health formulas, accessories, and aquarium care across East Africa.
            </p>

            <div className="pt-2">
              <a
                href="https://www.instagram.com/bagha_pet_store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs text-gray-300 hover:text-[#67CECD] bg-gray-800/80 px-3.5 py-2 rounded-xl border border-gray-700 transition"
              >
                <InstagramIcon className="w-4 h-4 text-[#67CECD]" />
                <span>Follow @bagha_pet_store</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-white uppercase tracking-wider text-[#67CECD]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/shop" className="hover:text-[#67CECD] transition">Browse Catalog</Link>
              </li>
              <li>
                <Link href="/wholesale" className="hover:text-[#67CECD] transition">Wholesale & Bulk Supplies</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#67CECD] transition">About Bagha Store</Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-[#67CECD] transition">Delivery & Cross-Border Rates</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#67CECD] transition">Contact & Location</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Store & Hours */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-white uppercase tracking-wider text-[#67CECD]">
              Store Location & Hours
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#67CECD] flex-shrink-0 mt-0.5" />
                <span>Langoni Road, Mombasa, Kenya 🇰🇪</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-[#67CECD] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Monday – Saturday</p>
                  <p className="text-gray-400">9:00 AM – 5:30 PM (EAT)</p>
                  <p className="text-[11px] text-[#888888]">Sunday: Closed</p>
                </div>
              </div>
              <div className="flex items-center space-x-2.5 pt-1">
                <Globe className="w-4 h-4 text-[#67CECD] flex-shrink-0" />
                <span>Shipping to 🇰🇪 Kenya, 🇺🇬 Uganda & 🇹🇿 Tanzania</span>
              </div>
            </div>
          </div>

          {/* Column 4: WhatsApp Inquiry Direct */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-white uppercase tracking-wider text-[#67CECD]">
              WhatsApp Direct Order
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Prefer ordering via chat? Send us your shopping list or product photo directly on WhatsApp.
            </p>
            <div className="space-y-2 pt-1">
              <a
                href="https://wa.me/254711401371?text=Hi%20Bagha%20Pet%20Store!%20I'd%20like%20to%20place%20an%20order%20or%20inquire%20about%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-[#67CECD] hover:bg-[#4AACAB] text-white py-2.5 px-4 rounded-xl font-semibold text-xs transition shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>+254 711 401 371</span>
              </a>
              <p className="text-[10px] text-gray-400 text-center">
                Retail & Wholesale Customer Concierge
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1">
            <span>© {new Date().getFullYear()} Bagha Pet Store. All rights reserved. Built for pet lovers with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline mx-0.5" />
            <span>in Mombasa, Kenya.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/delivery" className="hover:underline">Shipping Policy</Link>
            <Link href="/wholesale" className="hover:underline">B2B Wholesale Terms</Link>
            <Link href="/contact" className="hover:underline">Langoni Road Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
