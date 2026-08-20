"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Flame, Sparkles, CheckCircle2, User, BookOpen, Utensils } from "lucide-react";

export interface ArticleData {
  title: string;
  category: string;
  image: string;
  readTime: string;
  author: string;
  content: string[];
  recipeSteps?: string[];
  ingredients?: string[];
}

interface ArticleModalProps {
  article: ArticleData | null;
  onClose: () => void;
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  // Lock body scroll when modal is active to prevent background scrolling
  useEffect(() => {
    if (article) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [article]);

  if (!article) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden"
        data-lenis-prevent="true"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0E1710]/85 backdrop-blur-xl"
        />

        {/* Reshaped Side-by-Side Split Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 25 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="relative w-full max-w-5xl bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl border border-gold/30 z-10 text-[#1C3121] flex flex-col md:flex-row max-h-[85vh]"
          data-lenis-prevent="true"
        >
          {/* Glassmorphic Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#1C3121]/80 text-cream hover:bg-terracotta hover:text-white transition-all shadow-xl border border-gold/30 group backdrop-blur-md"
            aria-label="Close"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* LEFT COLUMN: Full-Height Featured Image Banner */}
          <div className="relative h-64 md:h-auto md:w-5/12 lg:w-1/2 shrink-0 bg-[#1C3121] overflow-hidden flex flex-col justify-end">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover opacity-90 scale-105"
              priority
            />
            {/* Gradient Overlay for Mood & Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C3121] via-[#1C3121]/40 to-transparent" />

            {/* Left Column Bottom Overlay Info */}
            <div className="relative z-10 p-6 sm:p-8 space-y-3">
              <span className="px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-terracotta text-cream font-bold inline-flex items-center gap-1.5 shadow-lg border border-gold/40">
                <Sparkles className="w-3 h-3 text-gold" />
                {article.category}
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-light text-cream leading-tight hidden md:block">
                {article.title}
              </h3>
            </div>
          </div>

          {/* RIGHT COLUMN: Dedicated Scrollable Content Area */}
          <div className="md:w-7/12 lg:w-1/2 flex flex-col flex-1 bg-[#FAF8F5] overflow-hidden">
            
            {/* Scrollable Content Body */}
            <div
              className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 custom-scrollbar"
              data-lenis-prevent="true"
            >
              {/* Category & Meta Information Header */}
              <div className="space-y-2 border-b border-[#1C3121]/15 pb-4">
                <div className="flex items-center gap-3 text-xs font-mono text-terracotta font-semibold">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                  <span className="text-[#1C3121]/30">•</span>
                  <span className="flex items-center gap-1 text-[#1C3121]/70">
                    <User className="w-3.5 h-3.5 text-gold" />
                    {article.author}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C3121] leading-tight">
                  {article.title}
                </h2>
              </div>

              {/* Main Article Paragraphs */}
              <div className="space-y-4 font-sans text-xs sm:text-sm text-[#1C3121]/85 leading-relaxed font-light">
                {article.content.map((paragraph, idx) => (
                  <p key={idx} className="first-letter:text-2xl first-letter:font-serif first-letter:font-normal first-letter:text-terracotta">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Ultra-Premium Recipe Ingredients Card */}
              {article.ingredients && article.ingredients.length > 0 && (
                <div className="p-5 sm:p-6 rounded-2xl bg-[#1C3121] text-cream space-y-4 border-l-4 border-gold shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-xl text-gold font-normal flex items-center gap-2">
                      <Flame className="w-4 h-4 text-terracotta animate-pulse" />
                      Recipe Ingredients
                    </h4>
                    <span className="text-[10px] font-mono text-cream/60 uppercase tracking-widest">
                      Craft Yield
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-cream/95">
                    {article.ingredients.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Preparation Method Step-by-Step */}
              {article.recipeSteps && article.recipeSteps.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="font-serif text-xl text-[#1C3121] font-normal flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-terracotta" />
                    Preparation Method
                  </h4>

                  <div className="space-y-2.5">
                    {article.recipeSteps.map((step, stepIdx) => (
                      <div
                        key={stepIdx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#1C3121]/10 shadow-sm"
                      >
                        <span className="w-6 h-6 rounded-full bg-gradient-to-br from-terracotta to-gold text-cream font-mono text-[10px] font-bold flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                          {stepIdx + 1}
                        </span>
                        <p className="text-xs font-sans text-[#1C3121]/85 leading-relaxed font-light">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
