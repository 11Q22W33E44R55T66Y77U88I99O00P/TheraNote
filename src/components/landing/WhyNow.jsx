
import React from "react";
import { motion } from "framer-motion";
import AnimatedNumber from "../ui/AnimatedNumber";
import AnimatedText from "../ui/AnimatedText";

export default function WhyNow({ content }) {
  const points = content.points;

  return (
    <div className="bg-transparent py-24 sm:py-32">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">{content.title}</h2>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 text-center lg:grid-cols-3">
          {points.map((point, index) => (
            <motion.div
              key={point.label}
              className="mx-auto flex max-w-xs flex-col gap-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 90, damping: 20, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <dd className="order-first text-4xl font-semibold tracking-tight text-emerald-600 sm:text-5xl flex items-center justify-center h-16">
                {point.isNumeric ? (
                  <>
                    <AnimatedNumber value={point.value} />
                    {point.suffix}
                  </>
                ) : (
                  <AnimatedText text={point.value} className="text-4xl font-semibold tracking-tight text-emerald-600 sm:text-5xl" />
                )}
              </dd>
              <dt className="text-base leading-7 text-gray-600">{point.label}</dt>
            </motion.div>
          ))}
        </dl>
        <p className="mt-16 text-center text-lg leading-8 text-gray-700 max-w-4xl mx-auto">
            {Array.isArray(content.conclusion) ? content.conclusion.map((part, i) => (
              part === "TheraNote" ? (
                <strong key={i} className="font-medium text-emerald-700">
                  {part}
                </strong>
              ) : (
                part
              )
            )) : content.conclusion}
        </p>
      </div>
    </div>
  );
}
