import { Smartphone, Bell, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const MonitorSection = () => {
  const { language } = useLanguage();

  const features = language === 'en' ? [
    { icon: TrendingUp, title: 'Real-time Data', description: 'Track production & usage' },
    { icon: Bell, title: 'Smart Alerts', description: 'Get notified instantly' },
    { icon: Smartphone, title: 'Mobile App', description: 'iOS & Android' },
  ] : [
    { icon: TrendingUp, title: 'நிகழ்நேர தரவு', description: 'உற்பத்தி மற்றும் பயன்பாட்டைக் கண்காணிக்கவும்' },
    { icon: Bell, title: 'ஸ்மார்ட் விழிப்பூட்டல்கள்', description: 'உடனடியாக அறிவிப்பைப் பெறுங்கள்' },
    { icon: Smartphone, title: 'மொபைல் ஆப்', description: 'iOS மற்றும் Android' },
  ];

  return (
    <section className="section-padding bg-[#FAFBFC]">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/person_phone.jpg"
                alt="Monitoring solar from phone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="label-elegant mb-6">{language === 'en' ? 'Smart Control' : 'ஸ்மார்ட் கட்டுப்பாடு'}</p>
            <h2 className="heading-section text-[#0B1F4A] mb-8">
              {language === 'en' ? 'Monitor From Your Phone' : 'உங்கள் போனிலிருந்து கண்காணிக்கவும்'}
            </h2>
            <p className="body-elegant mb-8">
              {language === 'en'
                ? 'Track your solar production, energy usage, and savings in real-time from anywhere. Get instant alerts and insights that help you optimize your energy consumption.'
                : 'எங்கிருந்தும் உங்கள் சூரிய உற்பத்தி, ஆற்றல் பயன்பாடு மற்றும் சேமிப்புகளை நிகழ்நேரத்தில் கண்காணிக்கவும். உங்கள் ஆற்றல் நுகர்வை மேம்படுத்த உதவும் உடனடி விழிப்பூட்டல்களையும் நுண்ணறிவுகளையும் பெறுங்கள்.'}
            </p>
            <p className="body-elegant mb-10">
              {language === 'en'
                ? 'Our intuitive mobile app puts complete control of your solar system in the palm of your hand. Available for both iOS and Android devices.'
                : 'எங்கள் உள்ளுணர்வு மொபைல் பயன்பாடு உங்கள் சோலார் அமைப்பின் முழுமையான கட்டுப்பாட்டையும் உங்கள் உள்ளங்கையில் வைக்கிறது. iOS மற்றும் Android சாதனங்களுக்கு கிடைக்கிறது.'}
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
              {language === 'en' ? 'Learn About Monitoring' : 'கண்காணிப்பு பற்றி அறிக'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitorSection;
