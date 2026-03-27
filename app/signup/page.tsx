"use client";

import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="min-h-[90vh] flex pl-0 pr-0">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-1/2">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-heading font-extrabold text-secondary">Create your account</h2>
            <p className="mt-2 text-sm text-gray-500">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-primary hover:text-orange-500 transition-colors">
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                 <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary">
                    Full Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="focus:ring-primary focus:border-primary block w-full pl-10 py-3 sm:text-sm border-gray-300 rounded-xl bg-alt border outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary">
                    Email address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="focus:ring-primary focus:border-primary block w-full pl-10 py-3 sm:text-sm border-gray-300 rounded-xl bg-alt border outline-none transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-secondary">
                    Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="focus:ring-primary focus:border-primary block w-full pl-10 py-3 sm:text-sm border-gray-300 rounded-xl bg-alt border outline-none transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div>
                  <Button type="submit" className="w-full flex justify-center py-3 text-lg">
                    Create Account <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>
            
            <p className="mt-6 text-center text-sm text-gray-500">
               By signing up, you agree to our <Link href="#" className="font-medium text-primary hover:text-orange-500">Terms</Link> and <Link href="#" className="font-medium text-primary hover:text-orange-500">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Signup Background"
        />
      </div>
    </div>
  );
}
