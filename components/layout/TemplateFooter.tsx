"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Sparkles, ShieldCheck, Mail, Leaf, Globe, ArrowRight } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    url: "https://x.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    url: "https://pinterest.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C24.007 5.367 18.624 0 12.017 0z" />
      </svg>
    ),
  },
];

export function TemplateFooter() {
  const scrollToTop = () => {
    const lenis = typeof window !== "undefined" ? (window as any).lenis : undefined;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B150D] text-cream pt-14 pb-8 border-t border-gold/25 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2 group cursor-pointer">
              <Sparkles className="w-4 h-4 text-gold group-hover:rotate-45 transition-transform duration-300" />
              <h3 className="font-serif text-2xl font-light tracking-tight text-cream group-hover:text-gold transition-colors duration-300">
                CHAIWALA <span className="italic text-terracotta group-hover:text-cream transition-colors duration-300">& CO.</span>
              </h3>
            </div>
            <p className="text-xs text-cream/70 font-sans font-light">
              Curating single-origin tea rituals directly from smallholder master estates.
            </p>
          </div>

          {/* Social Media & Concierge Action Area */}
          <div className="flex flex-wrap items-center gap-4">
            
            {/* Magnetic Liquid Hover Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-gold hover:text-[#1C3121] border border-white/15 hover:border-gold transition-all duration-300 text-cream/80 hover:shadow-[0_0_20px_rgba(217,164,65,0.4)]"
                  aria-label={item.name}
                  title={item.name}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>

            {/* Concierge Email Pill */}
            <motion.a
              href="mailto:concierge@chaiwalaco.com"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-terracotta hover:text-cream border border-white/15 hover:border-terracotta transition-all duration-300 inline-flex items-center gap-2 font-mono text-xs font-bold text-cream shadow-sm hover:shadow-[0_0_20px_rgba(193,102,47,0.4)]"
            >
              <Mail className="w-3.5 h-3.5 text-gold group-hover:text-cream" />
              <span>concierge@chaiwalaco.com</span>
            </motion.a>

          </div>
        </div>

        {/* 4-Column Balanced Grid with Micro-Slide Hover Effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: Teas */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-gold" />
              COLLECTIONS
            </h4>
            <ul className="space-y-2 text-xs font-sans text-cream/75 font-light">
              {[
                { label: "Royal Masala Chai", href: "#premium-tea" },
                { label: "Imperial Jasmine Pearls", href: "#premium-tea" },
                { label: "Wuyi Rock Da Hong Pao", href: "#premium-tea" },
                { label: "Kyoto Ceremonial Matcha", href: "#premium-tea" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                    <ArrowRight className="w-3 h-3 text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Terroirs */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-gold" />
              ORIGINS
            </h4>
            <ul className="space-y-2 text-xs font-sans text-cream/75 font-light">
              {[
                { label: "Darjeeling Valley (India)", href: "#tea-garden" },
                { label: "Uji Gardens (Japan)", href: "#tea-garden" },
                { label: "Wuyi Mountains (China)", href: "#tea-garden" },
                { label: "Assam Brahmaputra", href: "#tea-garden" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                    <ArrowRight className="w-3 h-3 text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Rituals & Craft */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
              BREWING & ETHOS
            </h4>
            <ul className="space-y-2 text-xs font-sans text-cream/75 font-light">
              {[
                { label: "Sommelier Steep Guide", href: "#brewing" },
                { label: "The Art of Slow Living", href: "#philosophy" },
                { label: "Sustainable Eco-Packaging", href: "#philosophy" },
                { label: "Live Steep Companion", href: "#brewing" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                    <ArrowRight className="w-3 h-3 text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
              CONCIERGE
            </h4>
            <ul className="space-y-2 text-xs font-sans text-cream/75 font-light">
              {[
                { label: "Corporate Gifting", href: "#faq" },
                { label: "Private Tasting Atelier", href: "#faq" },
                { label: "Wholesale Partnerships", href: "#faq" },
                { label: "Frequently Asked Questions", href: "#faq" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                    <ArrowRight className="w-3 h-3 text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-cream/50">
          <p>© 2026 CHAIWALA CO. ARTISANAL TEA HOUSE. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-6">
            <a href="#philosophy" className="hover:text-gold transition-colors duration-200">PRIVACY POLICY</a>
            <a href="#philosophy" className="hover:text-gold transition-colors duration-200">TERMS OF SERVICE</a>
            
            {/* Kinetic Back-to-Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="p-2.5 rounded-full bg-white/10 text-gold border border-gold/30 hover:bg-terracotta hover:text-cream transition-colors duration-300 shadow-md group hover:shadow-[0_0_20px_rgba(193,102,47,0.4)]"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
}
