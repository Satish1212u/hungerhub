import React from 'react';
import Link from 'next/link';
import { allFoods, categories } from '@/data/food';
import FoodCard, { FoodItemType } from '@/components/FoodCard';
import { ArrowLeft, SlidersHorizontal, Frown } from 'lucide-react';
import Button from '@/components/Button';

function getCategoryFoods(slug: string): FoodItemType[] {
  return allFoods.filter(food => food.categoryId === slug.toLowerCase());
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  const category = categories.find(c => c.name.toLowerCase() === slug.toLowerCase());

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
        <Frown size={64} className="text-gray-300 mb-4" />
        <h1 className="text-3xl font-heading font-bold text-secondary mb-2">Category Not Found</h1>
        <p className="text-gray-500 mb-8">We couldn't find the category you're looking for.</p>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }
  const categoryFoods = getCategoryFoods(slug.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/" className="text-gray-400 hover:text-secondary transition-colors bg-alt p-2 rounded-full">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{category.icon}</span>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary">{categoryName}</h1>
          </div>
          <p className="text-gray-500 mt-2">Explore the best {categoryName.toLowerCase()} around you.</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
        <p className="text-secondary font-medium">{categoryFoods.length} places found</p>
        <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
          <SlidersHorizontal size={16} /> Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {categoryFoods.map((food) => (
          <FoodCard key={food.id} item={food} />
        ))}
      </div>
    </div>
  );
}
