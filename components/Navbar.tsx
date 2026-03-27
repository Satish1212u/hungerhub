"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-heading font-bold text-primary">
              HungerHubs
            </span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className={`relative w-full flex items-center bg-white rounded-full px-4 py-2 border ${isScrolled ? 'border-gray-200 shadow-sm' : 'border-transparent shadow-lg'}`}>
              <Search size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search food or restaurants..."
                className="w-full bg-transparent outline-none text-sm text-secondary placeholder-gray-400 font-sans"
              />
            </div>
          </div>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/login" className={`font-medium text-sm transition-colors ${isScrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-gray-200 drop-shadow-md'}`}>
              Log In
            </Link>
            <Link href="/signup" className="text-sm font-medium bg-primary text-white px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
              Sign Up
            </Link>
            <Link href="/cart" className="relative p-2 group">
              <ShoppingCart size={24} className={`transition-colors ${isScrolled ? 'text-secondary group-hover:text-primary' : 'text-white group-hover:text-gray-200 drop-shadow-md'}`} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link href="/cart" className="relative p-2">
              <ShoppingCart size={24} className={isScrolled ? 'text-secondary' : 'text-white'} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full border border-white">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-1 ${isScrolled ? 'text-secondary' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col gap-4"
          >
            <div className="relative w-full flex items-center bg-gray-50 rounded-full px-4 py-3 border border-gray-200">
              <Search size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search food..."
                className="w-full bg-transparent outline-none text-sm text-secondary"
              />
            </div>
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-3 text-secondary font-medium">Log In</Link>
            <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-3 bg-primary text-white font-medium rounded-full">Sign Up</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
