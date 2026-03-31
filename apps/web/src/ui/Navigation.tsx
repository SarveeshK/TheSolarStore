import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.scheme'), path: '/scheme' },
    { label: t('nav.catalog'), path: '/products' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <>
      {/* Spacer to prevent content jump when header becomes fixed */}
      {isScrolled && <div className="h-[80px]" />}
      
      <header 
        className={`w-full transition-all duration-300 z-50 ${
          isScrolled 
            ? 'fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-md border-b border-[#E2E8F0] py-2' 
            : 'relative bg-white border-b border-[#E2E8F0]'
        }`}
      >
        <div className="container-luxury py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="The Solar Store" className="h-10 w-auto" />
          <span 
            className="text-left text-sm md:text-lg font-medium text-[#0B1F4A] leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Premium Solar Solutions<br />
            <span className="text-base md:text-xl">The Solar Store</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center ${language === 'ta' ? 'gap-4' : 'gap-6'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors ${language === 'ta' ? 'text-xs whitespace-nowrap' : 'text-sm'} ${location.pathname === link.path ? 'text-[#FF6A00]' : 'text-[#0B1F4A] hover:text-[#FF6A00]'}`}
            >
              {link.label}
            </Link>
          ))}
          <div className={`flex items-center border-l border-[#E2E8F0] ${language === 'ta' ? 'gap-3 pl-4' : 'gap-4 pl-6'}`}>
            <button 
              onClick={toggleLanguage}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] text-[#0B1F4A] hover:border-[#FF6A00] hover:text-[#FF6A00] transition-colors font-medium text-sm bg-[#F8FAFC] shrink-0"
              aria-label="Toggle Language"
            >
              {language === 'en' ? 'TA' : 'EN'}
            </button>
            <button onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }} className={`btn-luxury ${language === 'ta' ? 'px-5 py-3 text-xs whitespace-nowrap' : ''}`}>
              {language === 'en' ? 'Get Quote' : 'மதிப்பீட்டைப் பெறுங்கள்'}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-[#0B1F4A]" />
          ) : (
            <Menu className="w-6 h-6 text-[#0B1F4A]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-white ${
          isMobileMenuOpen ? 'max-h-96 border-b border-[#E2E8F0]' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center py-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium transition-colors ${location.pathname === link.path ? 'text-[#FF6A00]' : 'text-[#0B1F4A] hover:text-[#FF6A00]'}`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {link.label}
            </Link>
          ))}
          <button onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }} className="btn-luxury w-11/12 mt-2">
            {language === 'en' ? 'Get Quote' : 'மதிப்பீட்டைப் பெறுங்கள்'}
          </button>
          <button 
            onClick={toggleLanguage}
            className="flex items-center justify-center w-11/12 py-3 rounded-xl border border-[#0B1F4A] text-[#0B1F4A] transition-colors font-medium"
          >
            {language === 'en' ? 'தமிழில் படிக்க (Read in Tamil)' : 'Read in English'}
          </button>
        </div>
      </div>
    </header>
    </>
  );
};

export default Navigation;
