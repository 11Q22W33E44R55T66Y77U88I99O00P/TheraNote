import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
  Accessibility, Contrast, Palette, Sun, Moon, Eye, Type, ZoomIn, ZoomOut, Link as LinkIcon, Heading, RotateCcw, X, FileText
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const content = {
  en: {
    title: "Accessibility Menu",
    triggerLabel: "Open Accessibility Menu",
    closeLabel: "Close Accessibility Menu",
    reset: "Reset Settings",
    statement: "Accessibility Statement",
    options: {
      contrast: "High Contrast",
      monochrome: "Monochrome",
      invert: "Invert Colors",
      highlightHeadings: "Highlight Headings",
      highlightLinks: "Highlight Links",
      readableFont: "Readable Font",
      increaseText: "Increase Text",
      decreaseText: "Decrease Text",
    }
  },
  he: {
    title: "תפריט נגישות",
    triggerLabel: "פתח תפריט נגישות",
    closeLabel: "סגור תפריט נגישות",
    reset: "איפוס הגדרות",
    statement: "הצהרת נגישות",
    options: {
      contrast: "ניגודיות גבוהה",
      monochrome: "מונוכרום",
      invert: "היפוך צבעים",
      highlightHeadings: "הדגשת כותרות",
      highlightLinks: "הדגשת קישורים",
      readableFont: "גופן קריא",
      increaseText: "הגדלת טקסט",
      decreaseText: "הקטנת טקסט",
    }
  }
};

const defaultSettings = {
  contrast: false,
  monochrome: false,
  invert: false,
  highlightHeadings: false,
  highlightLinks: false,
  readableFont: false,
  zoom: 100,
};

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [settings, setSettings] = useState(defaultSettings);

  const applySettings = useCallback((newSettings) => {
    const root = document.documentElement;
    
    Object.keys(newSettings).forEach(key => {
      const className = `accessibility-${key}`;
      if (key === 'zoom') {
        root.style.fontSize = `${newSettings.zoom}%`;
      } else {
        if (newSettings[key]) {
          root.classList.add(className);
        } else {
          root.classList.remove(className);
        }
      }
    });

    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings));
  }, []);

  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    const initialSettings = savedSettings ? JSON.parse(savedSettings) : defaultSettings;
    setSettings(initialSettings);
    applySettings(initialSettings);

    const handleLanguageChange = (event) => {
      setLanguage(event.detail);
    };
    
    // Check initial language based on page direction
    const initialLang = document.querySelector('div[dir="rtl"]') ? 'he' : 'en';
    setLanguage(initialLang);

    window.addEventListener('languageChanged', handleLanguageChange);
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange);
    };
  }, [applySettings]);

  const toggleSetting = (key) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    applySettings(newSettings);
  };

  const changeZoom = (amount) => {
    const newZoom = Math.max(80, Math.min(150, settings.zoom + amount));
    const newSettings = { ...settings, zoom: newZoom };
    setSettings(newSettings);
    applySettings(newSettings);
  };

  const resetSettings = () => {
    // Before resetting, remove all current classes
    applySettings(defaultSettings); 
    // Then set state, which will re-apply defaults (redundant but safe)
    setSettings(defaultSettings);
  };

  const currentContent = content[language] || content['en'];

  const options = [
    { key: 'contrast', icon: Contrast, label: currentContent.options.contrast, action: () => toggleSetting('contrast') },
    { key: 'invert', icon: Moon, label: currentContent.options.invert, action: () => toggleSetting('invert') },
    { key: 'monochrome', icon: Palette, label: currentContent.options.monochrome, action: () => toggleSetting('monochrome') },
    { key: 'highlightHeadings', icon: Heading, label: currentContent.options.highlightHeadings, action: () => toggleSetting('highlightHeadings') },
    { key: 'highlightLinks', icon: LinkIcon, label: currentContent.options.highlightLinks, action: () => toggleSetting('highlightLinks') },
    { key: 'readableFont', icon: Type, label: currentContent.options.readableFont, action: () => toggleSetting('readableFont') },
    { key: 'increaseText', icon: ZoomIn, label: currentContent.options.increaseText, action: () => changeZoom(10) },
    { key: 'decreaseText', icon: ZoomOut, label: currentContent.options.decreaseText, action: () => changeZoom(-10) },
  ];

  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 start-4 z-[9998] h-14 w-14 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-700 transition-all duration-200"
        aria-label={currentContent.triggerLabel}
        style={{ pointerEvents: 'auto' }}
      >
        <Accessibility className="h-7 w-7" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            dir={language === 'he' ? 'rtl' : 'ltr'}
            style={{ pointerEvents: 'auto' }}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl rounded-t-2xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              style={{ pointerEvents: 'auto' }}
            >
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">{currentContent.title}</h2>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)} 
                    aria-label={currentContent.closeLabel}
                    className="hover:bg-gray-100"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {options.map(opt => (
                  <button
                    key={opt.key}
                    onClick={opt.action}
                    className={`flex flex-col items-center justify-center p-3 text-center rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                      settings[opt.key] || (opt.key.includes('Text') && settings.zoom !== 100) 
                        ? 'bg-emerald-100 border-emerald-500 text-emerald-900' 
                        : 'bg-gray-50 hover:bg-gray-100 border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ pointerEvents: 'auto' }}
                  >
                    <opt.icon className="w-8 h-8 mb-2" />
                    <span className="text-sm font-medium leading-tight">{opt.label}</span>
                  </button>
                ))}
              </div>
              <div className="p-4 border-t flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline" 
                  onClick={resetSettings} 
                  className="flex-1 hover:bg-gray-50"
                  style={{ pointerEvents: 'auto' }}
                >
                  <RotateCcw className="w-4 h-4 me-2" />
                  {currentContent.reset}
                </Button>
                <Link to={createPageUrl('Accessibility')} onClick={() => setIsOpen(false)} className="flex-1">
                   <Button 
                     variant="outline" 
                     className="w-full hover:bg-gray-50"
                     style={{ pointerEvents: 'auto' }}
                   >
                     <FileText className="w-4 h-4 me-2" />
                     {currentContent.statement}
                   </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityWidget;