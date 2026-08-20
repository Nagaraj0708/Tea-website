"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, ArrowRight, Check, Sparkles } from "lucide-react";
import { useCart } from "../context/CartContext";

export function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, subtotal, clearCart } =
    useCart();

  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  React.useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  const freeShippingThreshold = 60;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      clearCart();
      setCheckoutSuccess(false);
      setIsCartOpen(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-espresso-dark/80 backdrop-blur-md"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute inset-y-0 right-0 max-w-full flex pl-10"
            data-lenis-prevent="true"
          >
            <div className="w-screen max-w-md bg-espresso-card text-cream shadow-2xl flex flex-col justify-between border-l border-gold/20">
              
              {/* Cart Drawer Header */}
              <div className="p-6 border-b border-gold/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-normal text-cream">Your Tea Selection</h2>
                    <span className="text-[10px] text-gold font-mono uppercase tracking-widest">
                      {cart.length} Unique {cart.length === 1 ? "Item" : "Items"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-full text-cream/60 hover:text-cream transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div className="bg-espresso px-6 py-3 border-b border-gold/10 space-y-1.5">
                <div className="flex justify-between items-center text-[11px] font-mono">
                  <span className="text-cream/80 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold" />
                    {subtotal >= freeShippingThreshold
                      ? "You unlocked FREE Express Shipping!"
                      : `Add $${(freeShippingThreshold - subtotal).toFixed(2)} for FREE Shipping`}
                  </span>
                </div>
                <div className="h-1 w-full bg-cream/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-terracotta to-gold transition-all duration-500"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-cream/60">
                    <ShoppingBag className="w-12 h-12 text-terracotta/40 stroke-[1]" />
                    <p className="font-serif text-lg">Your tea cart is empty.</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="text-xs font-mono tracking-widest text-gold uppercase underline underline-offset-4"
                    >
                      Explore Teas
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 p-4 rounded-2xl bg-espresso border border-gold/10 relative"
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-espresso">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 space-y-1">
                        <h3 className="font-serif text-base text-cream leading-tight">
                          {item.product.name}
                        </h3>
                        <span className="text-[10px] font-mono text-gold block">
                          {item.product.weight}
                        </span>
                        <span className="font-serif font-bold text-terracotta text-sm block">
                          ${item.product.price.toFixed(2)}
                        </span>

                        {/* Quantity controls */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-gold/20 rounded-full px-2 py-0.5 bg-espresso-card text-xs">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1)
                              }
                              className="px-1 text-cream/60 hover:text-cream"
                            >
                              -
                            </button>
                            <span className="px-2 font-mono text-cream font-bold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                              className="px-1 text-cream/60 hover:text-cream"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-cream/40 hover:text-red-400 transition-colors p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Cart Footer / Checkout CTA */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-gold/15 bg-espresso space-y-4">
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between text-cream/70">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-cream/70">
                      <span>Estimated Shipping</span>
                      <span>{subtotal >= freeShippingThreshold ? "FREE" : "$8.00"}</span>
                    </div>
                    <div className="flex justify-between text-base font-serif font-bold text-gold pt-2 border-t border-gold/10">
                      <span>Total</span>
                      <span>
                        $
                        {(
                          subtotal + (subtotal >= freeShippingThreshold ? 0 : 8)
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={checkoutSuccess}
                    className="w-full py-4 rounded-full text-xs font-mono tracking-widest text-cream uppercase font-bold liquid-metal-btn flex items-center justify-center gap-2 shadow-xl"
                  >
                    {checkoutSuccess ? (
                      <>
                        <Check className="w-4 h-4 text-gold" />
                        Order Confirmed! Enjoy Your Ritual.
                      </>
                    ) : (
                      <>
                        Proceed to Secure Checkout
                        <ArrowRight className="w-4 h-4 text-gold" />
                      </>
                    )}
                  </button>
                </div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
