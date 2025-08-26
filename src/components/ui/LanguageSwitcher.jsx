import React from 'react';
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher({ language, setLanguage }) {
  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'he', name: 'HE' }
  ];

  const handleSwitch = (langCode) => {
    setLanguage(langCode);
    // Dispatch a global event so other components (like AccessibilityWidget) can listen.
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: langCode }));
  };

  return (
    <div className="flex gap-1 bg-emerald-100/80 p-0.5 rounded-full">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          onClick={() => handleSwitch(lang.code)}
          variant="ghost"
          className={`rounded-full px-3 h-7 text-xs font-medium transition-all duration-300 ${
            language === lang.code
              ? 'bg-white text-emerald-700 shadow-sm'
              : 'text-gray-600 hover:bg-white/50'
          }`}
          aria-pressed={language === lang.code}
        >
          {lang.name}
        </Button>
      ))}
    </div>
  );
}