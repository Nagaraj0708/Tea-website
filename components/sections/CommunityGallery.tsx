"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const galleryImages = [
  { src: "/tea-pour-hero.png", title: "Golden Amber Pour", likes: "1,240" },
  { src: "/origin-kyoto.png", title: "Uji Kyoto Gardens", likes: "980" },
  { src: "/tea-ceremony.png", title: "Gaiwan Steep Ritual", likes: "2,150" },
  { src: "/tea-masala-chai.png", title: "Cardamom & Spice Canister", likes: "1,890" },
];

export function CommunityGallery() {
  return (
    <section id="community" className="relative py-24 bg-[#F7F1E6] text-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-terracotta font-semibold flex items-center gap-2">
              <svg className="w-4 h-4 text-terracotta" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              #ChaiwalaRitual Community
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-espresso font-light tracking-tight">
              Captured <span className="italic font-normal text-terracotta">Tea Moments</span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-espresso text-cream text-xs font-mono tracking-widest uppercase hover:bg-terracotta transition-colors shadow-md w-fit"
          >
            Follow @chaiwalaco
          </a>
        </div>

        {/* Masonry Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="relative h-80 rounded-3xl overflow-hidden shadow-xl group border border-espresso/15 cursor-pointer"
              data-cursor="INSTAGRAM"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover Dark Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-cream">
                <span className="text-xs font-mono text-gold flex items-center gap-1.5 mb-1">
                  <Heart className="w-3.5 h-3.5 fill-terracotta text-terracotta" />
                  {img.likes} Likes
                </span>
                <h4 className="font-serif text-lg font-normal">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
