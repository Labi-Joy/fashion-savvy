export type CategoryGroup = "mens" | "womens";
export type CategorySlug =
  | "mens-casual"
  | "mens-corporate"
  | "mens-native"
  | "womens-casual"
  | "womens-corporate"
  | "womens-native";

export type Category = {
  slug: CategorySlug;
  label: string;
  group: CategoryGroup;
};

export type Product = {
  slug: string;
  name: string;
  vendor: string;
  price: number;
  priceMax?: number;
  rating: number;
  ratingCount: number;
  image: string;
  gallery: string[];
  category: CategorySlug;
  breadcrumbs: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  description: string;
  featured?: boolean;
  badge?: "new" | "sale" | "hot";
};

export type Collection = {
  slug: string;
  name: string;
  image: string;
  href: string;
};

export type Service = {
  slug: string;
  name: string;
  image: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  socials?: { twitter?: string; linkedin?: string; instagram?: string };
};

export type Review = {
  id: string;
  productSlug: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  title?: string;
  content: string;
  images?: string[];
};

export type Order = {
  id: string;
  date: string;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  itemName: string;
  itemImage: string;
  itemCount: number;
  total: number;
};

export type Transaction = {
  id: string;
  date: string;
  description: string;
  type: "income" | "expense";
  amount: number;
  status: "successful" | "pending" | "failed";
};

export type NavLink = { label: string; href: string };

// ─────────────────────────────────────────────────────────────
// Brand
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: "FashionSavvy",
  tagline: "Discover your style",
  currency: "NGN",
  currencySymbol: "₦",
  email: "hello@fashionsavvy.co",
  phone: "+234 800 000 0000",
  address: "12 Adeola Odeku Street, Victoria Island, Lagos",
  socials: {
    twitter: "#",
    instagram: "#",
    facebook: "#",
  },
};

// ─────────────────────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────────────────────

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About us", href: "/about" },
  { label: "Support", href: "/support" },
];

