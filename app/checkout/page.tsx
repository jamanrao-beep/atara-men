"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CheckoutPage() {
  const { cartItems, cartTotal } = useCart();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form states
  const [email, setEmail] = useState("");
  const [shipping, setShipping] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  const shippingCost = cartTotal > 25000 ? 0 : 500;
  const finalTotal = cartTotal + shippingCost;

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-3xl font-serif text-obsidian mb-4">Your Bag is Empty</h1>
        <p className="text-charcoal mb-8">Add items to your bag before proceeding to checkout.</p>
        <Link href="/collections" className="btn-primary px-8 py-3 text-sm">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
      {/* Left Column - Forms */}
      <div className="w-full lg:w-3/5">
        
        {/* Step 1: Contact */}
        <div className={`mb-6 border border-cashmere bg-pearl transition-opacity ${step < 1 ? "opacity-50 pointer-events-none" : ""}`}>
          <div className="p-6 border-b border-cashmere flex justify-between items-center cursor-pointer" onClick={() => setStep(1)}>
            <h2 className="text-lg font-serif text-obsidian flex items-center gap-3">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 1 ? "bg-obsidian text-pearl" : "bg-cashmere text-obsidian"}`}>1</span>
              Contact Information
            </h2>
            {step > 1 && <span className="text-xs text-antique-gold underline underline-offset-4">Edit</span>}
          </div>
          <AnimatePresence>
            {step === 1 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-2">
                  <div className="mb-4">
                    <label className="block text-xs uppercase tracking-wider text-charcoal mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-cashmere bg-alabaster px-4 py-3 text-sm focus:outline-none focus:border-obsidian transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button 
                    onClick={() => { if(email) setStep(2) }}
                    disabled={!email}
                    className="btn-primary w-full py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  >
                    Continue to Shipping
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Step 2: Shipping */}
        <div className={`mb-6 border border-cashmere bg-pearl transition-opacity ${step < 2 ? "opacity-50 pointer-events-none" : ""}`}>
          <div className="p-6 border-b border-cashmere flex justify-between items-center cursor-pointer" onClick={() => step > 2 && setStep(2)}>
            <h2 className="text-lg font-serif text-obsidian flex items-center gap-3">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 2 ? "bg-obsidian text-pearl" : "bg-cashmere text-obsidian"}`}>2</span>
              Shipping Address
            </h2>
            {step > 2 && <span className="text-xs text-antique-gold underline underline-offset-4">Edit</span>}
          </div>
          <AnimatePresence>
            {step === 2 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-2">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal mb-2">First Name *</label>
                      <input 
                        type="text" 
                        value={shipping.firstName}
                        onChange={(e) => setShipping({...shipping, firstName: e.target.value})}
                        className="w-full border border-cashmere bg-alabaster px-4 py-3 text-sm focus:outline-none focus:border-obsidian transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        value={shipping.lastName}
                        onChange={(e) => setShipping({...shipping, lastName: e.target.value})}
                        className="w-full border border-cashmere bg-alabaster px-4 py-3 text-sm focus:outline-none focus:border-obsidian transition-colors"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs uppercase tracking-wider text-charcoal mb-2">Address *</label>
                    <input 
                      type="text" 
                      value={shipping.address}
                      onChange={(e) => setShipping({...shipping, address: e.target.value})}
                      className="w-full border border-cashmere bg-alabaster px-4 py-3 text-sm focus:outline-none focus:border-obsidian transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="col-span-1">
                      <label className="block text-xs uppercase tracking-wider text-charcoal mb-2">Pincode *</label>
                      <input 
                        type="text" 
                        value={shipping.pincode}
                        onChange={(e) => setShipping({...shipping, pincode: e.target.value})}
                        className="w-full border border-cashmere bg-alabaster px-4 py-3 text-sm focus:outline-none focus:border-obsidian transition-colors"
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-xs uppercase tracking-wider text-charcoal mb-2">City *</label>
                      <input 
                        type="text" 
                        value={shipping.city}
                        onChange={(e) => setShipping({...shipping, city: e.target.value})}
                        className="w-full border border-cashmere bg-alabaster px-4 py-3 text-sm focus:outline-none focus:border-obsidian transition-colors"
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-xs uppercase tracking-wider text-charcoal mb-2">State *</label>
                      <input 
                        type="text" 
                        value={shipping.state}
                        onChange={(e) => setShipping({...shipping, state: e.target.value})}
                        className="w-full border border-cashmere bg-alabaster px-4 py-3 text-sm focus:outline-none focus:border-obsidian transition-colors"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs uppercase tracking-wider text-charcoal mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      value={shipping.phone}
                      onChange={(e) => setShipping({...shipping, phone: e.target.value})}
                      className="w-full border border-cashmere bg-alabaster px-4 py-3 text-sm focus:outline-none focus:border-obsidian transition-colors"
                    />
                  </div>
                  
                  <button 
                    onClick={() => { 
                      if(shipping.firstName && shipping.address && shipping.city && shipping.pincode) setStep(3) 
                    }}
                    className="btn-primary w-full py-4 text-sm mt-4"
                  >
                    Continue to Payment
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Step 3: Payment */}
        <div className={`mb-6 border border-cashmere bg-pearl transition-opacity ${step < 3 ? "opacity-50 pointer-events-none" : ""}`}>
          <div className="p-6 border-b border-cashmere">
            <h2 className="text-lg font-serif text-obsidian flex items-center gap-3">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 3 ? "bg-obsidian text-pearl" : "bg-cashmere text-obsidian"}`}>3</span>
              Payment
            </h2>
          </div>
          <AnimatePresence>
            {step === 3 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-4">
                  <p className="text-xs text-charcoal mb-4">All transactions are secure and encrypted.</p>
                  
                  <div className="border border-obsidian bg-alabaster p-4 mb-6">
                    <div className="flex items-center gap-3 mb-6">
                      <input type="radio" checked readOnly className="w-4 h-4 accent-obsidian" />
                      <span className="text-sm font-medium">Credit / Debit Card</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <input 
                          type="text" 
                          className="w-full border border-cashmere bg-pearl px-4 py-3 text-sm focus:outline-none focus:border-obsidian transition-colors"
                          placeholder="Card number"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          className="w-full border border-cashmere bg-pearl px-4 py-3 text-sm focus:outline-none focus:border-obsidian transition-colors"
                          placeholder="Expiration date (MM / YY)"
                        />
                        <input 
                          type="text" 
                          className="w-full border border-cashmere bg-pearl px-4 py-3 text-sm focus:outline-none focus:border-obsidian transition-colors"
                          placeholder="Security code"
                        />
                      </div>
                      <div>
                        <input 
                          type="text" 
                          className="w-full border border-cashmere bg-pearl px-4 py-3 text-sm focus:outline-none focus:border-obsidian transition-colors"
                          placeholder="Name on card"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="btn-primary w-full py-5 text-sm font-medium tracking-widest bg-obsidian hover:bg-obsidian/90 text-pearl transition-colors mb-4">
                    Pay ₹{finalTotal.toLocaleString()}
                  </button>

                  <div className="flex flex-col items-center border-t border-cashmere pt-4 mt-2">
                    <div className="flex items-center gap-2 text-xs text-charcoal mb-3">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      Guaranteed Safe & Secure Checkout
                    </div>
                    <div className="flex gap-3 items-center opacity-70">
                      {/* Fake Payment Icons */}
                      <div className="px-2 py-1 bg-pearl border border-cashmere text-[10px] font-bold rounded">VISA</div>
                      <div className="px-2 py-1 bg-pearl border border-cashmere text-[10px] font-bold rounded">MASTERCARD</div>
                      <div className="px-2 py-1 bg-pearl border border-cashmere text-[10px] font-bold rounded">AMEX</div>
                      <div className="px-2 py-1 bg-pearl border border-cashmere text-[10px] font-bold rounded flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                        SSL
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Right Column - Order Summary */}
      <div className="w-full lg:w-2/5">
        <div className="sticky top-10 border border-cashmere bg-pearl p-8">
          <h2 className="text-xl font-serif text-obsidian mb-6 pb-6 border-b border-cashmere">Order Summary</h2>
          
          <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative w-20 aspect-[3/4] bg-alabaster flex-shrink-0">
                  <Image 
                    src={item.product.images[0]} 
                    alt={item.product.title} 
                    fill 
                    sizes="80px"
                    className="object-cover"
                  />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-charcoal text-pearl text-[10px] rounded-full flex items-center justify-center">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-obsidian mb-1 leading-tight">{item.product.title}</h3>
                  <p className="text-xs text-charcoal font-light mb-2">
                    {item.colorName} / {item.size}
                  </p>
                  <p className="text-sm text-obsidian">₹{item.product.priceNum.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-cashmere pt-6 space-y-4">
            <div className="flex justify-between text-sm text-charcoal">
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm text-charcoal">
              <span>Shipping</span>
              <span>{shippingCost === 0 ? "Complimentary" : `₹${shippingCost.toLocaleString()}`}</span>
            </div>
          </div>
          
          <div className="border-t border-cashmere mt-6 pt-6 flex justify-between items-center">
            <span className="text-sm tracking-wider uppercase text-obsidian font-medium">Total</span>
            <span className="text-2xl font-serif text-obsidian">₹{finalTotal.toLocaleString()}</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}
