import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: 'Bagha Pet Store — Your Pet Expert in Mombasa, Kenya',
  description: 'Upscale pet supply retailer & wholesale distributor in Langoni Road, Mombasa. Premium dog & cat food, grooming health supplies, toys, bedding, aquarium care, and East Africa delivery.',
  keywords: [
    'Pet Store Mombasa',
    'Bagha Pet Store',
    'Pet Supplies Kenya',
    'Wholesale Pet Food Mombasa',
    'Dog Food Langoni Road',
    'Cat Food Kenya',
    'Aquarium Supplies Mombasa',
  ],
  openGraph: {
    title: 'Bagha Pet Store — Your Pet Expert in Mombasa, Kenya',
    description: 'Retail & Wholesale pet supplies store in Langoni Road, Mombasa. Delivery to Kenya, Uganda, and Tanzania.',
    url: 'https://baghapetstore.co.ke',
    siteName: 'Bagha Pet Store',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Bagha Pet Store Logo',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Structured Data JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PetStore',
    'name': 'Bagha Pet Store',
    'image': 'https://baghapetstore.co.ke/logo.png',
    '@id': 'https://baghapetstore.co.ke',
    'url': 'https://baghapetstore.co.ke',
    'telephone': '+254711401371',
    'priceRange': 'KSh 500 - KSh 20,000',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Langoni Road',
      'addressLocality': 'Mombasa',
      'addressCountry': 'KE',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': -4.05,
      'longitude': 39.6667,
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      'opens': '09:00',
      'closes': '17:30',
    },
    'sameAs': ['https://www.instagram.com/bagha_pet_store'],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FDFDFB] text-[#1A1A1A] antialiased selection:bg-[#67CECD] selection:text-white">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex-1 bg-arc-pattern">{children}</main>
          <Footer />
          <WhatsAppWidget />
        </CartProvider>
      </body>
    </html>
  );
}
