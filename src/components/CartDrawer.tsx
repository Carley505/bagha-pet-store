'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatKES, MOCK_PRODUCTS } from '@/lib/shopify/products';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  Store,
  Tag,
  CheckCircle2,
  Heart,
  Gift,
  MessageCircle,
  FileText,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Percent,
} from 'lucide-react';

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
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
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isMpesaGuideOpen, setIsMpesaGuideOpen] = useState(false);

  if (!isOpen) return null;

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  // Recommended quick add items not currently in the cart
  const currentItemIds = new Set(items.map(i => i.product.id));
  const recommendedUpsells = MOCK_PRODUCTS.filter(p => !currentItemIds.has(p.id)).slice(0, 3);

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
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-lg bg-[#FDFDFB] shadow-2xl flex flex-col border-l border-[#F5F1EA] animate-in slide-in-from-right duration-300">
          
          {/* 1. Drawer Header */}
          <div className="p-5 border-b border-[#F5F1EA] bg-white flex items-center justify-between shadow-xs">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#67CECD]/15 text-[#67CECD] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-base text-[#1A1A1A]">Your Pet Bag</h3>
                <p className="text-[11px] text-[#888888]">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} • Fast East Africa dispatch
                </p>
              </div>
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-full text-gray-400 hover:text-black hover:bg-[#F5F1EA] transition touch-manipulation"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 2. Free Shipping Dynamic Tracker */}
          <div className="bg-[#FAF8F5] p-3.5 px-5 border-b border-[#F5F1EA]">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              <span className="flex items-center space-x-1.5 text-[#1A1A1A]">
                <Truck className="w-4 h-4 text-[#67CECD] flex-shrink-0" />
                {remainingForFreeShipping > 0 ? (
                  <span>
                    Add <strong className="text-[#67CECD]">{formatKES(remainingForFreeShipping)}</strong> more for <strong>FREE Kenya Shipping</strong>
                  </span>
                ) : (
                  <span className="text-emerald-700 font-bold flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>🎉 You unlocked FREE Delivery across Kenya!</span>
                  </span>
                )}
              </span>
              <span className="font-bold text-[#67CECD] text-[11px]">{progressPercent}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden p-0.5">
              <div
                className="bg-gradient-to-r from-[#67CECD] to-[#4AACAB] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* 3. Scrollable Main Cart Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-24 h-24 rounded-3xl bg-[#FAF8F5] border border-[#F5F1EA] flex items-center justify-center text-[#67CECD] shadow-inner">
                  <ShoppingBag className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-800 text-lg">Your cart is currently empty</h4>
                  <p className="text-xs text-gray-500 mt-1 max-w-xs leading-relaxed">
                    Treat your companion to premium kibble, organic grooming shampoos, orthopedic beds, or aquatic supplies!
                  </p>
                </div>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="bg-[#67CECD] hover:bg-[#4AACAB] text-white px-7 py-3 rounded-2xl text-xs font-bold shadow-md transition"
                >
                  Explore Catalog
                </Link>
              </div>
            ) : (
              <>
                {/* Line Items */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1A1A1A]">
                    <span>CART ITEMS ({totalItems})</span>
                    <button
                      onClick={clearCart}
                      className="text-[11px] font-semibold text-gray-400 hover:text-red-500 transition"
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="space-y-3">
                    {items.map(({ product, quantity }) => (
                      <div
                        key={product.id}
                        className="flex items-center space-x-3.5 bg-white p-3.5 rounded-2xl border border-[#F5F1EA] shadow-xs hover:border-[#67CECD]/50 transition group"
                      >
                        {/* Thumbnail */}
                        <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#FAF8F5] flex-shrink-0 border border-gray-100">
                          <Image
                            src={product.images[0]}
                            alt={product.title}
                            fill
                            className="object-cover group-hover:scale-105 transition duration-300"
                          />
                        </div>

                        {/* Info & Line Controls */}
                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-start justify-between gap-2">
                            <Link
                              href={`/product/${product.handle}`}
                              onClick={closeCart}
                              className="font-heading font-semibold text-xs text-[#1A1A1A] hover:text-[#67CECD] transition line-clamp-1"
                            >
                              {product.title}
                            </Link>
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="text-gray-400 hover:text-red-500 transition p-0.5"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <p className="text-[10px] text-[#888888] font-medium">{product.category}</p>

                          <div className="flex items-center justify-between pt-1">
                            {/* Quantity buttons */}
                            <div className="flex items-center space-x-2 bg-[#F5F1EA] rounded-lg px-2.5 py-1">
                              <button
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                className="text-gray-600 hover:text-black p-0.5"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-bold w-4 text-center text-[#1A1A1A]">{quantity}</span>
                              <button
                                onClick={() => updateQuantity(product.id, quantity + 1)}
                                className="text-gray-600 hover:text-black p-0.5"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            {/* Total Line Price */}
                            <div className="text-right">
                              <span className="font-heading font-extrabold text-sm text-[#67CECD]">
                                {formatKES(product.price * quantity)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Fulfillment Method Selector */}
                <div className="bg-white p-4 rounded-2xl border border-[#F5F1EA] shadow-xs space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1A1A1A]">
                    <span className="flex items-center space-x-1.5">
                      <Truck className="w-4 h-4 text-[#67CECD]" />
                      <span>Fulfillment & Delivery Method</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('courier')}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition flex flex-col justify-between ${
                        deliveryMethod === 'courier'
                          ? 'bg-[#FAF8F5] border-[#67CECD] ring-1 ring-[#67CECD]/30'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-[#1A1A1A]">Door Delivery</span>
                        <Truck className={`w-3.5 h-3.5 ${deliveryMethod === 'courier' ? 'text-[#67CECD]' : 'text-gray-400'}`} />
                      </div>
                      <span className="text-[10px] text-gray-500">KE, UG & TZ Freight</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('pickup')}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition flex flex-col justify-between ${
                        deliveryMethod === 'pickup'
                          ? 'bg-[#FAF8F5] border-[#67CECD] ring-1 ring-[#67CECD]/30'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-[#1A1A1A]">Store Pickup</span>
                        <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">FREE</span>
                      </div>
                      <span className="text-[10px] text-gray-500">Langoni Rd, Mombasa</span>
                    </button>
                  </div>

                  {/* Country picker when courier selected */}
                  {deliveryMethod === 'courier' && (
                    <div className="pt-2 border-t border-gray-100 space-y-1.5">
                      <label className="text-[11px] font-semibold text-gray-600">Select Delivery Country:</label>
                      <div className="grid grid-cols-3 gap-1.5 text-[11px]">
                        <button
                          type="button"
                          onClick={() => setDeliveryCountry('KE')}
                          className={`py-1.5 px-2 rounded-lg border font-bold text-center transition ${
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
                          className={`py-1.5 px-2 rounded-lg border font-bold text-center transition ${
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
                          className={`py-1.5 px-2 rounded-lg border font-bold text-center transition ${
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

                  {deliveryMethod === 'pickup' && (
                    <div className="bg-[#F5F1EA] p-2.5 rounded-xl text-[11px] text-gray-700 space-y-1">
                      <div className="flex items-center space-x-1.5 font-bold text-[#1A1A1A]">
                        <Store className="w-3.5 h-3.5 text-[#67CECD]" />
                        <span>Pickup Location: Langoni Road, Mombasa</span>
                      </div>
                      <p className="text-gray-500">Ready in 2 hours during store hours (Mon–Sat 9AM–5:30PM EAT).</p>
                    </div>
                  )}
                </div>

                {/* 5. Interactive Promo Code & Voucher */}
                <div className="bg-white p-4 rounded-2xl border border-[#F5F1EA] shadow-xs space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1A1A1A]">
                    <span className="flex items-center space-x-1.5">
                      <Percent className="w-4 h-4 text-[#67CECD]" />
                      <span>Promotions & Pet Parent Coupons</span>
                    </span>
                  </div>

                  {appliedPromo ? (
                    <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-xs">
                      <div className="flex items-center space-x-2 text-emerald-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <div>
                          <strong className="font-bold">{appliedPromo.code}</strong> Applied:
                          <span className="text-[11px] block text-emerald-700">{appliedPromo.description}</span>
                        </div>
                      </div>
                      <button
                        onClick={removePromoCode}
                        className="text-red-500 hover:underline text-[11px] font-bold px-2 py-1"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handlePromoSubmit} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          placeholder="Enter Promo Code (e.g. BAGHA10)"
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

                      {/* Quick Chips */}
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
                          MOMBASA500 (KSh 500 Off)
                        </button>
                      </div>

                      {promoMessage && (
                        <p className={`text-[11px] font-medium mt-1 ${promoMessage.isError ? 'text-red-500' : 'text-emerald-600'}`}>
                          {promoMessage.text}
                        </p>
                      )}
                    </form>
                  )}
                </div>

                {/* 6. Cause Donation & Gift Wrap Add-ons */}
                <div className="bg-white p-4 rounded-2xl border border-[#F5F1EA] shadow-xs space-y-2.5 text-xs">
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDonation(200)}>
                    <label className="flex items-center space-x-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={donationAmount > 0}
                        onChange={() => toggleDonation(200)}
                        className="rounded text-[#67CECD] focus:ring-[#67CECD] w-4 h-4"
                      />
                      <div>
                        <span className="font-bold text-[#1A1A1A] flex items-center space-x-1">
                          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
                          <span>Mombasa Animal Rescue Donation</span>
                        </span>
                        <p className="text-[10px] text-gray-500">Add KSh 200 to fund food & care for local stray animals</p>
                      </div>
                    </label>
                    <span className="font-bold text-[#67CECD]">+ KSh 200</span>
                  </div>

                  <div className="border-t border-gray-100 pt-2.5 flex items-center justify-between cursor-pointer" onClick={toggleGiftWrap}>
                    <label className="flex items-center space-x-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={giftWrap}
                        onChange={toggleGiftWrap}
                        className="rounded text-[#67CECD] focus:ring-[#67CECD] w-4 h-4"
                      />
                      <div>
                        <span className="font-bold text-[#1A1A1A] flex items-center space-x-1">
                          <Gift className="w-3.5 h-3.5 text-amber-500 inline" />
                          <span>Luxury Pet Gift Wrap & Custom Note</span>
                        </span>
                        <p className="text-[10px] text-gray-500">Premium ribbon box & handwritten pet parent card</p>
                      </div>
                    </label>
                    <span className="font-bold text-[#67CECD]">+ KSh 250</span>
                  </div>
                </div>

                {/* 7. Collapsible Order Notes */}
                <div className="bg-white rounded-2xl border border-[#F5F1EA] shadow-xs overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setIsNotesOpen(!isNotesOpen)}
                    className="w-full p-3.5 flex items-center justify-between text-xs font-bold text-gray-700 hover:bg-[#FAF8F5] transition"
                  >
                    <span className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-[#67CECD]" />
                      <span>{orderNotes ? 'Edit Order Notes (Saved)' : 'Add Delivery Notes or Pet Dietary Instructions'}</span>
                    </span>
                    {isNotesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {isNotesOpen && (
                    <div className="p-3.5 pt-0 border-t border-gray-100">
                      <textarea
                        rows={2}
                        placeholder="e.g. Please leave at gate security, or note special pet allergies..."
                        value={orderNotes}
                        onChange={(e) => setOrderNotes(e.target.value)}
                        className="w-full bg-[#FAF8F5] text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#67CECD]"
                      />
                    </div>
                  )}
                </div>

                {/* 8. Upsell Recommendations */}
                {recommendedUpsells.length > 0 && (
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                      Pairs Well With Your Order:
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {recommendedUpsells.map(product => (
                        <div
                          key={product.id}
                          className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-[#F5F1EA] shadow-xs text-xs"
                        >
                          <div className="flex items-center space-x-2.5 min-w-0">
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                              <Image src={product.images[0]} alt={product.title} fill className="object-cover" />
                            </div>
                            <div className="min-w-0">
                              <h5 className="font-semibold text-[11px] text-[#1A1A1A] truncate">{product.title}</h5>
                              <span className="text-[10px] text-[#67CECD] font-bold">{formatKES(product.price)}</span>
                            </div>
                          </div>

                          <button
                            onClick={() => addToCart(product, 1)}
                            className="bg-[#FAF8F5] hover:bg-[#67CECD] hover:text-white text-[#1A1A1A] font-bold text-[10px] px-3 py-1.5 rounded-lg border border-gray-200 transition flex items-center space-x-1 flex-shrink-0"
                          >
                            <Plus className="w-3 h-3" />
                            <span>Add</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* 9. Drawer Footer & Multi-Channel Checkout */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#F5F1EA] bg-white space-y-3 shadow-lg">
              
              {/* Detailed Financial Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="font-bold text-[#1A1A1A]">{formatKES(subtotal)}</span>
                </div>

                {appliedPromo && discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount ({appliedPromo.code})</span>
                    <span>-{formatKES(discountAmount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>
                    {deliveryMethod === 'pickup' ? 'Store Pickup (Mombasa)' : `Regional Delivery (${deliveryCountry})`}
                  </span>
                  <span className="font-bold text-[#1A1A1A]">
                    {shippingFee === 0 ? (
                      <span className="text-emerald-700 font-bold">FREE</span>
                    ) : (
                      formatKES(shippingFee)
                    )}
                  </span>
                </div>

                {donationAmount > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Mombasa Animal Rescue</span>
                    <span className="font-bold text-[#1A1A1A]">+{formatKES(donationAmount)}</span>
                  </div>
                )}

                {giftWrap && (
                  <div className="flex justify-between text-gray-600">
                    <span>Luxury Gift Wrap</span>
                    <span className="font-bold text-[#1A1A1A]">+ KSh 250</span>
                  </div>
                )}

                <div className="flex justify-between text-base font-extrabold text-[#1A1A1A] pt-2 border-t border-[#F5F1EA]">
                  <span>Total Due</span>
                  <span className="font-heading text-xl text-[#67CECD]">{formatKES(grandTotal)}</span>
                </div>
              </div>

              {/* Checkout Actions */}
              <div className="space-y-2 pt-1">
                {/* 1. Shopify Hosted Checkout */}
                <a
                  href={`https://wa.me/254711401371?text=${encodeURIComponent(whatsappCheckoutMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#67CECD] hover:bg-[#4AACAB] text-white py-3.5 rounded-2xl font-bold text-xs shadow-lg transition"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Proceed to 256-Bit SSL Checkout ({formatKES(grandTotal)})</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* 2. WhatsApp Instant Order */}
                <a
                  href={whatsappCheckoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#1A1A1A] hover:bg-black text-[#67CECD] py-3 rounded-2xl font-bold text-xs shadow-md transition border border-[#67CECD]/30"
                >
                  <MessageCircle className="w-4 h-4 text-[#67CECD]" />
                  <span>1-Click Order via WhatsApp Concierge</span>
                </a>

                {/* View Full Cart Link */}
                <div className="flex items-center justify-between pt-1">
                  <Link
                    href="/cart"
                    onClick={closeCart}
                    className="text-xs font-semibold text-gray-500 hover:text-[#67CECD] transition"
                  >
                    View Full Cart Page & M-Pesa Options →
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsMpesaGuideOpen(!isMpesaGuideOpen)}
                    className="text-[11px] font-bold text-emerald-700 hover:underline"
                  >
                    🇰🇪 M-Pesa Info
                  </button>
                </div>

                {isMpesaGuideOpen && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-[11px] text-emerald-900 space-y-1">
                    <p className="font-bold">M-Pesa Buy Goods / Till Payment Available</p>
                    <p>Contact our store on WhatsApp at <strong>+254 711 401 371</strong> for the verified Till Number and instant receipt dispatch.</p>
                  </div>
                )}
              </div>

              {/* Guarantees */}
              <div className="flex items-center justify-center space-x-2 text-[10px] text-gray-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Shopify Encrypted & 100% Authentic Pet Brands Guarantee</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
