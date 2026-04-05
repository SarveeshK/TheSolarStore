import { ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const CTASection = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative bg-[#0B1F4A] py-24 md:py-32">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/house_dusk.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container-luxury relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-elegant mb-6">{language === 'en' ? 'Ready to Switch?' : 'மாற தயாரா?'}</p>
          <h2 className="heading-section text-white mb-8">
            {language === 'en' ? 'Start Your Solar Journey Today' : 'உங்கள் சோலார் பயணத்தை இப்போதே தொடங்குங்கள்'}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            {language === 'en'
              ? 'Get a free quote, compare options, and start saving—without any pressure. Our solar experts are here to help you make the right choice.'
              : 'இலவச மதிப்பீட்டைப் பெறுங்கள், விருப்பங்களை ஒப்பிட்டு, எவ்வித அழுத்தமுமின்றி சேமிக்கத் தொடங்குங்கள். சரியான தேர்வு செய்ய உங்களுக்கு உதவ எங்கள் சோலார் நிபுணர்கள் இங்கே உள்ளனர்.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact#contact')}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6A00] text-white font-medium hover:bg-[#e65f00] transition-colors"
            >
              {language === 'en' ? 'Get Free Quote' : 'இலவச மதிப்பீட்டைப் பெறுங்கள்'} <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <a 
              href="tel:+919345765116"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" /> {language === 'en' ? 'Call Us Now' : 'இப்போது அழைக்கவும்'}
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-white/20">
            <div>
              <p className="text-3xl font-medium text-[#FF6A00]" style={{ fontFamily: 'Playfair Display, serif' }}>500+</p>
              <p className="text-sm text-white/70 mt-1">{language === 'en' ? 'Happy Customers' : 'மகிழ்ச்சியான வாடிக்கையாளர்கள்'}</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-[#FF6A00]" style={{ fontFamily: 'Playfair Display, serif' }}>4.9</p>
              <p className="text-sm text-white/70 mt-1">{language === 'en' ? 'Google Rating' : 'கூகுள் மதிப்பீடு'}</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-[#FF6A00]" style={{ fontFamily: 'Playfair Display, serif' }}>10+</p>
              <p className="text-sm text-white/70 mt-1">{language === 'en' ? 'Years Experience' : 'வருட அனுபவம்'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
