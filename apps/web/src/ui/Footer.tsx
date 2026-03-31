import { useState } from 'react';
import { Link } from 'react-router-dom';
import LegalModal from '@/shared/components/LegalModal';
import { privacyPolicyContent, termsOfServiceContent } from '@/lib/legalContent';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const [modalState, setModalState] = useState<{isOpen: boolean, type: 'privacy' | 'terms'}>({
    isOpen: false,
    type: 'privacy'
  });

  return (
    <>
      <footer className="mt-20 pt-12 border-t border-[#E2E8F0] bg-white">
        <div className="container-luxury">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="The Solar Store" className="h-10 w-auto" />
                <span className="text-xl font-medium text-[#0B1F4A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  The Solar Store
                </span>
              </div>
              <p className="text-[#64748B] max-w-md">
                {language === 'en'
                  ? 'Premium solar solutions for homes and businesses in Erode, Tamil Nadu. Power your future with clean, renewable energy.'
                  : 'ஈரோடு, தமிழ்நாட்டில் உள்ள வீடுகள் மற்றும் வணிகங்களுக்கான பிரீமியம் சோலார் தீர்வுகள். தூய்மையான, புதுப்பிக்கத்தக்க ஆற்றலுடன் உங்கள் எதிர்காலத்தை மேம்படுத்துங்கள்.'}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-medium text-[#0B1F4A] mb-4">{language === 'en' ? 'Quick Links' : 'விரைவான இணைப்புகள்'}</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-[#64748B] hover:text-[#FF6A00] transition-colors cursor-pointer">
                    {language === 'en' ? 'Home' : 'முகப்பு'}
                  </Link>
                </li>
                <li>
                  <Link to="/scheme" className="text-sm text-[#64748B] hover:text-[#FF6A00] transition-colors cursor-pointer">
                    {language === 'en' ? 'Subsidy Scheme' : 'மானியம்'}
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-sm text-[#64748B] hover:text-[#FF6A00] transition-colors cursor-pointer">
                    {language === 'en' ? 'Products' : 'தயாரிப்புகள்'}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-[#64748B] hover:text-[#FF6A00] transition-colors cursor-pointer">
                    {language === 'en' ? 'Contact' : 'தொடர்பு'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-medium text-[#0B1F4A] mb-4">{language === 'en' ? 'Services' : 'சேவைகள்'}</h4>
              <ul className="space-y-2">
                <li><span className="text-sm text-[#64748B]">{language === 'en' ? 'Residential Solar' : 'குடியிருப்பு சோலார்'}</span></li>
                <li><span className="text-sm text-[#64748B]">{language === 'en' ? 'Commercial Solar' : 'வணிக சோலார்'}</span></li>
                <li><span className="text-sm text-[#64748B]">{language === 'en' ? 'Battery Storage' : 'பேட்டரி சேமிப்பு'}</span></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 pb-8 border-t border-[#E2E8F0] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#64748B]">
              {language === 'en' ? '© 2026 The Solar Store. All rights reserved.' : '© 2026 தி சோலார் ஸ்டோர். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'}
            </p>
            <div className="flex gap-6">
              <button 
                onClick={() => setModalState({ isOpen: true, type: 'privacy' })}
                className="text-sm text-[#64748B] hover:text-[#FF6A00] transition-colors"
                aria-label="Privacy Policy"
              >
                {language === 'en' ? 'Privacy Policy' : 'தனியுரிமைக் கொள்கை'}
              </button>
              <button 
                onClick={() => setModalState({ isOpen: true, type: 'terms' })}
                className="text-sm text-[#64748B] hover:text-[#FF6A00] transition-colors"
                aria-label="Terms of Service"
              >
                {language === 'en' ? 'Terms of Service' : 'சேவை விதிமுறைகள்'}
              </button>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Legal Modals */}
      <LegalModal 
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        title={modalState.type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
        content={modalState.type === 'privacy' ? privacyPolicyContent : termsOfServiceContent}
      />
    </>
  );
};

export default Footer;
