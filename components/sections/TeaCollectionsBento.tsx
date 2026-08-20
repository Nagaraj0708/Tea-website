"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Flame, Leaf, Coffee, Award, Feather } from "lucide-react";

const collections = [
  {
    id: "chai",
    title: "Masala Chai Blends",
    subtitle: "Flagship Signature",
    description: "Crushed green cardamom, Saigon cinnamon, cloves, and full-bodied Assam CTC roasted in small batches.",
    image: "/tea-masala-chai.png",
    icon: Flame,
    tag: "MOST POPULAR",
    colSpan: "lg:col-span-8",
    height: "h-[420px]",
    accent: "#C1662F",
  },
  {
    id: "green",
    title: "Green & Jasmine Teas",
    subtitle: "Spring Harvest",
    description: "Hand-rolled Dragonwell and Jasmine pearl blossoms steamed over bamboo baskets.",
    image: "/tea-green-jasmine.png",
    icon: Leaf,
    tag: "ORGANIC CERTIFIED",
    colSpan: "lg:col-span-4",
    height: "h-[420px]",
    accent: "#5C6B4F",
  },
  {
    id: "black",
    title: "Golden Black Teas",
    subtitle: "High Elevation",
    description: "Velvety Yunnan Golden Needles and Darjeeling First Flush with notes of dark honey and roasted malt.",
    image: "/tea-golden-yunnan.png",
    icon: Coffee,
    tag: "SINGLE ESTATE",
    colSpan: "lg:col-span-4",
    height: "h-[380px]",
    accent: "#D9A441",
  },
  {
    id: "oolong",
    title: "Wuyi Cliff Oolongs",
    subtitle: "Volcanic Mineral",
    description: "Charcoal roasted Da Hong Pao cultivated on ancient Wuyi mountain rock faces.",
    image: "/tea-cliff-oolong.png",
    icon: Award,
    tag: "RARE VINTAGE",
    colSpan: "lg:col-span-4",
    height: "h-[380px]",
    accent: "#C1662F",
  },
  {
    id: "herbal",
    title: "Botanical Tisanes",
    subtitle: "Caffeine Free",
    description: "Egyptian chamomile flowers, French lavender, and lemongrass for evening tranquility.",
    image: "/tea-ceremony.png",
    icon: Feather,
    tag: "CALMING RITUAL",
    colSpan: "lg:col-span-4",
    height: "h-[380px]",
    accent: "#5C6B4F",
  },
];

export function TeaCollectionsBento() {
  return (
    <section id="collections" className="relative py-24 bg-[#1A130E] text-cream overflow-hidden">
      {/* Glow Orbs Backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-terracotta/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-gold font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-terracotta" />
              Curated Tea Families
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-cream font-light tracking-tight">
              Explore Our <span className="italic font-normal text-terracotta">Artisanal Collections</span>
            </h2>
          </div>
          <p className="text-sm text-cream/70 font-sans font-light max-w-md">
            Each family represents distinct terroir altitudes, oxidation rituals, and roasting profiles crafted for every hour of your day.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {collections.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.id}
                href="#shop"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative rounded-3xl overflow-hidden group border border-gold/15 hover:border-gold/50 shadow-2xl ${item.colSpan} ${item.height} flex flex-col justify-end p-8 bg-espresso-card/80 backdrop-blur-md`}
                data-cursor="EXPLORE"
              >
                {/* Image Backdrop with Hover Scale */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A130E] via-[#1A130E]/60 to-transparent z-10" />

                {/* Top Badge & Arrow */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
                  <span className="px-3.5 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest font-bold bg-espresso/80 text-gold border border-gold/30 backdrop-blur-md">
                    {item.tag}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center text-cream group-hover:bg-terracotta group-hover:text-cream group-hover:border-terracotta transition-colors shadow-lg">
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-20 space-y-2">
                  <div className="flex items-center gap-2 text-gold">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-widest font-mono text-cream/70">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-cream group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-cream/70 font-sans font-light max-w-xl line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
