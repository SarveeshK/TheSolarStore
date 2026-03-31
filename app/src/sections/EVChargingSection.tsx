import { ArrowRight, Plug, Sun, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const EVChargingSection = () => {
  const { language } = useLanguage();

  const features = language === 'en' ? [
    { icon: Sun, title: 'Solar Powered', description: 'Charge with clean energy' },
    { icon: Clock, title: 'Overnight Charging', description: 'Wake up to full battery' },
    { icon: Plug, title: 'Universal', description: 'Works with all EV models' },
  ] : [
    { icon: Sun, title: 'சூரிய ஆற்றல் கொண்டது', description: 'சுத்தமான ஆற்றலுடன் சார்ஜ் செய்யுங்கள்' },
    { icon: Clock, title: 'இரவு முழுவதும் சார்ஜிங்', description: 'முழு பேட்டரிக்கு எழுந்திருக்கவும்' },
    { icon: Plug, title: 'உலகளாவிய', description: 'அனைத்து EV மாடல்களுடனும் வேலை செய்கிறது' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="label-elegant mb-6">{language === 'en' ? 'Complete Home Energy' : 'முழுமையான வீட்டு ஆற்றல்'}</p>
            <h2 className="heading-section text-[#0B1F4A] mb-8">
              {language === 'en' ? 'EV Charging at Home' : 'வீட்டில் EV சார்ஜிங்'}
            </h2>
            <p className="body-elegant mb-8">
              {language === 'en'
                ? 'Charge your electric vehicle overnight using solar energy. Wake up to a full battery every morning—no more gas station stops, no more fuel costs.'
                : 'சூரிய ஆற்றலைப் பயன்படுத்தி ஒரே இரவில் உங்கள் மின்சார வாகனத்தை சார்ஜ் செய்யுங்கள். தினமும் காலையில் முழு பேட்டரியுடன் எழுந்திருங்கள் - இனி எரிவாயு நிலைய நிறுத்தங்கள் இல்லை, எரிபொருள் செலவுகள் இல்லை.'}
            </p>
            <p className="body-elegant mb-10">
              {language === 'en'
                ? 'Our EV chargers integrate with your solar system to prioritize charging during peak solar production, maximizing your savings.'
                : 'உங்கள் சேமிப்பை அதிகப்படுத்த, உங்களின் சோலார் சிஸ்டத்துடன் எங்கள் EV சார்ஜர்கள் ஒருங்கிணைக்கப்படுகின்றன.'}
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[#0B1F4A] flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-medium text-[#0B1F4A] text-sm">{feature.title}</p>
                  <p className="text-xs text-[#64748B] mt-1">{feature.description}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-[#0B1F4A] font-medium hover:text-[#FF6A00] transition-colors"
            >
              {language === 'en' ? 'See EV Charger Options' : 'EV சார்ஜர் விருப்பங்களைக் காண்க'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Image */}
          <div>
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/ev_charger.jpg"
                alt="Electric vehicle charging at home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EVChargingSection;
