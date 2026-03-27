"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/cart';
import Button from '@/components/Button';
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <div className="bg-alt p-8 rounded-full mb-6">
          <ShoppingBag size={64} className="text-gray-300" />
        </div>
        <h1 className="text-3xl font-heading font-bold text-secondary mb-2">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-8 max-w-md text-center">Looks like you haven&apos;t added any delicious food to your cart yet.</p>
        <Link href="/">
          <Button size="lg">Start Exploring</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="text-gray-400 hover:text-secondary transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-3xl font-heading font-bold text-secondary">Shopping Cart</h1>
            <span className="bg-gray-100 text-gray-600 py-1 px-3 rounded-full text-sm font-medium ml-auto">
              {items.length} {items.length === 1 ? 'Item' : 'Items'}
            </span>
          </div>

          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                <div className="relative w-full sm:w-32 h-32 sm:h-auto rounded-xl overflow-hidden bg-gray-100 shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-secondary">{item.name}</h3>
                      <p className="text-gray-500 text-sm mt-1">₹{item.price} each</p>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center bg-gray-50 rounded-full border border-gray-200">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-secondary hover:bg-gray-200 rounded-l-full transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-10 text-center font-medium text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-secondary hover:bg-gray-200 rounded-r-full transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    
                    <span className="font-bold text-lg text-secondary">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-96 shrink-0">
          <div className="bg-alt rounded-2xl p-6 md:p-8 sticky top-24 border border-gray-100">
            <h2 className="text-xl font-heading font-bold text-secondary mb-6">Order Summary</h2>
            
            <div className="space-y-4 text-sm text-gray-600 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{getTotalPrice()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹40</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & Fees</span>
                <span>₹{Math.round(getTotalPrice() * 0.08)}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="font-heading font-bold text-lg text-secondary">Total</span>
                <span className="font-bold text-2xl text-primary">
                  ₹{Math.round(getTotalPrice() + 40 + (getTotalPrice() * 0.08))}
                </span>
              </div>
            </div>

            <Link href="/order-confirmation" className="block">
               <Button className="w-full h-14 text-lg">Proceed to Checkout</Button>
            </Link>
            
            <p className="text-xs text-center text-gray-400 mt-4">
              By placing an order, you agree to our Terms of Service & Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
