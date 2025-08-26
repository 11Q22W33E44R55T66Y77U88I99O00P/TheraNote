
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Lightbulb } from "lucide-react";

// Map icon names (strings) to their corresponding Lucide React components
const icons = { Users, Heart, Lightbulb };

export default function Advisors({ content }) {
  // advisorTypes now comes from the content prop
  const advisorTypes = content.types;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  return (
    <section className="py-24 sm:py-32 bg-transparent">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            {/* Title now comes from the content prop */}
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {/* Description now comes from the content prop */}
            {content.description}
          </p>
        </div>
        <motion.div 
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {advisorTypes.map((type, index) => {
            // Dynamically select the icon component based on the string name from content
            const IconComponent = icons[type.icon];
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                      {/* Use the dynamically selected IconComponent */}
                      {IconComponent && <IconComponent className="h-7 w-7 text-emerald-700" aria-hidden="true" />}
                    </div>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-4">{type.title}</h3>
                    <p className="text-base leading-7 text-gray-600">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
