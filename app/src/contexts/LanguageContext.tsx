import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.scheme': 'Subsidy Scheme',
    'nav.catalog': 'Products',
    'nav.contact': 'Contact Us',
    'hero.badge': 'Erode\'s #1 Trusted Solar Partner',
    'hero.title1': 'Power Your Home with',
    'hero.title2': 'Clean Energy',
    'hero.subtitle': 'Transform your roof into a power plant. Cut down your electricity bills to ZERO with our premium solar installations.',
    'hero.cta': 'Get Your Free Quote',
    'hero.cta2': 'Calculate Savings',
  },
  ta: {
    'nav.home': 'முகப்பு',
    'nav.scheme': 'மானியம்',
    'nav.catalog': 'தயாரிப்புகள்',
    'nav.contact': 'தொடர்பு கொள்ள',
    'hero.badge': 'ஈரோட்டின் #1 நம்பகமான சோலார் பார்ட்னர்',
    'hero.title1': 'உங்கள் வீட்டை ஆற்றலாக்குங்கள்',
    'hero.title2': 'தூய்மையான ஆற்றல்',
    'hero.subtitle': 'உங்கள் கூரையை மின் உற்பத்தி நிலையமாக மாற்றவும். எங்கள் பிரீமியம் சோலார் மூலம் உங்கள் மின் கட்டணங்களை பூஜ்ஜியமாக குறைக்கவும்.',
    'hero.cta': 'இலவச மதிப்பீட்டைப் பெறுங்கள்',
    'hero.cta2': 'சேமிப்பை கணக்கிடுங்கள்',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ta' : 'en');
  };

  const t = (key: string) => {
    return (translations as any)[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
