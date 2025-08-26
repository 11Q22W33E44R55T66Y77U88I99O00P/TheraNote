import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function CTA({ content, onOpenContactForm }) {
  return (
    <div className="bg-emerald-50/70 relative">
      <motion.div 
        className="mx-auto max-w-4xl py-24 px-6 text-center relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 25 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">{content.title}</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {content.description}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button 
            size="lg" 
            className="rounded-lg bg-emerald-600 px-8 py-5 text-base font-semibold text-white shadow-lg hover:bg-emerald-700 transition-transform hover:scale-105" 
            onClick={() => onOpenContactForm("consultation")}
          >
            {content.bookCall}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-lg px-8 py-5 text-base font-semibold text-gray-900 border-gray-300 hover:bg-gray-100" 
            onClick={() => onOpenContactForm("early_access")}
          >
            {content.joinWaitlist}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}