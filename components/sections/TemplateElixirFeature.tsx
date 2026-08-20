"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, BookOpen } from "lucide-react";
import { ArticleModal, ArticleData } from "../ui/ArticleModal";

const elixirArticle: ArticleData = {
  title: "Tea is the Elixir of Life — Health & Vitality Rituals",
  category: "HOLISTIC WELLNESS",
  image: "/tea-pour-hero.png",
  readTime: "4 Min Read",
  author: "Dr. Evelyn Vance",
  content: [
    "For millennia across eastern traditions, tea has been honored not merely as a beverage, but as an medicinal elixir capable of clarifying the mind and restoring equilibrium to the body.",
    "Single-estate loose-leaf tea contains high concentrations of L-theanine and polyphenol catechins. When steeped gently at precise temperatures, these compound bio-molecules promote relaxed alertness, lowering cortisol while enhancing cognitive focus.",
    "Our artisanal harvests are grown without synthetic pesticides in biodynamic mountain gardens, preserving the volatile essential oils and rich mineral complexity of the terroir."
  ],
  ingredients: [
    "Single-Origin Loose Leaf Tea (4g)",
    "Pure Mountain Spring Water (250ml)",
    "Fresh Organic Lemon Slice",
    "Wild Cardamom Pods & Saigon Cinnamon"
  ],
  recipeSteps: [
    "Heat pure spring water to the optimal temperature (85°C for Green, 95°C for Black & Oolong).",
    "Rinse the gaiwan or porcelain teapot with hot water to warm the vessel.",
    "Add 4-5 grams of loose leaves and perform a brief 5-second initial leaf rinse.",
    "Pour water gently in a circular motion around the vessel wall to avoid bruising the tender leaves.",
    "Steep for 2-3 minutes, strain into a porcelain teacup, and savor mindfully."
  ]
};

export function TemplateElixirFeature() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="tea-elixir" className="relative py-24 bg-[#FAF6F0] overflow-hidden border-b border-espresso/10">
      
      {/* Background Image Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px] flex items-center justify-end p-6 sm:p-12">
          
          {/* Background Photography (White Cup with Lemon Slice & Botanical Herbs) */}
          <Image
            src="/tea-ceremony.png"
            alt="Tea is the Elixir of Life"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-espresso/40 via-transparent to-espresso/60" />

          {/* Overlaid Dark Forest Green Floating Card (Matching Template Dark Box) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-lg bg-[#1C2A1E]/95 text-cream p-8 sm:p-12 rounded-2xl shadow-2xl border border-gold/30 backdrop-blur-md space-y-6"
          >
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-gold font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              ARTISANAL BOTANICALS
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-light text-cream leading-tight">
              Tea is the Elixir of life.
            </h2>

            <p className="text-xs sm:text-sm font-sans font-light text-cream/80 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisl, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor.
            </p>

            {/* Template "READ MORE" Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="px-7 py-3 rounded-none bg-white text-[#1C2A1E] font-mono text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-espresso transition-colors shadow-lg flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-terracotta" />
              READ MORE
            </button>
          </motion.div>

        </div>
      </div>

      {/* Article Modal */}
      {modalOpen && (
        <ArticleModal
          article={elixirArticle}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}
