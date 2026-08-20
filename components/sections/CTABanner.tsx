"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Mail, Users, Leaf, Gift } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

export function CTABanner() {
  const [subscribed, setSubscribed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = (data: NewsletterForm) => {
    setSubscribed(true);
    confetti({
      particleCount: 75,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#C1662F", "#D9A441", "#5C6B4F"],
    });
  };

  return (
    <section className="relative py-28 bg-[#FAF8F5] text-[#1C3121] overflow-hidden border-b border-[#1C3121]/10">
      
      {/* Background Radial Glow Accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric 2-Column Split Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Pitch & VIP Sommelier Benefits */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-white text-terracotta font-mono text-xs uppercase tracking-widest font-bold shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                PRIVATE HARVEST SOCIETY
              </motion.div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1C3121] tracking-tight leading-[1.1]">
                Begin Your <br />
                <span className="italic font-normal text-terracotta">Slow Tea Journey</span>
              </h2>

              <p className="text-base sm:text-lg text-[#1C3121]/75 font-sans font-light leading-relaxed max-w-lg">
                Receive an exclusive <strong className="font-semibold text-terracotta">15% welcome invitation</strong> toward your first single-origin harvest, plus seasonal sommelier reserve drops.
              </p>
            </div>

            {/* Premium VIP Privileges List */}
            <div className="space-y-3.5 pt-2 border-t border-[#1C3121]/15">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-sans text-[#1C3121]/90">
                <div className="w-6 h-6 rounded-full bg-[#1C3121] text-gold flex items-center justify-center shrink-0 shadow-md">
                  <Leaf className="w-3.5 h-3.5 text-gold" />
                </div>
                <span>Access to First-Flush Spring & Autumn Micro-Lots</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-sans text-[#1C3121]/90">
                <div className="w-6 h-6 rounded-full bg-[#1C3121] text-gold flex items-center justify-center shrink-0 shadow-md">
                  <Gift className="w-3.5 h-3.5 text-gold" />
                </div>
                <span>Complimentary Eco-Canister Engraving on First Order</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-sans text-[#1C3121]/90">
                <div className="w-6 h-6 rounded-full bg-[#1C3121] text-gold flex items-center justify-center shrink-0 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                </div>
                <span>Private Invitations to Virtual Master Sommelier Cuppings</span>
              </div>
            </div>

            {/* Live Member Stats */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                <span className="w-8 h-8 rounded-full bg-[#1C3121] border-2 border-white text-gold font-serif text-xs font-bold flex items-center justify-center">E</span>
                <span className="w-8 h-8 rounded-full bg-terracotta border-2 border-white text-cream font-serif text-xs font-bold flex items-center justify-center">H</span>
                <span className="w-8 h-8 rounded-full bg-gold border-2 border-white text-[#1C3121] font-serif text-xs font-bold flex items-center justify-center">M</span>
              </div>
              <div className="text-xs font-mono text-[#1C3121]/70">
                <strong className="text-[#1C3121] font-bold">1,420+ Connoisseurs</strong> enrolled this season
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Executive Metallic Sommelier Vault Pass Card */}
          <div className="lg:col-span-6 relative">
            
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1C3121] via-[#0E1710] to-[#1C3121] text-cream border border-gold/40 shadow-2xl relative overflow-hidden space-y-7">
              
              {/* Gold Leaf Ambient Watermark Accent */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-2 text-gold">
                  <Mail className="w-4 h-4 text-terracotta" />
                  <span className="text-xs uppercase font-mono tracking-widest font-bold">
                    SOMMELIER INVITATION PASS
                  </span>
                </div>

                <span className="text-[10px] font-mono text-cream/50 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                  TIER 01 • HARVEST
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-cream font-normal leading-tight">
                  Unlock 15% Off Privilege
                </h3>
                <p className="text-xs font-sans text-cream/70 font-light leading-relaxed">
                  Enter your email address to instantly receive your single-use sommelier promo code and harvest calendar.
                </p>
              </div>

              {/* Form Input Container */}
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-gold/40 text-cream space-y-3 text-center"
                >
                  <CheckCircle2 className="w-10 h-10 text-gold mx-auto animate-bounce" />
                  <h4 className="font-serif text-xl font-normal text-gold">Invitation Code Dispatched</h4>
                  <p className="text-xs font-mono text-cream/80 leading-relaxed">
                    Check your inbox for code <span className="text-gold font-bold">HARVEST15</span> and your welcome guide.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="relative">
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Enter your email address..."
                      className="w-full px-6 py-4 rounded-2xl bg-white/10 text-cream placeholder-cream/40 border border-white/20 focus:outline-none focus:border-gold font-sans text-sm backdrop-blur-md transition-colors"
                    />
                  </div>

                  {errors.email && (
                    <p className="text-xs text-terracotta font-mono pl-2">
                      {errors.email.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl text-xs font-mono tracking-widest text-cream uppercase font-bold bg-gradient-to-r from-terracotta to-gold hover:from-gold hover:to-terracotta hover:text-[#1C3121] transition-all flex items-center justify-center gap-2 shadow-xl"
                  >
                    <span>Claim 15% Harvest Privilege</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* Card Footer Guarantee */}
              <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-cream/50 uppercase tracking-widest">
                <span>Zero Spam Guarantee</span>
                <span>Unsubscribe Anytime</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
