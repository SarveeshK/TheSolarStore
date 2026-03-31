import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQSection = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = language === 'en' ? [
    {
      question: "How much space do I need on my roof for solar panels?",
      answer: "Generally, you need about 100 square feet of shadow-free roof space per 1 kW of solar capacity. A typical 3 kW system for a home will require roughly 300 square feet of space."
    },
    {
      question: "Will the solar panels produce electricity during monsoon or cloudy days?",
      answer: "Yes! Solar panels work on ambient light. While their efficiency drops slightly during heavy rain or extremely dense clouds, they continue to generate power. Erode gets abundant sunshine most of the year, making it highly optimal."
    },
    {
      question: "What is Net Metering?",
      answer: "Net metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. If your panels generate more electricity than you use during the day, the excess goes to the grid, and your meter spins backward, giving you credits against your night-time usage!"
    },
    {
      question: "How long is the lifespan of a solar installation?",
      answer: "Premium solar panels come with a 25-year performance warranty and are built to last even longer. Inverters typically have a 5-10 year warranty, while the mounting structures are heavily galvanized to withstand decades of weather."
    },
    {
      question: "Do I get power during a grid blackout?",
      answer: "If you have an 'On-Grid' system without batteries, the system automatically shuts down during a blackout for safety reasons. If you want power during outages, we recommend a 'Hybrid' system with battery backup."
    }
  ] : [
    {
      question: "சோலார் பேனல்களுக்கு எனது கூரையில் எவ்வளவு இடம் தேவை?",
      answer: "பொதுவாக, 1 kW சோலார் திறனுக்கு நிழலற்ற கூரையில் சுமார் 100 சதுர அடி இடம் தேவை. ஒரு வீட்டின் வழக்கமான 3 kW சிஸ்டத்திற்கு தோராயமாக 300 சதுர அடி இடம் தேவைப்படும்."
    },
    {
      question: "மழைக்காலம் அல்லது மேகமூட்டமான நாட்களில் சோலார் பேனல்கள் மின்சாரம் தயாரிக்குமா?",
      answer: "ஆம்! சுற்றுப்புற ஒளியில் சோலார் பேனல்கள் வேலை செய்யும். கடுமையான மழை அல்லது மிகவும் அடர்த்தியான மேகங்களின் போது அவற்றின் செயல்திறன் சிறிது குறைந்தாலும், அவை தொடர்ந்து மின்சாரத்தை உருவாக்குகின்றன. ஈரோட்டில் வருடத்தில் பெரும்பாலான நாட்கள் போதிய அளவு சூரிய ஒளி கிடைக்கிறது, இது சோலார் பேனல்களுக்கு மிகவும் உகந்தது."
    },
    {
      question: "நெட் மீட்டரிங் (Net Metering) என்றால் என்ன?",
      answer: "நெட் மீட்டரிங் என்பது சோலார் ஆற்றல் அமைப்பு உரிமையாளர்கள் மின் கட்டமைப்பில் சேர்க்கும் மின்சாரத்தை வரவு வைக்கும் ஒரு பில்லிங் பொறிமுறையாகும். உங்கள் பேனல்கள் பகலில் நீங்கள் பயன்படுத்துவதை விட அதிகமான மின்சாரத்தை உருவாக்கினால், அதிகப்படியான மின்சாரம் கட்டமைப்பிற்குச் செல்லும், மேலும் உங்கள் மீட்டர் பின்னோக்கிச் சுழன்று, உங்கள் இரவு நேரப் பயன்பாட்டிற்கு எதிராக உங்களுக்கு வரவுகளை வழங்கும்!"
    },
    {
      question: "சோலார் நிறுவலின் ஆயுட்காலம் எவ்வளவு?",
      answer: "பிரீமியம் சோலார் பேனல்கள் 25 ஆண்டு செயல்திறன் உத்தரவாதத்துடன் வருகின்றன, மேலும் நீண்ட காலம் நீடிக்கும். இன்வெர்ட்டர்கள் பொதுவாக 5-10 வருட உத்தரவாதத்தைக் கொண்டுள்ளன, மேலும் மவுண்டிங் அமைப்புக்கள் பல தசாப்தங்களாக கடுமையான வானிலையைத் தாங்கும் வகையில் மிகவும் பாதுகாப்பான முறையில் அமைக்கப்பட்டுள்ளன."
    },
    {
      question: "மின் தடை ஏற்படும் போது எனக்கு மின் காப்பு கிடைக்குமா?",
      answer: "பேட்டரிகள் இல்லாத 'On-Grid' சிஸ்டம் உங்களிடம் இருந்தால், பாதுகாப்பு காரணங்களுக்காக மின்வெட்டின் போது சிஸ்டம் தானாகவே நிறுத்தப்படும். மின் தடைகளின் போது மின்சாரம் தேவைப்பட்டால், பேட்டரி காப்புப் பிரதியுடன் கூடிய 'Hybrid' சிஸ்டத்தை பரிந்துரைக்கிறோம்."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white relative">
      <div className="container-luxury max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FAFBFC] mb-6 shadow-sm border border-[#E2E8F0]">
            <HelpCircle className="w-8 h-8 text-[#FF6A00]" />
          </div>
          <p className="label-elegant mb-4">{language === 'en' ? 'Got Questions?' : 'ஏதேனும் கேள்விகள் உள்ளதா?'}</p>
          <h2 className="heading-section text-[#0B1F4A]">
            {language === 'en' ? 'Frequently Asked Questions' : 'அடிக்கடி கேட்கப்படும் கேள்விகள்'}
          </h2>
          <p className="body-elegant mt-4">
            {language === 'en'
              ? 'Everything you need to know about switching to solar energy and how it works for your property.'
              : 'சூரிய ஆற்றலுக்கு மாறுவது மற்றும் உங்கள் சொத்துக்கு அது எவ்வாறு செயல்படுகிறது என்பதைப் பற்றி நீங்கள் தெரிந்து கொள்ள வேண்டிய அனைத்தும்.'}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#0B1F4A] shadow-md bg-[#FAFBFC]' : 'border-[#E2E8F0] bg-white hover:border-[#CBD5E1]'}`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:bg-[#F8FAFC]"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-medium transition-colors ${isOpen ? 'text-[#FF6A00]' : 'text-[#0B1F4A]'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#64748B] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#FF6A00]' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-5 pt-0 text-[#64748B] leading-relaxed border-t border-[#E2E8F0]/50 mt-2 text-sm md:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-[#64748B] mb-4">{language === 'en' ? 'Still have more questions?' : 'இன்னும் அதிக கேள்விகள் உள்ளதா?'}</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[#0B1F4A] font-semibold hover:text-[#FF6A00] underline underline-offset-4 transition-colors"
          >
            {language === 'en' ? 'Contact our Support Team' : 'எங்கள் ஆதரவு குழுவைத் தொடர்பு கொள்ளவும்'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
