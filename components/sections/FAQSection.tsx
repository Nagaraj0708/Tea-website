"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Mail, Phone, MapPin, Clock, MessageSquare, Send, Sparkles, ShieldCheck } from "lucide-react";

const faqs = [
  {
    question: "What makes single-origin tea superior to commercial tea bags?",
    answer:
      "Commercial tea bags typically contain dust and fannings — broken leftover particles that release harsh tannins rapidly. Single-origin loose-leaf teas from Chaiwala Co. consist of whole intact top leaves and buds harvested from specific elevation gardens, delivering complex aromatic top-notes and multiple smooth steeps.",
  },
  {
    question: "How should I store loose-leaf tea to maintain peak freshness?",
    answer:
      "Store your tea in our airtight matte tins away from direct sunlight, moisture, and strong spices. Kept in a cool pantry, loose-leaf tea maintains peak aromatic oils for 18 to 24 months.",
  },
  {
    question: "Are all Chaiwala Co. teas certified organic and fair trade?",
    answer:
      "Yes. 100% of our tea estates practice biodynamic, pesticide-free agriculture. We pay our tea garden partners 40% above fair-trade floor prices to support local healthcare and schooling in Darjeeling, Assam, and Kyoto.",
  },
  {
    question: "How does the monthly Tea Tasting Subscription work?",
    answer:
      "Our subscribers receive a curated box of 2 rare seasonal harvests every month, along with sommelier tasting notes, brewing parameters, and member-only discounts. You can pause or cancel anytime with one click.",
  },
  {
    question: "What is your shipping policy and delivery timeline?",
    answer:
      "We offer free express shipping across North America and Europe on orders over $60. Orders are dispatched within 24 hours in eco-friendly biodegradable packaging, arriving in 2-4 business days.",
  },
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) return;
    setFormSent(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setFormSent(false);
    }, 4000);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#F7F1E6] text-[#1C3121] overflow-hidden border-b border-[#1C3121]/10">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-terracotta font-semibold inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            CURIOSITIES & VIP CONCIERGE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#1C3121]">
            Frequently Asked <span className="italic font-normal text-terracotta">Questions & Direct Contact</span>
          </h2>
          <p className="text-xs sm:text-base font-sans font-light text-[#1C3121]/75">
            Discover answers to common tea curiosities or get in touch with our master sommelier atelier.
          </p>
        </div>

        {/* 2-COLUMN BALANCED SPLIT LAYOUT (LEFT: FAQs, RIGHT: CONTACT ATELIER) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: FAQ Accordions                                    */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between px-1 pb-2 border-b border-[#1C3121]/10 text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
              <span className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-gold" />
                FREQUENTLY ASKED QUESTIONS
              </span>
              <span className="text-[#1C3121]/50 font-normal">5 TOP ANSWERS</span>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                      isOpen
                        ? "bg-white border-gold/50 ring-1 ring-gold/20 shadow-md"
                        : "bg-white/80 hover:bg-white border-[#1C3121]/10 hover:border-terracotta/40"
                    }`}
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#1C3121] font-normal leading-snug"
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                          isOpen ? "bg-terracotta text-cream rotate-180" : "bg-[#1C3121]/10 text-[#1C3121]"
                        }`}
                      >
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm font-sans font-light text-[#1C3121]/80 leading-relaxed border-t border-[#1C3121]/10">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: Ultra-Premium Sommelier Contact Atelier Card     */}
          {/* ============================================================== */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#1C3121] text-cream p-7 sm:p-10 shadow-2xl border border-gold/30 relative overflow-hidden space-y-8">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              {/* Atelier Header */}
              <div className="space-y-3 relative z-10 border-b border-white/10 pb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-gold font-bold flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-gold" />
                    VIP TEA SOMMELIER ATELIER
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-gold border border-gold/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-gold" />
                    24/7 SUPPORT
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-light text-cream">
                  Direct <span className="italic text-gold">Concierge Inquiry</span>
                </h3>
                <p className="text-xs sm:text-sm font-sans font-light text-cream/80 leading-relaxed">
                  Connect directly with our master tea sommeliers for custom tasting flights, wholesale inquiries, or order assistance.
                </p>
              </div>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-cream/90 relative z-10">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <div>
                    <span className="text-[10px] text-cream/60 block uppercase">PHONE CONCIERGE</span>
                    <span className="font-bold">1800 210 2310</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <div>
                    <span className="text-[10px] text-cream/60 block uppercase">EMAIL ASSISTANCE</span>
                    <span className="font-bold text-[11px]">concierge@chaiwalaco.com</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 sm:col-span-2">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <div>
                    <span className="text-[10px] text-cream/60 block uppercase">FLAGSHIP SOHO ATELIER</span>
                    <span className="font-bold text-[11px]">310/2 First Floor, Golden Tower, Soho, NY</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div className="space-y-4 pt-2 relative z-10">
                <h4 className="font-mono text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-2">
                  <Send className="w-3.5 h-3.5 text-gold" />
                  SEND DIRECT MESSAGE
                </h4>

                {formSent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 rounded-xl bg-gold/20 border border-gold text-gold text-xs font-mono text-center space-y-1"
                  >
                    <p className="font-bold">✓ INQUIRY DISPATCHED!</p>
                    <p className="text-[11px] text-cream/80">Our sommelier will respond to your email within 2 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSendMessage} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Full Name"
                        className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-cream placeholder-cream/40 text-xs font-sans focus:outline-none focus:border-gold transition-colors"
                      />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email Address"
                        className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-cream placeholder-cream/40 text-xs font-sans focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your tea inquiry, tasting request, or question here..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-cream placeholder-cream/40 text-xs font-sans focus:outline-none focus:border-gold transition-colors resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gold text-[#1C3121] font-mono text-xs font-bold uppercase tracking-wider hover:bg-terracotta hover:text-cream transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Send className="w-3.5 h-3.5" />
                      DISPATCH CONCIERGE INQUIRY
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