export const footerNav = {
  shop: [
    { label: "New Arrivals", href: "/shop?sort=new" },
    { label: "Men's Wear", href: "/shop?group=mens" },
    { label: "Women's Wear", href: "/shop?group=womens" },
    { label: "Wishlist", href: "/wishlist" },
  ],
  company: [
    { label: "About us", href: "/about" },
    { label: "Support", href: "/support" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Bookkeeping", href: "/dashboard/bookkeeping" },
  ],
  seller: [
    { label: "Sell on FashionSavvy", href: "/dashboard/seller" },
    { label: "Invoice generator", href: "/dashboard/invoices" },
    { label: "Automated invoice", href: "/dashboard/invoices/automated" },
    { label: "Catalogue", href: "/dashboard/seller/catalogue" },
  ],
};

// ─────────────────────────────────────────────────────────────
// Categories
// ─────────────────────────────────────────────────────────────

export const categories: Category[] = [
  { slug: "mens-casual", label: "Casual", group: "mens" },
  { slug: "mens-corporate", label: "Corporate", group: "mens" },
  { slug: "mens-native", label: "Native", group: "mens" },
  { slug: "womens-casual", label: "Casual", group: "womens" },
  { slug: "womens-corporate", label: "Corporate", group: "womens" },
  { slug: "womens-native", label: "Native", group: "womens" },
];

// ─────────────────────────────────────────────────────────────
// Products
// ─────────────────────────────────────────────────────────────

const DEFAULT_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const DEFAULT_COLORS = [
  { name: "Turquoise", hex: "#40E0D0" },
  { name: "Indigo", hex: "#1B0072" },
  { name: "Amber", hex: "#FAAD13" },
  { name: "Charcoal", hex: "#2b2b2b" },
];

const LOREM =
  "Cut from breathable premium fabric and finished by hand in Lagos, this piece is designed for everyday wear with a silhouette that flatters every body type. Machine wash cold. Iron on low heat. Ships in 2–5 business days.";

export const products: Product[] = [
  {
    slug: "urbano-jacket",
    name: "Urbano Jacket",
    vendor: "Aluko Fashions",
    price: 5699,
    rating: 5,
    ratingCount: 128,
    image: "/shop/shopimg1.png",
    gallery: ["/shop/shopimg1.png", "/product/catalogue1.png", "/product/catalogue2.png"],
    category: "mens-casual",
    breadcrumbs: ["Catalogue", "Men wear", "Casual"],
    sizes: DEFAULT_SIZES,
    colors: DEFAULT_COLORS,
    description: LOREM,
    featured: true,
    badge: "hot",
  },
  {
    slug: "amali-dress",
    name: "Amali Dress",
    vendor: "Bella Looks Store",
    price: 1500,
    priceMax: 3000,
    rating: 5,
    ratingCount: 214,
    image: "/shop/shopimg2.png",
    gallery: [
      "/shop/shopimg2.png",
      "/product/catalogue1.png",
      "/product/catalogue2.png",
      "/product/catalogue3.png",
    ],
    category: "womens-native",
    breadcrumbs: ["Catalogue", "Women wear", "Native"],
    sizes: DEFAULT_SIZES,
    colors: DEFAULT_COLORS,
    description: LOREM,
    featured: true,
  },
  {
    slug: "kiki-bridal-gown",
    name: "Kiki Bridal Gown",
    vendor: "Kiki Mia Collections",
    price: 10000,
    rating: 5,
    ratingCount: 92,
    image: "/shop/shopimg3.png",
    gallery: ["/shop/shopimg3.png", "/product/catalogue3.png", "/product/catalogue4.png"],
    category: "womens-corporate",
    breadcrumbs: ["Catalogue", "Women wear", "Corporate"],
    sizes: DEFAULT_SIZES,
    colors: DEFAULT_COLORS,
    description: LOREM,
    badge: "new",
  },
  {
    slug: "wu-orange-dress",
    name: "Wu Orange Dress",
    vendor: "Wunmi Fashion House",
    price: 25340,
    rating: 5,
    ratingCount: 76,
    image: "/shop/shopimg4.png",
    gallery: ["/shop/shopimg4.png", "/product/catalogue1.png"],
    category: "womens-casual",
    breadcrumbs: ["Catalogue", "Women wear", "Casual"],
    sizes: DEFAULT_SIZES,
    colors: DEFAULT_COLORS,
    description: LOREM,
    featured: true,
  },
  {
    slug: "jap-kimono-set",
    name: "Jap Kimono Set",
    vendor: "Sabenilia Fashion House",
    price: 19345,
    rating: 5,
    ratingCount: 143,
    image: "/shop/shopimg5.png",
    gallery: ["/shop/shopimg5.png", "/product/catalogue2.png", "/product/catalogue4.png"],
    category: "womens-native",
    breadcrumbs: ["Catalogue", "Women wear", "Native"],
    sizes: DEFAULT_SIZES,
    colors: DEFAULT_COLORS,
    description: LOREM,
    featured: true,
  },
  {
    slug: "stripped-summer",
    name: "Stripped Summer",
    vendor: "Beauty Tailor",
    price: 2950,
    rating: 5,
    ratingCount: 58,
    image: "/shop/shopimg6.png",
    gallery: ["/shop/shopimg6.png", "/product/catalogue3.png"],
    category: "womens-casual",
    breadcrumbs: ["Catalogue", "Women wear", "Casual"],
    sizes: DEFAULT_SIZES,
    colors: DEFAULT_COLORS,
    description: LOREM,
  },
  {
    slug: "cf-simple-shirt",
    name: "CF Simple Shirt",
    vendor: "Quality Dressing Store",
    price: 3954,
    rating: 5,
    ratingCount: 201,
    image: "/shop/shopimg7.png",
    gallery: ["/shop/shopimg7.png", "/product/catalogue2.png"],
    category: "mens-casual",
    breadcrumbs: ["Catalogue", "Men wear", "Casual"],
    sizes: DEFAULT_SIZES,
    colors: DEFAULT_COLORS,
    description: LOREM,
  },
  {
    slug: "long-sleeved",
    name: "Long Sleeved Shirt",
    vendor: "Pamilerin Clothing Line",
    price: 2405,
    rating: 5,
    ratingCount: 87,
    image: "/shop/shopimg8.png",
    gallery: ["/shop/shopimg8.png", "/product/catalogue4.png"],
    category: "mens-corporate",
    breadcrumbs: ["Catalogue", "Men wear", "Corporate"],
    sizes: DEFAULT_SIZES,
    colors: DEFAULT_COLORS,
    description: LOREM,
  },
];

// ─────────────────────────────────────────────────────────────
// Landing — collections showcase
// ─────────────────────────────────────────────────────────────

export const collections: Collection[] = [
  {
    slug: "asante-beach",
    name: "Asante beach ladies' wear",
    image: "/landing/img1.png",
    href: "/shop?group=womens",
  },
  {
    slug: "amara-cozy-green",
    name: "Amara Cozy Green Jacket",
    image: "/landing/img2.png",
    href: "/shop?group=womens",
  },
  {
    slug: "complete-black-mens-suit",
    name: "Complete Black Men's Suit",
    image: "/landing/img3.png",
    href: "/shop?category=mens-corporate",
  },
  {
    slug: "mens-agbada-complete-set",
    name: "Men's Agbada Complete Set",
    image: "/landing/img4.png",
    href: "/shop?category=mens-native",
  },
  {
    slug: "ankara-backless-max-gown",
    name: "Ankara backless Max gown",
    image: "/landing/img5.png",
    href: "/shop?category=womens-native",
  },
  {
    slug: "couple-traditional-wear",
    name: "Couple Traditional Wear",
    image: "/landing/img6.png",
    href: "/shop?category=womens-native",
  },
];

// ─────────────────────────────────────────────────────────────
// Services
// ─────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    slug: "bookkeeping",
    name: "Book keeping and documentation",
    image: "/landing/serviceimg1.jpg",
    description: "Track income, expenses and inventory in one place — no spreadsheets needed.",
  },
  {
    slug: "invoice-generator",
    name: "Invoice generator",
    image: "/landing/serviceimg2.png",
    description: "Beautiful, branded invoices in seconds. Send by email or WhatsApp.",
  },
  {
    slug: "catalogue",
    name: "Catalogue",
    image: "/landing/serviceimg3.svg",
    description: "Publish your collection online with a shareable link buyers can browse.",
  },
  {
    slug: "quality-assurance",
    name: "Quality Assurance",
    image: "/landing/serviceimg4.svg",
    description: "Every seller is vetted so you shop with confidence.",
  },
  {
    slug: "logistics",
    name: "Logistics",
    image: "/landing/serviceimg5.jpg",
    description: "Nationwide delivery with real-time tracking on every order.",
  },
];

