import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();



  return (
    <section id="hero" className="relative min-h-screen bg-[#FAFBFC]">
      <div className="container-luxury pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="label-elegant mb-6">{t('hero.badge')}</p>
            <h1 className={`heading-hero text-[#0B1F4A] mb-8 ${language === 'ta' ? '!text-3xl sm:!text-4xl md:!text-5xl lg:!text-5xl leading-[1.25] break-words' : ''}`}>
              {t('hero.title1')} <br />
              <span className="bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] bg-clip-text text-transparent">{t('hero.title2')}</span>
            </h1>
            <p className="body-elegant text-lg mb-10 max-w-lg">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate('/contact')} className="btn-luxury">
                {t('hero.cta')} <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button onClick={() => navigate('/scheme')} className="btn-luxury-outline">
                {t('hero.cta2')}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-[#E2E8F0]">
              <div>
                <p className="text-3xl md:text-4xl font-medium text-[#0B1F4A]" style={{ fontFamily: 'Playfair Display, serif' }}>500+</p>
                <p className="text-sm text-[#64748B] mt-1">Homes Powered</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-medium text-[#0B1F4A]" style={{ fontFamily: 'Playfair Display, serif' }}>25</p>
                <p className="text-sm text-[#64748B] mt-1">Years Warranty</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-medium text-[#0B1F4A]" style={{ fontFamily: 'Playfair Display, serif' }}>4.9</p>
                <p className="text-sm text-[#64748B] mt-1">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/hero_family_lawn.jpg"
                  alt="Happy family with solar home"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 shadow-2xl border border-[#E2E8F0]/50 rounded-2xl hover:-translate-y-1 transition-transform duration-500">
                <p className="text-sm text-[#64748B] mb-1">Starting from</p>
                <p className="text-2xl font-medium text-[#0B1F4A]" style={{ fontFamily: 'Playfair Display, serif' }}>₹2,05,000</p>
                <p className="text-xs text-[#10B981] mt-1">Save up to ₹50,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
