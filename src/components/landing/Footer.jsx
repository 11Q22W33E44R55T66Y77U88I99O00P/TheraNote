
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, MapPin, Mail, Phone, Globe, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Footer({ content, language }) {
  const contact = content.contact;
  const navigation = content.navigation;

  // Icon mapping for different contact types
  const getContactIcon = (name) => {
    if (name.toLowerCase().includes('partnership') || name.toLowerCase().includes('שותפויות')) {
      return <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />;
    }
    if (name.toLowerCase().includes('support') || name.toLowerCase().includes('תמיכה')) {
      return <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />;
    }
    if (name.toLowerCase().includes('visit') || name.toLowerCase().includes('בקרו')) {
      return <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />;
    }
    // Default to mail icon for other contacts
    return <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />;
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-20 text-start">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bf21c5382_LOGOTN.jpg" 
                  alt="TheraNote Logo" 
                  className="w-10 h-10"
                />
                <h3 className="text-2xl font-bold">TheraNote</h3>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                {content.tagline}
              </p>
            </div>

            {/* Contact Section */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">{content.getInTouch}</h4>
              <div className="space-y-4">
                {contact.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      {getContactIcon(item.name)}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{item.name}</p>
                      <p className="text-gray-200 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">{content.resources}</h4>
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  item.pageName ? (
                    <Link
                      key={item.name}
                      to={createPageUrl(item.pageName)}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a 
                      key={item.name} 
                      href={item.href} 
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </a>
                  )
                ))}
                <Link 
                  to={createPageUrl('Accessibility')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  {language === 'he' ? 'הצהרת נגישות' : 'Accessibility Statement'}
                </Link>
              </nav>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400 text-center md:text-start">
                {Array.isArray(content.copyright) ? content.copyright.map((part, i) => (
                  part === "TheraNote" ? (
                    <strong key={i} className="font-medium text-white">
                      {part}
                    </strong>
                  ) : (
                    part
                  )
                )) : content.copyright}
              </p>
              <div className="flex items-center gap-4">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">{content.availability}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
