
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cookie, X, Settings } from 'lucide-react';

export default function CookieBanner({ language = 'en', onPrivacyPolicyClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const content = {
    en: {
      title: "We use cookies",
      description: "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking 'Accept All', you consent to our use of cookies.",
      acceptAll: "Accept All",
      acceptSelected: "Accept Selected",
      rejectAll: "Reject All",
      settings: "Cookie Settings",
      close: "Close",
      necessary: {
        title: "Necessary Cookies",
        description: "These cookies are essential for the website to function properly and cannot be disabled."
      },
      analytics: {
        title: "Analytics Cookies", 
        description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously."
      },
      marketing: {
        title: "Marketing Cookies",
        description: "These cookies are used to deliver relevant advertisements and track the effectiveness of advertising campaigns."
      },
      functional: {
        title: "Functional Cookies", 
        description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences."
      },
      learnMore: "Learn more about cookies in our",
      privacyPolicy: "Privacy Policy"
    },
    he: {
      title: "אנו משתמשים בעוגיות",
      description: "אנו משתמשים בעוגיות כדי לשפר את חוויית הגלישה שלכם, לספק תוכן מותאם אישית ולנתח את התנועה באתר. בלחיצה על 'אישור הכל', אתם מסכימים לשימוש שלנו בעוגיות.",
      acceptAll: "אישור הכל",
      acceptSelected: "אישור נבחרות",
      rejectAll: "דחיית הכל", 
      settings: "הגדרות עוגיות",
      close: "סגירה",
      necessary: {
        title: "עוגיות חיוניות",
        description: "עוגיות אלה חיוניות לתפקוד תקין של האתר ולא ניתן לכבותן."
      },
      analytics: {
        title: "עוגיות ניתוח",
        description: "עוגיות אלה עוזרות לנו להבין כיצד מבקרים משתמשים באתר שלנו על ידי איסוף ודיווח מידע באופן אנונימי."
      },
      marketing: {
        title: "עוגיות שיווק",
        description: "עוגיות אלה משמשות להצגת פרסומות רלוונטיות ולמעקב אחר יעילות קמפיינים פרסומיים."
      },
      functional: {
        title: "עוגיות פונקציונליות", 
        description: "עוגיות אלה מאפשרות פונקציונליות משופרת והתאמה אישית, כמו זכירת העדפותיכם."
      },
      learnMore: "קיראו עוד על עוגיות ב",
      privacyPolicy: "מדיניות הפרטיות"
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay to avoid blocking initial page load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true, functional: true };
    setPreferences(allAccepted);
    saveCookiePreferences(allAccepted);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false, functional: false };
    setPreferences(onlyNecessary);
    saveCookiePreferences(onlyNecessary);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    saveCookiePreferences(preferences);
    setIsVisible(false);
  };

  const saveCookiePreferences = (prefs) => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      timestamp: new Date().toISOString(),
      preferences: prefs
    }));
    
    // Trigger custom event that other parts of the app can listen to
    window.dispatchEvent(new CustomEvent('cookiePreferencesUpdated', { 
      detail: prefs 
    }));
  };

  const togglePreference = (type) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-end justify-center p-4" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <Card className="w-full max-w-2xl bg-white shadow-2xl border-0 rounded-t-2xl">
        <div className="p-6">
          {!showSettings ? (
            // Main cookie banner
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                  <Cookie className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{currentContent.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{currentContent.description}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button 
                  onClick={handleAcceptAll}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1"
                >
                  {currentContent.acceptAll}
                </Button>
                <Button 
                  onClick={() => setShowSettings(true)}
                  variant="outline"
                  className="flex-1"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  {currentContent.settings}
                </Button>
                <Button 
                  onClick={handleRejectAll}
                  variant="ghost"
                  className="text-gray-600"
                >
                  {currentContent.rejectAll}
                </Button>
              </div>

              <p className="text-xs text-gray-500 pt-2">
                {currentContent.learnMore}{' '}
                <button 
                  onClick={onPrivacyPolicyClick} 
                  className="text-emerald-600 hover:underline"
                >
                  {currentContent.privacyPolicy}
                </button>
              </p>
            </div>
          ) : (
            // Cookie settings panel
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{currentContent.settings}</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowSettings(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4 max-h-60 overflow-y-auto">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{currentContent.necessary.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{currentContent.necessary.description}</p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-emerald-600 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{currentContent.analytics.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{currentContent.analytics.description}</p>
                  </div>
                  <button 
                    onClick={() => togglePreference('analytics')}
                    className="ml-4"
                  >
                    <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${preferences.analytics ? 'bg-emerald-600 justify-end' : 'bg-gray-300 justify-start'}`}>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{currentContent.marketing.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{currentContent.marketing.description}</p>
                  </div>
                  <button 
                    onClick={() => togglePreference('marketing')}
                    className="ml-4"
                  >
                    <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${preferences.marketing ? 'bg-emerald-600 justify-end' : 'bg-gray-300 justify-start'}`}>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </button>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{currentContent.functional.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{currentContent.functional.description}</p>
                  </div>
                  <button 
                    onClick={() => togglePreference('functional')}
                    className="ml-4"
                  >
                    <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${preferences.functional ? 'bg-emerald-600 justify-end' : 'bg-gray-300 justify-start'}`}>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button 
                  onClick={handleAcceptSelected}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1"
                >
                  {currentContent.acceptSelected}
                </Button>
                <Button 
                  onClick={() => setShowSettings(false)}
                  variant="outline"
                  className="flex-1"
                >
                  {currentContent.close}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
