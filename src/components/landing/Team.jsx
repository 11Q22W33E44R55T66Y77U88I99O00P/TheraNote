import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

export default function Team({ content }) {
  const team = content.members;
  
  return (
    <div className="py-24 sm:py-32 grid-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">{content.title}</h2>
          
          {/* Accelerator Information */}
          <div className="mt-8 px-4">
            <div className="inline-block bg-emerald-50 text-emerald-900 px-5 py-3 text-sm font-medium rounded-full leading-normal" style={{ whiteSpace: 'normal' }}>
              {content.accelerator}
            </div>
          </div>
        </div>
        
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none"
        >
          {team.map((person, index) => (
            <motion.li 
              key={person.name}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 18, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto h-32 w-32 rounded-full overflow-hidden bg-gray-200">
                <img 
                  className="h-full w-full object-cover" 
                  src={person.imageUrl} 
                  alt={person.name}
                  style={{ objectPosition: person.imagePosition }}
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              
              {/* CEO/CMO title */}
              <div className="mt-2 mb-3">
                <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-bold">
                  {index === 0 ? 'CEO' : 'CMO'}
                </span>
              </div>
              
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="text-sm leading-6 text-gray-500 mt-1">{person.degree}</p>
              <p className="mt-4 text-base leading-7 text-emerald-700 italic">"{person.quote}"</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}