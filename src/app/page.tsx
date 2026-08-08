import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts, getCategories } from '@/lib/shopify/products';
import ProductCard from '@/components/ProductCard';
import {
  ShoppingBag,
  MessageCircle,
  Truck,
  Store,
  PackageCheck,
  Clock,
  ShieldCheck,
  Sparkles,
  Award,
  Heart,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import InstagramIcon from '@/components/icons/InstagramIcon';
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from '@/components/ScrollReveal';

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getProducts({ sortBy: 'popular' }),
    getCategories(),
  ]);

  const bestSellers = products.slice(0, 4);

  return (
    <div className="space-y-16 pb-20 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-sand-gradient py-12 md:py-20 border-b border-[#F5F1EA]">
        
        {/* Subtle Arc Motif Watermark */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full border-[40px] border-[#67CECD]/10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <ScrollReveal direction="up" duration={0.7} className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#67CECD]/30 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#67CECD] animate-pulse" />
                <span className="text-xs font-semibold text-[#1A1A1A] tracking-wide uppercase">
                  Mombasa’s Premier Pet Concierge & Wholesale
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.15]">
                Everything your <br className="hidden sm:inline" />
                <span className="text-[#67CECD] relative inline-block">
                  pet deserves.
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#67CECD]/40"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,10 Q50,20 100,10" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </h1>

              <p className="font-script text-xl sm:text-2xl text-[#888888]">
                your pet expert — in-store at Langoni Road & delivering across East Africa
              </p>

              <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed">
                From veterinary-grade nutrition and gentle coat care to orthopedic beds and aquatics — we curate pristine supplies for dogs, cats, small pets, and wholesale partners.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Link
                  href="/shop"
                  className="w-full sm:w-auto justify-center bg-[#67CECD] hover:bg-[#4AACAB] text-white px-7 py-3.5 rounded-2xl font-semibold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2.5 group"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Shop Premium Catalog</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/254711401371?text=Hi%20Bagha%20Pet%20Store!%20I'd%20like%20to%20ask%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center bg-white hover:bg-[#F5F1EA] text-[#1A1A1A] px-6 py-3.5 rounded-2xl font-semibold text-sm shadow-md border border-[#F5F1EA] hover:border-[#67CECD] transition flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5 text-[#67CECD]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Rating Teaser */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200/60">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-[#67CECD] text-white font-bold text-xs flex items-center justify-center border-2 border-white">
                    🐕
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#4AACAB] text-white font-bold text-xs flex items-center justify-center border-2 border-white">
                    🐈
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#1A1A1A] text-[#67CECD] font-bold text-xs flex items-center justify-center border-2 border-white">
                    🐠
                  </div>
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#1A1A1A]">Trusted by 2,500+ Pet Owners in East Africa</p>
                  <p className="text-[#888888]">Langoni Road Store • Retail & Wholesale</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Hero Right Visual */}
            <ScrollReveal direction="left" delay={0.2} duration={0.8} className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1000&q=80"
                  alt="Happy Dog and Cat - Bagha Pet Store"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Floating Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-white flex items-center space-x-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#67CECD] text-white flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-[#1A1A1A]">Certified Authentic Nutrition</p>
                    <p className="text-[10px] sm:text-[11px] text-gray-500">Royal Canin, Whiskas, MSD & Bagha</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          
          <ScrollStaggerItem className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F5F1EA] shadow-sm flex items-center space-x-3 hover:border-[#67CECD] transition">
            <div className="w-12 h-12 rounded-xl bg-[#67CECD]/15 text-[#67CECD] flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs text-[#1A1A1A]">East Africa Shipping</h4>
              <p className="text-[11px] text-[#888888]">Kenya 🇰🇪, Uganda 🇺🇬, Tanzania 🇹🇿</p>
            </div>
          </ScrollStaggerItem>

          <ScrollStaggerItem className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F5F1EA] shadow-sm flex items-center space-x-3 hover:border-[#67CECD] transition">
            <div className="w-12 h-12 rounded-xl bg-[#67CECD]/15 text-[#67CECD] flex items-center justify-center flex-shrink-0">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs text-[#1A1A1A]">Langoni Rd Store Pickup</h4>
              <p className="text-[11px] text-[#888888]">Mombasa, Kenya</p>
            </div>
          </ScrollStaggerItem>

          <ScrollStaggerItem className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F5F1EA] shadow-sm flex items-center space-x-3 hover:border-[#67CECD] transition">
            <div className="w-12 h-12 rounded-xl bg-[#67CECD]/15 text-[#67CECD] flex items-center justify-center flex-shrink-0">
              <PackageCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs text-[#1A1A1A]">Retail & Wholesale</h4>
              <p className="text-[11px] text-[#888888]">Individual items or bulk cartons</p>
            </div>
          </ScrollStaggerItem>

          <ScrollStaggerItem className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F5F1EA] shadow-sm flex items-center space-x-3 hover:border-[#67CECD] transition">
            <div className="w-12 h-12 rounded-xl bg-[#67CECD]/15 text-[#67CECD] flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs text-[#1A1A1A]">Mon–Sat Store Hours</h4>
              <p className="text-[11px] text-[#888888]">9:00 AM – 5:30 PM (EAT)</p>
            </div>
          </ScrollStaggerItem>

        </ScrollStaggerContainer>
      </section>

      {/* 3. Featured Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <ScrollReveal direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#67CECD]">
              Curated Collections
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#1A1A1A] mt-1">
              Shop by Category
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#67CECD] hover:text-[#4AACAB] transition group"
          >
            <span>Explore All Categories</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </ScrollReveal>

        <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <ScrollStaggerItem key={cat.id}>
              <Link
                href={`/shop?category=${cat.slug}`}
                className="group block relative h-64 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#F5F1EA]"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[11px] font-bold text-[#67CECD] uppercase tracking-wider">
                    {cat.itemCount} Products Available
                  </span>
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#67CECD] transition">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </Link>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
      </section>

      {/* 4. Best Sellers Carousel / Product Grid */}
      <section className="bg-[#F5F1EA] py-16 border-y border-[#F5F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#67CECD]">
                Customer Favorites
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#1A1A1A] mt-1">
                Best Sellers & Top Rated
              </h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#1A1A1A] hover:text-[#67CECD] transition"
            >
              <span>View Full Shop</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ScrollStaggerItem key={product.id}>
                <ProductCard product={product} />
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </div>
      </section>

      {/* 5. "Why Bagha" Trust Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-script text-xl text-[#67CECD]">your pet expert</span>
          <h2 className="font-heading font-bold text-3xl text-[#1A1A1A]">
            Why Pet Parents & Retailers Choose Bagha
          </h2>
          <p className="text-xs text-[#888888]">
            We bridge the gap between boutique pet concierge care and East Africa wholesale logistics.
          </p>
        </ScrollReveal>

        <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ScrollStaggerItem className="bg-white p-6 rounded-3xl border border-[#F5F1EA] shadow-sm text-center space-y-3 hover:border-[#67CECD] transition">
            <div className="w-14 h-14 rounded-2xl bg-[#67CECD]/15 text-[#67CECD] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#1A1A1A]">100% Authentic Brands</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Directly imported from verified international suppliers. No counterfeit kibble or low-grade fillers.
            </p>
          </ScrollStaggerItem>

          <ScrollStaggerItem className="bg-white p-6 rounded-3xl border border-[#F5F1EA] shadow-sm text-center space-y-3 hover:border-[#67CECD] transition">
            <div className="w-14 h-14 rounded-2xl bg-[#67CECD]/15 text-[#67CECD] flex items-center justify-center mx-auto">
              <PackageCheck className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#1A1A1A]">Wholesale & B2B Pricing</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Discounted bulk cartons for pet shops, clinics, shelters, and breeders in Kenya, Uganda & Tanzania.
            </p>
          </ScrollStaggerItem>

          <ScrollStaggerItem className="bg-white p-6 rounded-3xl border border-[#F5F1EA] shadow-sm text-center space-y-3 hover:border-[#67CECD] transition">
            <div className="w-14 h-14 rounded-2xl bg-[#67CECD]/15 text-[#67CECD] flex items-center justify-center mx-auto">
              <Truck className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#1A1A1A]">Fast Regional Dispatch</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Same-day dispatch for Mombasa orders and reliable courier freight to Nairobi, Kampala, and Dar es Salaam.
            </p>
          </ScrollStaggerItem>

          <ScrollStaggerItem className="bg-white p-6 rounded-3xl border border-[#F5F1EA] shadow-sm text-center space-y-3 hover:border-[#67CECD] transition">
            <div className="w-14 h-14 rounded-2xl bg-[#67CECD]/15 text-[#67CECD] flex items-center justify-center mx-auto">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#1A1A1A]">Pet Nutrition Experts</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Have questions about breed-specific diets or sensitive stomachs? Talk directly with our team on WhatsApp.
            </p>
          </ScrollStaggerItem>
        </ScrollStaggerContainer>
      </section>

      {/* 6. Instagram Teaser Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <ScrollReveal direction="up" className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-[#67CECD]/15 text-[#67CECD]">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-[#1A1A1A]">Follow Us @bagha_pet_store</h3>
              <p className="text-xs text-[#888888]">Tag us to get your pet featured on our Instagram page!</p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/bagha_pet_store"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-2 text-xs font-semibold text-[#67CECD] hover:text-[#4AACAB] transition"
          >
            <span>Visit Instagram</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </ScrollReveal>

        <ScrollStaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=600&q=80',
          ].map((url, i) => (
            <ScrollStaggerItem key={i}>
              <a
                href="https://www.instagram.com/bagha_pet_store"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-square rounded-2xl overflow-hidden border border-[#F5F1EA] shadow-sm"
              >
                <Image src={url} alt={`Instagram photo ${i}`} fill className="object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                  <InstagramIcon className="w-8 h-8" />
                </div>
              </a>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
      </section>

      {/* 7. WhatsApp VIP Opt-in strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={0.7} className="bg-[#1A1A1A] text-[#FDFDFB] rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-800">
          <div className="space-y-2 max-w-xl z-10">
            <span className="font-script text-lg text-[#67CECD]">join the Bagha pet family</span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Get Exclusive Stock Alerts & Wholesale Catalogs
            </h3>
            <p className="text-xs text-gray-400">
              Connect on WhatsApp to receive restock alerts for Royal Canin, Whiskas, and bulk wholesale price lists.
            </p>
          </div>

          <div className="z-10 flex-shrink-0">
            <a
              href="https://wa.me/254711401371?text=Hi%20Bagha!%20I'd%20like%20to%20join%20your%20WhatsApp%20VIP%20stock%20alerts%20and%20receive%20the%20catalog."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#67CECD] hover:bg-[#4AACAB] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl transition flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Connect on WhatsApp (+254 711 401 371)</span>
            </a>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
