'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PackageCheck, MessageCircle, Send, CheckCircle2, ShieldCheck, Truck, Store, Tag } from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    location: 'Mombasa, Kenya',
    category: 'Dog Food & Treats',
    monthlyVolume: '50 - 200 kg',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = `Hi Bagha Pet Store! I'd like a wholesale bulk pricing quote.\n\nBusiness Name: ${formData.businessName || 'N/A'}\nContact Name: ${formData.contactName || 'N/A'}\nLocation: ${formData.location}\nTarget Category: ${formData.category}\nEst. Volume: ${formData.monthlyVolume}\nNotes: ${formData.notes || 'None'}`;
  const whatsappUrl = `https://wa.me/254711401371?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans">
      
      {/* Hero Header */}
      <ScrollReveal direction="up" duration={0.7} className="bg-sand-gradient p-8 sm:p-12 rounded-3xl border border-[#F5F1EA] space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#67CECD]/10 rounded-full blur-3xl" />

        <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-[#67CECD]/30 text-xs font-bold text-[#1A1A1A]">
          <Tag className="w-4 h-4 text-[#67CECD]" />
          <span>B2B Pet Supplies & Wholesale Distribution</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#1A1A1A] max-w-3xl leading-tight">
          Partner with East Africa’s Trusted Pet Supplies Wholesaler.
        </h1>

        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
          Bagha Pet Store supplies pet shops, veterinary clinics, shelters, and breeders across Kenya 🇰🇪, Uganda 🇺🇬, and Tanzania 🇹🇿 with discounted master cartons and direct factory imports.
        </p>
      </ScrollReveal>

      {/* Grid: Benefits & Quote Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Information & MOQs */}
        <ScrollReveal direction="right" duration={0.8} className="lg:col-span-6 space-y-8">
          
          <div className="space-y-4">
            <h2 className="font-heading font-bold text-2xl text-[#1A1A1A]">
              Retail vs. Wholesale Terms
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We offer flexible purchasing tiers to support small independent pet boutiques as well as large regional veterinary clinics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-[#F5F1EA] shadow-sm space-y-2">
              <span className="text-xs font-bold text-[#67CECD] uppercase tracking-wider">Tier 1: Starter B2B</span>
              <h3 className="font-heading font-bold text-base text-[#1A1A1A]">Min. 5–10 Master Units</h3>
              <p className="text-xs text-gray-500">
                Ideal for neighborhood stores & groomers. Unlocks 15% – 25% off MSRP.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#F5F1EA] shadow-sm space-y-2">
              <span className="text-xs font-bold text-[#67CECD] uppercase tracking-wider">Tier 2: Commercial Bulk</span>
              <h3 className="font-heading font-bold text-base text-[#1A1A1A]">Pallet & Container Orders</h3>
              <p className="text-xs text-gray-500">
                Direct cross-border shipping to Kampala & Dar es Salaam with customized customs documentation.
              </p>
            </div>
          </div>

          {/* Wholesale Categories */}
          <div className="bg-white p-6 rounded-3xl border border-[#F5F1EA] space-y-4 shadow-sm">
            <h3 className="font-heading font-bold text-base text-[#1A1A1A]">
              Popular Wholesale Master Cartons
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#FAF8F5]">
                <CheckCircle2 className="w-4 h-4 text-[#67CECD] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1A1A1A]">Clumping Bentonite Cat Litter (20kg Bags)</strong>
                  <p className="text-gray-500">Minimum MOQ: 5 Bags (KSh 2,600/bag wholesale)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#FAF8F5]">
                <CheckCircle2 className="w-4 h-4 text-[#67CECD] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1A1A1A]">Royal Canin & Whiskas Dry Kibble Cartons</strong>
                  <p className="text-gray-500">Minimum MOQ: 5 Bags (15kg Maxi Adult & 7kg Cat)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#FAF8F5]">
                <CheckCircle2 className="w-4 h-4 text-[#67CECD] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1A1A1A]">Bagha Pure Aloe Pet Shampoo (500ml Cases)</strong>
                  <p className="text-gray-500">Minimum MOQ: 12 Bottles per Case</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Link */}
          <div className="bg-[#1A1A1A] p-6 rounded-3xl text-white space-y-3">
            <h3 className="font-heading font-bold text-base text-[#67CECD]">Need a Quote Right Away?</h3>
            <p className="text-xs text-gray-300">
              Skip the form and chat directly with our Wholesale Sales Desk on WhatsApp for instant price sheets.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#67CECD] hover:bg-[#4AACAB] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant Wholesale WhatsApp Quote (+254 711 401 371)</span>
            </a>
          </div>

        </ScrollReveal>

        {/* Right Column: Quote Request Form */}
        <ScrollReveal direction="left" duration={0.8} className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#F5F1EA] shadow-lg space-y-6">
          <div>
            <h2 className="font-heading font-bold text-xl text-[#1A1A1A]">
              Request a B2B Wholesale Quote
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Fill out your business requirements below to receive a custom quote within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-heading font-bold text-base">Wholesale Quote Request Received!</h3>
              <p className="text-xs text-emerald-800">
                Thank you! Our B2B Account Manager will contact your team shortly.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#67CECD] text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-md"
              >
                Send Request via WhatsApp for Faster Reply
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-gray-700">Business / Clinic Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Coast Vet Clinic"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-[#FAF8F5] p-3 rounded-xl border border-gray-200 text-sm sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#67CECD]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-gray-700">Contact Person *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Ahmed Hassan"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full bg-[#FAF8F5] p-3 rounded-xl border border-gray-200 text-sm sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#67CECD]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-gray-700">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+254 7XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF8F5] p-3 rounded-xl border border-gray-200 text-sm sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#67CECD]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="wholesale@yourbusiness.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF8F5] p-3 rounded-xl border border-gray-200 text-sm sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#67CECD]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-gray-700">Delivery Location</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#FAF8F5] p-3 rounded-xl border border-gray-200 text-sm sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#67CECD]"
                  >
                    <option>Mombasa, Kenya</option>
                    <option>Nairobi, Kenya</option>
                    <option>Kisumu / Upcountry Kenya</option>
                    <option>Kampala, Uganda</option>
                    <option>Dar es Salaam, Tanzania</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-gray-700">Primary Product Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#FAF8F5] p-3 rounded-xl border border-gray-200 text-sm sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#67CECD]"
                  >
                    <option>Dog Food & Treats</option>
                    <option>Cat Food & Litter</option>
                    <option>Grooming & Health</option>
                    <option>Aquarium & Fish Care</option>
                    <option>Full Catalog Master Packs</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-gray-700">Notes & Specific Products Requested</label>
                <textarea
                  rows={3}
                  placeholder="Specify brand requirements, bag sizes, or delivery schedules..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#FAF8F5] p-3 rounded-xl border border-gray-200 text-sm sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#67CECD]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#67CECD] hover:bg-[#4AACAB] text-white py-3.5 rounded-2xl font-bold text-sm shadow-lg transition flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Wholesale Quote Form</span>
              </button>
            </form>
          )}
        </ScrollReveal>

      </div>

    </div>
  );
}
