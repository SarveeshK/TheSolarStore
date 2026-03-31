import { Award, Wind, CloudRain, Sun, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const DurabilitySection = () => {
  const { language } = useLanguage();

  const features = language === 'en' ? [
    { icon: Sun, title: 'UV Resistant', description: 'Withstands harsh sun' },
    { icon: CloudRain, title: 'Waterproof', description: 'Monsoon ready' },
    { icon: Wind, title: 'Wind Tested', description: 'Up to 150 km/h' },
  ] : [
    { icon: Sun, title: 'UV எதிர்ப்பு', description: 'கடுமையான வெயிலைத் தாங்கும்' },
    { icon: CloudRain, title: 'நீர்ப்புகா', description: 'மழைக்காலத்திற்குத் தயாரானது' },
    { icon: Wind, title: 'காற்று சோதிக்கப்பட்டது', description: '150 கிமீ/மணி வரை' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="label-elegant mb-6">{language === 'en' ? 'Built to Last' : 'நீடித்து உழைக்கக் கட்டப்பட்டது'}</p>
            <h2 className="heading-section text-[#0B1F4A] mb-8">
              {language === 'en' ? 'Power That Lasts' : 'நிலைத்திருக்கும் ஆற்றல்'}
            </h2>
            <p className="body-elegant mb-8">
              {language === 'en'
                ? 'Our solar panels are engineered to withstand Tamil Nadu\'s extreme weather—from scorching summers to heavy monsoons. Built with premium materials for decades of reliable performance.'
                : 'எங்கள் சோலார் பேனல்கள் தமிழ்நாட்டின் கடுமையான வானிலையைத் தாங்கும் வகையில் வடிவமைக்கப்பட்டுள்ளன—கொளுத்தும் கோடை முதல் கடுமையான மழைக்காலம் வரை. பத்தாண்டுகள் நம்பகமான செயல்திறனுக்காக பிரீமியம் பொருட்களால் கட்டப்பட்டது.'}
            </p>
            <p className="body-elegant mb-10">
              {language === 'en'
                ? 'Every installation comes with comprehensive warranty coverage and dedicated local support from our Erode service center.'
                : 'ஒவ்வொரு நிறுவலும் விரிவான உத்தரவாத கவரேஜ் மற்றும் எங்களின் ஈரோடு சேவை மையத்திலிருந்து உள்ளூர் ஆதரவுடன் வருகிறது.'}
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

            {/* Warranty Badge */}
            <div className="flex items-center gap-4 bg-[#FAFBFC] p-6 mb-10">
              <Award className="w-10 h-10 text-[#FF6A00]" />
              <div>
                <p className="font-medium text-[#0B1F4A]">{language === 'en' ? '25-Year Performance Warranty' : '25 ஆண்டு செயல்திறன் உத்தரவாதம்'}</p>
                <p className="text-sm text-[#64748B]">{language === 'en' ? 'Guaranteed power output for decades' : 'பல தசாப்தங்களாக உத்தரவாதமான சக்தி வெளியீடு'}</p>
              </div>
            </div>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-[#0B1F4A] font-medium hover:text-[#FF6A00] transition-colors"
            >
              {language === 'en' ? 'Read Warranty Details' : 'உத்தரவாதம் குறித்த விவரங்களைப் படிக்கவும்'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Image */}
          <div>
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/house_exterior.jpg"
                alt="Durable solar installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DurabilitySection;
