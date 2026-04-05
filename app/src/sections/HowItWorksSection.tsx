import { Sun, Home, Battery, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorksSection = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const steps = [
    {
      number: '01',
      icon: Sun,
      title: language === 'en' ? 'Capture Sunlight' : 'சூரிய ஒளியை பிடிப்பது',
      description: language === 'en' 
        ? 'Solar panels on your roof capture sunlight and convert it into DC electricity throughout the day.'
        : 'உங்கள் கூரையில் உள்ள சோலார் பேனல்கள் சூரிய ஒளியைப் பிடித்து நாள் முழுவதும் DC மின்சாரமாக மாற்றுகின்றன.',
    },
    {
      number: '02',
      icon: Home,
      title: language === 'en' ? 'Power Your Home' : 'உங்கள் இல்லத்திற்கு சக்தி',
      description: language === 'en'
        ? 'The inverter converts DC to AC electricity, powering all your home appliances in real-time.'
        : 'இன்வெர்ட்டர் DCயை AC மின்சாரமாக மாற்றி, நிகழ்நேரத்தில் உங்கள் வீட்டு உபகரணங்கள் அனைத்தையும் இயக்குகிறது.',
    },
    {
      number: '03',
      icon: Battery,
      title: language === 'en' ? 'Store & Save' : 'சேமித்து வையுங்கள்',
      description: language === 'en'
        ? 'Extra energy charges your battery for nighttime use or feeds back to the grid for credits.'
        : 'கூடுதல் சக்தி உங்கள் பேட்டரியை இரவில் பயன்படுத்துவதற்கு சார்ஜ் செய்கிறது அல்லது கிரெடிட்டுகளுக்காக மீண்டும் கிரிட்டிற்கு அனுப்புகிறது.',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-[#FAFBFC]">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="label-elegant mb-6">{language === 'en' ? 'Simple Process' : 'எளிய செயல்முறை'}</p>
          <h2 className="heading-section text-[#0B1F4A] mb-6">
            {language === 'en' ? 'How Solar Works' : 'சோலார் எப்படி வேலை செய்கிறது'}
          </h2>
          <p className="body-elegant">
            {language === 'en'
              ? 'Switching to solar is easier than you think. Our streamlined process gets you powered by the sun in just three simple steps.'
              : 'சோலார் மாறுவது நீங்கள் நினைப்பதை விட எளிதானது. எங்கள் நெறிப்படுத்தப்பட்ட செயல்முறை மூன்று எளிய படிகளில் உங்களை சூரியனால் இயக்க வைக்கிறது.'}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="card-luxury p-8 md:p-10 group">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0B1F4A] to-[#1a3673] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-5xl font-light text-[#E2E8F0] group-hover:text-[#FF6A00]/20 transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {step.number}
                </span>
              </div>
              <h3 className="heading-card text-[#0B1F4A] mb-4">{step.title}</h3>
              <p className="body-elegant text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => navigate('/contact#contact')}
            className="btn-luxury"
          >
            {language === 'en' ? 'Get Your Custom Design' : 'உங்கள் தனிப்பயன் வடிவமைப்பைப் பெறுங்கள்'} <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
