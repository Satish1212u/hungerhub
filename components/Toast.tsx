"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';
import { Toast as ToastType, useToastStore } from '@/store/toast';
import { cn } from '@/lib/utils';

interface ToastProps {
  toast: ToastType;
}

export default function Toast({ toast }: ToastProps) {
  const removeToast = useToastStore((state) => state.removeToast);

  const icons = {
    success: <CheckCircle className="text-green-500" size={20} />,
    error: <XCircle className="text-red-500" size={20} />,
    info: <Info className="text-blue-500" size={20} />,
  };

  const bgColors = {
    success: "bg-green-50 border-green-100",
    error: "bg-red-50 border-red-100",
    info: "bg-blue-50 border-blue-100",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 20, scale: 0.9 }}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg min-w-[300px] pointer-events-auto",
        bgColors[toast.type]
      )}
    >
      {icons[toast.type]}
      <p className="flex-1 text-sm font-medium text-secondary">{toast.message}</p>
      <button
        onClick={() => removeToast(toast.id)}
        className="text-gray-400 hover:text-secondary transition-colors"
      >
        <X size={18} />
      </button>
    </motion.div>
  );
}
