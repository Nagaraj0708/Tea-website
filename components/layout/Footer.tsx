"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Clock, Phone, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A130E] text-cream border-t border-gold/20 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center border border-gold/30">
                <svg className="w-5 h-5 text-terracotta" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 24h32v16a16 16 0 0 1-16 16h0A16 16 0 0 1 12 40V24z" />
                  <path d="M44 28h6a6 6 0 0 1 0 12h-6" />
                  <line x1="8" y1="56" x2="48" y2="56" />
                </svg>
              </div>
              <span className="font-serif text-xl font-bold tracking-widest text-cream uppercase">
                Chaiwala <span className="text-terracotta">Co.</span>
              </span>
            </div>

            <p className="text-xs text-cream/70 font-sans font-light leading-relaxed max-w-sm">
              Artisanal single-origin tea house selling ethically harvested loose-leaf teas and hosting contemplative tasting rituals.
            </p>

            <div className="flex items-center gap-4 text-cream/60">
              <a href="#" className="hover:text-gold transition-colors p-2 rounded-full bg-espresso border border-gold/10" aria-label="Instagram">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-gold transition-colors p-2 rounded-full bg-espresso border border-gold/10" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="hover:text-gold transition-colors p-2 rounded-full bg-espresso border border-gold/10" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
              Explore Vault
            </h4>
            <ul className="space-y-2.5 text-xs text-cream/70 font-mono">
              <li><a href="#philosophy" className="hover:text-terracotta transition-colors">Our Philosophy</a></li>
              <li><a href="#collections" className="hover:text-terracotta transition-colors">Tea Collections</a></li>
              <li><a href="#sourcing" className="hover:text-terracotta transition-colors">Estate Gardens</a></li>
              <li><a href="#brewing" className="hover:text-terracotta transition-colors">Brewing Protocol</a></li>
              <li><a href="#shop" className="hover:text-terracotta transition-colors">Store Bestsellers</a></li>
              <li><a href="#faq" className="hover:text-terracotta transition-colors">FAQ & Support</a></li>
            </ul>
          </div>

          {/* Store Location & Hours */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
              Flagship Tasting Room
            </h4>
            <div className="space-y-3 text-xs text-cream/70 font-sans">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                142 Artisan Way, Soho, NY 10013
              </p>
              <p className="flex items-center gap-2 font-mono">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                Mon – Sun: 8:00 AM – 8:00 PM
              </p>
              <p className="flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4 text-sage shrink-0" />
                +1 (212) 555-TEA1
              </p>
              <p className="flex items-center gap-2 font-mono">
                <Mail className="w-4 h-4 text-terracotta shrink-0" />
                concierge@chaiwala.co
              </p>
            </div>
          </div>

          {/* Store Location Interactive Preview Box */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
              Interactive Map
            </h4>
            <div className="relative h-32 w-full rounded-2xl overflow-hidden border border-gold/20 bg-espresso flex items-center justify-center group cursor-pointer">
              {/* Simulated Map Visual */}
              <div className="absolute inset-0 bg-[radial-gradient(#C1662F_1px,transparent_1px)] bg-[size:12px_12px] opacity-20" />
              <div className="relative z-10 text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-terracotta/20 text-terracotta flex items-center justify-center mx-auto animate-bounce">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold block">
                  Soho Tasting Room
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Scroll Top Row */}
        <div className="pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-cream/50">
          <p>© 2026 Chaiwala Co. Artisanal Tea House. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-espresso text-gold border border-gold/20 hover:bg-terracotta hover:text-cream transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
