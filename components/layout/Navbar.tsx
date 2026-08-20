"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, Sparkles } from "lucide-react";
import { useCart } from "../context/CartContext";

const navLinks = [
  { name: "Philosophy", href: "#philosophy" },
  { name: "Collections", href: "#collections" },
  { name: "Sourcing", href: "#sourcing" },
  { name: "Brewing Ritual", href: "#brewing" },
  { name: "Shop Bestsellers", href: "#shop" },
  { name: "Community", href: "#community" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-3 glass-nav shadow-lg"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center border border-terracotta/40 group-hover:border-gold transition-colors shadow-md">
              <svg
                className="w-5 h-5 text-terracotta group-hover:text-gold transition-colors"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 24h32v16a16 16 0 0 1-16 16h0A16 16 0 0 1 12 40V24z" />
                <path d="M44 28h6a6 6 0 0 1 0 12h-6" />
                <line x1="8" y1="56" x2="48" y2="56" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-widest text-espresso uppercase">
                Chaiwala <span className="text-terracotta">Co.</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-sage font-mono -mt-1">
                Artisanal Tea House
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-mono text-espresso/80 hover:text-terracotta transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-4">
            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full text-espresso hover:text-terracotta transition-colors group"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-terracotta text-cream text-[10px] font-bold flex items-center justify-center shadow-md animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Shop Now Button (Liquid Metal Style) */}
            <a
              href="#shop"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold tracking-wider text-cream liquid-metal-btn uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
              Shop Now
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-espresso hover:text-terracotta transition-colors"
              aria-label="Open Mobile Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-espresso-dark/95 backdrop-blur-2xl flex flex-col justify-between p-6 lg:hidden"
          >
            {/* Header in Drawer */}
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl text-cream tracking-wider">
                CHAIWALA <span className="text-terracotta">CO.</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-cream/70 hover:text-cream hover:bg-espresso transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Links Staggered */}
            <nav className="flex flex-col gap-6 my-auto text-left">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  className="font-serif text-2xl text-cream/90 hover:text-terracotta transition-colors tracking-wide"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* Footer info in Drawer */}
            <div className="pt-6 border-t border-cream/10 space-y-3">
              <a
                href="#shop"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full text-center text-xs font-mono tracking-widest text-cream uppercase liquid-metal-btn block font-bold"
              >
                Explore Bestsellers
              </a>
              <p className="text-[11px] text-cream/50 text-center font-mono uppercase tracking-widest">
                Tasting Room: 142 Artisan Way, Soho • Daily 8am - 8pm
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
