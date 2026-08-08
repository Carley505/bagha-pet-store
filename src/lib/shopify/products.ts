import { Product, Category } from './types';

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'cat-dog-food',
    slug: 'dog-food',
    name: 'Dog Food & Treats',
    description: 'Premium dry kibble, raw diets, organic chews & dental sticks for puppies to senior dogs.',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80',
    itemCount: 24,
  },
  {
    id: 'cat-food',
    slug: 'cat-food',
    name: 'Cat Food & Treats',
    description: 'Grain-free wet food, crunchy nibbles, catnip snacks & hairball care formulas.',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    itemCount: 18,
  },
  {
    id: 'grooming-health',
    slug: 'grooming-health',
    name: 'Grooming & Health',
    description: 'Veterinary-grade shampoos, ear cleaners, flea & tick prevention, supplements & clippers.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
    itemCount: 15,
  },
  {
    id: 'toys-accessories',
    slug: 'toys-accessories',
    name: 'Toys & Accessories',
    description: 'Durable squeakers, scratch posts, ergonomic leashes, harness vests & interactive puzzles.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80',
    itemCount: 30,
  },
  {
    id: 'bedding-carriers',
    slug: 'bedding-carriers',
    name: 'Bedding, Cages & Carriers',
    description: 'Orthopedic memory foam dog beds, cozy cat huts, Airline-approved travel crates.',
    image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80',
    itemCount: 14,
  },
  {
    id: 'aquarium-small-pets',
    slug: 'aquarium-small-pets',
    name: 'Aquarium & Small Pets',
    description: 'Tropical fish flakes, water conditioners, LED tank lighting, rabbit pellets & hamster habitats.',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
    itemCount: 18,
  },
  {
    id: 'wholesale-bulk',
    slug: 'wholesale-bulk',
    name: 'Wholesale Bulk Packs',
    description: 'Discounted master cartons for pet shops, clinics, shelters & breeders across East Africa.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    itemCount: 10,
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    handle: 'royal-canin-maxi-adult-15kg',
    title: 'Royal Canin Maxi Adult Dry Dog Food (15kg)',
    description: 'Specially formulated for adult large dogs (26 to 44 kg) over 15 months old. Promotes optimal digestability with an exclusive formula including high quality protein and a balanced supply of dietary fiber.',
    shortDescription: 'Balanced nutrition for large breed adult dogs. Supports bone & joint health.',
    price: 13500,
    compareAtPrice: 14800,
    category: 'Dog Food & Treats',
    tags: ['Dry Food', 'Large Breed', 'Adult', 'Best Seller'],
    images: [
      'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    stockQuantity: 28,
    weight: '15.0 kg',
    brand: 'Royal Canin',
    rating: 4.9,
    reviewCount: 42,
    specifications: {
      'Breed Size': 'Large (26-44kg)',
      'Life Stage': 'Adult (15+ months)',
      'Protein Content': '26%',
      'Origin': 'France / Import',
    },
    isWholesaleEligible: true,
    wholesaleMinQty: 5,
    wholesalePrice: 11800,
  },
  {
    id: 'prod-2',
    handle: 'whiskas-ocean-fish-cat-food-7kg',
    title: 'Whiskas Ocean Fish Adult Cat Kibble (7kg)',
    description: 'Delicious ocean fish flavor packed with essential nutrients, Omega 6 & Zinc for healthy skin and shiny coat. Formulated with Vitamin A and Taurine for clear eyesight.',
    shortDescription: 'Crunchy kibble with tuna & salmon pockets for vibrant cat health.',
    price: 4950,
    compareAtPrice: 5400,
    category: 'Cat Food & Treats',
    tags: ['Cat Kibble', 'Adult Cat', 'Seafood', 'Popular'],
    images: [
      'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    stockQuantity: 45,
    weight: '7.0 kg',
    brand: 'Whiskas',
    rating: 4.8,
    reviewCount: 38,
    specifications: {
      'Flavor': 'Ocean Fish & Salmon',
      'Life Stage': 'Adult (1+ years)',
      'Special Care': 'Coat & Vision',
      'Origin': 'Thailand / Import',
    },
    isWholesaleEligible: true,
    wholesaleMinQty: 10,
    wholesalePrice: 4200,
  },
  {
    id: 'prod-3',
    handle: 'bagha-premium-aloe-pet-shampoo-500ml',
    title: 'Bagha Pure Aloe & Oatmeal Dog Shampoo (500ml)',
    description: 'Soothing hypoallergenic formula crafted for pets with sensitive or itchy skin. Infused with natural aloe vera extract, oatmeal colloid, and mild coconut cleansers.',
    shortDescription: 'Gentle, pH-balanced oatmeal & aloe coat cleanser. Hypoallergenic.',
    price: 1850,
    category: 'Grooming & Health',
    tags: ['Grooming', 'Shampoo', 'Aloe Vera', 'Bagha Signature'],
    images: [
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    stockQuantity: 60,
    weight: '500 ml',
    brand: 'Bagha Signature',
    rating: 5.0,
    reviewCount: 19,
    specifications: {
      'Volume': '500 ml',
      'Scent': 'Fresh Aloe & Vanilla',
      'pH Balance': '6.8 (Optimal for Pets)',
    },
    isWholesaleEligible: true,
    wholesaleMinQty: 12,
    wholesalePrice: 1350,
  },
  {
    id: 'prod-4',
    handle: 'indestructible-rubber-chew-bone',
    title: 'ToughFlex Heavy Duty Rubber Chew Toy',
    description: 'Designed for aggressive chewers! Made from 100% non-toxic food-grade natural rubber. Features treat-dispensing grooves to keep dogs mentally stimulated.',
    shortDescription: 'Ultra-durable natural rubber bone with treat dispenser slot.',
    price: 1600,
    compareAtPrice: 1950,
    category: 'Toys & Accessories',
    tags: ['Dog Toy', 'Heavy Duty', 'Interactive'],
    images: [
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    stockQuantity: 32,
    weight: '350 g',
    brand: 'ToughFlex',
    rating: 4.7,
    reviewCount: 29,
    specifications: {
      'Material': 'Natural Food-Grade Rubber',
      'Suitability': 'Medium & Large Dogs',
      'Color': 'Bagha Teal & Deep Red',
    },
  },
  {
    id: 'prod-5',
    handle: 'orthopedic-memory-foam-dog-bed-large',
    title: 'Bagha Luxury Orthopedic Memory Foam Pet Bed (L)',
    description: 'Give your companion ultimate joint comfort! Premium high-density memory foam base with water-resistant washable plush micro-suede cover and non-slip rubber bottom.',
    shortDescription: 'Memory foam joint relief bed with removable machine-washable cover.',
    price: 8900,
    compareAtPrice: 9900,
    category: 'Bedding, Cages & Carriers',
    tags: ['Bedding', 'Orthopedic', 'Memory Foam', 'Luxury'],
    images: [
      'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    stockQuantity: 14,
    weight: '3.8 kg',
    brand: 'Bagha Home',
    rating: 4.9,
    reviewCount: 51,
    specifications: {
      'Dimensions': '90 x 70 x 15 cm',
      'Foam Type': 'Medical-grade Memory Foam',
      'Cover Material': 'Water-resistant Micro-suede',
    },
  },
  {
    id: 'prod-6',
    handle: 'tetra-min-tropical-flakes-200g',
    title: 'TetraMin Tropical Fish Flakes (200g)',
    description: 'Biologically balanced staple diet for all tropical aquarium fish. Patented BioActive formula supports immune health, vibrant natural colors, and clean water.',
    shortDescription: 'Complete nutrition flakes for active, colorful tropical fish.',
    price: 2400,
    category: 'Aquarium & Small Pet Supplies',
    tags: ['Fish Food', 'Aquarium', 'Tropical'],
    images: [
      'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    stockQuantity: 50,
    weight: '200 g',
    brand: 'Tetra',
    rating: 4.8,
    reviewCount: 16,
    specifications: {
      'Target Species': 'Tetras, Guppies, Angelfish & Barbs',
      'Weight': '200 grams',
      'Water Impact': 'Non-clouding formula',
    },
    isWholesaleEligible: true,
    wholesaleMinQty: 10,
    wholesalePrice: 1900,
  },
  {
    id: 'prod-7',
    handle: 'bravecto-chewable-flea-tick-dog-large',
    title: 'Bravecto Chewable Flea & Tick Treatment (20-40kg)',
    description: 'Single oral chewable tablet providing up to 12 weeks of continuous protection against fleas and ticks for large dogs. Starts killing fleas within 2 hours.',
    shortDescription: '3-month broad-spectrum flea & tick protection chew for dogs.',
    price: 5200,
    category: 'Grooming & Health',
    tags: ['Veterinary', 'Flea & Tick', 'Health', 'Dog Care'],
    images: [
      'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    stockQuantity: 35,
    weight: '1 Dose',
    brand: 'MSD Animal Health',
    rating: 5.0,
    reviewCount: 64,
    specifications: {
      'Duration': '12 Weeks (84 Days)',
      'Dog Weight': '20 - 40 kg',
      'Administration': 'Oral Flavor Chew',
    },
  },
  {
    id: 'prod-8',
    handle: 'wholesale-cat-litter-bentonite-20kg-pack',
    title: 'Bagha Clumping Bentonite Cat Litter (20kg Bulk Bag)',
    description: 'Super-clumping natural bentonite clay cat litter with activated charcoal odor control. Low dust, non-stick, and highly absorbent. Ideal for multi-cat households and retail repackaging.',
    shortDescription: '20kg Master bag of fast-clumping lavender scented cat litter.',
    price: 3200,
    compareAtPrice: 3800,
    category: 'Wholesale Bulk Packs',
    tags: ['Wholesale', 'Cat Litter', 'Bulk Pack', 'Bentonite'],
    images: [
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    stockQuantity: 100,
    weight: '20.0 kg',
    brand: 'Bagha Wholesale',
    rating: 4.9,
    reviewCount: 22,
    specifications: {
      'Bag Weight': '20 kg',
      'Absorption Rate': '350%',
      'Fragrance': 'Fresh Lavender & Charcoal',
    },
    isWholesaleEligible: true,
    wholesaleMinQty: 5,
    wholesalePrice: 2600,
  },
  {
    id: 'prod-9',
    handle: 'sobo-submersible-internal-filter-aquarium-wp-1000f',
    title: 'Sobo Internal Power Aquarium Filter (WP-1000F)',
    description: 'High-efficiency multi-stage submersible filter with biological sponge filtration and aeration nozzle. Suitable for fresh and saltwater fish tanks up to 150 liters.',
    shortDescription: 'Submersible internal filter with oxygen aeration flow for tanks up to 150L.',
    price: 3450,
    compareAtPrice: 3900,
    category: 'Aquarium & Small Pet Supplies',
    tags: ['Aquarium Filter', 'Water Care', 'Sobo', 'Fish Tank'],
    images: [
      'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    stockQuantity: 24,
    weight: '650 g',
    brand: 'Sobo Aquarium',
    rating: 4.8,
    reviewCount: 31,
    specifications: {
      'Flow Rate': '650 L/H',
      'Power Consumption': '15W',
      'Tank Capacity': 'Up to 150 Liters',
      'Origin': 'Import',
    },
    isWholesaleEligible: true,
    wholesaleMinQty: 6,
    wholesalePrice: 2800,
  },
  {
    id: 'prod-10',
    handle: 'oxbow-western-timothy-hay-small-pets-1kg',
    title: 'Oxbow Western Timothy Hay for Rabbits & Guinea Pigs (1kg)',
    description: '100% all-natural high-fiber Timothy grass hay harvested fresh. Essential for gastrointestinal motility and natural dental wear in rabbits, guinea pigs, and chinchillas.',
    shortDescription: 'Hand-selected, high-fiber sun-cured Timothy hay for small herbivores.',
    price: 2150,
    compareAtPrice: 2450,
    category: 'Aquarium & Small Pet Supplies',
    tags: ['Small Pets', 'Timothy Hay', 'Rabbit Food', 'Guinea Pig', 'Oxbow'],
    images: [
      'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    stockQuantity: 40,
    weight: '1.0 kg',
    brand: 'Oxbow Animal Health',
    rating: 4.9,
    reviewCount: 27,
    specifications: {
      'Target Animals': 'Rabbits, Guinea Pigs & Chinchillas',
      'Crude Fiber': 'Min 32.0%',
      'Weight': '1.0 kg',
      'Origin': 'USA / Import',
    },
    isWholesaleEligible: true,
    wholesaleMinQty: 8,
    wholesalePrice: 1750,
  },
  {
    id: 'prod-11',
    handle: 'skudo-iata-airline-approved-pet-travel-crate-medium',
    title: 'Skudo IATA Airline-Approved Pet Travel Carrier (Medium)',
    description: 'Heavy-duty durable polypropylene pet travel carrier compliant with IATA air transport regulations. Features secure dual-spring metal lock door, 360-degree ventilation slats, and carry handle.',
    shortDescription: 'IATA flight-compliant hard-shell pet carrier with metal spring lock.',
    price: 11500,
    compareAtPrice: 12800,
    category: 'Bedding, Cages & Carriers',
    tags: ['Travel Carrier', 'IATA Approved', 'Airline Crate', 'Dog Carrier', 'Cat Travel'],
    images: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    stockQuantity: 18,
    weight: '4.5 kg',
    brand: 'Skudo Travel',
    rating: 5.0,
    reviewCount: 44,
    specifications: {
      'Dimensions': '68 x 48 x 51 cm',
      'Max Pet Weight': 'Up to 18 kg',
      'Compliance': 'IATA Flight Approved',
      'Material': 'Impact-Resistant Polymer',
    },
    isWholesaleEligible: true,
    wholesaleMinQty: 4,
    wholesalePrice: 9800,
  },
  {
    id: 'prod-12',
    handle: 'bagha-cozy-donut-calming-plush-pet-bed-medium',
    title: 'Bagha Anti-Anxiety Shag Donut Pet Bed (Medium 70cm)',
    description: 'Ultra-soft vegan faux fur circular donut bed with raised bolster rim that creates a sense of security and provides head and neck support. Filled with premium virgin airloft fibers.',
    shortDescription: 'Calming deep-dish shag plush bed for anxious cats and dogs.',
    price: 4850,
    compareAtPrice: 5600,
    category: 'Bedding, Cages & Carriers',
    tags: ['Calming Bed', 'Donut Bed', 'Plush', 'Cat Bed', 'Dog Bed', 'Bagha Signature'],
    images: [
      'https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    stockQuantity: 26,
    weight: '1.6 kg',
    brand: 'Bagha Home',
    rating: 4.9,
    reviewCount: 36,
    specifications: {
      'Diameter': '70 cm (Medium)',
      'Pet Suitability': 'Pets up to 14 kg',
      'Washing': 'Machine Washable Gentle Cycle',
      'Base': 'Anti-slip water resistant',
    },
    isWholesaleEligible: true,
    wholesaleMinQty: 6,
    wholesalePrice: 3900,
  },
];

export async function getProducts(options?: {
  categorySlug?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
  wholesaleOnly?: boolean;
}): Promise<Product[]> {
  let list = [...MOCK_PRODUCTS];

  if (options?.categorySlug) {
    const categoryObj = MOCK_CATEGORIES.find(c => c.slug === options.categorySlug);
    if (categoryObj) {
      list = list.filter(p => p.category.toLowerCase() === categoryObj.name.toLowerCase());
    }
  }

  if (options?.search) {
    const query = options.search.toLowerCase();
    list = list.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query)
    );
  }

  if (options?.minPrice !== undefined) {
    list = list.filter(p => p.price >= options.minPrice!);
  }

  if (options?.maxPrice !== undefined) {
    list = list.filter(p => p.price <= options.maxPrice!);
  }

  if (options?.wholesaleOnly) {
    list = list.filter(p => p.isWholesaleEligible);
  }

  if (options?.sortBy) {
    switch (options.sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
      default:
        list.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }
  }

  return list;
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const found = MOCK_PRODUCTS.find(p => p.handle === handle);
  return found || null;
}

export async function getCategories(): Promise<Category[]> {
  return MOCK_CATEGORIES;
}

export function formatKES(amount: number): string {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(amount).replace('KES', 'KSh');
}
