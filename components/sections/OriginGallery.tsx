"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mountain, CloudSun, Compass, ExternalLink } from "lucide-react";

const origins = [
  {
    id: "darjeeling",
    region: "Darjeeling, West Bengal",
    country: "India",
    estate: "Makaibari & Castleton Estates",
    elevation: "2,150m (7,050 ft)",
    harvest: "March - April (First Flush)",
    notes: "Muscatel Grape, Peach Blossom, Fresh Pine",
    image: "/origin-darjeeling.png",
    coordinates: "27.0410° N, 88.2663° E",
    description: "Nestled in the misty Himalayan foothills, where cool morning fog slows growth, producing rare floral muscatel character prized worldwide.",
  },
  {
    id: "kyoto",
    region: "Uji, Kyoto Prefecture",
    country: "Japan",
    estate: "Shirakawa Bamboo Valley",
    elevation: "350m (1,150 ft)",
    harvest: "May (First Harvest / Shincha)",
    notes: "Sweet Umami, Steamed Edamame, Spring Rain",
    image: "/origin-kyoto.png",
    coordinates: "34.8893° N, 135.8052° E",
    description: "Shaded under traditional rice straw mats for 21 days before harvest to maximize L-theanine amino acids and deep jade sweetness.",
  },
  {
    id: "wuyi",
    region: "Wuyi Shan, Fujian",
    country: "China",
    estate: "Zhengyan Rock Cliffs",
    elevation: "1,200m (3,930 ft)",
    harvest: "May - June (Charcoal Roasted)",
    notes: "Roasted Stone Fruit, Mineral Slate, Dark Honey",
    image: "/origin-wuyi.png",
    coordinates: "27.7289° N, 117.9547° E",
    description: "Tea bushes grow directly in nutrient-dense volcanic slate rocks, absorbing rainwater filtered through red sandstone cliffs.",
  },
];

export function OriginGallery() {
  return (
    <section id="sourcing" className="relative py-24 bg-[#F7F1E6] text-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-terracotta font-semibold flex items-center justify-center gap-2">
            <Compass className="w-4 h-4 text-terracotta" />
            Terroir & Garden Geography
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso font-light tracking-tight">
            High Altitude <span className="italic font-normal text-terracotta">Tea Sanctuaries</span>
          </h2>
          <p className="text-base text-espresso/70 font-sans font-light">
            Each leaf carries the unique microclimate, soil minerals, and mountain air of its birthplace.
          </p>
        </div>

        {/* Origin Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {origins.map((origin) => (
            <motion.div
              key={origin.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="bg-cream rounded-3xl overflow-hidden border border-espresso/15 shadow-xl flex flex-col justify-between group"
              data-cursor="MAP"
            >
              {/* Top Image Preview */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={origin.image}
                  alt={origin.region}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest bg-espresso/90 text-gold backdrop-blur-md font-semibold border border-gold/20">
                    {origin.coordinates}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-cream">
                  <span className="text-[11px] uppercase tracking-widest font-mono text-gold font-bold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-terracotta" />
                    {origin.country}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-cream">{origin.region}</h3>
                </div>
              </div>

              {/* Card Specs Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-espresso/70 font-sans leading-relaxed">
                  {origin.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-espresso/10 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-espresso/60 flex items-center gap-1.5">
                      <Mountain className="w-3.5 h-3.5 text-terracotta" /> Elevation
                    </span>
                    <span className="text-espresso font-semibold">{origin.elevation}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-espresso/60 flex items-center gap-1.5">
                      <CloudSun className="w-3.5 h-3.5 text-gold" /> Harvest Season
                    </span>
                    <span className="text-espresso font-semibold">{origin.harvest}</span>
                  </div>
                </div>

                {/* Flavor Profile Pills */}
                <div className="pt-3">
                  <span className="text-[10px] uppercase tracking-wider text-sage font-mono font-bold block mb-1.5">
                    Flavor Notes:
                  </span>
                  <p className="text-xs font-serif italic text-terracotta bg-terracotta/10 p-2.5 rounded-xl border border-terracotta/20">
                    "{origin.notes}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
