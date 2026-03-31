import { TrendingDown, PiggyBank, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SavingsSection = () => {
  const { language } = useLanguage();

  const benefits = [
    {
      icon: TrendingDown,
      title: language === 'en' ? 'Lower Bills' : 'குறைந்த கட்டணங்கள்',
      value: '20-40%',
      description: language === 'en' ? 'Reduction in monthly electricity costs' : 'மாதாந்திர மின் செலவில் குறைப்பு',
    },
    {
      icon: PiggyBank,
      title: language === 'en' ? 'Payback Period' : 'திரும்பப் பெறும் காலம்',
      value: '3-5',
      description: language === 'en' ? 'Years to recover your investment' : 'உங்கள் முதலீட்டைத் திரும்பப் பெற ஆகும் ஆண்டுகள்',
    },
    {
      icon: TrendingUp,
      title: language === 'en' ? 'Home Value' : 'வீட்டின் மதிப்பு',
      value: '₹5L+',
      description: language === 'en' ? 'Increase in property value' : 'சொத்து மதிப்பு அதிகரிப்பு',
    },
  ];

  return (
    <section id="savings" className="section-padding bg-white">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="label-elegant mb-6">{language === 'en' ? 'Financial Benefits' : 'நிதி நன்மைகள்'}</p>
            <h2 className="heading-section text-[#0B1F4A] mb-8">
              {language === 'en' ? 'Save More with Sunshine' : 'சூரிய ஒளி மூலம் அதிகம் சேமிக்கவும்'}
            </h2>
            <p className="body-elegant mb-8">
              {language === 'en'
                ? 'Reduce your monthly electricity bill, lock in energy costs for decades, and increase your home\'s market value—all with comprehensive warranties that last 25 years.'
                : 'உங்கள் மாதாந்திர மின் கட்டணத்தைக் குறைத்து, பல தசாப்தங்களாக ஆற்றல் செலவுகளைப் பூட்டி, உங்கள் வீட்டின் சந்தை மதிப்பீட்டை அதிகரிக்கவும் - அனைத்தும் 25 ஆண்டுகள் நீடிக்கும் விரிவான உத்தரவாதங்களுடன்.'}
            </p>
            <p className="body-elegant mb-10">
              {language === 'en'
                ? 'With Tamil Nadu\'s abundant sunlight and government subsidies, solar has never been more affordable for homeowners in Erode.'
                : 'தமிழ்நாட்டின் அபரிமிதமான சூரிய ஒளி மற்றும் அரசாங்க மானியங்களுடன், ஈரோட்டில் உள்ள வீட்டு உரிமையாளர்களுக்கு சோலார் இவ்வளவு மலிவாக இருந்ததில்லை.'}
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <benefit.icon className="w-6 h-6 text-[#FF6A00] mx-auto mb-3" />
                  <p className="text-2xl md:text-3xl font-medium text-[#0B1F4A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {benefit.value}
                  </p>
                  <p className="text-xs text-[#64748B] mt-1">{benefit.description}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('panel-catalog')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-[#0B1F4A] font-medium hover:text-[#FF6A00] transition-colors"
            >
              {language === 'en' ? 'See All Pricing' : 'அனைத்து விலைகளையும் காண்க'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Image */}
          <div className="mb-10 lg:mb-0">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/family_at_door.jpg"
                  alt="Happy family with savings"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Savings Badge */}
              <div className="absolute bottom-0 right-0 lg:-bottom-6 lg:-right-6 bg-[#0B1F4A] text-white p-6 md:p-8">
                <p className="text-sm text-white/70 mb-1">{language === 'en' ? 'Average Monthly Savings' : 'சராசரி மாதாந்திர சேமிப்பு'}</p>
                <p className="text-2xl md:text-3xl font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>₹4,500 - ₹6,000</p>
                <p className="text-xs text-white/70 mt-2">{language === 'en' ? 'with a 5kW system' : '5kW சிஸ்டத்துடன்'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsSection;
