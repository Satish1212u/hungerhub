"use client";

import React from 'react';
import Image from 'next/image';
import { Star, Clock, Plus, Minus } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { useToastStore } from '@/store/toast';
import { motion } from 'framer-motion';
import Button from './Button';

export interface FoodItemType {
  id: string;
  categoryId: string;
  name: string;
  price: number;
  rating: number;
  time: string;
  image: string;
  badge?: string;
  restaurant: string;
}

interface FoodCardProps {
  item: FoodItemType;
}

export default function FoodCard({ item }: FoodCardProps) {
  const { items, addItem, updateQuantity } = useCartStore();
  const addToast = useToastStore((state) => state.addToast);

  const cartItem = items.find((i) => i.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addItem({ ...item });
    addToast(`${item.name} added to cart!`, 'success');
  };

  const handleIncrement = () => {
    updateQuantity(item.id, quantity + 1);
  };

  const handleDecrement = () => {
    updateQuantity(item.id, quantity - 1);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 flex flex-col h-full group"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {item.badge && (
          <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {item.badge}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading font-semibold text-lg text-secondary line-clamp-1">{item.name}</h3>
          <span className="font-bold text-lg text-primary">₹{item.price}</span>
        </div>
        
        <p className="text-sm text-gray-500 mb-4">{item.restaurant}</p>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-5 mt-auto">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="font-medium">{item.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-gray-400" />
            <span>{item.time}</span>
          </div>
        </div>

        {quantity > 0 ? (
          <div className="flex items-center justify-between bg-primary/5 rounded-full p-1 border border-primary/20">
            <button 
              onClick={handleDecrement}
              className="w-9 h-9 flex items-center justify-center bg-white text-primary rounded-full shadow-sm hover:bg-primary hover:text-white transition-all transform active:scale-90"
            >
              <Minus size={18} />
            </button>
            <span className="font-bold text-secondary text-lg px-2">{quantity}</span>
            <button 
              onClick={handleIncrement}
              className="w-9 h-9 flex items-center justify-center bg-primary text-white rounded-full shadow-md hover:bg-[#e66000] transition-all transform active:scale-90"
            >
              <Plus size={18} />
            </button>
          </div>
        ) : (
          <Button onClick={handleAddToCart} className="w-full py-2.5 shadow-sm" variant="primary">
            <Plus size={18} className="mr-1" /> Add to Cart
          </Button>
        )}
      </div>
    </motion.div>
  );
}
