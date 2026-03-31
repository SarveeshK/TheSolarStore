import { Calculator, IndianRupee, Sun, Zap, Info } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

import { useState } from 'react';

const CalculatorSection = () => {
  const { language } = useLanguage();
  const [bill, setBill] = useState(2500);

  // Constants
  const TARIFF_PER_UNIT = 8; // Avg RS
  const UNITS_PER_KW_MONTHLY = 120; // 4 units/day * 30
  const COST_PER_KW = 60000;
  
  // Calculations
  const monthlyUnits = Math.round(bill / TARIFF_PER_UNIT);
  const recommendedKw = Math.max(1, Math.ceil(monthlyUnits / UNITS_PER_KW_MONTHLY));
  const totalCost = recommendedKw * COST_PER_KW;
  
  // Subsidy calculation (PM Surya Ghar approx)
  let subsidy = 0;
  if (recommendedKw >= 3) subsidy = 78000;
  else if (recommendedKw === 2) subsidy = 60000;
  else if (recommendedKw === 1) subsidy = 30000;

  const finalCost = totalCost - subsidy;
  const yearlySavings = bill * 12;
  const lifetimeSavings = yearlySavings * 25; // 25 years
  const paybackPeriod = (finalCost / yearlySavings).toFixed(1);

  return (
    <section id="calculator" className="section-padding bg-[#FAFBFC] relative border-b border-[#E2E8F0]">
      <div className="container-luxury max-w-5xl">
        <div className="text-center mb-12">
          <p className="label-elegant mb-4">{language === 'en' ? 'Savings Calculator' : 'சேமிப்பு கால்குலேட்டர்'}</p>
          <h2 className="heading-section text-[#0B1F4A]">
            {language === 'en' ? 'Discover Your Solar Potential' : 'உங்கள் சோலார் திறனைக் கண்டறியவும்'}
          </h2>
          <p className="body-elegant mt-4 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Use our interactive calculator to accurately estimate your required system size, total installation costs, and long-term financial savings based on your current electricity bill.'
              : 'உங்கள் தற்போதைய மின் கட்டணத்தின் அடிப்படையில் உங்கள் தேவையான சிஸ்டம் அளவு, மொத்த நிறுவல் செலவுகள் மற்றும் நீண்ட கால நிதி சேமிப்புகளை துல்லியமாக மதிப்பிட எங்கள் ஊடாடும் கால்குலேட்டரைப் பயன்படுத்தவும்.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E2E8F0]">
          {/* Input Side */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#0B1F4A] to-[#1E3A8A] text-white">
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-8 h-8 text-[#FF6A00]" />
              <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                {language === 'en' ? 'Your Energy Profile' : 'உங்கள் ஆற்றல் கோப்பு'}
              </h3>
            </div>

            <div className="space-y-8">
              <div>
                <label className="flex justify-between text-sm font-medium mb-4">
                  <span className="text-white/80">{language === 'en' ? 'Average Monthly Electricity Bill' : 'சராசரி மாதாந்திர மின் கட்டணம்'}</span>
                  <span className="text-2xl font-bold text-[#FF6A00]">₹{bill.toLocaleString()}</span>
                </label>
                <input 
                  type="range" 
                  min="500" 
                  max="15000" 
                  step="500" 
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FF6A00]"
                />
                <div className="flex justify-between text-xs text-white/50 mt-2">
                  <span>₹500</span>
                  <span>₹15,000+</span>
                </div>
              </div>

              <div className="p-6 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-[#FF6A00] flex-shrink-0" />
                  <p className="text-sm text-white/80 leading-relaxed">
                    {language === 'en' ? (
                      <>
                        Based on your bill of <strong className="text-white">₹{bill}</strong>, you consume approximately <strong className="text-white">{monthlyUnits} units</strong> per month. 
                        We recommend a <strong className="text-[#FF6A00]">{recommendedKw} kW</strong> system to completely offset this usage.
                      </>
                    ) : (
                      <>
                        உங்கள் கட்டணம் <strong className="text-white">₹{bill}</strong> அடிப்படையில், நீங்கள் தோராயமாக <strong className="text-white">{monthlyUnits} யூனிட்களை</strong> நெறிக்கிறீர்கள். 
                        இந்த பயன்பாட்டை முழுமையாக ஈடுசெய்ய நாங்கள் <strong className="text-[#FF6A00]">{recommendedKw} kW</strong> சிஸ்டத்தை பரிந்துரைக்கிறோம்.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Side */}
          <div className="p-8 md:p-12 bg-white">
            <h3 className="text-xl font-semibold text-[#0B1F4A] mb-8 border-b pb-4">
              {language === 'en' ? 'Estimated Returns' : 'மதிப்பிடப்பட்ட வருமானம்'}
            </h3>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <div className="flex items-center gap-2 text-[#64748B] mb-2">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">{language === 'en' ? 'System Size' : 'சிஸ்டம் அளவு'}</span>
                </div>
                <p className="text-3xl font-bold text-[#0B1F4A]">{recommendedKw} kW</p>
              </div>

              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <div className="flex items-center gap-2 text-[#64748B] mb-2">
                  <IndianRupee className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">{language === 'en' ? 'Final Cost*' : 'இறுதி செலவு*'}</span>
                </div>
                <p className="text-3xl font-bold text-[#0B1F4A]">₹{(finalCost / 100000).toFixed(1)}L</p>
                <p className="text-[10px] text-[#64748B] mt-1">
                  {language === 'en' ? `After approx ₹${subsidy.toLocaleString()} subsidy` : `தோராயமாக ₹${subsidy.toLocaleString()} மானியத்திற்குப் பிறகு`}
                </p>
              </div>

              <div className="p-4 bg-gradient-to-br from-[#FF6A00]/10 to-transparent border border-[#FF6A00]/20 rounded-xl col-span-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Sun className="w-20 h-20" />
                </div>
                <p className="text-sm text-[#0B1F4A] font-medium mb-1">
                  {language === 'en' ? 'Lifetime Savings (25 Years)' : 'வாழ்நாள் சேமிப்பு (25 ஆண்டுகள்)'}
                </p>
                <p className="text-4xl font-bold text-[#FF6A00] mb-2">
                  ₹{(lifetimeSavings / 100000).toFixed(2)} {language === 'en' ? 'Lakhs' : 'லட்சம்'}
                </p>
                <p className="text-xs text-[#64748B]">
                  {language === 'en' ? 'Payback Period:' : 'திரும்பப் பெறும் காலம்:'} <strong className="text-[#0B1F4A]">{paybackPeriod} {language === 'en' ? 'Years' : 'ஆண்டுகள்'}</strong>
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full btn-luxury flex items-center justify-center gap-2"
            >
              {language === 'en' ? 'Get Detailed Quote' : 'விரிவான மதிப்பீட்டைப் பெறுங்கள்'}
            </button>
            <p className="text-center text-xs text-[#64748B] mt-4">
              {language === 'en' ? '*Estimates are illustrative. Actual costs may vary based on site layout.' : '*மதிப்பீடுகள் விளக்க நோக்கத்திற்காக மட்டுமே. உண்மையான செலவுகள் மாறுபடலாம்.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
