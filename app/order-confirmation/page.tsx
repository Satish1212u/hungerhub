import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import { CheckCircle2, Package, MapPin, Clock } from 'lucide-react';

export default function OrderConfirmation() {
  return (
    <div className="min-h-[80vh] bg-alt flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 border border-gray-100 text-center">

        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
            <CheckCircle2 size={48} className="text-green-500" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">Order Confirmed!</h1>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">
          Thank you for choosing HungerHubs. Your order <span className="font-semibold text-secondary">#ORD-583921</span> has been placed successfully and is being prepared.
        </p>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-10 text-left border border-gray-200">
          <h3 className="font-heading font-semibold text-lg text-secondary mb-4 border-b border-gray-200 pb-2">Order Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <Clock className="text-primary shrink-0" />
              <div>
                <h4 className="font-medium text-sm text-secondary">Estimated Delivery</h4>
                <p className="text-gray-500 text-sm mt-1">Today, 30-40 min</p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="text-primary shrink-0" />
              <div>
                <h4 className="font-medium text-sm text-secondary">Delivery Address</h4>
                <p className="text-gray-500 text-sm mt-1">123 Food Street, Culinary District, FK 10012</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="outline" className="w-full sm:w-auto h-12 px-8">Return Home</Button>
          </Link>
          <Button className="w-full sm:w-auto h-12 px-8 gap-2">
            <Package size={18} /> Track Order
          </Button>
        </div>

      </div>
    </div>
  );
}
