
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ({ content, language }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle(index);
    }
  };

  return (
    <section className="bg-transparent py-24 sm:py-32" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="faq-title" className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">{content.title}</h2>
        </div>
        <div className="mt-16 space-y-4" role="region" aria-labelledby="faq-title">
          {content.items.map((faq, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200/80">
              <button
                className="w-full p-6 text-start flex justify-between items-center focus:outline-none focus:ring-4 focus:ring-emerald-300 rounded-lg"
                onClick={() => handleToggle(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 pe-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div className="px-6 pb-6 border-t border-gray-200/80">
                      <p className="text-gray-600 leading-relaxed pt-4 text-start">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
