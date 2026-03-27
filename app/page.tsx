"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { categories, popularFoods, reviews } from '@/data/food';
import FoodCard from '@/components/FoodCard';
import Button from '@/components/Button';
import { Search, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [heroImageError, setHeroImageError] = useState(false);
  const heroSrc = heroImageError 
    ? "https://images.unsplash.com/photo-1490818387583-1b5ba4597d2c?q=80&w=2000&auto=format&fit=crop" // Fallback food image
    : "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop";

  return (
    <div className="flex flex-col w-full pb-20">
      
      {/* Hero Section */}
      <section className="relative h-[600px] w-full flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroSrc}
            alt="Hero Background"
            fill
            priority
            className="object-cover"
            onError={() => setHeroImageError(true)}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 drop-shadow-lg">
            Delicious Food Delivered in <span className="text-primary">30 Minutes</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 font-sans max-w-2xl mx-auto">
            Discover the best food & drinks in your area. Fast delivery, fresh food, and great prices!
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-2xl mx-auto bg-white rounded-full p-2 gap-2 shadow-2xl">
            <div className="flex-1 flex items-center px-4 md:border-r border-gray-200">
              <span className="text-gray-400 mr-2">📍</span>
              <input type="text" placeholder="Enter your delivery location" className="w-full bg-transparent outline-none py-3 text-secondary" />
            </div>
            <div className="flex-1 flex items-center px-4">
              <Search size={20} className="text-gray-400 mr-2" />
              <input type="text" placeholder="Search for restaurant, cuisine..." className="w-full bg-transparent outline-none py-3 text-secondary" />
            </div>
            <Button size="lg" className="rounded-full flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
              Search Food
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 w-full">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-heading font-bold text-secondary">Explore Categories</h2>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link href={`/category/${cat.name.toLowerCase()}`} key={cat.id} className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md cursor-pointer transition-all hover:-translate-y-1 border border-gray-100 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className="font-heading font-medium text-sm text-secondary">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="bg-alt pt-16 pb-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-heading font-bold text-secondary mb-2">Popular near you</h2>
              <p className="text-gray-600">The most ordered food in your location</p>
            </div>
            <Button variant="ghost" className="hidden sm:flex text-primary font-semibold hover:bg-orange-50">
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {popularFoods.map((food) => (
              <FoodCard key={food.id} item={food} />
            ))}
          </div>
          
          <div className="mt-10 text-center sm:hidden">
            <Button variant="outline" className="w-full">View All Popular Food</Button>
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="bg-secondary rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 z-0">
             <Image 
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop"
                alt="Burger Offer"
                fill
                className="object-cover opacity-40 mix-blend-overlay"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
          </div>
          <div className="relative z-10 p-10 md:p-16 max-w-2xl">
            <span className="bg-primary text-white font-bold px-3 py-1 rounded-full text-sm uppercase tracking-wider mb-4 inline-block">Limited Time Offer</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">Get 50% Off<br />Your First Order!</h2>
            <p className="text-gray-300 mb-8 text-lg">Use promo code <strong className="text-white bg-white/20 px-2 py-1 rounded">HUNGER50</strong> at checkout. Valid for new users only on orders above ₹500.</p>
            <Button size="lg" className="bg-white text-secondary hover:bg-gray-100">Claim Offer Now</Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-alt pt-16 pb-20 w-full">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary mb-3">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Don&apos;t just take our word for it. Read reviews from our happy customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">&quot;{review.comment}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src={review.avatar} alt={review.user} fill className="object-cover" />
                  </div>
                  <h4 className="font-heading font-bold text-secondary">{review.user}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
