import { Sun, Home, IndianRupee, FileText, CheckCircle2, Factory, Banknote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PmSuryaGharSection = () => {
  const { language } = useLanguage();

  const schemeFeatures = [
    {
      icon: <Sun className="w-6 h-6" />,
      title: language === 'en' ? 'Up to 300 Units Free' : '300 யூனிட்கள் வரை இலவசம்',
      description: language === 'en' ? 'Enjoy up to 300 units of free electricity every month, significantly reducing or eliminating your monthly power bills.' : 'ஒவ்வொரு மாதமும் 300 யூனிட்கள் வரை இலவச மின்சாரத்தை அனுபவிக்கவும், இது உங்கள் மாதாந்திர மின் கட்டணத்தை கணிசமாகக் குறைக்கிறது.',
    },
    {
      icon: <IndianRupee className="w-6 h-6" />,
      title: language === 'en' ? 'Maximum Subsidy' : 'அதிகபட்ச மானியம்',
      description: language === 'en' ? 'Get up to ₹78,000 as a direct subsidy in your bank account for installing a 3 kW solar plant under the scheme.' : 'திட்டத்தின் கீழ் 3 kW சோலார் ஆலையை நிறுவுவதற்கு உங்கள் வங்கிக் கணக்கில் நேரடி மானியமாக ₹78,000 வரை பெறுங்கள்.',
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: language === 'en' ? 'For Every Household' : 'ஒவ்வொரு குடும்பத்திற்கும்',
      description: language === 'en' ? 'A nationwide initiative aiming to light up 1 crore households with clean, reliable, and free solar energy.' : 'தூய்மையான, நம்பகமான மற்றும் இலவச சோலார் ஆற்றலுடன் 1 கோடி வீடுகளை ஒளிரச் செய்யும் நாடு தழுவிய முயற்சி.',
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: language === 'en' ? 'Low-Interest Loans' : 'குறைந்த வட்டி கடன்கள்',
      description: language === 'en' ? 'Access collateral-free, low-interest loan products at around 7% to cover the remaining installation costs.' : 'மீதமுள்ள நிறுவல் செலவுகளை ஈடுகட்ட சுமார் 7% என்ற அளவில் பிணையமில்லாத, குறைந்த வட்டி கடன் தயாரிப்புகளை அணுகவும்.',
    }
  ];

  const schemeSteps = [
    {
      icon: <FileText className="w-5 h-5 text-white" />,
      title: language === 'en' ? 'Registration' : 'பதிவு',
      description: language === 'en' ? 'Register on the National Portal with your electricity bill, consumer number, and details.' : 'உங்கள் மின் கட்டணம், நுகர்வோர் எண் மற்றும் விவரங்களுடன் தேசிய போர்ட்டலில் பதிவு செய்யவும்.',
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-white" />,
      title: language === 'en' ? 'Approval' : 'ஒப்புதல்',
      description: language === 'en' ? 'Wait for feasibility approval from your local DISCOM before proceeding with the installation.' : 'நிறுவுவதை தொடர்வதற்கு முன் உங்கள் உள்ளூர் DISCOM இலிருந்து சாத்தியக்கூறு ஒப்புதலுக்காக காத்திருக்கவும்.',
    },
    {
      icon: <Factory className="w-5 h-5 text-white" />,
      title: language === 'en' ? 'Installation' : 'நிறுவல்',
      description: language === 'en' ? 'Get the solar plant installed through our registered and empanelled expert vendors.' : 'எங்கள் பதிவு செய்யப்பட்ட மற்றும் புகழ்பெற்ற நிபுணர் விற்பனையாளர்கள் மூலம் சோலார் ஆலையை நிறுவுங்கள்.',
    },
    {
      icon: <IndianRupee className="w-5 h-5 text-white" />,
      title: language === 'en' ? 'Subsidy Disbursal' : 'மானியம் வழங்குதல்',
      description: language === 'en' ? 'Submit commissioning certificate and get the subsidy credited to your bank account within 30 days.' : 'ஆணையிடும் சான்றிதழைச் சமர்ப்பித்து 30 நாட்களுக்குள் உங்கள் வங்கிக் கணக்கில் மானிய வரவு வைக்கப்படும்.',
    }
  ];

  return (
    <section id="pm-surya-ghar" className="section-padding bg-[#0B1F4A] text-white relative overflow-hidden">
      {/* Abstract Background Enhancements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A00] opacity-10 blur-[100px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E3A8A] opacity-30 blur-[100px] rounded-full pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      <div className="container-luxury relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-[#FF6A00]"></span>
            <span className="text-[#FF6A00] uppercase tracking-widest text-sm font-semibold">{language === 'en' ? 'Government Initiative' : 'அரசு முயற்சி'}</span>
            <span className="w-12 h-[1px] bg-[#FF6A00]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            {language === 'en' ? 'PM-Surya Ghar' : 'PM-சூர்ய கர்'} <br className="hidden md:block" />
            <span className="text-[#FF6A00] italic">{language === 'en' ? 'Muft Bijli Yojana' : 'முஃப்த் பிஜ்லி யோஜனா'}</span>
          </h2>
          <p className="text-lg text-white/80 leading-relaxed font-light">
            {language === 'en' 
              ? 'A revolutionary scheme launched by the Honourable Prime Minister to provide up to 300 units of free electricity every month to 1 crore households, along with substantial direct subsidies.'
              : '1 கோடி வீடுகளுக்கு ஒவ்வொரு மாதமும் 300 யூனிட்கள் வரை இலவச மின்சாரம் மற்றும் கணிசமான நேரடி மானியங்களை வழங்குவதற்காக மாண்புமிகு பிரதமர் தொடங்கிய புரட்சிகரமான திட்டம்.'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {schemeFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group rounded-xl"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-[#FF6A00] mb-6 group-hover:scale-110 group-hover:bg-[#FF6A00] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Subsidy Structure & Workflow */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Subsidy Info */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-medium mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              {language === 'en' ? 'Understand Your' : 'உங்கள் மானியத்தைப்'} <span className="text-[#FF6A00]">{language === 'en' ? 'Subsidy' : 'புரிந்து கொள்ளுங்கள்'}</span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-white/5 to-transparent border-l-4 border-[#FF6A00] rounded-r-xl">
                <div>
                  <p className="text-white/60 text-sm mb-1 uppercase tracking-wider">{language === 'en' ? 'System Size' : 'சிஸ்டம் அளவு'}</p>
                  <p className="text-xl font-medium">{language === 'en' ? 'Up to 2 kW' : '2 kW வரை'}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/60 text-sm mb-1 uppercase tracking-wider">{language === 'en' ? 'Subsidy Amount' : 'மானியத் தொகை'}</p>
                  <p className="text-2xl font-semibold text-[#FF6A00]">₹30,000 / kW</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-white/5 to-transparent border-l-4 border-[#FF6A00] rounded-r-xl">
                <div>
                  <p className="text-white/60 text-sm mb-1 uppercase tracking-wider">{language === 'en' ? 'System Size' : 'சிஸ்டம் அளவு'}</p>
                  <p className="text-xl font-medium">{language === 'en' ? 'Additional 1 kW' : 'கூடுதல் 1 kW'}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/60 text-sm mb-1 uppercase tracking-wider">{language === 'en' ? 'Subsidy Amount' : 'மானியத் தொகை'}</p>
                  <p className="text-2xl font-semibold text-[#FF6A00]">₹18,000 / kW</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-[#FF6A00]/10 border border-[#FF6A00]/20 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00]/0 to-[#FF6A00]/5 pointer-events-none"></div>
                <div className="relative z-10">
                  <p className="text-white/80 text-sm mb-1 uppercase tracking-wider">{language === 'en' ? 'System Size' : 'சிஸ்டம் அளவு'}</p>
                  <p className="text-xl font-medium text-[#FF6A00]">{language === 'en' ? 'Maximum (3 kW+)' : 'அதிகபட்சம் (3 kW+)'}</p>
                </div>
                <div className="text-right relative z-10">
                  <p className="text-white/80 text-sm mb-1 uppercase tracking-wider">{language === 'en' ? 'Total Subsidy' : 'மொத்த மானியம்'}</p>
                  <p className="text-3xl font-bold text-[#FF6A00]">₹78,000</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-xl text-xs text-white/50 border border-white/10 uppercase tracking-wider">
              {language === 'en' ? '* Subject to terms and conditions set by the National Portal guidelines' : '* தேசிய போர்ட்டல் வழிகாட்டுதல்களால் அமைக்கப்பட்ட விதிமுறைகள் மற்றும் நிபந்தனைகளுக்கு உட்பட்டது'}
            </div>
          </div>

          {/* Workflow */}
          <div className="order-1 lg:order-2 bg-white/5 p-8 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6A00]/5 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-medium mb-8 relative z-10" style={{ fontFamily: 'Playfair Display, serif' }}>
              {language === 'en' ? 'How to' : 'எப்படி'} <span className="text-[#FF6A00]">{language === 'en' ? 'Apply?' : 'விண்ணப்பிப்பது?'}</span>
            </h3>

            <div className="space-y-8 relative z-10 mb-8">
              {/* Connecting Line */}
              <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#FF6A00] to-transparent"></div>

              {schemeSteps.map((step, index) => (
                <div key={index} className="flex gap-6 relative group">
                  <div className="w-12 h-12 rounded-full bg-[#0B1F4A] border-2 border-[#FF6A00] flex items-center justify-center shrink-0 z-10 shadow-[0_0_15px_rgba(255,106,0,0.1)] group-hover:shadow-[0_0_20px_rgba(255,106,0,0.5)] transition-shadow duration-300">
                    {step.icon}
                  </div>
                  <div className="pt-1">
                    <h4 className="text-lg font-semibold mb-1 text-white group-hover:text-[#FF6A00] transition-colors duration-300">
                      {language === 'en' ? `Step ${index + 1}:` : `படி ${index + 1}:`} {step.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 bg-[#FF6A00] text-white rounded font-semibold tracking-wide hover:bg-[#e65c00] transition-colors duration-300 shadow-[0_4px_20px_rgba(255,106,0,0.3)] hover:shadow-[0_6px_25px_rgba(255,106,0,0.4)]"
              >
                {language === 'en' ? 'Check Eligibility & Get Quote' : 'தகுதியைச் சரிபார்த்து மதிப்பீட்டைப் பெறுங்கள்'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PmSuryaGharSection;
