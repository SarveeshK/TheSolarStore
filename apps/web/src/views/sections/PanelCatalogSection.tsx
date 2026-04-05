import { Check, Zap, Battery, ChevronDown, ChevronUp, Star, Info } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Solar panel brands data
const panelBrands = [
  {
    name: 'Adani Solar',
    logo: 'https://www.google.com/s2/favicons?domain=adanisolar.com&sz=128',
    country: 'India',
    efficiency: '19.0% - 21.0%',
    warranty: '25 Years',
    type: 'Monocrystalline',
    rating: 4.8,
    description: 'Cutting-edge manufacturing with high-efficiency cells and excellent low-light performance.',
  },
  {
    name: 'Waaree Energies',
    logo: 'https://www.google.com/s2/favicons?domain=waaree.com&sz=128',
    country: 'India',
    efficiency: '18.5% - 20.5%',
    warranty: '25 Years',
    type: 'Monocrystalline',
    rating: 4.7,
    description: 'India\'s largest solar panel manufacturer with proven performance across climates.',
  },
  {
    name: 'Luminous Power',
    logo: 'https://www.google.com/s2/favicons?domain=luminousindia.com&sz=128',
    country: 'India',
    efficiency: '18.0% - 20.0%',
    warranty: '25 Years',
    type: 'Polycrystalline',
    rating: 4.6,
    description: 'Reliable and cost-effective solutions perfect for budget-conscious homeowners.',
  },
  {
    name: 'Vikram Solar',
    logo: 'https://www.google.com/s2/favicons?domain=vikramsolar.com&sz=128',
    country: 'India',
    efficiency: '19.0% - 21.0%',
    warranty: '25 Years',
    type: 'Monocrystalline',
    rating: 4.7,
    description: 'Premium quality panels with advanced cell technology and superior durability.',
  },
  {
    name: 'RenewSys Solar',
    logo: 'https://www.google.com/s2/favicons?domain=renewsysworld.com&sz=128',
    country: 'India',
    efficiency: '18.5% - 20.5%',
    warranty: '25 Years',
    type: 'Monocrystalline',
    rating: 4.5,
    description: 'Innovative solar solutions with excellent temperature coefficient performance.',
  },
  {
    name: 'Goldi Solar',
    logo: 'https://www.google.com/s2/favicons?domain=goldisolar.com&sz=128',
    country: 'India',
    efficiency: '19.0% - 21.0%',
    warranty: '25 Years',
    type: 'Monocrystalline',
    rating: 4.6,
    description: 'High-quality solar modules with advanced manufacturing technology and global standards.',
  },
  {
    name: 'Rayzon Solar',
    logo: 'https://www.google.com/s2/favicons?domain=rayzonsolar.com&sz=128',
    country: 'India',
    efficiency: '18.5% - 20.5%',
    warranty: '25 Years',
    type: 'Monocrystalline',
    rating: 4.5,
    description: 'Innovative and highly efficient solar panels designed for maximum energy yield.',
  },
  {
    name: 'Panasonic',
    logo: 'https://www.google.com/s2/favicons?domain=panasonic.com&sz=128',
    country: 'Japan',
    efficiency: '20.0% - 22.0%',
    warranty: '25 Years',
    type: 'Monocrystalline',
    rating: 4.9,
    description: 'Premium high-efficiency solar panels with industry-leading temperature coefficient and reliability.',
  },
  {
    name: 'Tata Power Solar',
    logo: 'https://www.google.com/s2/favicons?domain=tatapowersolar.com&sz=128',
    country: 'India',
    efficiency: '19.5% - 21.5%',
    warranty: '25 Years',
    type: 'Monocrystalline',
    rating: 4.9,
    description: 'India\'s most trusted solar brand with world-class technology and unmatched reliability.',
  },
];

