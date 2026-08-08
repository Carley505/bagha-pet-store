'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatKES, MOCK_PRODUCTS } from '@/lib/shopify/products';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Truck,
  Store,
  MessageCircle,
  Percent,
  CheckCircle2,
  Gift,
  Heart,
  FileText,
  Sparkles,
  Phone,
  HelpCircle,
  MapPin,
  Clock,
  Award,
} from 'lucide-react';
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from '@/components/ScrollReveal';

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeFromCart,
    addToCart,
    clearCart,
    subtotal,
    totalItems,
    freeShippingThreshold,
    appliedPromo,
    discountAmount,
    applyPromoCode,
    removePromoCode,
    deliveryMethod,
    setDeliveryMethod,
    deliveryCountry,
    setDeliveryCountry,
    shippingFee,
    grandTotal,
    orderNotes,
    setOrderNotes,
    donationAmount,
    toggleDonation,
    giftWrap,
    toggleGiftWrap,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  // Recommendations for upsell
  const currentItemIds = new Set(items.map(i => i.product.id));
  const recommendedUpsells = MOCK_PRODUCTS.filter(p => !currentItemIds.has(p.id)).slice(0, 4);

  const handlePromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    if (res.success) {
      setPromoMessage({ text: res.message, isError: false });
      setPromoInput('');
    } else {
      setPromoMessage({ text: res.message, isError: true });
    }
  };

  const handleQuickPromo = (code: string) => {
    const res = applyPromoCode(code);
    if (res.success) {
      setPromoMessage({ text: res.message, isError: false });
    }
  };

  const whatsappCheckoutMessage = `Hi Bagha Pet Store! I'd like to place an order from my online cart:

${items.map((i, idx) => `${idx + 1}. ${i.product.title} (x${i.quantity}) — ${formatKES(i.product.price * i.quantity)}`).join('\n')}

• Subtotal: ${formatKES(subtotal)}${appliedPromo ? `\n• Discount (${appliedPromo.code}): -${formatKES(discountAmount)}` : ''}
• Delivery: ${deliveryMethod === 'pickup' ? 'Free In-Store Pickup at Langoni Road, Mombasa' : `Courier (${deliveryCountry === 'KE' ? 'Kenya' : deliveryCountry === 'UG' ? 'Uganda' : 'Tanzania'}) — ${shippingFee === 0 ? 'FREE' : formatKES(shippingFee)}`}
${donationAmount > 0 ? `• Mombasa Animal Shelter Donation: ${formatKES(donationAmount)}\n` : ''}${giftWrap ? '• Luxury Gift Packaging: Included (+ KSh 250)\n' : ''}• Grand Total: ${formatKES(grandTotal)}
${orderNotes ? `\nCustomer Notes: ${orderNotes}` : ''}`;

  const whatsappCheckoutUrl = `https://wa.me/254711401371?text=${encodeURIComponent(whatsappCheckoutMessage)}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 font-sans">
      
      {/* 1. Header Banner */}
      <ScrollReveal direction="up" duration={0.7} className="bg-sand-gradient p-8 sm:p-12 rounded-3xl border border-[#F5F1EA] space-y-3 relative overflow-hidden">
        <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-[#67CECD]/30 text-xs font-bold text-[#1A1A1A]">
          <ShoppingBag className="w-4 h-4 text-[#67CECD]" />
          <span>Bagha Pet Concierge Cart & Regional Fulfillment</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A1A1A]">
          Review Your Pet Supply Order
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl">
          Pristine nutrition, vet care, and accessories dispatched directly from Langoni Road, Mombasa to Kenya 🇰🇪, Uganda 🇺🇬, and Tanzania 🇹🇿.
        </p>
      </ScrollReveal>

      {items.length === 0 ? (
        <ScrollReveal direction="up" className="bg-white p-12 sm:p-16 rounded-3xl border border-[#F5F1EA] text-center space-y-4 max-w-lg mx-auto shadow-sm">
          <div className="w-24 h-24 rounded-full bg-[#FAF8F5] border border-[#F5F1EA] text-[#67CECD] flex items-center justify-center mx-auto shadow-inner">
            <ShoppingBag className="w-12 h-12" />
          </div>
          <h2 className="font-heading font-bold text-2xl text-[#1A1A1A]">Your cart is currently empty</h2>
          <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
            Treat your companion to premium dry kibble, raw diets, orthopedic beds, or aquatic essentials today!
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center space-x-2 bg-[#67CECD] text-white px-8 py-3.5 rounded-2xl font-bold text-xs shadow-md hover:bg-[#4AACAB] transition"
          >
            <span>Explore Pet Store Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 8 Cols: Line Items, Delivery Selector, Promos, Upsells */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Free Shipping Progress Meter */}
            <ScrollReveal direction="up" className="bg-white p-5 rounded-3xl border border-[#F5F1EA] shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                <span className="flex items-center space-x-2 text-[#1A1A1A]">
                  <Truck className="w-5 h-5 text-[#67CECD] flex-shrink-0" />
                  {remainingForFreeShipping > 0 ? (
                    <span>
                      Add <strong className="text-[#67CECD]">{formatKES(remainingForFreeShipping)}</strong> more to unlock <strong>FREE Kenya Delivery</strong>!
                    </span>
                  ) : (
                    <span className="text-emerald-700 font-bold flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>🎉 Congratulations! FREE Delivery across Kenya Unlocked!</span>
                    </span>
                  )}
                </span>
                <span className="text-[#67CECD] font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden p-0.5">
                <div
                  className="bg-gradient-to-r from-[#67CECD] to-[#4AACAB] h-full transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </ScrollReveal>

            {/* Line Items Table */}
            <div className="bg-white rounded-3xl border border-[#F5F1EA] overflow-hidden shadow-sm divide-y divide-[#F5F1EA]">
              <div className="p-4 sm:p-5 bg-[#FAF8F5] flex items-center justify-between text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                <span>Products in Bag ({totalItems})</span>
                <button
                  onClick={clearCart}
                  className="text-gray-400 hover:text-red-500 font-semibold text-xs transition"
                >
                  Clear Bag
                </button>
              </div>

              {items.map(({ product, quantity }) => (
                <div key={product.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4 min-w-0">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#FAF8F5] overflow-hidden border border-gray-100 flex-shrink-0">
                      <Image src={product.images[0]} alt={product.title} fill className="object-cover" />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <div className="flex items-center space-x-2 text-[11px] text-[#888888] font-medium">
                        <span>{product.brand}</span>
                        <span>•</span>
                        <span>{product.category}</span>
                      </div>
                      <Link href={`/product/${product.handle}`} className="font-heading font-bold text-sm sm:text-base text-[#1A1A1A] hover:text-[#67CECD] transition block truncate">
                        {product.title}
                      </Link>
                      <p className="text-xs text-[#888888]">Weight: {product.weight}</p>
                      <p className="text-xs font-extrabold text-[#67CECD] sm:hidden">{formatKES(product.price)} each</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end space-x-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                    <div className="flex items-center space-x-3 bg-[#FAF8F5] rounded-xl px-3 py-1.5 border border-gray-100">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="text-gray-600 hover:text-black p-1"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold w-6 text-center text-[#1A1A1A]">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="text-gray-600 hover:text-black p-1"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="font-heading font-extrabold text-base sm:text-lg text-[#67CECD] block">
                        {formatKES(product.price * quantity)}
                      </span>
                      <span className="hidden sm:inline text-[10px] text-gray-400">
                        {formatKES(product.price)} each
                      </span>
                    </div>

                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-gray-400 hover:text-red-500 transition p-2 rounded-xl hover:bg-red-50"
                      aria-label="Remove product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery & Fulfillment Selector */}
            <div className="bg-white p-6 rounded-3xl border border-[#F5F1EA] shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-base text-[#1A1A1A] flex items-center space-x-2">
                <Truck className="w-5 h-5 text-[#67CECD]" />
                <span>Choose Delivery or In-Store Pickup</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  onClick={() => setDeliveryMethod('courier')}
                  className={`p-4 rounded-2xl border cursor-pointer transition space-y-2 ${
                    deliveryMethod === 'courier'
                      ? 'bg-[#FAF8F5] border-[#67CECD] ring-2 ring-[#67CECD]/20'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-sm text-[#1A1A1A]">Courier Door Delivery</span>
                    <Truck className={`w-4 h-4 ${deliveryMethod === 'courier' ? 'text-[#67CECD]' : 'text-gray-400'}`} />
                  </div>
                  <p className="text-xs text-gray-500">
                    Dispatched from Langoni Road across Kenya 🇰🇪, Uganda 🇺🇬, and Tanzania 🇹🇿.
                  </p>
                </div>

                <div
                  onClick={() => setDeliveryMethod('pickup')}
                  className={`p-4 rounded-2xl border cursor-pointer transition space-y-2 ${
                    deliveryMethod === 'pickup'
                      ? 'bg-[#FAF8F5] border-[#67CECD] ring-2 ring-[#67CECD]/20'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-sm text-[#1A1A1A]">In-Store Pickup (Mombasa)</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">FREE</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Langoni Road store. Ready in 2 hours during store hours (Mon–Sat 9AM–5:30PM).
                  </p>
                </div>
              </div>

              {/* Country Selection for courier */}
              {deliveryMethod === 'courier' && (
                <div className="pt-3 border-t border-gray-100 space-y-2">
                  <label className="text-xs font-semibold text-gray-700">Select Destination Country:</label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setDeliveryCountry('KE')}
                      className={`py-2.5 px-3 rounded-xl border font-bold transition text-center ${
                        deliveryCountry === 'KE'
                          ? 'bg-[#67CECD] text-white border-[#67CECD]'
                          : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      🇰🇪 Kenya
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryCountry('UG')}
                      className={`py-2.5 px-3 rounded-xl border font-bold transition text-center ${
                        deliveryCountry === 'UG'
                          ? 'bg-[#67CECD] text-white border-[#67CECD]'
                          : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      🇺🇬 Uganda
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryCountry('TZ')}
                      className={`py-2.5 px-3 rounded-xl border font-bold transition text-center ${
                        deliveryCountry === 'TZ'
                          ? 'bg-[#67CECD] text-white border-[#67CECD]'
                          : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      🇹🇿 Tanzania
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Special Instructions & Dietary Allergies */}
            <div className="bg-white p-6 rounded-3xl border border-[#F5F1EA] shadow-sm space-y-3">
              <label className="font-heading font-bold text-sm text-[#1A1A1A] flex items-center space-x-2">
                <FileText className="w-4 h-4 text-[#67CECD]" />
                <span>Special Instructions or Pet Dietary Notes</span>
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Please leave package at security desk, or dog has chicken allergies..."
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                className="w-full bg-[#FAF8F5] text-xs p-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#67CECD]"
              />
            </div>

            {/* In-Cart Quick Add Upsell Recommendations */}
            {recommendedUpsells.length > 0 && (
              <div className="bg-white p-6 rounded-3xl border border-[#F5F1EA] shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-base text-[#1A1A1A] flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-[#67CECD]" />
                    <span>Frequently Added Pet Essentials</span>
                  </h3>
                  <Link href="/shop" className="text-xs font-semibold text-[#67CECD] hover:underline">
                    View Catalog →
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {recommendedUpsells.map((prod) => (
                    <div
                      key={prod.id}
                      className="p-3 bg-[#FAF8F5] rounded-2xl border border-gray-100 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center space-x-3 min-w-0">
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white flex-shrink-0 border border-gray-100">
                          <Image src={prod.images[0]} alt={prod.title} fill className="object-cover" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-heading font-semibold text-xs text-[#1A1A1A] truncate">{prod.title}</p>
                          <span className="font-bold text-[#67CECD]">{formatKES(prod.price)}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => addToCart(prod, 1)}
                        className="bg-white hover:bg-[#67CECD] hover:text-white text-[#1A1A1A] font-bold text-xs px-3.5 py-2 rounded-xl border border-gray-200 transition flex items-center space-x-1 flex-shrink-0 shadow-xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right 4 Cols: Order Summary, Coupons, Add-ons & Checkout */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#F5F1EA] shadow-lg space-y-6 sticky top-24">
              <h3 className="font-heading font-extrabold text-xl text-[#1A1A1A] border-b border-[#F5F1EA] pb-3">
                Order Summary
              </h3>

              {/* Promo Code Box */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 flex items-center space-x-1.5">
                  <Percent className="w-3.5 h-3.5 text-[#67CECD]" />
                  <span>Promo Code & Vouchers</span>
                </label>

                {appliedPromo ? (
                  <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 p-3 rounded-2xl text-xs">
                    <div className="flex items-center space-x-2 text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <div>
                        <strong className="font-bold">{appliedPromo.code}</strong>
                        <span className="text-[11px] block text-emerald-700">{appliedPromo.description}</span>
                      </div>
                    </div>
                    <button
                      onClick={removePromoCode}
                      className="text-red-500 hover:underline text-xs font-bold px-2 py-1"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePromoSubmit} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Enter Promo Code"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        className="flex-1 bg-[#FAF8F5] text-xs text-[#1A1A1A] px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#67CECD] uppercase"
                      />
                      <button
                        type="submit"
                        className="bg-[#1A1A1A] hover:bg-black text-[#67CECD] px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-xs"
                      >
                        Apply
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[10px] text-gray-400">Try:</span>
                      <button
                        type="button"
                        onClick={() => handleQuickPromo('BAGHA10')}
                        className="bg-[#FAF8F5] hover:bg-[#F5F1EA] text-[10px] font-bold text-gray-700 px-2 py-0.5 rounded-md border border-gray-200"
                      >
                        BAGHA10 (10% Off)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickPromo('MOMBASA500')}
                        className="bg-[#FAF8F5] hover:bg-[#F5F1EA] text-[10px] font-bold text-gray-700 px-2 py-0.5 rounded-md border border-gray-200"
                      >
                        MOMBASA500 (KSh 500)
                      </button>
                    </div>

                    {promoMessage && (
                      <p className={`text-[11px] font-medium ${promoMessage.isError ? 'text-red-500' : 'text-emerald-600'}`}>
                        {promoMessage.text}
                      </p>
                    )}
                  </form>
                )}
              </div>

              {/* Add-ons & Donations */}
              <div className="p-3.5 bg-[#FAF8F5] rounded-2xl space-y-2.5 text-xs">
                <label className="flex items-center justify-between cursor-pointer" onClick={() => toggleDonation(200)}>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={donationAmount > 0}
                      onChange={() => toggleDonation(200)}
                      className="rounded text-[#67CECD] focus:ring-[#67CECD] w-4 h-4"
                    />
                    <span className="font-semibold text-gray-700 flex items-center space-x-1">
                      <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
                      <span>Animal Shelter Fund</span>
                    </span>
                  </div>
                  <span className="font-bold text-[#67CECD]">+ KSh 200</span>
                </label>

                <label className="flex items-center justify-between cursor-pointer pt-1.5 border-t border-gray-200" onClick={toggleGiftWrap}>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={giftWrap}
                      onChange={toggleGiftWrap}
                      className="rounded text-[#67CECD] focus:ring-[#67CECD] w-4 h-4"
                    />
                    <span className="font-semibold text-gray-700 flex items-center space-x-1">
                      <Gift className="w-3.5 h-3.5 text-amber-500 inline" />
                      <span>Luxury Gift Wrap Box</span>
                    </span>
                  </div>
                  <span className="font-bold text-[#67CECD]">+ KSh 250</span>
                </label>
              </div>

              {/* Calculations */}
              <div className="space-y-2.5 text-xs divide-y divide-[#F5F1EA] pt-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="font-bold text-[#1A1A1A]">{formatKES(subtotal)}</span>
                </div>

                {appliedPromo && discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold pt-2">
                    <span>Discount ({appliedPromo.code})</span>
                    <span>-{formatKES(discountAmount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600 pt-2">
                  <span>
                    {deliveryMethod === 'pickup' ? 'Store Pickup (Langoni Rd)' : `Regional Delivery (${deliveryCountry})`}
                  </span>
                  <span className="font-bold text-[#1A1A1A]">
                    {shippingFee === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : formatKES(shippingFee)}
                  </span>
                </div>

                {donationAmount > 0 && (
                  <div className="flex justify-between text-gray-600 pt-2">
                    <span>Mombasa Shelter Donation</span>
                    <span className="font-bold text-[#1A1A1A]">+{formatKES(donationAmount)}</span>
                  </div>
                )}

                {giftWrap && (
                  <div className="flex justify-between text-gray-600 pt-2">
                    <span>Luxury Gift Wrap</span>
                    <span className="font-bold text-[#1A1A1A]">+ KSh 250</span>
                  </div>
                )}

                <div className="flex justify-between text-lg font-extrabold text-[#1A1A1A] pt-3">
                  <span>Total Amount</span>
                  <span className="font-heading text-2xl text-[#67CECD]">{formatKES(grandTotal)}</span>
                </div>
              </div>

              {/* Checkout CTAs */}
              <div className="space-y-3 pt-2">
                {/* Shopify 256-bit SSL Gateway */}
                <a
                  href={`https://wa.me/254711401371?text=${encodeURIComponent(whatsappCheckoutMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#67CECD] hover:bg-[#4AACAB] text-white py-4 rounded-2xl font-bold text-xs shadow-xl transition"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Proceed to 256-Bit SSL Checkout ({formatKES(grandTotal)})</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* 1-Click WhatsApp Order */}
                <a
                  href={whatsappCheckoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#1A1A1A] hover:bg-black text-[#67CECD] py-3.5 rounded-2xl font-bold text-xs shadow-md transition border border-[#67CECD]/30"
                >
                  <MessageCircle className="w-4 h-4 text-[#67CECD]" />
                  <span>1-Click Order via WhatsApp (+254 711 401 371)</span>
                </a>
              </div>

              {/* M-Pesa & Bank Transfer Info Box */}
              <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-gray-100 text-[11px] text-gray-600 space-y-1.5">
                <div className="flex items-center space-x-1.5 font-bold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>M-Pesa Express & Till Checkout</span>
                </div>
                <p>
                  Instant confirmation for Kenyan pet parents. Contact WhatsApp for the verified Buy Goods Till number.
                </p>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[10px] text-gray-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Shopify SSL Encrypted Checkout • 100% Genuine Pet Brands</span>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
