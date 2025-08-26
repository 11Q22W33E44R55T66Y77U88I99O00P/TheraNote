
import React from "react";
import { motion } from "framer-motion";
import { Bot, TrendingUp, Calendar, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const icons = { Bot, TrendingUp, Calendar, Sparkles };

export default function Product({ content }) {
  const features = content.features;

  return (
    <section className="py-24 sm:py-32 bg-transparent relative" aria-labelledby="product-features-title">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <h2 id="product-features-title" className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
            {content.title}
          </h2>
          <div className="flex items-center justify-center mb-4" role="presentation">
            <div className="h-0.5 w-8 bg-emerald-600 me-3" aria-hidden="true"></div>
            <p className="text-lg text-gray-600 italic">
              {content.subtitle}
            </p>
            <div className="h-0.5 w-8 bg-emerald-600 ms-3" aria-hidden="true"></div>
          </div>
        </div>
        
        <div className="space-y-16 sm:space-y-24">
          {features.map((feature, index) => {
            const IconComponent = icons[feature.icon];
            return (
              <motion.article
                key={feature.title}
                className="grid grid-cols-1 items-center gap-12 md:grid-cols-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                aria-labelledby={`feature-${index}-title`}
              >
                <div className={`md:order-${index % 2 === 0 ? '1' : '2'} text-start`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100" role="img" aria-label={`${feature.title} icon`}>
                      <IconComponent className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                    </div>
                    <div className="flex items-center gap-3">
                      <h3 id={`feature-${index}-title`} className="text-2xl font-semibold leading-tight text-gray-900">{feature.title}</h3>
                      {feature.comingSoon && (
                        <Badge className="bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium" role="status" aria-label="This feature is coming soon">
                          {feature.comingSoon}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-600">{Array.isArray(feature.description) ? feature.description.map((part, i) => (
                    part === "TheraNote" ? (
                      <strong key={i} className="font-medium text-emerald-700">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )) : feature.description}</p>
                </div>

                <div className={`md:order-${index % 2 === 0 ? '2' : '1'}`}>
                  {feature.comingSoon ? (
                    <div className="relative rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
                      <img
                        src={feature.imageUrl}
                        alt={feature.alt}
                        className="w-full h-auto blur-sm"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center p-4" role="presentation">
                         <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl text-center shadow-lg">
                            <p className="text-emerald-800 font-semibold text-xl">{feature.comingSoon}</p>
                         </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={feature.imageUrl}
                      alt={feature.alt}
                      className="rounded-2xl shadow-2xl border border-gray-200/50 w-full h-auto"
                      loading="lazy"
                    />
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  );
}
