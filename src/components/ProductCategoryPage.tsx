import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import type { Product, ProductCategory } from '../data/productCategories';
import { productCategories } from '../data/productCategories';

type ProductCategoryPageProps = {
  category?: ProductCategory;
  products?: Product[];
  title?: string;
  description?: string;
  showBackLink?: boolean;
};

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Name: A to Z', value: 'name-asc' },
];

function priceToNumber(price: string) {
  return Number(price.replace(/[^\d.]/g, '')) || 0;
}

function uniqueValues(values: Array<string | undefined>) {
  return Array.from(new Set(values.filter(Boolean) as string[])).sort((a, b) => a.localeCompare(b));
}

export default function ProductCategoryPage({
  category,
  products,
  title,
  description,
  showBackLink = true,
}: ProductCategoryPageProps) {
  const pageProducts = products ?? category?.products ?? [];
  const pageTitle = title ?? category?.shortTitle ?? 'Products';
  const pageDescription = description ?? category?.description ?? 'Browse curated spiritual products and remedies.';
  const maxPrice = Math.max(...pageProducts.map((product) => priceToNumber(product.price)), 0);

  const [searchTerm, setSearchTerm] = useState('');
  const [collectionFilter, setCollectionFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [tagFilter, setTagFilter] = useState('all');
  const [priceLimit, setPriceLimit] = useState(maxPrice);
  const [sortBy, setSortBy] = useState('featured');

  const productTypes = useMemo(() => uniqueValues(pageProducts.map((product) => product.category)), [pageProducts]);
  const productTags = useMemo(() => uniqueValues(pageProducts.map((product) => product.tag)), [pageProducts]);
  const hasCollectionFilter = !category && pageProducts.some((product) => product.collectionSlug);

  const visibleProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return pageProducts
      .filter((product) => {
        const searchableText = [
          product.name,
          product.category,
          product.tag,
          product.collectionTitle,
        ].filter(Boolean).join(' ').toLowerCase();

        const matchesSearch = !query || searchableText.includes(query);
        const matchesCollection = collectionFilter === 'all' || product.collectionSlug === collectionFilter;
        const matchesType = typeFilter === 'all' || product.category === typeFilter;
        const matchesTag = tagFilter === 'all' || product.tag === tagFilter;
        const matchesPrice = priceToNumber(product.price) <= priceLimit;

        return matchesSearch && matchesCollection && matchesType && matchesTag && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') {
          return priceToNumber(a.price) - priceToNumber(b.price);
        }

        if (sortBy === 'price-desc') {
          return priceToNumber(b.price) - priceToNumber(a.price);
        }

        if (sortBy === 'name-asc') {
          return a.name.localeCompare(b.name);
        }

        return 0;
      });
  }, [collectionFilter, pageProducts, priceLimit, searchTerm, sortBy, tagFilter, typeFilter]);

  const resetFilters = () => {
    setSearchTerm('');
    setCollectionFilter('all');
    setTypeFilter('all');
    setTagFilter('all');
    setPriceLimit(maxPrice);
    setSortBy('featured');
  };

  useEffect(() => {
    resetFilters();
  }, [pageTitle, maxPrice]);

  const hasActiveFilters = searchTerm || collectionFilter !== 'all' || typeFilter !== 'all' || tagFilter !== 'all' || priceLimit !== maxPrice || sortBy !== 'featured';

  return (
    <>
      <section className="pt-36 pb-14 bg-[#FAF8F5] border-b border-[#C99C3D]/10">
        <div className="max-w-7xl mx-auto px-6">
          {showBackLink && (
            <a href="#/shop" className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 font-medium uppercase tracking-widest mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to shop
            </a>
          )}
          <p className="text-sm text-gold-600 uppercase tracking-[0.24em] mb-4">
            {category ? 'Product Category' : 'Shop'}
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2C241B] leading-tight max-w-4xl">
            {pageTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#5C4B3D] font-light leading-relaxed">
            {pageDescription}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-5 mb-8">
            <div>
              <p className="text-sm text-[#8C735D] uppercase tracking-widest">
                Showing {visibleProducts.length} of {pageProducts.length} products
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-serif text-[#2C241B]">
                {category ? category.title : 'All spiritual products'}
              </h2>
            </div>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[#C99C3D]/30 px-5 py-3 text-sm font-medium uppercase tracking-wider text-[#4A3C31] hover:border-gold-500 hover:text-gold-600"
              >
                <X className="w-4 h-4" />
                Clear Filters
              </button>
            )}
          </div>

          <div className="mb-12 grid gap-4 rounded-2xl border border-[#C99C3D]/20 bg-[#FAF8F5] p-4 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
            <label className="relative block">
              <span className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8C735D]">
                <Search className="w-4 h-4" />
                Search
              </span>
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search products"
                className="h-12 w-full rounded-full border border-[#D8D2C8] bg-white px-5 text-sm text-[#2C241B] outline-none focus:border-gold-500"
              />
            </label>

            {hasCollectionFilter && (
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8C735D]">
                  <SlidersHorizontal className="w-4 h-4" />
                  Collection
                </span>
                <select
                  value={collectionFilter}
                  onChange={(event) => setCollectionFilter(event.target.value)}
                  className="h-12 w-full rounded-full border border-[#D8D2C8] bg-white px-5 text-sm text-[#4A3C31] outline-none focus:border-gold-500"
                >
                  <option value="all">All Collections</option>
                  {productCategories.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      {item.shortTitle}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#8C735D]">Type</span>
              <select
                value={typeFilter}
                onChange={(event) => setTypeFilter(event.target.value)}
                className="h-12 w-full rounded-full border border-[#D8D2C8] bg-white px-5 text-sm text-[#4A3C31] outline-none focus:border-gold-500"
              >
                <option value="all">All Types</option>
                {productTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#8C735D]">Tag</span>
              <select
                value={tagFilter}
                onChange={(event) => setTagFilter(event.target.value)}
                className="h-12 w-full rounded-full border border-[#D8D2C8] bg-white px-5 text-sm text-[#4A3C31] outline-none focus:border-gold-500"
              >
                <option value="all">All Tags</option>
                {productTags.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#8C735D]">Sort</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="h-12 w-full rounded-full border border-[#D8D2C8] bg-white px-5 text-sm text-[#4A3C31] outline-none focus:border-gold-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block xl:col-span-5">
              <span className="mb-2 flex justify-between text-xs font-semibold uppercase tracking-widest text-[#8C735D]">
                <span>Max Price</span>
                <span>Rs. {priceLimit.toLocaleString('en-IN')}</span>
              </span>
              <input
                type="range"
                min={0}
                max={maxPrice}
                step={100}
                value={priceLimit}
                onChange={(event) => setPriceLimit(Number(event.target.value))}
                className="w-full accent-[#D4AF37]"
              />
            </label>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {visibleProducts.map((product, index) => (
                <motion.article
                  key={`${product.name}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.05, 0.35) }}
                  className="group"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 bg-[#FAF8F5] border border-[#C99C3D]/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    {product.tag && (
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-[#C99C3D]/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-gold-600">
                        {product.tag}
                      </span>
                    )}
                    <button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gold-500 text-[#2C241B] flex items-center justify-center shadow-lg translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold-400" aria-label={`Add ${product.name} to cart`}>
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>

                  <span className="text-xs text-orange-600 uppercase tracking-widest block mb-2">
                    {product.collectionTitle ? `${product.collectionTitle} / ${product.category}` : product.category}
                  </span>
                  <h3 className="text-xl font-serif text-[#2C241B] leading-snug group-hover:text-gold-600 transition-colors min-h-[3rem]">
                    {product.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                    {product.oldPrice && <span className="text-[#AEB8C2] line-through">{product.oldPrice}</span>}
                    <span className="text-red-600 font-semibold">{product.price}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-[#C99C3D]/20 bg-[#FAF8F5] px-6 py-16 text-center">
              <h3 className="text-3xl font-serif text-[#2C241B]">No products found</h3>
              <p className="mt-3 text-[#5C4B3D]">Try changing the search, category, tag, or price filter.</p>
              <button
                onClick={resetFilters}
                className="mt-8 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#2C241B] hover:bg-gold-400"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
