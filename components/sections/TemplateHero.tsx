"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import confetti from "canvas-confetti";

const heroSlides = [
  {
    id: 1,
    title: "Tea is the Elixir of life.",
    subtitle:
      "Hand-selected single-estate teas crafted with mindfulness. Experience delicate floral aromas, balanced astringency, and rich amber liquor harvested from ancient high-mountain gardens.",
    image: "/tea-pour-hero.png",
    accentTag: "SINGLE-ESTATE HARVEST",
  },
  {
    id: 2,
    title: "Steeped in Pure Tranquility.",
    subtitle:
      "Hand-selected top buds from ancient high-altitude gardens in Darjeeling, Assam & Kyoto. Experience complex aromatic top-notes and a rich velvety amber liquor.",
    image: "/tea-ceremony.png",
    accentTag: "SOMMELIER SELECTION",
  },
  {
    id: 3,
    title: "Artisanal Single-Origin Blends.",
    subtitle:
      "From organic green tea pearls to charcoal-roasted rock oolongs, each harvest celebrates centuries of tea mastery and biodynamic cultivation.",
    image: "/origin-kyoto.png",
    accentTag: "LIMITED AUTUMN FLUSH",
  },
];

export function TemplateHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setIsCartOpen } = useCart();

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Auto-play slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleOrderNow = () => {
    setIsCartOpen(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#C1662F", "#D9A441"],
    });
  };

  const active = heroSlides[currentSlide];

  return (
    <section id="hero" className="relative bg-[#FAF8F5] text-espresso pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-6 lg:pb-12 border-b border-espresso/10 overflow-hidden">
      
      {/* Clean Premium Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1C3121]/20 bg-[#1C3121]/5 text-[#1C3121] text-xs font-mono tracking-widest font-semibold uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                  <span>{active.accentTag}</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-[#1C3121]">
                  {active.title}
                </h1>

                <p className="text-xs sm:text-base text-[#1C3121]/75 font-sans font-light leading-relaxed max-w-xl">
                  {active.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTAs & Slide Dots Suite */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleOrderNow}
                className="px-7 py-3 rounded-none bg-[#1C3121] text-cream font-mono text-xs tracking-widest uppercase hover:bg-terracotta transition-all shadow-md flex items-center gap-2 group"
              >
                <ShoppingBag className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                <span>ORDER NOW</span>
              </button>

              <a
                href="#philosophy"
                className="px-7 py-3 rounded-none border border-[#1C3121] text-[#1C3121] font-mono text-xs tracking-widest uppercase hover:bg-[#1C3121] hover:text-cream transition-all flex items-center gap-2 group"
              >
                <span>READ MORE</span>
                <ArrowRight className="w-4 h-4 text-terracotta group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Inline Interactive Slide Dots */}
              <div className="flex items-center gap-2 ml-auto sm:ml-4 bg-[#1C3121]/5 px-3 py-2 rounded-full border border-[#1C3121]/10">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "w-7 bg-[#1C3121]" : "w-2.5 bg-[#1C3121]/30 hover:bg-[#1C3121]/60"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Right Image Showcase Column with Integrated Animated Arrow Controls */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-72 sm:h-[380px] lg:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white ring-1 ring-espresso/10"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C3121]/30 via-transparent to-transparent" />
                
                {/* Live Slide Counter Badge */}
                <div className="absolute bottom-4 right-4 z-20 font-mono text-xs font-bold text-gold tracking-widest bg-[#1C3121]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold/30 shadow-lg">
                  0{currentSlide + 1} / 0{heroSlides.length}
                </div>

                {/* LEFT ARROW BUTTON - Hides & Fades with Image */}
                <button
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                  title="Previous Slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#1C3121]/85 hover:bg-[#1C3121] text-gold border border-gold/40 shadow-2xl backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                >
                  <ChevronLeft className="w-6 h-6 text-gold" />
                </button>

                {/* RIGHT ARROW BUTTON - Hides & Fades with Image */}
                <button
                  onClick={nextSlide}
                  aria-label="Next Slide"
                  title="Next Slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#1C3121]/85 hover:bg-[#1C3121] text-gold border border-gold/40 shadow-2xl backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                >
                  <ChevronRight className="w-6 h-6 text-gold" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
