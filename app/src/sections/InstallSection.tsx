import { FileText, Wrench, Power, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const InstallSection = () => {
  const { language } = useLanguage();

  const steps = language === 'en' ? [
    { number: '01', icon: FileText, title: 'Design & Permit', description: 'Site survey and approvals' },
    { number: '02', icon: Wrench, title: 'Installation', description: 'One-day professional setup' },
    { number: '03', icon: Power, title: 'Power On', description: 'Start saving immediately' },
  ] : [
    { number: '01', icon: FileText, title: 'வடிவமைப்பு மற்றும் அனுமதி', description: 'தள ஆய்வு மற்றும் ஒப்புதல்கள்' },
    { number: '02', icon: Wrench, title: 'நிறுவல்', description: 'ஒரு நாள் தொழில்முறை அமைவு' },
    { number: '03', icon: Power, title: 'பவர் ஆன்', description: 'உடனடியாக சேமிக்கத் தொடங்குங்கள்' },
  ];

  return (
    <section className="section-padding bg-[#FAFBFC]">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/installer_roof.jpg"
                alt="Professional installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="label-elegant mb-6">{language === 'en' ? 'Hassle-Free' : 'தடையற்றது'}</p>
            <h2 className="heading-section text-[#0B1F4A] mb-8">
              {language === 'en' ? 'Install in a Day' : 'ஒரே நாளில் நிறுவுங்கள்'}
            </h2>
            <p className="body-elegant mb-8">
              {language === 'en' 
                ? 'We handle everything from permits to installation. Our certified technicians complete most residential installations in just one day, with minimal disruption to your home.'
                : 'அனுமதிகள் முதல் நிறுவல் வரை அனைத்தையும் நாங்கள் கையாளுகிறோம். எங்கள் சான்றளிக்கப்பட்ட தொழில்நுட்ப வல்லுநர்கள் உங்கள் வீட்டிற்கு குறைந்தபட்ச இடையூறுகளுடன் ஒரு நாளில் பெரும்பாலான குடியிருப்பு நிறுவல்களை முடிக்கிறார்கள்.'}
            </p>
            <p className="body-elegant mb-10">
              {language === 'en'
                ? 'No need to coordinate with multiple contractors. We manage the entire process, ensuring a smooth transition to solar power.'
                : 'பல ஒப்பந்ததாரர்களுடன் ஒருங்கிணைக்க வேண்டிய அவசியமில்லை. சோலார் சக்திக்கு மாறுவதை உறுதிசெய்து, முழு செயல்முறையையும் நாங்கள் நிர்வகிக்கிறோம்.'}
            </p>

            {/* Steps */}
            <div className="space-y-6 mb-10">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#0B1F4A] flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs text-[#FF6A00] font-medium">{language === 'en' ? 'STEP' : 'படி'} {step.number}</span>
                      <h4 className="font-medium text-[#0B1F4A]">{step.title}</h4>
                    </div>
                    <p className="text-sm text-[#64748B]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-[#0B1F4A] font-medium hover:text-[#FF6A00] transition-colors"
            >
              {language === 'en' ? 'Start Your Installation' : 'உங்கள் நிறுவலைத் தொடங்குங்கள்'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallSection;