// ─────────────────────────────────────────────────────────────
// Team (About page)
// ─────────────────────────────────────────────────────────────

export const team: TeamMember[] = [
  { name: "Adaeze Nwosu", role: "Founder & CEO", image: "/team/team1.png" },
  { name: "Tunde Ade", role: "Head of Product", image: "/team/team2.png" },
  { name: "Zainab Musa", role: "Head of Design", image: "/team/team3.png" },
  { name: "Chinedu Okafor", role: "Head of Operations", image: "/team/team4.png" },
];

// ─────────────────────────────────────────────────────────────
// Reviews
// ─────────────────────────────────────────────────────────────

export const reviews: Review[] = [
  {
    id: "r1",
    productSlug: "amali-dress",
    author: "Chiamaka O.",
    avatar: "/product/review1.jpg",
    rating: 5,
    date: "2 weeks ago",
    title: "Perfect fit and beautiful fabric",
    content:
      "Fits like it was made for me. The fabric is thicker than I expected in the best way — it holds shape and drapes so well.",
    images: [
      "/product/review1a.png",
      "/product/review1b.png",
      "/product/review1c.png",
      "/product/review1d.png",
    ],
  },
  {
    id: "r2",
    productSlug: "amali-dress",
    author: "Ngozi A.",
    avatar: "/product/review2.png",
    rating: 5,
    date: "1 month ago",
    title: "Received compliments all night",
    content:
      "Wore it to a wedding and could not walk two steps without someone asking where I got it. Delivery was quick too.",
    images: [
      "/product/review2a.png",
      "/product/review2b.png",
      "/product/review2c.png",
      "/product/review2d.png",
    ],
  },
  {
    id: "r3",
    productSlug: "amali-dress",
    author: "Blessing E.",
    avatar: "/product/review3.png",
    rating: 4,
    date: "3 months ago",
    title: "Runs true to size",
    content:
      "Ordered my usual size and it fit exactly right. Colour is a little brighter in person which I actually love.",
    images: [
      "/product/review3a.png",
      "/product/review3b.png",
      "/product/review3c.png",
    ],
  },
  {
    id: "r4",
    productSlug: "amali-dress",
    author: "Ifeoma S.",
    avatar: "/product/review4.png",
    rating: 5,
    date: "4 months ago",
    title: "Will order again",
    content:
      "Second time buying from Bella Looks and both experiences have been smooth. The finishing is neat and the packaging felt premium.",
    images: [
      "/product/review4a.png",
      "/product/review4b.png",
      "/product/review4c.png",
      "/product/review4d.png",
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// Buyer dashboard — orders
// ─────────────────────────────────────────────────────────────

export const orders: Order[] = [
  {
    id: "ORD-10241",
    date: "12 Jul 2026",
    status: "delivered",
    itemName: "Amali Dress",
    itemImage: "/dashboard/order1.png",
    itemCount: 1,
    total: 1500,
  },
  {
    id: "ORD-10238",
    date: "07 Jul 2026",
    status: "shipped",
    itemName: "Wu Orange Dress",
    itemImage: "/dashboard/order2.png",
    itemCount: 1,
    total: 25340,
  },
  {
    id: "ORD-10232",
    date: "02 Jul 2026",
    status: "delivered",
    itemName: "Jap Kimono Set",
    itemImage: "/dashboard/order3.png",
    itemCount: 2,
    total: 38690,
  },
  {
    id: "ORD-10229",
    date: "28 Jun 2026",
    status: "pending",
    itemName: "Kiki Bridal Gown",
    itemImage: "/dashboard/order4.png",
    itemCount: 1,
    total: 10000,
  },
];

// ─────────────────────────────────────────────────────────────
// Seller — transactions (for bookkeeping)
// ─────────────────────────────────────────────────────────────

export const transactions: Transaction[] = [
  { id: "TX-2001", date: "14 Jul 2026", description: "Order ORD-10241 payout", type: "income", amount: 1350, status: "successful" },
  { id: "TX-2000", date: "13 Jul 2026", description: "Logistics — DHL", type: "expense", amount: 4500, status: "successful" },
  { id: "TX-1999", date: "12 Jul 2026", description: "Order ORD-10238 payout", type: "income", amount: 22800, status: "successful" },
  { id: "TX-1998", date: "11 Jul 2026", description: "Fabric — 20 yards Ankara", type: "expense", amount: 32000, status: "successful" },
  { id: "TX-1997", date: "10 Jul 2026", description: "Order ORD-10232 payout", type: "income", amount: 34800, status: "successful" },
  { id: "TX-1996", date: "09 Jul 2026", description: "Instagram ads", type: "expense", amount: 15000, status: "pending" },
];

// ─────────────────────────────────────────────────────────────
// Dashboard sidebar links
// ─────────────────────────────────────────────────────────────

export const buyerNav = [
  { label: "My Account", href: "/dashboard/buyer", icon: "solar:user-bold" },
  { label: "Orders", href: "/dashboard/buyer/orders", icon: "solar:cart-large-bold" },
  { label: "Reviews", href: "/dashboard/buyer/reviews", icon: "solar:star-bold" },
  { label: "Setting", href: "/dashboard/buyer/settings", icon: "solar:settings-bold" },
  { label: "Carts", href: "/cart", icon: "solar:bag-4-bold" },
  { label: "Help/Support", href: "/support", icon: "solar:chat-round-line-bold" },
];

export const sellerNav = [
  { label: "My Account", href: "/dashboard/seller", icon: "solar:user-bold" },
  { label: "Bookkeeping and Documentation", href: "/dashboard/bookkeeping", icon: "solar:notebook-bold" },
  { label: "Invoice Generator", href: "/dashboard/invoices", icon: "solar:document-add-bold" },
  { label: "Catalogue", href: "/dashboard/seller/catalogue", icon: "solar:widget-bold" },
  { label: "Ordered Items", href: "/dashboard/seller/orders", icon: "solar:cart-3-bold" },
  { label: "Help/Support", href: "/support", icon: "solar:chat-round-line-bold" },
  { label: "Setting", href: "/dashboard/seller/settings", icon: "solar:settings-bold" },
];

export type BuyerRecord = {
  name: string;
  email: string;
  phone: string;
  location: string;
  measurements: string;
  orderId: string;
};

export type CustomerPreference = {
  name: string;
  fabric: string;
  color: string;
  style: string;
};

export const customerPreferences: CustomerPreference[] = [
  { name: "Jackson Tiago", fabric: "Ankara", color: "Blue", style: "Native" },
  { name: "Alice Junior", fabric: "As shown in Catalogue", color: "Yellow", style: "Casual" },
  { name: "John Rich", fabric: "Lace", color: "Blue", style: "Native" },
  { name: "Jane Doe", fabric: "As shown in Catalogue", color: "Black", style: "Corporate" },
  { name: "Anna D.", fabric: "As shown in Catalogue", color: "Blue", style: "Native" },
];

export type FAQItem = { question: string; answer: string };

export const faqs: FAQItem[] = [
  {
    question: "How do I pay for the essentials or premium plan?",
    answer:
      "You can pay with a credit card or via net banking. We will renew your subscription automatically at the end of every billing cycle.",
  },
  {
    question: "We need to add new users to our team. How will that be billed?",
    answer:
      "New seats are pro-rated for the current billing period and added to your next invoice.",
  },
  {
    question: "Do you offer discounts for non-profit organizations or educational institutions?",
    answer:
      "Yes — write to us at support@fashionsavvy.co with proof of registration and we will apply a 30% discount.",
  },
  {
    question: "Can I cancel my essentials or premium plan subscription at any time?",
    answer:
      "Absolutely. Cancel any time from your account settings and you will keep access until the end of your current cycle.",
  },
  {
    question: "My team wants to cancel its subscription. How do we do that? Can we get a refund?",
    answer:
      "Refunds are available within the first 30 days of a new subscription. Cancel from Settings and email us if you qualify for a refund.",
  },
];

export const customerRecords: BuyerRecord[] = [
  { name: "Jackson Tiago", email: "jacmail@email.com", phone: "+2348012345678", location: "Anambra", measurements: "S", orderId: "#03847" },
  { name: "Alice Junior", email: "aliceju@email.com", phone: "+2344012377678", location: "Owerri", measurements: "XL", orderId: "#03849" },
  { name: "John Rich", email: "johnric@email.com", phone: "+2334517935124", location: "Anambra", measurements: "XX", orderId: "#04021" },
  { name: "Jane Doe", email: "janede@email.com", phone: "+2334512345124", location: "Anambra", measurements: "M", orderId: "#04025" },
  { name: "Anna D.", email: "an1ad@email.com", phone: "+2339673693860", location: "Anambra", measurements: "L", orderId: "#04028" },
];

export type InvoiceLine = { qty: number; name: string; duration: string; price: number };

export type Invoice = {
  id: string;
  number: string;
  from: { name: string; address: string; email: string; phone: string };
  to: { name: string; address: string; email: string; phone: string };
  date: string;
  start: string;
  stop: string;
  lines: InvoiceLine[];
};

export const sampleInvoice: Invoice = {
  id: "inv_210_920_84",
  number: "210-920-84-1",
  from: {
    name: "Seller Company",
    address: "All Around Lagos",
    email: "sellername@xerocam.com",
    phone: "+234 123 456 7890",
  },
  to: {
    name: "Buyer Namers",
    address: "Location Store: Main island",
    email: "buyername@email.com",
    phone: "+234 123 456 7890",
  },
  date: "01-15-2024",
  start: "Oktober-15-2024 01.00 AM",
  stop: "Oktober-17-2024 11.59 AM",
  lines: [
    { qty: 1, name: "Lil Kid Dress", duration: "2 days", price: 11000 },
    { qty: 1, name: "Sunset Bubu", duration: "2 days", price: 300 },
    { qty: 1, name: "Graphic Tee", duration: "2 days", price: 3000 },
  ],
};

export const currentUser = {
  buyer: { name: "Jackson Tiago", email: "jackthemail@email.com", avatar: "/users/user.jpg" },
  seller: { name: "Caroline Kelvin", email: "CarolineKelvin@email.com", avatar: "/users/user.jpg" },
};

// ─────────────────────────────────────────────────────────────
// Testimonials (landing)
// ─────────────────────────────────────────────────────────────

export const testimonials = [
  {
    quote:
      "FashionSavvy took my little tailoring shop from paper receipts to a real online store. My sales have tripled since I joined.",
    author: "Bimpe Adeyemi",
    role: "Bimpe Threads · Ibadan",
    avatar: "/team/team1.png",
  },
  {
    quote:
      "The invoice generator alone is worth it. My customers pay faster because everything looks professional now.",
    author: "Emeka Okoro",
    role: "Okoro Bespoke · Enugu",
    avatar: "/team/team2.png",
  },
  {
    quote:
      "I love that I can compare styles side by side and message the tailor directly. It feels like shopping with a friend.",
    author: "Halima Yusuf",
    role: "Buyer · Abuja",
    avatar: "/team/team3.png",
  },
];

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4) {
  const current = getProduct(slug);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.slug !== slug && p.category === current.category)
    .concat(products.filter((p) => p.slug !== slug && p.category !== current.category))
    .slice(0, limit);
}

export function getReviewsForProduct(slug: string) {
  return reviews.filter((r) => r.productSlug === slug);
}
