"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Thermometer, Timer, Scale, Coffee, Play, Pause, RotateCcw, Sparkles } from "lucide-react";

const brewGuides = [
  {
    type: "Masala Chai",
    tempC: "100°C",
    tempF: "212°F",
    time: "4-5 Mins",
    seconds: 270,
    ratio: "5g / 200ml",
    vessels: "Copper Degchi or Heavy Saucepan",
    instructions: [
      "Simmer crushed cardamom, ginger, and cinnamon in water for 2 mins.",
      "Add 5g Royal Chai CTC leaves and bring to a rolling boil.",
      "Pour whole milk (or oat milk) and simmer until rich caramel golden.",
      "Strain through fine mesh into warm clay kulhad cup.",
    ],
  },
  {
    type: "Green & Jasmine",
    tempC: "80°C",
    tempF: "175°F",
    time: "2 Mins",
    seconds: 120,
    ratio: "3g / 250ml",
    vessels: "Clear Glass Pitcher or Porcelain Gaiwan",
    instructions: [
      "Heat spring water to 80°C (never boiling, to protect sweet amino acids).",
      "Rinse glass cup with warm water to maintain steep temperature.",
      "Pour water gently down the inner glass wall over leaves.",
      "Steep for precisely 2 minutes until pearls blossom.",
    ],
  },
  {
    type: "Wuyi Rock Oolong",
    tempC: "95°C",
    tempF: "203°F",
    time: "45 Seconds",
    seconds: 45,
    ratio: "7g / 150ml",
    vessels: "Purple Clay Yixing Teapot",
    instructions: [
      "Perform flash rinse (5 secs) to awaken roasted stone fruit aromas.",
      "First steep: 45 seconds with near-boiling spring water.",
      "Decant completely into fairness cup before serving.",
      "Re-steep up to 8 times, adding 15 seconds per infusion.",
    ],
  },
];

export function BrewingRitual() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(brewGuides[0].seconds);
  const [isRunning, setIsRunning] = useState(false);

  const guide = brewGuides[selectedIdx];

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimerSeconds(guide.seconds);
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timerSeconds > 0) {
      interval = setInterval(() => setTimerSeconds((s) => s - 1), 1000);
    } else if (timerSeconds === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timerSeconds]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <section id="brewing" className="relative py-24 bg-[#FAF8F5] text-[#1C3121] overflow-hidden border-b border-[#1C3121]/10">
      
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-terracotta font-semibold inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            SOMMELIER BREWING PROTOCOL
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1C3121] font-light tracking-tight">
            The <span className="italic font-normal text-terracotta">Art of the Perfect Steep</span>
          </h2>
          <p className="text-base text-[#1C3121]/75 font-sans font-light leading-relaxed">
            Water temperature, vessel material, and steep timing dictate the extraction of floral top-notes versus deep tannic body.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {brewGuides.map((g, idx) => (
            <button
              key={g.type}
              onClick={() => {
                setSelectedIdx(idx);
                setIsRunning(false);
                setTimerSeconds(g.seconds);
              }}
              className={`px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase transition-all ${
                selectedIdx === idx
                  ? "bg-[#1C3121] text-cream font-bold shadow-xl scale-105 border border-gold/40"
                  : "bg-white text-[#1C3121]/70 hover:text-[#1C3121] border border-[#1C3121]/15 hover:bg-[#FAF8F5]"
              }`}
            >
              {g.type}
            </button>
          ))}
        </div>

        {/* Main Guide Spec Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1C3121] text-cream rounded-3xl p-8 lg:p-12 border border-gold/30 shadow-2xl relative overflow-hidden">
          
          {/* Gold Glow Accent inside Card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: Interactive Timer & Parameters */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-gold/20 pb-8 lg:pb-0 lg:pr-8">
            <h3 className="font-serif text-3xl font-normal text-gold">{guide.type} Ritual</h3>

            {/* 3 Metric Pills */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <Thermometer className="w-5 h-5 text-terracotta mx-auto mb-1" />
                <span className="block text-lg font-serif text-cream font-bold">{guide.tempC}</span>
                <span className="text-[10px] text-gold font-mono uppercase">Water Temp</span>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <Timer className="w-5 h-5 text-gold mx-auto mb-1" />
                <span className="block text-lg font-serif text-cream font-bold">{guide.time}</span>
                <span className="text-[10px] text-gold font-mono uppercase">Steep Time</span>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <Scale className="w-5 h-5 text-cream/70 mx-auto mb-1" />
                <span className="block text-lg font-serif text-cream font-bold">{guide.ratio}</span>
                <span className="text-[10px] text-gold font-mono uppercase">Leaf Ratio</span>
              </div>
            </div>

            {/* Live Interactive Steep Timer Widget */}
            <div className="p-6 rounded-2xl bg-white/5 border border-gold/30 text-center space-y-4 shadow-inner">
              <span className="text-xs uppercase tracking-widest font-mono text-cream/70">Live Steep Companion</span>
              <div className="font-mono text-5xl font-bold tracking-wider text-gold">
                {formatTime(timerSeconds)}
              </div>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={toggleTimer}
                  className="px-6 py-2.5 rounded-full bg-terracotta hover:bg-gold hover:text-[#1C3121] text-cream text-xs font-mono font-bold uppercase transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isRunning ? "Pause Steep" : "Start Timer"}
                </button>

                <button
                  onClick={resetTimer}
                  className="p-2.5 rounded-full bg-white/10 text-cream/80 hover:text-cream hover:bg-white/20 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step Instructions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-gold">
              <Coffee className="w-4 h-4" />
              <span className="text-xs uppercase font-mono tracking-widest text-cream/80">
                Recommended Vessel: {guide.vessels}
              </span>
            </div>

            <div className="space-y-4">
              {guide.instructions.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-terracotta text-cream flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 shadow-md">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-cream/95 font-sans leading-relaxed font-light">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
