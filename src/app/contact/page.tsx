'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Send, CheckCircle2, MessageCircle, Store } from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Determine dynamic "Open Now / Closed" status based on Mombasa local time (UTC+3)
    const checkStoreStatus = () => {
      const now = new Date();
      // UTC+3 East Africa Time
      const eatHour = (now.getUTCHours() + 3) % 24;
      const day = now.getUTCDay(); // 0 is Sun, 1-6 is Mon-Sat

      // Mon-Sat: 9:00 AM (9) to 5:30 PM (17:30)
      if (day >= 1 && day <= 6) {
        if (eatHour >= 9 && eatHour < 18) {
          setIsOpenNow(true);
          return;
        }
      }
      setIsOpenNow(false);
    };

    checkStoreStatus();
    const interval = setInterval(checkStoreStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = `Hi Bagha Pet Store! Name: ${formData.name}, Message: ${formData.message}`;
  const whatsappUrl = `https://wa.me/254711401371?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans">
      
      {/* Banner */}
      <ScrollReveal direction="up" duration={0.7} className="bg-sand-gradient p-8 sm:p-12 rounded-3xl border border-[#F5F1EA] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#67CECD] uppercase tracking-wider">Get in Touch</span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A1A1A]">
            Contact Bagha Pet Store
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl">
            We look forward to welcoming you at our Langoni Road store or answering your inquiries online.
          </p>
        </div>

        {/* Dynamic Status Badge */}
        <div className="bg-white p-4 rounded-2xl border border-[#F5F1EA] shadow-sm flex items-center space-x-3">
          <div className={`w-3.5 h-3.5 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-ping' : 'bg-red-400'}`} />
          <div>
            <p className="font-heading font-bold text-xs text-[#1A1A1A]">
              Store Status: {isOpenNow ? 'OPEN NOW' : 'CLOSED'}
            </p>
            <p className="text-[11px] text-gray-400">
              Mon–Sat 9:00 AM – 5:30 PM (EAT)
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Grid: Contact Info & Map + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Details & Google Map Embed */}
        <ScrollReveal direction="right" duration={0.8} className="lg:col-span-6 space-y-6">
          
          <div className="bg-white p-6 rounded-3xl border border-[#F5F1EA] shadow-sm space-y-4">
            <h3 className="font-heading font-bold text-lg text-[#1A1A1A]">Store Information</h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-3 text-gray-700">
                <MapPin className="w-5 h-5 text-[#67CECD] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1A1A1A] block">Address:</strong>
                  <span>Langoni Road, Mombasa, Kenya 🇰🇪</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-700">
                <Phone className="w-5 h-5 text-[#67CECD] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1A1A1A] block">Phone / WhatsApp Direct:</strong>
                  <a href="tel:+254711401371" className="hover:underline text-[#67CECD] font-bold">
                    +254 711 401 371
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-700">
                <Clock className="w-5 h-5 text-[#67CECD] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1A1A1A] block">Store Hours:</strong>
                  <span>Monday – Saturday: 9:00 AM – 5:30 PM (EAT)</span>
                  <span className="block text-gray-400">Sunday: Closed</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-700 pt-1">
                <Instagram className="w-5 h-5 text-[#67CECD] flex-shrink-0" />
                <div>
                  <strong className="text-[#1A1A1A] block">Instagram Community:</strong>
                  <a
                    href="https://www.instagram.com/bagha_pet_store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[#67CECD] font-medium"
                  >
                    @bagha_pet_store
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Map Pin for Langoni Road Mombasa */}
          <div className="bg-white p-2 rounded-3xl border border-[#F5F1EA] shadow-sm overflow-hidden">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
              <iframe
                title="Bagha Pet Store Location - Langoni Road, Mombasa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.51010325492!2d39.6644!3d-4.0538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840132104051061%3A0x6b6c2d1b7a2f5e!2sLangoni%20Rd%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </ScrollReveal>

        {/* Right Column: Contact Form */}
        <ScrollReveal direction="left" duration={0.8} className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#F5F1EA] shadow-lg space-y-6">
          <div>
            <h2 className="font-heading font-bold text-xl text-[#1A1A1A]">Send Us a Message</h2>
            <p className="text-xs text-gray-500 mt-1">
              Have a product request, dietary question, or store feedback? We respond promptly.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-heading font-bold text-base">Message Sent Successfully!</h3>
              <p className="text-xs text-emerald-800">
                Thank you for contacting Bagha Pet Store. We will reply to your inbox shortly.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#67CECD] text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-md"
              >
                Or Chat on WhatsApp for Instant Answer
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-gray-700">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Salim Omar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#FAF8F5] p-3 rounded-xl border border-gray-200 text-sm sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#67CECD]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-gray-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="salim@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF8F5] p-3 rounded-xl border border-gray-200 text-sm sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#67CECD]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-gray-700">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+254 7XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF8F5] p-3 rounded-xl border border-gray-200 text-sm sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#67CECD]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-gray-700">Message *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we help your pet today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FAF8F5] p-3 rounded-xl border border-gray-200 text-sm sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#67CECD]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#67CECD] hover:bg-[#4AACAB] text-white py-3.5 rounded-2xl font-bold text-xs shadow-lg transition flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Bagha Store</span>
              </button>
            </form>
          )}

          <div className="pt-4 border-t border-[#F5F1EA]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-[#1A1A1A] hover:bg-black text-[#67CECD] py-3.5 rounded-2xl font-bold text-xs shadow-md transition"
            >
              <MessageCircle className="w-4 h-4 text-[#67CECD]" />
              <span>Connect directly on WhatsApp (+254 711 401 371)</span>
            </a>
          </div>
        </ScrollReveal>

      </div>

    </div>
  );
}
