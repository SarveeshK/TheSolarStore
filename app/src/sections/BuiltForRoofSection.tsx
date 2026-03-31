import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BuiltForRoofSection = () => {
  const { language } = useLanguage();

  const features = language === 'en' ? [
    'Sleek, low-profile design',
    'Weather-resistant coating',
    'High-efficiency monocrystalline cells',
    '25-year performance warranty',
    'Minimal maintenance required',
    'Compatible with all roof types',
  ] : [
    'நேர்த்தியான, குறைந்த சுயவிவர வடிவமைப்பு',
    'வானிலை எதிர்ப்பு பூச்சு',
    'அதிக செயல்திறன் கொண்ட மோனோகிரிஸ்டலின் செல்கள்',
    '25 ஆண்டு செயல்திறன் உத்தரவாதம்',
    'குறைந்த பராமரிப்பு தேவை',
    'அனைத்து கூரை வகைகளுக்கும் இணக்கமானது',
  ];

  return (
    <section id="products" className="section-padding bg-[#FAFBFC]">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div>
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/house_with_panels.jpg"
                alt="House with solar panels"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="label-elegant mb-6">{language === 'en' ? 'Premium Design' : 'பிரீமியம் வடிவமைப்பு'}</p>
            <h2 className="heading-section text-[#0B1F4A] mb-8">
              {language === 'en' ? 'Built for Your Roof' : 'உங்கள் கூரைக்காக கட்டப்பட்டது'}
            </h2>
            <p className="body-elegant mb-8">
              {language === 'en' 
                ? 'Our solar panels are engineered to seamlessly integrate with your home\'s architecture. Designed to look like a natural extension of your roof, not an afterthought.'
                : 'எங்கள் சோலார் பேனல்கள் உங்கள் வீட்டின் கட்டமைப்புடன் தடையின்றி ஒருங்கிணைக்க வடிவமைக்கப்பட்டுள்ளன. உங்கள் கூரையின் இயற்கையான நீட்டிப்பைப் போல தோற்றமளிக்க வடிவமைக்கப்பட்டுள்ளது.'}
            </p>
            <p className="body-elegant mb-10">
              {language === 'en'
                ? 'Built to withstand Tamil Nadu\'s harsh summers, monsoons, and everything in between—backed by industry-leading warranties.'
                : 'தமிழ்நாட்டின் கடுமையான கோடைக்காலம், பருவமழைகள் தாங்கும் வகையில் கட்டமைக்கப்பட்டுள்ளது - முன்னணி உத்தரவாதங்களால் ஆதரிக்கப்படுகிறது.'}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                  <span className="text-sm text-[#0B1F4A]">{feature}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('panel-catalog')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-[#0B1F4A] font-medium hover:text-[#FF6A00] transition-colors"
            >
              {language === 'en' ? 'View Panel Options' : 'பேனல் விருப்பங்களைக் காண்க'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForRoofSection;
