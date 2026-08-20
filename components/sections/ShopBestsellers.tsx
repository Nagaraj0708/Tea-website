"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShoppingBag, Eye, Sparkles, Award, Plus, Minus } from "lucide-react";
import { useCart, TeaProduct } from "../context/CartContext";
import confetti from "canvas-confetti";

export const productsData: TeaProduct[] = [
  {
    id: "masala-chai-reserve",
    name: "Royal Masala Chai Reserve",
    subtitle: "Cardamom, Saigon Cinnamon & Assam CTC",
    price: 34.0,
    weight: "250g Tin (approx. 50 cups)",
    origin: "Assam Valley, India",
    category: "Chai Blends",
    rating: 4.9,
    reviewsCount: 142,
    image: "/tea-masala-chai.png",
    accentColor: "#C1662F",
    description:
      "Our award-winning signature blend. Crushed green cardamom pods, Saigon cinnamon sticks, cloves, and full-bodied single-estate Assam CTC leaves.",
    brewInfo: { temp: "100°C", time: "4-5 Min", ratio: "5g / 200ml" },
    isFlagship: true,
  },
  {
    id: "emerald-jasmine-pearls",
    name: "Emerald Dragonwell Jasmine",
    subtitle: "Hand-Rolled Spring Green Tea Pearls",
    price: 38.0,
    weight: "150g Glass Jar",
    origin: "Zhejiang, China",
    category: "Green Tea",
    rating: 4.9,
    reviewsCount: 88,
    image: "/tea-green-jasmine.png",
    accentColor: "#5C6B4F",
    description:
      "Tender top buds hand-rolled into delicate pearls and scented five times with fresh jasmine blossoms over bamboo trays.",
    brewInfo: { temp: "80°C", time: "2 Min", ratio: "3g / 250ml" },
  },
  {
    id: "golden-yunnan-needles",
    name: "High Mountain Golden Yunnan",
    subtitle: "Single-Estate Golden Black Needles",
    price: 42.0,
    weight: "180g Copper Canister",
    origin: "Yunnan, China",
    category: "Black Tea",
    rating: 5.0,
    reviewsCount: 64,
    image: "/tea-golden-yunnan.png",
    accentColor: "#D9A441",
    description:
      "Plucked at 2,000 meters altitude. Features velvety amber liquor with distinct flavor notes of wild dark honey and roasted sweet potato.",
    brewInfo: { temp: "95°C", time: "3 Min", ratio: "4g / 250ml" },
  },
  {
    id: "da-hong-pao-oolong",
    name: "Da Hong Pao Cliff Oolong",
    subtitle: "Charcoal Roasted Volcanic Rock Tea",
    price: 54.0,
    weight: "120g Stone Vessel",
    origin: "Wuyi Shan, Fujian",
    category: "Oolong",
    rating: 4.9,
    reviewsCount: 95,
    image: "/tea-cliff-oolong.png",
    accentColor: "#C1662F",
    description:
      "Cultivated on ancient Wuyi mountain rock cliffs. Charcoal roasted in small batches over 18 hours for deep volcanic mineral body.",
    brewInfo: { temp: "95°C", time: "45 Sec", ratio: "7g / 150ml" },
  },
];

const categories = ["All Teas", "Chai Blends", "Green Tea", "Black Tea", "Oolong"];

export function ShopBestsellers() {
  const [activeCategory, setActiveCategory] = useState("All Teas");
  const { cart, addToCart, updateQuantity, setQuickViewProduct } = useCart();

  const filteredProducts =
    activeCategory === "All Teas"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  const handleQuickAdd = (product: TeaProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 },
      colors: ["#C1662F", "#D9A441"],
    });
  };

  return (
    <section id="shop" className="relative py-24 bg-[#F7F1E6] text-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-terracotta font-semibold flex items-center gap-2">
              <Award className="w-4 h-4 text-terracotta" />
              Store Vault Bestsellers
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-espresso font-light tracking-tight">
              Single-Origin <span className="italic font-normal text-terracotta">Tea Harvests</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-espresso text-cream font-bold shadow-md"
                    : "bg-cream border border-espresso/20 text-espresso/80 hover:border-terracotta"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => {
            const cartItem = cart.find((c) => c.product.id === product.id);
            const currentQty = cartItem ? cartItem.quantity : 0;

            return (
              <motion.div
                key={product.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                onClick={() => setQuickViewProduct(product)}
                className={`rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between group transition-all ${
                  product.isFlagship
                    ? "bg-espresso text-cream border-2 border-gold shadow-2xl ring-4 ring-gold/20"
                    : "bg-cream border border-espresso/15 shadow-xl hover:border-terracotta/50"
                }`}
                data-cursor="QUICK VIEW"
              >
                {/* Product Image */}
                <div className="relative h-64 w-full overflow-hidden bg-espresso/10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />

                  {/* Flagship Badge */}
                  {product.isFlagship && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest bg-terracotta text-cream font-bold shadow-lg flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-gold" />
                        FLAGSHIP BLEND
                      </span>
                    </div>
                  )}

                  {/* Quick View Floating Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuickViewProduct(product);
                    }}
                    className="absolute bottom-4 right-4 p-3 rounded-full bg-espresso/80 text-cream opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-md"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Product Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span
                        className={`font-mono uppercase tracking-widest ${
                          product.isFlagship ? "text-gold font-bold" : "text-terracotta font-semibold"
                        }`}
                      >
                        {product.origin}
                      </span>

                      <div className="flex items-center gap-1 text-gold">
                        <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                        <span className="font-mono text-xs font-bold">{product.rating}</span>
                      </div>
                    </div>

                    <h3
                      className={`font-serif text-xl font-normal leading-snug group-hover:text-terracotta transition-colors ${
                        product.isFlagship ? "text-cream" : "text-espresso"
                      }`}
                    >
                      {product.name}
                    </h3>

                    <p
                      className={`text-xs font-sans line-clamp-2 font-light ${
                        product.isFlagship ? "text-cream/70" : "text-espresso/70"
                      }`}
                    >
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Price & Add Button / Quantity Counter Row */}
                  <div className="pt-4 border-t border-current/10 flex items-center justify-between">
                    <div>
                      <span
                        className={`font-serif text-2xl font-bold ${
                          product.isFlagship ? "text-gold" : "text-espresso"
                        }`}
                      >
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="block text-[10px] font-mono text-current/60">
                        {product.weight}
                      </span>
                    </div>

                    {currentQty === 0 ? (
                      <button
                        onClick={(e) => handleQuickAdd(product, e)}
                        className={`p-3 rounded-full transition-transform active:scale-95 shadow-md ${
                          product.isFlagship
                            ? "bg-gold text-espresso hover:bg-cream"
                            : "bg-terracotta text-cream hover:bg-espresso"
                        }`}
                        title="Add to Cart"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    ) : (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center rounded-full border border-gold/40 bg-[#1C3121] text-cream shadow-md overflow-hidden"
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateQuantity(product.id, currentQty - 1);
                          }}
                          className="px-2.5 py-1.5 text-xs font-mono font-bold hover:bg-terracotta text-cream transition-colors"
                          aria-label="Decrease quantity"
                          title="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 py-1.5 text-xs font-mono font-bold text-gold min-w-[24px] text-center">
                          {currentQty}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateQuantity(product.id, currentQty + 1);
                          }}
                          className="px-2.5 py-1.5 text-xs font-mono font-bold hover:bg-terracotta text-cream transition-colors"
                          aria-label="Increase quantity"
                          title="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
