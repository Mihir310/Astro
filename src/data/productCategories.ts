export type Product = {
  name: string;
  image: string;
  category: string;
  price: string;
  oldPrice?: string;
  tag?: string;
  collectionSlug?: string;
  collectionTitle?: string;
};

export type ProductCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  linkText: string;
  description: string;
  products: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: 'rudraksha',
    title: "Rudraksha Collection - Shiva's Blessings",
    shortTitle: 'Rudraksha',
    linkText: 'Explore all Rudraksha',
    description: 'Energized beads, malas, bracelets, and reports for spiritual protection, focus, and inner steadiness.',
    products: [
      {
        name: 'Real Rudraksha',
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8ebf8?q=80&w=600&auto=format&fit=crop',
        category: 'Sacred Beads',
        oldPrice: 'Rs. 1,500.00',
        price: 'Rs. 996.00',
        tag: 'Popular',
      },
      {
        name: 'Rudraksha Bracelet',
        image: 'https://images.unsplash.com/photo-1629705912959-197e41b2413e?q=80&w=600&auto=format&fit=crop',
        category: 'Bracelet',
        oldPrice: 'Rs. 1,500.00',
        price: 'Rs. 996.00',
        tag: 'Energized',
      },
      {
        name: 'Mala Rudraksha',
        image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=600&auto=format&fit=crop',
        category: 'Mala',
        oldPrice: 'Rs. 2,100.00',
        price: 'Rs. 1,499.00',
      },
      {
        name: 'Rudraksha Reports',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop',
        category: 'Report',
        oldPrice: 'Rs. 1,500.00',
        price: 'Rs. 0.00',
        tag: 'Free',
      },
      {
        name: '1 Mukhi Rudraksha Nepal',
        image: 'https://images.unsplash.com/photo-1615114814213-a245ffc79e9a?q=80&w=600&auto=format&fit=crop',
        category: 'Premium Bead',
        oldPrice: 'Rs. 21,000.00',
        price: 'Rs. 15,500.00',
        tag: 'Certified',
      },
      {
        name: '5 Mukhi Rudraksha Mala',
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8ebf8?q=80&w=600&auto=format&fit=crop',
        category: 'Daily Wear',
        oldPrice: 'Rs. 2,400.00',
        price: 'Rs. 1,650.00',
      },
      {
        name: 'Gauri Shankar Rudraksha',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop',
        category: 'Relationship Harmony',
        oldPrice: 'Rs. 5,100.00',
        price: 'Rs. 3,600.00',
      },
      {
        name: 'Rudraksha Health Report',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop',
        category: 'Personal Report',
        oldPrice: 'Rs. 1,500.00',
        price: 'Rs. 501.00',
      },
    ],
  },
  {
    slug: 'yantra',
    title: 'Tantra & Yantra - Talk to the Energies',
    shortTitle: 'Yantra',
    linkText: 'Explore all Yantra',
    description: 'Yantras and remedy tools for protection, prosperity, health, harmony, and energetic balance.',
    products: [
      {
        name: 'Neutralize Evil Effects',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop',
        category: 'Protection',
        oldPrice: 'Rs. 2,100.00',
        price: 'Rs. 1,399.00',
      },
      {
        name: 'Promote Good Health',
        image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=600&auto=format&fit=crop',
        category: 'Health',
        oldPrice: 'Rs. 1,800.00',
        price: 'Rs. 1,199.00',
      },
      {
        name: 'Promote Harmony',
        image: 'https://images.unsplash.com/photo-1582649068579-24b9c51a9425?q=80&w=600&auto=format&fit=crop',
        category: 'Harmony',
        oldPrice: 'Rs. 1,800.00',
        price: 'Rs. 1,199.00',
      },
      {
        name: 'Protect From Negativity',
        image: 'https://images.unsplash.com/photo-1603741893126-a010d9f0868f?q=80&w=600&auto=format&fit=crop',
        category: 'Protection',
        oldPrice: 'Rs. 2,400.00',
        price: 'Rs. 1,499.00',
        tag: 'Recommended',
      },
      {
        name: 'Shree Yantra Brass',
        image: 'https://images.unsplash.com/photo-1579758629938-03607fc88448?q=80&w=600&auto=format&fit=crop',
        category: 'Prosperity',
        oldPrice: 'Rs. 3,100.00',
        price: 'Rs. 2,100.00',
      },
      {
        name: 'Mahamrityunjaya Yantra',
        image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=600&auto=format&fit=crop',
        category: 'Health',
        oldPrice: 'Rs. 2,800.00',
        price: 'Rs. 1,900.00',
      },
      {
        name: 'Kuber Yantra',
        image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=600&auto=format&fit=crop',
        category: 'Wealth',
        oldPrice: 'Rs. 2,500.00',
        price: 'Rs. 1,650.00',
      },
      {
        name: 'Vastu Dosh Yantra',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop',
        category: 'Home Energy',
        oldPrice: 'Rs. 3,000.00',
        price: 'Rs. 2,200.00',
      },
    ],
  },
  {
    slug: 'bracelets',
    title: 'Bracelets - the quiet voice of your wrist',
    shortTitle: 'Bracelet',
    linkText: 'Explore all Bracelet',
    description: 'Crystal and intention bracelets chosen for luck, wishes, zodiac alignment, confidence, and calm.',
    products: [
      {
        name: 'Lucky Bracelet',
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop',
        category: 'Luck',
        oldPrice: 'Rs. 1,500.00',
        price: 'Rs. 996.00',
        tag: 'Best Seller',
      },
      {
        name: 'Wishful Bracelet',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
        category: 'Wish Fulfillment',
        oldPrice: 'Rs. 1,500.00',
        price: 'Rs. 996.00',
      },
      {
        name: 'Zodiac Sign Bracelet',
        image: 'https://images.unsplash.com/photo-1615114814213-a245ffc79e9a?q=80&w=600&auto=format&fit=crop',
        category: 'Zodiac',
        oldPrice: 'Rs. 1,800.00',
        price: 'Rs. 1,199.00',
      },
      {
        name: 'Diamond Cut Bracelet',
        image: 'https://images.unsplash.com/photo-1579758629938-03607fc88448?q=80&w=600&auto=format&fit=crop',
        category: 'Premium',
        oldPrice: 'Rs. 2,400.00',
        price: 'Rs. 1,699.00',
      },
      {
        name: 'Pyrite Abundance Bracelet',
        image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=600&auto=format&fit=crop',
        category: 'Abundance',
        oldPrice: 'Rs. 1,800.00',
        price: 'Rs. 1,251.00',
      },
      {
        name: 'Amethyst Calm Bracelet',
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop',
        category: 'Calm',
        oldPrice: 'Rs. 1,700.00',
        price: 'Rs. 1,199.00',
      },
      {
        name: 'Rose Quartz Love Bracelet',
        image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=600&auto=format&fit=crop',
        category: 'Love',
        oldPrice: 'Rs. 1,700.00',
        price: 'Rs. 1,199.00',
      },
      {
        name: 'Black Onyx Protection Bracelet',
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop',
        category: 'Protection',
        oldPrice: 'Rs. 1,900.00',
        price: 'Rs. 1,299.00',
      },
    ],
  },
  {
    slug: 'gemstones',
    title: 'Products Suggested by Pt. Rahul Kaushl',
    shortTitle: 'Gemstones',
    linkText: 'Explore all Gemstones',
    description: 'Gemstones selected for planetary support, color therapy, protection, clarity, and energetic uplift.',
    products: [
      {
        name: 'Amethyst Gemstone',
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop',
        category: 'Gemstone',
        oldPrice: 'Rs. 2,100.00',
        price: 'Rs. 1,500.00',
      },
      {
        name: 'Beryl Emerald Gemstone',
        image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=600&auto=format&fit=crop',
        category: 'Mercury',
        oldPrice: 'Rs. 4,500.00',
        price: 'Rs. 3,300.00',
        tag: 'Certified',
      },
      {
        name: 'Black Banded Agate',
        image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=600&auto=format&fit=crop',
        category: 'Protection',
        oldPrice: 'Rs. 1,800.00',
        price: 'Rs. 1,100.00',
      },
      {
        name: 'Blue Zircon Gemstone',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop',
        category: 'Venus',
        oldPrice: 'Rs. 5,100.00',
        price: 'Rs. 3,900.00',
      },
      {
        name: 'Premium Blue Sapphire',
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop',
        category: 'Saturn',
        oldPrice: 'Rs. 15,000.00',
        price: 'Rs. 11,500.00',
        tag: 'Premium',
      },
      {
        name: 'Ruby Manik Gemstone',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop',
        category: 'Sun',
        oldPrice: 'Rs. 8,500.00',
        price: 'Rs. 6,400.00',
      },
      {
        name: 'Yellow Sapphire Pukhraj',
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop',
        category: 'Jupiter',
        oldPrice: 'Rs. 12,000.00',
        price: 'Rs. 9,200.00',
      },
      {
        name: 'Citrine Prosperity Stone',
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop',
        category: 'Prosperity',
        oldPrice: 'Rs. 2,100.00',
        price: 'Rs. 1,499.00',
      },
    ],
  },
];

export const allProducts = productCategories.flatMap((category) =>
  category.products.map((product) => ({
    ...product,
    collectionSlug: category.slug,
    collectionTitle: category.shortTitle,
    category: product.category || category.shortTitle,
  })),
);
