"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if already seen in session
    const hasLoaded = sessionStorage.getItem("chaiwala_loaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("chaiwala_loaded", "true");
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  const handleSkip = () => {
    setLoading(false);
    sessionStorage.setItem("chaiwala_loaded", "true");
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1A130E] text-[#F7F1E6]"
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(193,102,47,0.18)_0%,_transparent_70%)] pointer-events-none" />

          {/* Steaming Teacup SVG Emblem */}
          <div className="relative mb-6 flex items-center justify-center">
            {/* Steam particles */}
            <div className="absolute -top-12 flex space-x-2">
              <span className="w-1.5 h-6 rounded-full bg-gradient-to-t from-[#C1662F] to-[#D9A441] opacity-70 animate-steam-1 blur-[1px]" />
              <span className="w-1.5 h-8 rounded-full bg-gradient-to-t from-[#C1662F] to-[#D9A441] opacity-80 animate-steam-2 blur-[1px]" />
              <span className="w-1.5 h-5 rounded-full bg-gradient-to-t from-[#C1662F] to-[#D9A441] opacity-60 animate-steam-3 blur-[1px]" />
            </div>

            <svg
              className="w-20 h-20 text-[#C1662F]"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 24h32v16a16 16 0 0 1-16 16h0A16 16 0 0 1 12 40V24z" />
              <path d="M44 28h6a6 6 0 0 1 0 12h-6" />
              <line x1="8" y1="56" x2="48" y2="56" />
            </svg>
          </div>

          {/* Brand Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-2xl tracking-[0.2em] font-light text-[#F7F1E6]">
              CHAIWALA <span className="text-[#C1662F] font-normal">CO.</span>
            </h1>
            <p className="mt-1 text-xs tracking-widest text-[#C1662F]/80 uppercase font-mono">
              Single-Origin Tea House
            </p>
          </motion.div>

          {/* Progress Bar & Percentage */}
          <div className="mt-8 w-48 space-y-2">
            <div className="h-0.5 w-full bg-espresso-card rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C1662F] via-[#D9A441] to-[#C1662F]"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] text-[#F7F1E6]/60 font-mono">
              <span>STEEPING EXPERIENCE</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
          </div>

          {/* Skip CTA */}
          <button
            onClick={handleSkip}
            className="mt-6 text-[10px] uppercase tracking-widest text-[#F7F1E6]/40 hover:text-[#D9A441] transition-colors underline underline-offset-4"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
