'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '@/lib/shopify/types';

export type DeliveryMethod = 'courier' | 'pickup';
export type DeliveryCountry = 'KE' | 'UG' | 'TZ';

export interface AppliedPromo {
  code: string;
  discountType: 'percentage' | 'fixed' | 'free_shipping';
  value: number; // e.g. 10 for 10%, or 500 for KSh 500
  description: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  totalItems: number;
  freeShippingThreshold: number;

  // Rich Cart additions
  appliedPromo: AppliedPromo | null;
  discountAmount: number;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;

  deliveryMethod: DeliveryMethod;
  setDeliveryMethod: (method: DeliveryMethod) => void;

  deliveryCountry: DeliveryCountry;
  setDeliveryCountry: (country: DeliveryCountry) => void;

  shippingFee: number;
  grandTotal: number;

  orderNotes: string;
  setOrderNotes: (notes: string) => void;

  donationAmount: number;
  toggleDonation: (amount?: number) => void;

  giftWrap: boolean;
  toggleGiftWrap: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD_KES = 10000;

export const AVAILABLE_PROMOS: Record<string, AppliedPromo> = {
  BAGHA10: {
    code: 'BAGHA10',
    discountType: 'percentage',
    value: 10,
    description: '10% Welcome Discount for Pet Parents',
  },
  MOMBASA500: {
    code: 'MOMBASA500',
    discountType: 'fixed',
    value: 500,
    description: 'KSh 500 Off Coast Region Special',
  },
  FREESHIP: {
    code: 'FREESHIP',
    discountType: 'free_shipping',
    value: 0,
    description: 'Free Regional Delivery Pass',
  },
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Rich State
  const [appliedPromo, setAppliedPromo] = useState<AppliedPromo | null>(null);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('courier');
  const [deliveryCountry, setDeliveryCountry] = useState<DeliveryCountry>('KE');
  const [orderNotes, setOrderNotes] = useState<string>('');
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [giftWrap, setGiftWrap] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('bagha_cart');
      if (saved) {
        setItems(JSON.parse(saved));
      }
      const savedPromo = localStorage.getItem('bagha_cart_promo');
      if (savedPromo) {
        setAppliedPromo(JSON.parse(savedPromo));
      }
      const savedNotes = localStorage.getItem('bagha_cart_notes');
      if (savedNotes) {
        setOrderNotes(savedNotes);
      }
    } catch (err) {
      console.error('Failed to load cart from localStorage:', err);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem('bagha_cart', JSON.stringify(items));
      if (appliedPromo) {
        localStorage.setItem('bagha_cart_promo', JSON.stringify(appliedPromo));
      } else {
        localStorage.removeItem('bagha_cart_promo');
      }
      localStorage.setItem('bagha_cart_notes', orderNotes);
    } catch (err) {
      console.error('Failed to save cart to localStorage:', err);
    }
  }, [items, appliedPromo, orderNotes, isInitialized]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen(prev => !prev);

  const addToCart = (product: Product, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setAppliedPromo(null);
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Discount Calculation
  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountType === 'percentage') {
      discountAmount = Math.round((subtotal * appliedPromo.value) / 100);
    } else if (appliedPromo.discountType === 'fixed') {
      discountAmount = Math.min(subtotal, appliedPromo.value);
    }
  }

  // Shipping Calculation
  let shippingFee = 0;
  if (deliveryMethod === 'pickup') {
    shippingFee = 0;
  } else if (appliedPromo?.discountType === 'free_shipping') {
    shippingFee = 0;
  } else {
    if (deliveryCountry === 'KE') {
      shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD_KES ? 0 : 500;
    } else if (deliveryCountry === 'UG') {
      shippingFee = 2500;
    } else if (deliveryCountry === 'TZ') {
      shippingFee = 2800;
    }
  }

  const giftWrapFee = giftWrap ? 250 : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee + donationAmount + giftWrapFee);

  const applyPromoCode = (rawCode: string) => {
    const clean = rawCode.trim().toUpperCase();
    const found = AVAILABLE_PROMOS[clean];
    if (found) {
      setAppliedPromo(found);
      return { success: true, message: `Promo "${clean}" applied: ${found.description}` };
    }
    return { success: false, message: 'Invalid or expired coupon code. Try "BAGHA10" or "MOMBASA500".' };
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
  };

  const toggleDonation = (amount = 200) => {
    setDonationAmount(prev => (prev > 0 ? 0 : amount));
  };

  const toggleGiftWrap = () => {
    setGiftWrap(prev => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        totalItems,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD_KES,
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
