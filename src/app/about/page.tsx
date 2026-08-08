import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, Heart, Store, Users, Sparkles, Phone, MessageCircle } from 'lucide-react';
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from '@/components/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 font-sans">
      
      {/* Header Banner */}
      <ScrollReveal direction="up" duration={0.7} className="bg-sand-gradient p-8 sm:p-14 rounded-3xl border border-[#F5F1EA] text-center space-y-4 relative overflow-hidden">
        <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full border border-[#67CECD]/30 text-xs font-bold text-[#1A1A1A] shadow-sm">
          <Heart className="w-4 h-4 text-[#67CECD] fill-[#67CECD]" />
          <span>Mombasa's Trusted Pet Concierge</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#1A1A1A] max-w-3xl mx-auto leading-tight">
          Pioneering Pristine Pet Care across East Africa.
        </h1>

        <p className="font-script text-xl sm:text-2xl text-[#67CECD]">
          "your pet expert" — since day one in Langoni Road, Mombasa
        </p>

        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Founded with a simple mission: to ensure every pet owner and veterinary retailer in Kenya, Uganda, and Tanzania has seamless access to genuine, high-grade nutrition, grooming products, and expert care advice.
        </p>
      </ScrollReveal>

      {/* Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <ScrollReveal direction="right" duration={0.8} className="lg:col-span-6 relative">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=80"
              alt="Bagha Pet Store Team & Grooming"
              fill
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" duration={0.8} className="lg:col-span-6 space-y-6">
          <span className="text-xs font-bold text-[#67CECD] uppercase tracking-wider">Our Origins</span>
          <h2 className="font-heading font-bold text-3xl text-[#1A1A1A] leading-snug">
            From a Boutique Store in Langoni Road to Regional Wholesaler.
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
            <p>
              Bagha Pet Store started in the heart of Mombasa at Langoni Road with a commitment to elevate pet retail. We recognized that local pet parents were tired of generic store shelves filled with low-quality kibble and unverified accessories.
            </p>
            <p>
              By forging direct distribution partnerships with globally respected pet brands like Royal Canin, Whiskas, MSD Animal Health, and Tetra, we transformed Bagha into a trusted boutique concierge and wholesale hub.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-white p-4 rounded-2xl border border-[#F5F1EA] shadow-sm">
              <span className="font-heading font-black text-2xl text-[#67CECD]">100%</span>
              <p className="text-xs font-semibold text-[#1A1A1A] mt-1">Authentic Sourcing</p>
              <p className="text-[11px] text-gray-400">Zero counterfeit or low-grade products</p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#F5F1EA] shadow-sm">
              <span className="font-heading font-black text-2xl text-[#67CECD]">3 Countries</span>
              <p className="text-xs font-semibold text-[#1A1A1A] mt-1">East Africa Coverage</p>
              <p className="text-[11px] text-gray-400">Kenya, Uganda & Tanzania delivery</p>
            </div>
          </div>

        </ScrollReveal>

      </div>

      {/* Values Section */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#F5F1EA] shadow-sm space-y-8">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#1A1A1A]">
            Our Core Values
          </h2>
          <p className="text-xs text-gray-500">
            Guiding how we serve every pet parent and wholesale business client every single day.
          </p>
        </ScrollReveal>

        <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollStaggerItem className="space-y-3 p-6 rounded-2xl bg-[#FAF8F5] border border-gray-100 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#67CECD]/15 text-[#67CECD] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#1A1A1A]">Uncompromising Quality</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every bag of kibble, shampoo formula, and fish flake product is inspected for batch freshness and storage integrity.
            </p>
          </ScrollStaggerItem>

          <ScrollStaggerItem className="space-y-3 p-6 rounded-2xl bg-[#FAF8F5] border border-gray-100 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#67CECD]/15 text-[#67CECD] flex items-center justify-center mx-auto">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#1A1A1A]">Pet Parent Concierge</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We treat your pets like our own. Our team provides tailored dietary guidance for puppies, senior pets, and sensitive coats.
            </p>
          </ScrollStaggerItem>

          <ScrollStaggerItem className="space-y-3 p-6 rounded-2xl bg-[#FAF8F5] border border-gray-100 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#67CECD]/15 text-[#67CECD] flex items-center justify-center mx-auto">
              <Store className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#1A1A1A]">Community & Wholesale Support</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We empower small business owners, vet clinics, and pet shelters across East Africa with reliable B2B supply chains.
            </p>
          </ScrollStaggerItem>
        </ScrollStaggerContainer>
      </section>

      {/* CTA Strip */}
      <ScrollReveal direction="up" className="bg-[#1A1A1A] text-white p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading font-bold text-2xl text-white">Visit Our Langoni Road Store</h3>
          <p className="text-xs text-gray-400 mt-1">Open Monday to Saturday, 9:00 AM – 5:30 PM (EAT) in Mombasa.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="bg-[#67CECD] hover:bg-[#4AACAB] text-white px-6 py-3 rounded-2xl font-bold text-xs shadow-md transition">
            Get Directions & Map
          </Link>
          <a
            href="https://wa.me/254711401371"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-2xl font-bold text-xs transition flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4 text-[#67CECD]" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </ScrollReveal>

    </div>
  );
}
