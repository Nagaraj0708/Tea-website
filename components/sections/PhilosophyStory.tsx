"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Feather, Sun, Heart, Compass, Sparkles, Plus, Minus, ArrowDown, ShieldCheck } from "lucide-react";

const storySteps = [
  {
    id: "01",
    tabLabel: "Slow Living",
    title: "The Art of Slow Living",
    subtitle: "A Counter-Culture to Fast Living",
    icon: Feather,
    content:
      "In a world measured by speed and notifications, Chaiwala Co. was founded on a simple principle: tea is a sacred pause. We cultivate single-origin teas that encourage you to slow down, measure water temperature with mindfulness, and listen to the quiet wisp of rising steam.",
    image: "/tea-pour-hero.png",
    stat: "1,400+",
    statLabel: "Daily Ritual Moments",
    badgeTag: "SACRED PAUSE",
  },
  {
    id: "02",
    tabLabel: "Direct Trade",
    title: "Direct-From-Estate Sourcing",
    subtitle: "No Middlemen. No Blending Fillers.",
    icon: Compass,
    content:
      "We partner directly with smallholder tea masters in Darjeeling, Kyoto, Assam, and Fujian. By bypassing industrial trade networks, 100% of our investment stays with the artisan farmers who hand-pluck each tender top bud.",
    image: "/origin-darjeeling.png",
    stat: "100%",
    statLabel: "Fair-Trade Sourced",
    badgeTag: "DIRECT TRADE",
  },
  {
    id: "03",
    tabLabel: "Charcoal Roast",
    title: "Micro-Batch Artisanal Roasting",
    subtitle: "Curated by Master Sommelier Hands",
    icon: Sun,
    content:
      "Every harvest undergoes meticulous small-batch testing for aroma density, leaf elasticity, and flavor nuances. Our tea masters roast over charcoal gaiwans to unlock deep stone fruit, floral, and toasted malt notes.",
    image: "/tea-ceremony.png",
    stat: "35+",
    statLabel: "Years Combined Mastery",
    badgeTag: "CHARCOAL ROAST",
  },
  {
    id: "04",
    tabLabel: "Eco Canister",
    title: "Sustainable Earth Packaging",
    subtitle: "Zero Plastic. 100% Biodegradable.",
    icon: Heart,
    content:
      "Our bespoke canisters are crafted from infinitely recyclable aluminium and dark slate glass, lined with organic cotton and corn-starch tea pyramid bags that decompose naturally in 60 days.",
    image: "/tea-masala-chai.png",
    stat: "0%",
    statLabel: "Microplastics",
    badgeTag: "ECO CANISTER",
  },
];

