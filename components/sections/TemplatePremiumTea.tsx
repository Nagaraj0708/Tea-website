"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart, TeaProduct } from "../context/CartContext";
import { Plus, Minus } from "lucide-react";
import confetti from "canvas-confetti";

const premiumTeas: (TeaProduct & { circleImage: string })[] = [
  {
    id: "green-tea",
    name: "Green Tea",
    subtitle: "Hand-rolled Dragonwell Jasmine Green Tea",
    price: 38.0,
    weight: "150g Jar",
    origin: "Zhejiang, China",
    category: "Green Tea",
    rating: 4.9,
    reviewsCount: 88,
    image: "/tea-green-jasmine.png",
    circleImage: "/circle-green-tea.png",
    accentColor: "#5C6B4F",
    description: "Organic spring harvest leaves scented five times with fresh white jasmine blossoms.",
    brewInfo: { temp: "80°C", time: "2 Min", ratio: "3g / 250ml" },
  },
  {
    id: "bela-tea",
    name: "Bela Tea",
    subtitle: "Aromatic Jasmine & White Blossom Infusion",
    price: 42.0,
    weight: "160g Tin",
    origin: "High Mountain Estate",
    category: "Specialty",
    rating: 5.0,
    reviewsCount: 112,
    image: "/tea-green-jasmine.png",
    circleImage: "/circle-bela-tea.png",
    accentColor: "#D9A441",
    description: "Rare single-origin white tea infused with wild natural Bela blossoms.",
    brewInfo: { temp: "85°C", time: "3 Min", ratio: "4g / 250ml" },
  },
  {
    id: "assam-tea",
    name: "Assam Tea",
    subtitle: "Royal Cardamom & Cinnamon Spice CTC",
    price: 34.0,
    weight: "250g Tin",
    origin: "Assam Valley, India",
    category: "Chai Blends",
    rating: 4.9,
    reviewsCount: 142,
    image: "/tea-masala-chai.png",
    circleImage: "/tea-masala-chai.png",
    accentColor: "#C1662F",
    description: "Bold single-estate Assam CTC leaves layered with green cardamom and Saigon cinnamon.",
    brewInfo: { temp: "100°C", time: "4 Min", ratio: "5g / 200ml" },
  },
  {
    id: "black-tea",
    name: "Black Tea",
    subtitle: "High Mountain Golden Yunnan Needles",
    price: 48.0,
    weight: "180g Canister",
    origin: "Yunnan, China",
    category: "Black Tea",
    rating: 5.0,
    reviewsCount: 64,
    image: "/tea-golden-yunnan.png",
    circleImage: "/tea-golden-yunnan.png",
    accentColor: "#2B211A",
    description: "Plucked at 2,000m elevation. Features amber liquor with flavor notes of wild dark honey.",
    brewInfo: { temp: "95°C", time: "3 Min", ratio: "4g / 250ml" },
  },
];

export function TemplatePremiumTea() {
  const { cart, addToCart, updateQuantity, setQuickViewProduct } = useCart();

  const handleOrderNow = (product: TeaProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    confetti({
      particleCount: 35,
      spread: 55,
      origin: { y: 0.8 },
      colors: ["#C1662F", "#D9A441"],
    });
  };

  return (
    <section id="premium-tea" className="py-20 bg-white text-espresso border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-espresso tracking-tight">
            Our Premium Tea
          </h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto" />
        </div>

        {/* 4 Circular Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {premiumTeas.map((item) => {
            const cartItem = cart.find((c) => c.product.id === item.id);
            const currentQty = cartItem ? cartItem.quantity : 0;

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setQuickViewProduct(item)}
                className="flex flex-col items-center text-center space-y-5 cursor-pointer group p-4 rounded-3xl hover:bg-[#FAF6F0] transition-colors justify-between h-full"
              >
                <div className="flex flex-col items-center space-y-5">
                  {/* Circular Dish Image */}
                  <div className="relative w-44 h-44 rounded-full overflow-hidden shadow-xl border-4 border-white ring-2 ring-espresso/10 group-hover:ring-terracotta group-hover:scale-105 transition-all duration-500">
                    <Image
                      src={item.circleImage}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-2 max-w-xs">
                    <h3 className="font-serif text-xl font-normal text-espresso group-hover:text-terracotta transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-espresso/60 font-sans font-light line-clamp-2 min-h-[32px]">
                      {item.subtitle}
                    </p>
                    <span className="font-serif text-lg font-bold text-terracotta block pt-1">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Standardized Uniform Button Slot */}
                <div className="pt-2">
                  {currentQty === 0 ? (
                    <button
                      onClick={(e) => handleOrderNow(item, e)}
                      className="w-36 h-10 rounded-xl bg-white text-[#1C3121] border-2 border-[#1C3121]/30 hover:border-[#1C3121] text-[11px] font-mono font-bold tracking-widest uppercase hover:bg-[#1C3121] hover:text-cream transition-all shadow-sm flex items-center justify-center"
                    >
                      ORDER NOW
                    </button>
                  ) : (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="w-36 h-10 rounded-xl bg-[#1C3121] text-cream border-2 border-[#1C3121] shadow-md flex items-center justify-between overflow-hidden"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateQuantity(item.id, currentQty - 1);
                        }}
                        className="w-10 h-full text-xs font-mono font-bold hover:bg-terracotta text-cream transition-colors flex items-center justify-center border-r border-white/15"
                        aria-label="Decrease quantity"
                        title="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>

                      <span className="flex-1 text-xs font-mono font-bold text-gold text-center">
                        {currentQty}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateQuantity(item.id, currentQty + 1);
                        }}
                        className="w-10 h-full text-xs font-mono font-bold hover:bg-terracotta text-cream transition-colors flex items-center justify-center border-l border-white/15"
                        aria-label="Increase quantity"
                        title="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
