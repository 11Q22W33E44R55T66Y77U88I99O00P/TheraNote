
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero({ content, onOpenContactForm }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 20 } },
  };

  return (
    <motion.section 
      className="relative overflow-hidden py-24 md:py-32" 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-labelledby="hero-title"
    >
      {/* Circular grid background with blurred edges */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 grid-section opacity-40 -z-10"
        style={{
          maskImage: 'radial-gradient(circle 50% at center, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle 50% at center, black 40%, transparent 75%)'
        }}
      />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            id="hero-title"
            variants={itemVariants} 
            className="text-4xl md:text-6xl font-light leading-tight text-gray-800 mb-6"
          >
            {content.title}
            <br />
            <span className="font-medium text-emerald-700">{content.subtitle}</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto"
            aria-describedby="hero-description"
          >
            {Array.isArray(content.description) ? content.description.map((part, i) => (
              part === "TheraNote" ? (
                <strong key={i} className="font-medium text-emerald-700">
                  {part}
                </strong>
              ) : (
                part
              )
            )) : content.description}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mt-8 mb-16"
          >
            <a href="#story-section" aria-label="Scroll to next section">
              <div
                className="w-8 h-14 border-2 border-gray-400 rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </div>
            </a>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            role="group"
            aria-label="Call to action buttons"
          >
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300 text-white px-8 py-6 text-base font-medium rounded-lg shadow-lg hover:shadow-emerald-200 transition-all duration-300"
              onClick={() => onOpenContactForm("early_access")}
              aria-label={content.ariaRequestAccess}
            >
              {content.requestAccess}
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="px-8 py-6 text-base font-medium rounded-lg text-emerald-700 hover:bg-emerald-100 focus:ring-4 focus:ring-emerald-300 transition-all duration-300"
              onClick={() => onOpenContactForm("consultation")}
              aria-label={content.ariaBookCall}
            >
              {content.bookCall}
            </Button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-16"
          >
            <div className="mx-auto max-w-4xl">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/40c6cfc4b_image.png" 
                alt={content.imageAlt} 
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200/50"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
