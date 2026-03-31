import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CleanEnergySection = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/family_walking_lawn.jpg"
                alt="Family enjoying clean energy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="label-elegant mb-6">{language === 'en' ? 'For Every Home' : 'ஒவ்வொரு வீட்டிற்கும்'}</p>
            <h2 className={`heading-section text-[#0B1F4A] mb-8 ${language === 'ta' ? '!text-3xl lg:!text-4xl leading-snug' : ''}`}>
              {language === 'en' ? 'Clean Energy for Every Family' : 'ஒவ்வொரு குடும்பத்திற்கும் தூய்மையான ஆற்றல்'}
            </h2>
            <p className="body-elegant mb-8">
              {language === 'en' 
                ? 'From compact rooftops to large homes, we design a solar system that fits your space, your usage, and your budget. Our expert team ensures optimal panel placement for maximum efficiency.'
                : 'சிறிய கூரைகள் முதல் பெரிய வீடுகள் வரை, உங்கள் இடம், பயன்பாடு மற்றும் பட்ஜெட்டுக்கு ஏற்ற சோலார் சிஸ்டத்தை நாங்கள் வடிவமைக்கிறோம். அதிகபட்ச செயல்திறனுக்கான உகந்த பேனல் அமைப்பை எங்கள் நிபுணர் குழு உறுதி செய்கிறது.'}
            </p>
            <p className="body-elegant mb-10">
              {language === 'en'
                ? 'Whether you live in a 2BHK apartment or a sprawling villa in Erode, we have the perfect solar solution tailored for your needs.'
                : 'நீங்கள் ஈரோட்டில் 2BHK அபார்ட்மெண்டில் வசித்தாலும் அல்லது பரந்த வில்லாவில் வசித்தாலும், உங்கள் தேவைகளுக்கு ஏற்ப சரியான சோலார் தீர்வை நாங்கள் கொண்டுள்ளோம்.'}
            </p>
            <button 
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-2 text-[#0B1F4A] font-medium hover:text-[#FF6A00] transition-colors"
            >
              {language === 'en' ? 'Explore Systems' : 'சிஸ்டங்களை ஆராயுங்கள்'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanEnergySection;
