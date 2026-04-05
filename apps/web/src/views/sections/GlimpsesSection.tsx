import { useLanguage } from '@/contexts/LanguageContext';

const images = [
  '/house_exterior.jpg',
  '/house_dusk.jpg',
  '/house_with_panels.jpg',
  '/hero_family_lawn.jpg',
  '/installer_roof.jpg',
  '/family_at_door.jpg',
  '/family_sitting_lawn.jpg',
];

const GlimpsesSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 lg:py-28 overflow-hidden bg-[#FAFBFC] border-y border-[#E2E8F0]">
      <div className="container-luxury mb-12 text-center">
        <p className="label-elegant mb-4">
          {language === 'en' ? 'Portfolio' : 'பணிகள்'}
        </p>
        <h2 className="heading-section text-[#0B1F4A]">
          {language === 'en' ? 'Glimpses of Our Work' : 'எங்கள் பணிகளின் பார்வைகள்'}
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] gap-4 sm:gap-6 px-4">
          {/* Double the images to create perfect infinite scroll */}
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="relative w-72 sm:w-80 md:w-96 aspect-[4/3] rounded-2xl overflow-hidden shrink-0 shadow-lg"
            >
              <img
                src={src}
                alt="Solar Installation"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <p className="text-white font-medium">{language === 'en' ? 'Premium Solar Setup' : 'பிரீமியம் சோலார் அமைப்பு'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlimpsesSection;