// System sizes with pricing
const systemSizes = [
  {
    kw: 3,
    title: '3 kW System',
    subtitle: 'Small Homes',
    price: '₹2,05,000',
    originalPrice: '₹2,45,000',
    panels: '6-7 Panels',
    area: '200 sq ft',
    generation: '12-15 units/day',
    savings: '₹2,500-3,500/month',
    payback: '4-5 years',
    features: [
      'Ideal for 2-3 BHK homes',
      'Runs AC, fridge, lights & fans',
      'Net metering enabled',
      '25-year panel warranty',
    ],
    recommended: false,
  },
  {
    kw: 5,
    title: '5 kW System',
    subtitle: 'Most Popular',
    price: '₹3,19,500',
    originalPrice: '₹3,25,000',
    panels: '10-12 Panels',
    area: '350 sq ft',
    generation: '20-25 units/day',
    savings: '₹4,500-6,000/month',
    payback: '3.5-4.5 years',
    features: [
      'Perfect for 3-4 BHK homes',
      'Runs 2 ACs + all appliances',
      'Battery backup ready',
      'Government subsidy eligible',
    ],
    recommended: true,
  },
  {
    kw: 8,
    title: '8 kW System',
    subtitle: 'Large Homes',
    price: '₹5,14,200',
    originalPrice: '₹5,20,000',
    panels: '16-18 Panels',
    area: '550 sq ft',
    generation: '32-40 units/day',
    savings: '₹7,500-10,000/month',
    payback: '3-4 years',
    features: [
      'For villas & large homes',
      'Runs multiple ACs & EV charger',
      'High-capacity battery option',
      'Commercial grade inverters',
    ],
    recommended: false,
  },
  {
    kw: 10,
    title: '10 kW System',
    subtitle: 'Premium',
    price: '₹6,20,000',
    originalPrice: '₹6,50,000',
    panels: '20-22 Panels',
    area: '700 sq ft',
    generation: '40-50 units/day',
    savings: '₹9,500-12,500/month',
    payback: '3-4 years',
    features: [
      'For luxury homes & small offices',
      'Complete energy independence',
      'Smart monitoring included',
      'Priority installation service',
    ],
    recommended: false,
  },
];

import { useState } from 'react';

