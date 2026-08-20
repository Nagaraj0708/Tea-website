"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const tickerItems = [
  "SINGLE ORIGIN",
  "HAND-PICKED LEAF",
  "SMALL BATCH ROAST",
  "ETHICALLY SOURCED",
  "HIGH ALTITUDE GARDENS",
  "DARJEELING FIRST FLUSH",
  "UJI KYOTO MATCHA",
  "WUYI CLIFF OOLONG",
  "ASSAM ROYAL CHAI",
  "ZERO PLASTIC TEA BAGS",
  "SOMMELIER CURATED",
];

export function MarqueeStrip() {
  return (
    <div
      id="marquee"
      className="relative w-full py-5 bg-[#1A130E] border-y border-gold/20 overflow-hidden select-none z-20"
    >
      {/* Gradient Fades on Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1A130E] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A130E] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span className="font-serif text-sm sm:text-base tracking-[0.25em] text-[#F7F1E6]/90 uppercase font-light">
              {item}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
          </div>
        ))}
      </div>
    </div>
  );
}
