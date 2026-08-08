import React from 'react';
import Link from 'next/link';
import { Truck, MapPin, Clock, ShieldCheck, MessageCircle, ArrowRight, PackageCheck, Store } from 'lucide-react';
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from '@/components/ScrollReveal';

export default function DeliveryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans">
      
      {/* Header */}
      <ScrollReveal direction="up" duration={0.7} className="bg-sand-gradient p-8 sm:p-12 rounded-3xl border border-[#F5F1EA] space-y-3">
        <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-[#67CECD]/30 text-xs font-bold text-[#1A1A1A]">
          <Truck className="w-4 h-4 text-[#67CECD]" />
          <span>East Africa Logistics & Fulfillment</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A1A1A]">
          Delivery & Regional Shipping Information
        </h1>

        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
          Bagha Pet Store fulfills orders directly from our warehouse and retail hub at Langoni Road, Mombasa. We ship across Kenya, Uganda, and Tanzania with secure packaging and real-time dispatch tracking.
        </p>
      </ScrollReveal>

      {/* Coverage Cards */}
      <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Kenya */}
        <ScrollStaggerItem className="bg-white p-6 rounded-3xl border border-[#F5F1EA] shadow-sm space-y-4 hover:border-[#67CECD] transition">
          <div className="flex items-center justify-between">
            <span className="text-2xl">🇰🇪</span>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full">
              Automated Checkout
            </span>
          </div>
          <h3 className="font-heading font-bold text-lg text-[#1A1A1A]">Kenya Shipping</h3>
          <ul className="space-y-2 text-xs text-gray-600">
            <li className="flex items-start space-x-2">
              <span className="text-[#67CECD] font-bold">•</span>
              <span><strong>Mombasa Local:</strong> Same-day dispatch or free store pickup at Langoni Road.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#67CECD] font-bold">•</span>
              <span><strong>Nairobi & Major Towns:</strong> 24–48 hours via door-to-door courier.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#67CECD] font-bold">•</span>
              <span><strong>FREE Kenya Shipping:</strong> Applied automatically on orders over KSh 10,000.</span>
            </li>
          </ul>
        </ScrollStaggerItem>

        {/* Uganda */}
        <ScrollStaggerItem className="bg-white p-6 rounded-3xl border border-[#F5F1EA] shadow-sm space-y-4 hover:border-[#67CECD] transition">
          <div className="flex items-center justify-between">
            <span className="text-2xl">🇺🇬</span>
            <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-1 rounded-full">
              WhatsApp Quote Available
            </span>
          </div>
          <h3 className="font-heading font-bold text-lg text-[#1A1A1A]">Uganda Shipping</h3>
          <ul className="space-y-2 text-xs text-gray-600">
            <li className="flex items-start space-x-2">
              <span className="text-[#67CECD] font-bold">•</span>
              <span><strong>Kampala & Entebbe:</strong> 3–5 business days via regional freight.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#67CECD] font-bold">•</span>
              <span><strong>Customs & Clearance:</strong> Handled by our logistics partners.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#67CECD] font-bold">•</span>
              <span><strong>Bulk & Wholesale:</strong> Pallet rates available upon request.</span>
            </li>
          </ul>
        </ScrollStaggerItem>

        {/* Tanzania */}
        <ScrollStaggerItem className="bg-white p-6 rounded-3xl border border-[#F5F1EA] shadow-sm space-y-4 hover:border-[#67CECD] transition">
          <div className="flex items-center justify-between">
            <span className="text-2xl">🇹🇿</span>
            <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-1 rounded-full">
              WhatsApp Quote Available
            </span>
          </div>
          <h3 className="font-heading font-bold text-lg text-[#1A1A1A]">Tanzania Shipping</h3>
          <ul className="space-y-2 text-xs text-gray-600">
            <li className="flex items-start space-x-2">
              <span className="text-[#67CECD] font-bold">•</span>
              <span><strong>Dar es Salaam, Tanga & Arusha:</strong> 2–4 business days.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#67CECD] font-bold">•</span>
              <span><strong>Coast Logistics:</strong> Direct coastal freight lines from Mombasa port.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#67CECD] font-bold">•</span>
              <span><strong>Quote-based:</strong> Contact WhatsApp concierge for exact weight quote.</span>
            </li>
          </ul>
        </ScrollStaggerItem>

      </ScrollStaggerContainer>

      {/* In-Store Pickup Banner */}
      <ScrollReveal direction="up" className="bg-white p-8 rounded-3xl border border-[#F5F1EA] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-[#67CECD]/15 text-[#67CECD] flex items-center justify-center flex-shrink-0">
            <Store className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-[#1A1A1A]">Prefer Free In-Store Pickup?</h3>
            <p className="text-xs text-gray-500">
              Collect your online order directly from our store at Langoni Road, Mombasa during business hours (Mon–Sat 9:00 AM – 5:30 PM).
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="bg-[#1A1A1A] hover:bg-black text-[#67CECD] px-6 py-3 rounded-2xl font-bold text-xs shadow-md transition whitespace-nowrap"
        >
          View Map & Directions
        </Link>
      </ScrollReveal>

      {/* Cross Border WhatsApp Box */}
      <ScrollReveal direction="up" duration={0.7} className="bg-[#1A1A1A] text-white p-8 sm:p-12 rounded-3xl space-y-4 text-center max-w-3xl mx-auto">
        <h3 className="font-heading font-bold text-2xl text-[#67CECD]">
          Request a Custom Regional Shipping Quote
        </h3>
        <p className="text-xs text-gray-300">
          Need cross-border bulk freight to Uganda or Tanzania? Message our logistics desk on WhatsApp with your destination city and estimated package weight.
        </p>
        <a
          href="https://wa.me/254711401371?text=Hi%20Bagha%20Pet%20Store!%20I'd%20like%20to%20request%20a%20shipping%20quote%20for%20Uganda%20/%20Tanzania."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-[#67CECD] hover:bg-[#4AACAB] text-white px-7 py-3.5 rounded-2xl font-bold text-xs shadow-xl transition"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Ask for Regional Freight Quote (+254 711 401 371)</span>
        </a>
      </ScrollReveal>

    </div>
  );
}
