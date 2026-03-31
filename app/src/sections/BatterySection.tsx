import { Zap, Clock, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BatterySection = () => {
  const { language } = useLanguage();

  const features = language === 'en' ? [
    { icon: Zap, title: 'Storm Backup', description: 'Power during outages' },
    { icon: Clock, title: 'Time-of-Use', description: 'Save on peak rates' },
    { icon: Shield, title: '10-Year Warranty', description: 'Complete coverage' },
  ] : [
    { icon: Zap, title: 'புயல் காப்பு', description: 'மின்தடையின் போது சக்தி' },
    { icon: Clock, title: 'பயன்பாட்டு நேரம்', description: 'உச்ச கட்டணங்களில் சேமிக்கவும்' },
    { icon: Shield, title: '10 ஆண்டு உத்தரவாதம்', description: 'முழுமையான கவரேஜ்' },
  ];

  return (
    <section className="section-padding bg-[#FAFBFC]">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/family_on_couch.jpg"
                alt="Family with battery backup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="label-elegant mb-6">{language === 'en' ? 'Energy Storage' : 'ஆற்றல் சேமிப்பு'}</p>
            <h2 className="heading-section text-[#0B1F4A] mb-8">
              {language === 'en' ? 'Smart Battery Backup' : 'ஸ்மார்ட் பேட்டரி காப்புப் பிரதி'}
            </h2>
            <p className="body-elegant mb-8">
              {language === 'en' 
                ? 'Store excess solar energy for the evening or during power outages. Your home stays powered when the grid goes down, giving you true energy independence.'
                : 'மாலையில் அல்லது மின் தடையின் போது அதிகப்படியான சூரிய ஆற்றலை சேமித்து வைக்கவும். மின் தடை ஏற்படும் போது உங்கள் வீடு தொடர்ந்து இயங்கும், உண்மையான ஆற்றல் சுதந்திரத்தை உங்களுக்கு வழங்கும்.'}
            </p>
            <p className="body-elegant mb-10">
              {language === 'en'
                ? 'Our battery systems integrate seamlessly with your solar panels, automatically switching to backup power during outages without any interruption.'
                : 'எங்கள் பேட்டரி சிஸ்டம்கள் உங்கள் சோலார் பேனல்களுடன் தடையின்றி ஒருங்கிணைக்கின்றன, எந்த குறுக்கீடும் இல்லாமல் மின் தடையின் போது தானாகவே காப்புப் பிரதி சக்திக்கு மாறும்.'}
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
              {language === 'en' ? 'Add Battery Storage' : 'பேட்டரி ஸ்டோரேஜைச் சேர்க்கவும்'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatterySection;
