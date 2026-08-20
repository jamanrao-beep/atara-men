export interface Product {
  slug: string;
  title: string;
  price: string;
  priceNum: number;
  category: string;
  categorySlug: string;
  collection: string;
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  badge?: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  {
    slug: "sherwanis",
    title: "Sherwanis",
    description: "Regal silhouettes for the modern groom",
    image: "/assets/images/1.png",
    count: 6,
  },
  {
    slug: "bandhgalas",
    title: "Bandhgalas",
    description: "Sharp elegance for every occasion",
    image: "/assets/images/13.png",
    count: 4,
  },
  {
    slug: "kurtas",
    title: "Kurta Sets",
    description: "Timeless comfort meets refined style",
    image: "/assets/images/32.png",
    count: 5,
  },
  {
    slug: "nehru-jackets",
    title: "Nehru Jackets",
    description: "The finishing touch of distinction",
    image: "/assets/images/34.png",
    count: 3,
  },
  {
    slug: "indo-western",
    title: "Indo-Western",
    description: "Where heritage meets contemporary",
    image: "/assets/images/20.png",
    count: 4,
  },
];

export const products: Product[] = [
  // --- SHERWANIS ---
  {
    slug: "royal-ivory-sherwani",
    title: "The Royal Ivory Sherwani",
    price: "₹45,000",
    priceNum: 45000,
    category: "Sherwanis",
    categorySlug: "sherwanis",
    collection: "The Wedding Edit",
    description: "Crafted from the finest raw silk, this sherwani features subtle ivory-on-ivory thread work with hand-embroidered zardozi detailing along the collar and cuffs. A masterpiece of minimalist luxury tailored for the modern groom.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Ivory", hex: "#F9F8F6" },
      { name: "Antique Gold", hex: "#C5A059" },
      { name: "Obsidian", hex: "#1A1A1A" },
    ],
    images: [
      "/assets/images/1.png",
      "/assets/images/2.png",
      "/assets/images/3.png",
    ],
    badge: "Bestseller",
  },
  {
    slug: "midnight-velvet-sherwani",
    title: "Midnight Velvet Sherwani",
    price: "₹52,000",
    priceNum: 52000,
    category: "Sherwanis",
    categorySlug: "sherwanis",
    collection: "The Wedding Edit",
    description: "Rich velvet drapes the silhouette of this regal sherwani. Deep midnight tones with antique gold threadwork create a presence that commands attention at any ceremony.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Midnight", hex: "#1A1A1A" },
      { name: "Regal Wine", hex: "#591C27" },
    ],
    images: [
      "/assets/images/4.png",
      "/assets/images/5.png",
    ],
  },
  {
    slug: "antique-gold-brocade-sherwani",
    title: "Antique Gold Brocade",
    price: "₹58,000",
    priceNum: 58000,
    category: "Sherwanis",
    categorySlug: "sherwanis",
    collection: "Heritage Collection",
    description: "A statement piece woven with heritage brocade patterns in antique gold. The structured shoulders and tapered fit create a commanding yet graceful silhouette.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Antique Gold", hex: "#C5A059" },
      { name: "Regal Wine", hex: "#591C27" },
    ],
    images: [
      "/assets/images/18_e5ec671a-4b96-49d5-8e62-3f465381f8b1.png",
      "/assets/images/19_f1ebf3f5-414f-4beb-bb5a-f417d1024f23.png",
    ],
    badge: "New Arrival",
  },
  {
    slug: "pearl-silk-sherwani",
    title: "Pearl Silk Sherwani",
    price: "₹42,000",
    priceNum: 42000,
    category: "Sherwanis",
    categorySlug: "sherwanis",
    collection: "The Wedding Edit",
    description: "Pure silk in a pearl white finish with delicate hand-stitched motifs along the placket. Minimalist elegance for the groom who lets his aura speak.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Pearl", hex: "#FFFFFF" },
      { name: "Ivory", hex: "#F9F8F6" },
    ],
    images: [
      "/assets/images/11.png",
      "/assets/images/12.png",
    ],
  },

  // --- BANDHGALAS ---
  {
    slug: "charcoal-bandhgala-suit",
    title: "Charcoal Tailored Bandhgala",
    price: "₹38,000",
    priceNum: 38000,
    category: "Bandhgalas",
    categorySlug: "bandhgalas",
    collection: "Formal Edit",
    description: "A precision-cut bandhgala in smoky charcoal wool-blend fabric. The structured Mandarin collar and slim-fit silhouette make this perfect for formal evenings and cocktail receptions.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Charcoal", hex: "#5C5C5C" },
      { name: "Obsidian", hex: "#1A1A1A" },
    ],
    images: [
      "/assets/images/26_ed1b9753-b5d2-4dba-ab2b-b9fb978f5864.png",
      "/assets/images/31.png",
    ],
    badge: "Bestseller",
  },
  {
    slug: "wine-bandhgala",
    title: "Regal Wine Bandhgala",
    price: "₹36,000",
    priceNum: 36000,
    category: "Bandhgalas",
    categorySlug: "bandhgalas",
    collection: "Heritage Collection",
    description: "Deep wine-hued fabric with micro-textured weave gives this bandhgala its distinctive personality. A versatile piece for sangeet nights and cocktail parties.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Regal Wine", hex: "#591C27" },
      { name: "Charcoal", hex: "#5C5C5C" },
    ],
    images: [
      "/assets/images/13.png",
      "/assets/images/14.png",
    ],
  },

  // --- KURTAS ---
  {
    slug: "alabaster-silk-kurta",
    title: "Alabaster Silk Kurta Set",
    price: "₹18,500",
    priceNum: 18500,
    category: "Kurta Sets",
    categorySlug: "kurtas",
    collection: "Everyday Luxury",
    description: "An impeccably soft silk kurta in our signature alabaster shade. Paired with matching churidar pants for a look that transitions effortlessly from pooja mornings to evening celebrations.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Alabaster", hex: "#F9F8F6" },
      { name: "Pearl", hex: "#FFFFFF" },
    ],
    images: [
      "/assets/images/16_535c7066-c1d8-4ecc-bf45-71e2074ee052.png",
      "/assets/images/17_4fb7ffb6-a193-4d2c-947c-a158a897b5a6.png",
    ],
  },
  {
    slug: "saffron-linen-kurta",
    title: "Saffron Linen Kurta Set",
    price: "₹14,500",
    priceNum: 14500,
    category: "Kurta Sets",
    categorySlug: "kurtas",
    collection: "Summer Edit",
    description: "Lightweight handloom linen in a warm saffron tone. The relaxed fit and breathable fabric make this ideal for summer festivities and Haldi ceremonies.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Saffron", hex: "#C5A059" },
      { name: "Ivory", hex: "#F9F8F6" },
    ],
    images: [
      "/assets/images/15.png",
      "/assets/images/31.png",
    ],
  },
  {
    slug: "obsidian-brocade-kurta",
    title: "Obsidian Brocade Kurta",
    price: "₹22,000",
    priceNum: 22000,
    category: "Kurta Sets",
    categorySlug: "kurtas",
    collection: "Heritage Collection",
    description: "Deep obsidian brocade with self-textured paisley motifs. The sharp Mandarin collar and front placket detailing give this kurta a contemporary edge rooted in tradition.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Obsidian", hex: "#1A1A1A" },
      { name: "Charcoal", hex: "#5C5C5C" },
    ],
    images: [
      "/assets/images/32.png",
      "/assets/images/33.png",
    ],
    badge: "New Arrival",
  },

  // --- NEHRU JACKETS ---
  {
    slug: "gold-thread-nehru-jacket",
    title: "Gold Thread Nehru Jacket",
    price: "₹24,000",
    priceNum: 24000,
    category: "Nehru Jackets",
    categorySlug: "nehru-jackets",
    collection: "Heritage Collection",
    description: "A classic Nehru jacket with subtle gold thread embroidery along the front panel. Layer it over a plain kurta for an ensemble that balances understated and opulent.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Antique Gold", hex: "#C5A059" },
      { name: "Ivory", hex: "#F9F8F6" },
    ],
    images: [
      "/assets/images/11.png",
      "/assets/images/20.png",
    ],
  },
  {
    slug: "velvet-nehru-jacket",
    title: "Velvet Obsidian Nehru Jacket",
    price: "₹28,000",
    priceNum: 28000,
    category: "Nehru Jackets",
    categorySlug: "nehru-jackets",
    collection: "Formal Edit",
    description: "Plush velvet in deep obsidian with satin-lined interior. The slim cut and sharp collar create a contemporary formal look that stands on its own.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Obsidian", hex: "#1A1A1A" },
      { name: "Regal Wine", hex: "#591C27" },
    ],
    images: [
      "/assets/images/34.png",
      "/assets/images/35.png",
    ],
  },

  // --- INDO-WESTERN ---
  {
    slug: "contemporary-indo-western",
    title: "Contemporary Indo-Western Set",
    price: "₹48,000",
    priceNum: 48000,
    category: "Indo-Western",
    categorySlug: "indo-western",
    collection: "The Wedding Edit",
    description: "A fusion masterpiece blending an asymmetric drape silhouette with traditional Indian embroidery. For the groom who wants to make a bold, unforgettable statement.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Ivory", hex: "#F9F8F6" },
      { name: "Antique Gold", hex: "#C5A059" },
    ],
    images: [
      "/assets/images/35.png",
      "/assets/images/15.png",
    ],
    badge: "Trending",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.badge === "Bestseller");
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.badge === "New Arrival");
}

// Size chart data
export const sizeChart = {
  headers: ["Size", "Chest (in)", "Waist (in)", "Length (in)", "Shoulder (in)"],
  rows: [
    ["S", "36-38", "30-32", "40", "16.5"],
    ["M", "38-40", "32-34", "41", "17"],
    ["L", "40-42", "34-36", "42", "17.5"],
    ["XL", "42-44", "36-38", "43", "18"],
    ["XXL", "44-46", "38-40", "44", "18.5"],
  ],
};
