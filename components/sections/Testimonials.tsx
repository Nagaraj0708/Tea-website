"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Award } from "lucide-react";

const reviews = [
  {
    id: 1,
    quote:
      "Chaiwala Co.'s Royal Masala Chai has redefined my morning routine. The cardamom top-notes and roasted Assam depth evoke the luxury of a private Mumbai tea atelier.",
    author: "Evelyn Vance",
    role: "Senior Food & Beverage Critic, Vogue Living",
    rating: 5,
    location: "London, UK",
    badge: "CRITIC'S PICK",
  },
  {
    id: 2,
    quote:
      "The Da Hong Pao Oolong is extraordinary. You can taste the volcanic mineral rock slate in every infusion. As a sommelier, this is gold tier quality.",
    author: "Hiroshi Tanaka",
    role: "Certified Tea Sommelier",
    rating: 5,
    location: "Kyoto, Japan",
    badge: "SOMMELIER CHOICE",
  },
  {
    id: 3,
    quote:
      "From the paper grain unboxing to the 3-minute steep guidance, every detail feels like an Awwwards-worthy ritual. I have gifted subscriptions to all my design partners.",
    author: "Marcella Thorne",
    role: "Creative Director, Studio Atelier",
    rating: 5,
    location: "New York, USA",
    badge: "DESIGN EXCELLENCE",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="relative py-24 bg-[#0B150D] text-cream overflow-hidden border-b border-gold/15">
      
      {/* Dynamic Ambient Studio Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gold/15 via-terracotta/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-gold font-semibold inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            ACCLAIM & SOMMELIER PRAISE
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream font-light tracking-tight">
            Word from <span className="italic font-normal text-terracotta">Connoisseurs</span>
          </h2>
        </div>

        {/* Elevated Pristine Cream Luxury Testimonial Card */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[current].id}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FAF8F5] text-[#1C3121] p-8 sm:p-14 rounded-3xl border border-gold/40 shadow-2xl relative max-w-3xl space-y-6 text-center"
            >
              {/* Badge Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C3121] text-gold font-mono text-[10px] font-bold uppercase tracking-widest border border-gold/30">
                <Award className="w-3 h-3 text-gold" />
                {reviews[current].badge}
              </div>

              {/* Quote Mark */}
              <div className="w-12 h-12 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center mx-auto">
                <Quote className="w-6 h-6" />
              </div>

              <p className="font-serif text-xl sm:text-2xl text-[#1C3121] font-normal italic leading-relaxed">
                "{reviews[current].quote}"
              </p>

              {/* Rating Stars */}
              <div className="flex justify-center gap-1 text-gold">
                {[...Array(reviews[current].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Author & Details */}
              <div className="pt-2 border-t border-[#1C3121]/10">
                <h4 className="font-serif text-lg text-[#1C3121] font-bold">
                  {reviews[current].author}
                </h4>
                <span className="text-xs text-terracotta font-mono font-semibold block">
                  {reviews[current].role} • {reviews[current].location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1C3121] text-cream hover:bg-terracotta transition-colors shadow-xl border border-gold/30 hidden sm:flex"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1C3121] text-cream hover:bg-terracotta transition-colors shadow-xl border border-gold/30 hidden sm:flex"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all ${
                current === idx ? "w-8 bg-gold" : "w-2 bg-cream/30 hover:bg-cream/60"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
