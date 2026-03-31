import { Calendar } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

const BookVisitWidget = () => {
  const { language } = useLanguage();

  return (
    <a
      href="https://wa.me/919345765116?text=Hi!%20I%20would%20like%20to%20book%20a%20free%20site%20visit%20for%20my%20solar%20installation."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 left-4 md:bottom-8 md:left-8 z-[60] flex items-center gap-3 bg-[#0B1F4A] text-white px-4 py-3 md:px-6 md:py-4 rounded-full shadow-[0_4px_20px_rgba(11,31,74,0.3)] hover:bg-[#FF6A00] hover:shadow-[0_6px_25px_rgba(255,106,0,0.4)] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#FF6A00]/50 group border border-white/10"
      aria-label="Book Free Site Visit"
    >
      <div className="relative">
        <Calendar className="w-5 h-5 md:w-6 md:h-6" />
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6A00]"></span>
        </span>
      </div>
      <span className="font-semibold text-sm md:text-base hidden sm:block">
        {language === 'en' ? 'Book Free Site Visit' : 'இலவச நேரடி வருகை'}
      </span>
      <span className="font-semibold text-sm sm:hidden">
        {language === 'en' ? 'Free Visit' : 'இலவச வருகை'}
      </span>
    </a>
  );
};

export default BookVisitWidget;
