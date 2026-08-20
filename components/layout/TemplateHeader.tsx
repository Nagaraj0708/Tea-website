"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, ShoppingBag, Menu, X, ChevronRight, Mail, Sparkles } from "lucide-react";
import { useCart } from "../context/CartContext";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "philosophy", label: "About Us" },
  { id: "premium-tea", label: "Our Premium Tea" },
  { id: "tea-elixir", label: "Tea Elixir" },
  { id: "tea-garden", label: "Our Tea Garden" },
  { id: "brewing", label: "Brewing Ritual" },
  { id: "faq", label: "FAQ & Contact" },
];

export function TemplateHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  // Scroll listener for sticky state & scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 30);

      // Scroll-Spy section position detection
      const scrollPosition = window.scrollY + 180;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.getBoundingClientRect().top + window.pageYOffset;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler with Lenis integration
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);

    const lenis = typeof window !== "undefined" ? (window as any).lenis : undefined;

    if (id === "hero") {
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const target = document.getElementById(id);
    if (target) {
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(target, { offset: -90, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      
      {/* Top Utility Announcement Bar (Desktop Only - Hides Smoothly on Scroll) */}
      <div
        className={`hidden md:block bg-[#FAF6F0] text-[#1C3121] border-b border-[#1C3121]/10 px-8 transition-all duration-300 ${
          scrolled ? "max-h-0 py-0 opacity-0 overflow-hidden border-none" : "max-h-12 py-2 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#1C3121]/80 font-medium">
            <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
            <span>310/2, First Floor, Golden Tower, Soho, New York</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:18002102310"
              className="flex items-center gap-2 text-[#1C3121]/80 hover:text-terracotta transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-terracotta shrink-0" />
              <span>1800 210 2310</span>
            </a>
            <span className="text-[#1C3121]/30">|</span>
            <span className="text-[11px] text-terracotta font-bold tracking-wider uppercase flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-gold" />
              FREE WORLDWIDE EXPRESS SHIPPING OVER $60
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 bg-[#1C3121] text-cream border-b ${
          scrolled
            ? "bg-[#1C3121]/95 backdrop-blur-md py-3 shadow-2xl border-gold/30"
            : "py-4 border-gold/15"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Emblem */}
          <a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="flex items-center gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1C3121] text-cream flex items-center justify-center border-2 border-gold shadow-md group-hover:scale-105 transition-transform shrink-0">
              <span className="font-serif text-sm sm:text-base font-bold italic tracking-tighter text-gold">
                Tea
              </span>
            </div>
            <span className="font-serif text-base sm:text-xl font-bold tracking-widest text-cream uppercase">
              CHAIWALA <span className="text-terracotta">& CO.</span>
            </span>
          </a>

          {/* Desktop Centered Navigation Links with Active Scroll-Spy Indicator */}
          <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 text-xs font-mono uppercase tracking-widest">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`relative py-1.5 transition-colors duration-200 ${
                    isActive ? "text-gold font-bold" : "text-cream/70 hover:text-cream"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full shadow-[0_0_8px_#D9A441]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Suite (Cart, CTA & Mobile Hamburger) */}
          <div className="flex items-center gap-3">
            
            {/* Direct Phone Call Button (Mobile Shortcut) */}
            <a
              href="tel:18002102310"
              className="lg:hidden p-2.5 rounded-full bg-white/10 text-gold hover:bg-terracotta hover:text-cream transition-colors border border-white/10"
              aria-label="Call Concierge"
              title="Call 1800 210 2310"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Shopping Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-white/10 hover:bg-terracotta text-cream transition-colors border border-white/10 shadow-sm flex items-center justify-center"
              aria-label="View Cart"
              title="View Cart"
            >
              <ShoppingBag className="w-4 h-4 text-gold" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold text-[#1C3121] font-mono text-[9px] font-bold flex items-center justify-center shadow">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Desktop Reserve Harvest Button */}
            <a
              href="#premium-tea"
              onClick={(e) => scrollToSection(e, "premium-tea")}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold text-[#1C3121] font-mono text-xs font-bold uppercase tracking-wider hover:bg-terracotta hover:text-cream transition-colors shadow-md"
            >
              Order Tea
            </a>

            {/* Mobile Navigation Drawer Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-white/10 text-gold hover:bg-gold hover:text-[#1C3121] border border-gold/30 transition-colors ml-1"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Full Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-[#0F1D13] border-t border-gold/30 px-6 py-6 space-y-4 text-xs font-mono uppercase tracking-widest text-cream shadow-2xl"
            >
              <div className="space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`flex items-center justify-between py-3.5 px-4 rounded-xl transition-all ${
                        isActive
                          ? "bg-white/10 text-gold font-bold border border-gold/40 shadow-sm"
                          : "hover:bg-white/5 text-cream/80"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_6px_#D9A441]" />}
                        {item.label}
                      </span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? "text-gold" : "text-cream/40"}`} />
                    </a>
                  );
                })}
              </div>

              {/* Mobile Drawer Bottom Info Box */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-[11px] text-cream/70 font-sans normal-case">
                  <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
                  <span>310/2, First Floor, Golden Tower, Soho, NY</span>
                </div>

                <a
                  href="mailto:concierge@chaiwalaco.com"
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-gold hover:text-[#1C3121] border border-white/10 transition-colors flex items-center justify-center gap-2 font-mono text-xs font-bold text-cream"
                >
                  <Mail className="w-3.5 h-3.5 text-gold" />
                  concierge@chaiwalaco.com
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
