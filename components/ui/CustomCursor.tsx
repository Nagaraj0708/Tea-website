"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch screen or reduced motion
    if (window.matchMedia("(pointer: coarse)").matches || 
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("[data-cursor]");
      const clickable = target.closest("button, a, input, select, textarea, [role='button']");

      if (interactive) {
        const label = interactive.getAttribute("data-cursor") || "";
        setCursorLabel(label);
        setIsHovered(true);
      } else if (clickable) {
        setCursorLabel("");
        setIsHovered(true);
      } else {
        setCursorLabel("");
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseleave", () => setIsVisible(false));

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full text-xs font-semibold tracking-wider text-cream uppercase transition-colors"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: cursorLabel ? 64 : isHovered ? 40 : 12,
        height: cursorLabel ? 64 : isHovered ? 40 : 12,
        backgroundColor: cursorLabel
          ? "rgba(193, 102, 47, 0.9)"
          : isHovered
          ? "rgba(217, 164, 65, 0.3)"
          : "#C1662F",
        borderColor: isHovered ? "#D9A441" : "transparent",
        borderWidth: isHovered ? 1.5 : 0,
        boxShadow: isHovered ? "0 0 20px rgba(217, 164, 65, 0.4)" : "none",
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
    >
      {cursorLabel && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[10px] tracking-widest text-[#F7F1E6] font-mono select-none"
        >
          {cursorLabel}
        </motion.span>
      )}
    </motion.div>
  );
}
