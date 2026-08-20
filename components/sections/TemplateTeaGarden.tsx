"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { ArticleModal, ArticleData } from "../ui/ArticleModal";

const gardenArticles: ArticleData[] = [
  {
    title: "A tea garden in the middle of the forest",
    category: "SINGLE ESTATE SOURCING",
    image: "/origin-darjeeling.png",
    readTime: "5 Min Read",
    author: "Master Tea Harvester",
    content: [
      "Deep within the high-altitude forests of Darjeeling and Wuyi Shan lies our biodynamic tea gardens. Sheltered by ancient pine trees and nourished by pristine mountain streams, these leaves mature slowly under morning mists.",
      "The forest canopy protects tender tea shoots from harsh sunlight, allowing natural amino acids like L-theanine to accumulate in high concentration, yielding a smooth, naturally sweet infusion."
    ]
  },
  {
    title: "The Sulaimani Tea (Recipe Included)",
    category: "TRADITIONAL RECIPES",
    image: "/tea-pour-hero.png",
    readTime: "3 Min Read",
    author: "Sommelier Recipe Vault",
    content: [
      "Sulaimani tea is a fragrant, amber-hued black tea spiced with cardamom, fresh cloves, and finished with a twist of lemon. Celebrated for centuries across coastal spice routes, it is the ultimate digestif after a rich meal."
    ],
    ingredients: [
      "Loose Single-Estate Assam Black Tea (5g)",
      "Green Cardamom Pods (3 pods, crushed)",
      "Saigon Cinnamon Stick (1 small)",
      "Fresh Squeezed Lemon Juice (1 tbsp)",
      "Raw Forest Honey (1 tsp)"
    ],
    recipeSteps: [
      "Boil 300ml of fresh spring water with crushed cardamom pods and cinnamon stick for 4 minutes.",
      "Turn off the heat, add loose Assam black tea leaves, cover and steep for 3 minutes.",
      "Strain into a clear glass or porcelain cup.",
      "Stir in fresh lemon juice and raw forest honey right before serving warm."
    ]
  },
  {
    title: "What are the different types of tea?",
    category: "TEA KNOWLEDGE & GUIDE",
    image: "/origin-wuyi.png",
    readTime: "6 Min Read",
    author: "Tea Sommelier Academy",
    content: [
      "All authentic teas originate from the same plant species: Camellia Sinensis. The difference between White, Green, Oolong, and Black teas lies entirely in the processing, oxidation level, and harvesting technique.",
      "1. Green Tea: Unoxidized, steamed or pan-roasted immediately after harvest to preserve emerald chlorophyll and crisp botanical notes.",
      "2. White Tea: Minimally processed buds dried gently under natural sunlight.",
      "3. Oolong Tea: Semi-oxidized over charcoal fires for floral stone-fruit complexity.",
      "4. Black Tea: Fully oxidized leaves developing dark honey, malty, and cocoa notes."
    ]
  }
];

export function TemplateTeaGarden() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);

  return (
    <section id="tea-garden" className="py-20 bg-white text-espresso border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Section Header (Matching Template Title "Our Tea Garden") */}
        <div className="text-center space-y-3">
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-espresso tracking-tight">
            Our Tea Garden
          </h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto" />
        </div>

        {/* 3 Column Article Cards Grid (Matching Template Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gardenArticles.map((article, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FAF6F0] rounded-2xl overflow-hidden shadow-md border border-espresso/15 flex flex-col justify-between group"
            >
              {/* Card Image */}
              <div className="relative h-56 w-full overflow-hidden bg-espresso/10">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-normal text-espresso group-hover:text-terracotta transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-espresso/70 font-sans font-light line-clamp-3 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Convallis est.
                  </p>
                </div>

                {/* Template Bordered "READ MORE" Button */}
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="px-5 py-2.5 rounded-none border border-espresso text-espresso text-[10px] font-mono tracking-widest uppercase hover:bg-espresso hover:text-cream transition-colors w-fit shadow-sm flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-terracotta" />
                  READ MORE
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
}
