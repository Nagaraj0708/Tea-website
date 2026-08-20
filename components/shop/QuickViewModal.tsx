"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ShoppingBag, Thermometer, Timer, Scale, Check } from "lucide-react";
import { useCart } from "../context/CartContext";
import confetti from "canvas-confetti";

export function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  React.useEffect(() => {
    if (quickViewProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    setAdded(true);

    // Trigger purchase delight confetti
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#C1662F", "#D9A441", "#5C6B4F"],
    });

    setTimeout(() => {
      setAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProduct(null)}
          className="absolute inset-0 bg-espresso-dark/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-espresso-card text-cream rounded-3xl overflow-hidden border border-gold/30 shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2"
          data-lenis-prevent="true"
        >
          {/* Close Button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-espresso/80 text-cream/70 hover:text-cream transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Image */}
          <div className="relative h-72 md:h-full w-full bg-espresso">
            <Image
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              fill
              className="object-cover"
            />
            {quickViewProduct.isFlagship && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest bg-terracotta text-cream font-bold shadow-md">
                FLAGSHIP SELECTION
              </span>
            )}
          </div>

          {/* Product Details */}
          <div className="p-6 md:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono tracking-widest text-gold">
                  {quickViewProduct.origin}
                </span>
                <span className="text-cream/40">•</span>
                <span className="text-xs font-mono text-cream/60">{quickViewProduct.weight}</span>
              </div>

              <h2 className="font-serif text-3xl font-normal text-cream">{quickViewProduct.name}</h2>

              {/* Rating */}
              <div className="flex items-center gap-2 text-xs">
                <div className="flex items-center text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="font-mono text-cream/80 font-bold">{quickViewProduct.rating}</span>
                <span className="text-cream/50">({quickViewProduct.reviewsCount} reviews)</span>
              </div>

              <p className="text-sm text-cream/80 font-sans font-light leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Brew Spec Badges */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs font-mono">
                <div className="p-2 rounded-xl bg-espresso border border-gold/10">
                  <Thermometer className="w-4 h-4 text-terracotta mx-auto mb-0.5" />
                  <span className="block font-bold text-cream">{quickViewProduct.brewInfo.temp}</span>
                </div>
                <div className="p-2 rounded-xl bg-espresso border border-gold/10">
                  <Timer className="w-4 h-4 text-gold mx-auto mb-0.5" />
                  <span className="block font-bold text-cream">{quickViewProduct.brewInfo.time}</span>
                </div>
                <div className="p-2 rounded-xl bg-espresso border border-gold/10">
                  <Scale className="w-4 h-4 text-sage mx-auto mb-0.5" />
                  <span className="block font-bold text-cream">{quickViewProduct.brewInfo.ratio}</span>
                </div>
              </div>
            </div>

            {/* Price & Add to Cart Controls */}
            <div className="space-y-4 pt-4 border-t border-gold/15">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-bold text-gold">
                  ${quickViewProduct.price.toFixed(2)}
                </span>

                {/* Quantity Stepper */}
                <div className="flex items-center border border-gold/30 rounded-full px-3 py-1 bg-espresso">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-cream/70 hover:text-cream px-2 font-mono text-lg"
                  >
                    -
                  </button>
                  <span className="px-3 font-mono font-bold text-cream">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-cream/70 hover:text-cream px-2 font-mono text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={added}
                className="w-full py-4 rounded-full text-xs font-mono tracking-widest text-cream uppercase font-bold liquid-metal-btn flex items-center justify-center gap-2 shadow-xl"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-gold" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-gold" />
                    Add to Cart • ${(quickViewProduct.price * quantity).toFixed(2)}
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
