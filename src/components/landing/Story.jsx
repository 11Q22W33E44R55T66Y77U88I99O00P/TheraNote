import React from "react";
import { motion } from "framer-motion";
import LoadingBar from "../ui/LoadingBar";

export default function Story({ content }) {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 20 } }
  };

  return (
    <motion.section 
      id="story-section"
      className="py-24 sm:py-32 bg-transparent"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
          {content.title}
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            {Array.isArray(content.p1) ? content.p1.map((part, i) => (
              part === "TheraNote" ? (
                <strong key={i} className="font-medium text-emerald-700">
                  {part}
                </strong>
              ) : (
                part
              )
            )) : content.p1}
          </p>
          <p>
            {content.p2}
          </p>
          <p className="text-xl font-medium text-emerald-700">
            {content.p3}
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <LoadingBar />
        </div>
      </div>
    </motion.section>
  );
}