export function PhilosophyStory() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const toggleAccordion = (idx: number) => {
    setExpandedIndex(idx);
  };

  const activeDesktopData = storySteps[expandedIndex] || storySteps[0];

  return (
    <section
      id="philosophy"
      className="relative bg-[#FAF8F5] text-[#1C3121] py-16 sm:py-20 lg:py-24 border-b border-[#1C3121]/10"
    >
      
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-terracotta font-semibold inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            OUR PHILOSOPHY & SOURCING ETHOS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1C3121] font-light tracking-tight">
            Reclaiming the <span className="italic font-normal text-terracotta">Sacred Tea Ritual</span>
          </h2>
          <p className="text-xs sm:text-base text-[#1C3121]/75 font-sans font-light leading-relaxed">
            Explore the four pillars of our single-origin tea house ethos.
          </p>
        </div>

        {/* ============================================================== */}
        {/* MOBILE & TABLET LAYOUT (< lg): Luxury Expandable Story Vault   */}
        {/* ============================================================== */}
        <div className="block lg:hidden space-y-4">
          
          <div className="flex items-center justify-between px-1 text-[11px] font-mono uppercase tracking-widest text-[#1C3121]/70">
            <span className="flex items-center gap-1.5 font-bold text-terracotta">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              TAP ANY PILLAR TO EXPAND
            </span>
            <span>4 SOURCING PILLARS</span>
          </div>

          <div className="space-y-3">
            {storySteps.map((step, idx) => {
              const isExpanded = expandedIndex === idx;
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className={`rounded-3xl border transition-all duration-500 overflow-hidden shadow-lg ${
                    isExpanded
                      ? "bg-[#1C3121] text-cream border-gold/40 ring-1 ring-gold/30 shadow-2xl"
                      : "bg-white text-[#1C3121] border-[#1C3121]/15 hover:border-terracotta/40"
                  }`}
                >
                  {/* Accordion Header Button */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                          isExpanded ? "bg-terracotta text-cream shadow-md" : "bg-[#1C3121]/10 text-[#1C3121]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className={`font-mono text-[10px] uppercase tracking-widest font-bold block ${isExpanded ? "text-gold" : "text-terracotta"}`}>
                          PILLAR {step.id} • {step.badgeTag}
                        </span>
                        <h3 className={`font-serif text-lg sm:text-xl font-normal ${isExpanded ? "text-cream" : "text-[#1C3121]"}`}>
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isExpanded ? "bg-gold text-[#1C3121]" : "bg-[#1C3121]/10 text-[#1C3121]"
                      }`}
                    >
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Accordion Body Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 pb-6 pt-1 space-y-4 border-t border-white/10">
                          
                          {/* Image Showcase */}
                          <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden mt-3 shadow-inner">
                            <Image
                              src={step.image}
                              alt={step.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1C3121] via-transparent to-transparent" />
                          </div>

                          <p className="text-xs sm:text-sm font-sans font-light text-cream/85 leading-relaxed pt-2">
                            {step.content}
                          </p>

                          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                            <div>
                              <span className="font-serif text-2xl font-bold text-gold block">
                                {step.stat}
                              </span>
                              <span className="text-[10px] font-mono uppercase tracking-widest text-cream/70">
                                {step.statLabel}
                              </span>
                            </div>

                            <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-gold border border-gold/30 flex items-center gap-1">
                              <ShieldCheck className="w-3 h-3 text-gold" />
                              VERIFIED ETHOS
                            </span>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

        {/* ============================================================== */}
        {/* DESKTOP LAYOUT (>= lg): Aceternity Sticky Scroll Reveal        */}
        {/* ============================================================== */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Pinned Sticky Visual Showcase */}
          <div className="col-span-6 sticky top-28">
            <div className="relative h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white ring-1 ring-[#1C3121]/15 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDesktopData.id}
                  initial={{ opacity: 0, scale: 1.06, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={activeDesktopData.image}
                    alt={activeDesktopData.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Rich Cinematic Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C3121]/95 via-[#1C3121]/30 to-transparent" />
                  
                  {/* Floating Glassmorphic Stat Badge */}
                  <motion.div
                    initial={{ y: -15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="absolute top-6 left-6 px-4 py-2.5 rounded-2xl bg-[#1C3121]/80 backdrop-blur-md border border-gold/30 text-cream shadow-xl flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-terracotta/30 flex items-center justify-center text-gold">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold block">
                        {activeDesktopData.badgeTag}
                      </span>
                      <span className="font-serif text-sm font-bold text-cream">
                        {activeDesktopData.stat} {activeDesktopData.statLabel}
                      </span>
                    </div>
                  </motion.div>

                  {/* Image Bottom Title Overlay */}
                  <div className="absolute bottom-8 left-8 right-8 text-cream space-y-2">
                    <span className="text-xs uppercase tracking-widest font-mono text-gold font-semibold block">
                      CHAIWALA CO. ARCHIVES • {activeDesktopData.id}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-cream leading-tight">
                      {activeDesktopData.title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Step Counter Indicator */}
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#1C3121]/60 px-2">
              <span>SECTION {expandedIndex + 1} OF {storySteps.length}</span>
              <span className="flex items-center gap-1 text-terracotta font-semibold">
                SCROLL TO DISCOVER
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Scrolling Content Items */}
          <div className="col-span-6 space-y-28 py-4">
            {storySteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = expandedIndex === index;

              return (
                <motion.div
                  key={step.id}
                  onMouseEnter={() => setExpandedIndex(index)}
                  onClick={() => setExpandedIndex(index)}
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1.02 : 1 }}
                  transition={{ duration: 0.3 }}
                  className={`p-8 sm:p-10 rounded-3xl border transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "bg-[#1C3121] text-cream border-gold/40 shadow-2xl"
                      : "bg-white border-[#1C3121]/15 hover:border-terracotta/40 text-[#1C3121]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          isActive ? "bg-terracotta text-cream shadow-md" : "bg-[#1C3121]/10 text-[#1C3121]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`font-mono text-xs uppercase tracking-widest font-bold ${isActive ? "text-gold" : "text-terracotta"}`}>
                        {step.id} • {step.subtitle}
                      </span>
                    </div>

                    {isActive && (
                      <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-gold border border-gold/30 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-gold" />
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-serif text-2xl sm:text-3xl mb-4 font-normal leading-snug ${
                      isActive ? "text-cream" : "text-[#1C3121]"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-sm sm:text-base font-light leading-relaxed mb-6 ${
                      isActive ? "text-cream/80" : "text-[#1C3121]/75"
                    }`}
                  >
                    {step.content}
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-current/10">
                    <span
                      className={`font-serif text-2xl font-bold ${
                        isActive ? "text-gold" : "text-terracotta"
                      }`}
                    >
                      {step.stat}
                    </span>
                    <span
                      className={`text-xs uppercase tracking-widest font-mono ${
                        isActive ? "text-cream/70" : "text-[#1C3121]/60"
                      }`}
                    >
                      {step.statLabel}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
