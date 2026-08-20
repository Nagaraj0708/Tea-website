"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Compass } from "lucide-react";
import { TeaSteamCanvas } from "../3d/TeaSteamCanvas";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-[#F7F1E6]">
      {/* Background Warm Gradient & Grain Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(217,164,65,0.25)_0%,_rgba(193,102,47,0.1)_45%,_transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none" />

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-terracotta/15 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold/15 blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Typography & Hero Copy */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-terracotta/30 bg-espresso/5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-terracotta animate-ping" />
            <span className="text-xs uppercase tracking-widest font-mono text-espresso/90 font-medium">
              Single Origin • Estate Harvest 2026
            </span>
          </motion.div>

          {/* Main Kinetic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-normal tracking-tight text-espresso leading-[1.05]"
          >
            STEEPED IN <br />
            <span className="italic font-light text-terracotta relative inline-block">
              SLOWNESS.
              {/* Subtle underline decoration */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-gold/40" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-base sm:text-lg text-espresso/80 font-sans leading-relaxed font-light"
          >
            Rare, single-origin teas sourced directly from remote high-altitude gardens. Savor the contemplative ritual of loose-leaf brewing — crafted for mindful moments.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#collections"
              className="px-8 py-4 rounded-full text-xs font-mono tracking-widest text-cream uppercase font-bold liquid-metal-btn inline-flex items-center gap-3 shadow-xl"
              data-cursor="DISCOVER"
            >
              <Sparkles className="w-4 h-4 text-gold animate-spin" style={{ animationDuration: "8s" }} />
              Explore Teas
            </a>

            <a
              href="#sourcing"
              className="px-8 py-4 rounded-full text-xs font-mono tracking-widest text-espresso uppercase font-semibold border border-espresso/20 hover:border-terracotta hover:text-terracotta transition-colors backdrop-blur-sm inline-flex items-center gap-2"
              data-cursor="ORIGIN"
            >
              <Compass className="w-4 h-4 text-terracotta" />
              Our Origin Story
            </a>
          </motion.div>

          {/* Feature Highlights Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-8 border-t border-espresso/10 grid grid-cols-3 gap-6 text-left max-w-lg"
          >
            <div>
              <span className="block font-serif text-2xl text-espresso font-bold">100%</span>
              <span className="text-[11px] text-espresso/70 uppercase tracking-wider font-mono">Organic Leaf</span>
            </div>
            <div>
              <span className="block font-serif text-2xl text-terracotta font-bold">2,100m</span>
              <span className="text-[11px] text-espresso/70 uppercase tracking-wider font-mono">Peak Altitude</span>
            </div>
            <div>
              <span className="block font-serif text-2xl text-espresso font-bold">Small-Batch</span>
              <span className="text-[11px] text-espresso/70 uppercase tracking-wider font-mono">Hand Harvest</span>
            </div>
          </motion.div>

        </div>

        {/* Right 3D Steam & Vessel Feature */}
        <div className="lg:col-span-5 relative h-[450px] sm:h-[550px] w-full flex items-center justify-center">
          
          {/* Background Ring Accent */}
          <div className="absolute inset-0 rounded-full border border-terracotta/20 scale-90 animate-pulse pointer-events-none" />
          <div className="absolute inset-4 rounded-full border border-gold/15 scale-95 pointer-events-none" />

          {/* 3D Steam Particle Canvas */}
          <div className="w-full h-full relative" data-cursor="STEEP">
            <TeaSteamCanvas />
          </div>

          {/* Floating Tag Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-4 right-4 glass-card px-4 py-3 rounded-2xl border border-gold/30 shadow-2xl flex items-center gap-3 backdrop-blur-xl bg-espresso-card/90"
          >
            <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center text-gold font-serif font-bold text-sm">
              98°C
            </div>
            <div>
              <span className="block text-xs font-serif text-cream font-medium">Optimal Brew Ritual</span>
              <span className="text-[10px] text-gold font-mono uppercase tracking-wider">3 Min Steep • High Mountain Oolong</span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Scroll Down Cue */}
      <motion.a
        href="#marquee"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-espresso/60 hover:text-terracotta transition-colors z-20"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono font-medium">Scroll to Steep</span>
        <ArrowDown className="w-4 h-4 text-terracotta" />
      </motion.a>
    </section>
  );
}
