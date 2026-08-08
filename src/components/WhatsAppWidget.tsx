'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle, X, ChevronRight, Store, PackageCheck, HelpCircle } from 'lucide-react';

interface WhatsAppWidgetProps {
  productName?: string;
}

export default function WhatsAppWidget({ productName }: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getPresetMessage = () => {
    if (productName) {
      return `Hi Bagha Pet Store! I'm interested in "${productName}" — is it currently in stock at Langoni Road?`;
    }
    if (pathname.includes('/wholesale')) {
      return `Hi Bagha Pet Store! I'd like to ask about wholesale & bulk pricing quotes for pet supplies.`;
    }
    if (pathname.includes('/shop')) {
      return `Hi Bagha Pet Store! I have a question regarding product availability and delivery rates.`;
    }
    return `Hi Bagha Pet Store! I'd like to ask about your pet products and retail/wholesale services.`;
  };

  const defaultMsg = getPresetMessage();
  const whatsappUrl = `https://wa.me/254711401371?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Quick Popup card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-xs sm:w-80 rounded-2xl bg-white p-4 sm:p-5 shadow-2xl border border-[#F5F1EA] transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#F5F1EA]">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#67CECD] flex items-center justify-center text-white font-bold shadow-md">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm text-[#1A1A1A]">Bagha Pet Concierge</h4>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-xs text-emerald-600 font-medium">Online on WhatsApp</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="my-4 bg-[#F5F1EA] p-3 rounded-xl text-xs text-[#1A1A1A] leading-relaxed">
            👋 <strong>Jambo! How can Bagha Pet Store help your pet today?</strong>
            <p className="mt-1 text-gray-600">We respond within minutes during store hours (Mon–Sat 9:00 AM – 5:30 PM).</p>
          </div>

          <div className="space-y-2 mb-4">
            <a
              href={`https://wa.me/254711401371?text=${encodeURIComponent("Hi! Is in-store pickup available today at Langoni Road, Mombasa?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 hover:border-[#67CECD] hover:bg-[#FDFDFB] text-xs font-medium text-[#1A1A1A] transition group"
            >
              <span className="flex items-center space-x-2">
                <Store className="w-4 h-4 text-[#67CECD]" />
                <span>In-Store Pickup Inquiry</span>
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#67CECD]" />
            </a>

            <a
              href={`https://wa.me/254711401371?text=${encodeURIComponent("Hi Bagha! I need a wholesale quote for bulk pet supplies.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 hover:border-[#67CECD] hover:bg-[#FDFDFB] text-xs font-medium text-[#1A1A1A] transition group"
            >
              <span className="flex items-center space-x-2">
                <PackageCheck className="w-4 h-4 text-[#67CECD]" />
                <span>Wholesale & Bulk Orders</span>
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#67CECD]" />
            </a>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 bg-[#67CECD] hover:bg-[#4AACAB] text-white py-2.5 px-4 rounded-xl text-xs font-semibold shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Start WhatsApp Chat (+254 711 401 371)</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-[#67CECD] hover:bg-[#4AACAB] text-white p-4 rounded-full shadow-xl transition-all duration-300 animate-pulse-subtle flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
        <span className="absolute right-full mr-3 hidden group-hover:block bg-[#1A1A1A] text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
      </button>
    </div>
  );
}