const PanelCatalogSection = () => {
  const { language } = useLanguage();
  const [expandedBrand, setExpandedBrand] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<number>(5);

  const toggleBrand = (index: number) => {
    setExpandedBrand(expandedBrand === index ? null : index);
  };

  return (
    <section id="panel-catalog" className="section-padding bg-white">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="label-elegant mb-6">{language === 'en' ? 'Solar Panel Catalog' : 'சோலார் பேனல் பட்டியல்'}</p>
          <h2 className="heading-section text-[#0B1F4A] mb-6">
            {language === 'en' ? 'Choose Your System Size' : 'உங்கள் சிஸ்டம் அளவைத் தேர்ந்தெடுக்கவும்'}
          </h2>
          <p className="body-elegant">
            {language === 'en'
              ? 'Select from our range of premium solar panel systems designed for homes in Erode. All systems include installation, net metering setup, and comprehensive warranty.'
              : 'ஈரோட்டில் உள்ள வீடுகளுக்காக வடிவமைக்கப்பட்ட எங்கள் பிரீமியம் சோலார் சிஸ்டங்களில் ஒன்றைத் தேர்ந்தெடுக்கவும். அனைத்து சிஸ்டங்களும் நிறுவல், நெட் மீட்டரிங் அமைப்பு மற்றும் விரிவான உத்தரவாதத்தை உள்ளடக்கியது.'}
          </p>
        </div>

        {/* System Size Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {systemSizes.map((size, index) => (
            <div
              key={index}
              className={`card-luxury p-6 cursor-pointer transition-all duration-300 ${
                selectedSize === size.kw
                  ? 'ring-2 ring-[#0B1F4A] shadow-xl'
                  : 'hover:shadow-lg'
              } ${size.recommended ? 'lg:-mt-4 lg:mb-4' : ''}`}
              onClick={() => setSelectedSize(size.kw)}
            >
              {/* Recommended Badge */}
              {size.recommended && (
                <div className="bg-[#FF6A00] text-white text-xs font-medium px-3 py-1 inline-block mb-4">
                  {language === 'en' ? 'MOST POPULAR' : 'மிகவும் பிரபலமானது'}
                </div>
              )}

              {/* Size Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-5 h-5 text-[#FF6A00]" />
                  <span className="text-3xl font-medium text-[#0B1F4A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {size.kw} kW
                  </span>
                </div>
                <p className="text-sm text-[#64748B]">{size.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-[#E2E8F0]">
                <p className="text-2xl font-medium text-[#0B1F4A]" style={{ fontFamily: 'Playfair Display, serif' }}>{size.price}</p>
                <p className="text-sm text-[#64748B] line-through">{size.originalPrice}</p>
              </div>

              {/* Specifications */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[#64748B]">{language === 'en' ? 'Panels' : 'பேனல்கள்'}</span>
                  <span className="font-medium text-[#0B1F4A]">{size.panels}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#64748B]">{language === 'en' ? 'Roof Area' : 'கூரை பகுதி'}</span>
                  <span className="font-medium text-[#0B1F4A]">{size.area}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#64748B]">{language === 'en' ? 'Generation' : 'உற்பத்தி'}</span>
                  <span className="font-medium text-[#0B1F4A]">{size.generation}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#64748B]">{language === 'en' ? 'Savings' : 'சேமிப்பு'}</span>
                  <span className="font-medium text-[#10B981]">{size.savings}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {size.features.slice(0, 2).map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0B1F4A]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3 text-sm font-medium transition-all duration-300 ${
                  selectedSize === size.kw
                    ? 'bg-[#0B1F4A] text-white hover:bg-[#FF6A00]'
                    : 'bg-[#F1F5F9] text-[#0B1F4A] hover:bg-[#0B1F4A] hover:text-white'
                }`}
              >
                {language === 'en' ? 'Get Quote' : 'மதிப்பீட்டைப் பெறுங்கள்'}
              </button>
            </div>
          ))}
        </div>

        {/* Brand Selection Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="heading-card text-[#0B1F4A] mb-4">
            {language === 'en' ? 'Premium Solar Panel Brands' : 'பிரீமியம் சோலார் பேனல் பிராண்டுகள்'}
          </h3>
          <p className="body-elegant">
            {language === 'en'
              ? 'We partner with India\'s leading solar panel manufacturers to bring you the best quality, efficiency, and warranty coverage.'
              : 'சிறந்த தரம், செயல்திறன் மற்றும் உத்தரவாதத்தை உங்களுக்கு வழங்குவதற்காக இந்தியாவின் முன்னணி உற்பத்தியாளர்களுடன் நாங்கள் கூட்டுப்பணியாற்றுகிறோம்.'}
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {panelBrands.map((brand, index) => (
            <div
              key={index}
              className="card-luxury overflow-hidden"
            >
              {/* Brand Header */}
              <div
                className="p-6 cursor-pointer bg-[#FAFBFC]"
                onClick={() => toggleBrand(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Brand Logo/Initial */}
                    <div className="w-12 h-12 rounded bg-[#0B1F4A] flex-shrink-0 flex items-center justify-center text-white font-medium text-xl relative overflow-hidden">
                      <span className="absolute inset-0 z-0 flex items-center justify-center bg-[#0B1F4A]">
                        {brand.name.charAt(0)}
                      </span>
                      {brand.logo && (
                        <img 
                          src={brand.logo} 
                          alt={brand.name} 
                          className="w-full h-full object-contain bg-white p-1 relative z-10 transition-opacity duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.opacity = '0';
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#0B1F4A]">{brand.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="w-3 h-3 text-[#FF6A00] fill-[#FF6A00]" />
                        <span className="text-xs text-[#64748B]">{brand.rating}</span>
                      </div>
                    </div>
                  </div>
                  {expandedBrand === index ? (
                    <ChevronUp className="w-5 h-5 text-[#64748B]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#64748B]" />
                  )}
                </div>
              </div>

              {/* Brand Details */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedBrand === index ? 'max-h-80' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-[#E2E8F0]">
                  <p className="text-sm text-[#64748B] mb-4">{brand.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-[#64748B] mb-1">{language === 'en' ? 'Efficiency' : 'செயல்திறன்'}</p>
                      <p className="font-medium text-[#0B1F4A]">{brand.efficiency}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#64748B] mb-1">{language === 'en' ? 'Warranty' : 'உத்தரவாதம்'}</p>
                      <p className="font-medium text-[#0B1F4A]">{brand.warranty}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full py-2 bg-[#0B1F4A] text-white text-sm font-medium hover:bg-[#FF6A00] transition-colors"
                  >
                    {language === 'en' ? 'Request Quote' : 'மதிப்பீட்டைக் கோருங்கள்'}
                  </button>
                </div>
              </div>

              {/* Quick Specs */}
              {expandedBrand !== index && (
                <div className="px-6 pb-4 flex items-center gap-4 text-xs text-[#64748B]">
                  <span className="flex items-center gap-1">
                    <Battery className="w-3 h-3" />
                    {brand.efficiency}
                  </span>
                  <span className="flex items-center gap-1">
                    <Info className="w-3 h-3" />
                    {brand.warranty}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Warranty Info */}
        <div className="mt-16 bg-[#0B1F4A] p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-medium text-[#FF6A00] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>25</p>
              <p className="text-white/80 text-sm">{language === 'en' ? 'Years Panel Warranty' : 'ஆண்டுகள் பேனல் உத்தரவாதம்'}</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-[#FF6A00] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>10</p>
              <p className="text-white/80 text-sm">{language === 'en' ? 'Years Inverter Warranty' : 'ஆண்டுகள் இன்வெர்ட்டர் உத்தரவாதம்'}</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-[#FF6A00] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>5</p>
              <p className="text-white/80 text-sm">{language === 'en' ? 'Years Installation Warranty' : 'ஆண்டுகள் நிறுவல் உத்தரவாதம்'}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[#64748B] mb-4">
            {language === 'en' ? 'Not sure which system size is right for you?' : 'உங்களுக்கு எந்த சிஸ்டம் அளவு சரியானது என்று உறுதியாக தெரியவில்லையா?'}
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-luxury"
          >
            {language === 'en' ? 'Get Free Site Assessment' : 'இலவச தள மதிப்பீட்டைப் பெறுங்கள்'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PanelCatalogSection;
