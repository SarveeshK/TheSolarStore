import { MessageCircle, X, ChevronRight, ChevronLeft, Home, Zap, MapPin, CheckCircle } from 'lucide-react';
import { useWhatsAppLeadViewModel, Step } from '@/features/leads/viewModels/useWhatsAppLeadViewModel';

const roofOptions = [
  { label: '1 BHK / Small Flat', labelTa: '1 BHK / சிறிய வீடு', size: '1–2 kW', value: '1-2kW' },
  { label: '2 BHK / Medium Home', labelTa: '2 BHK / நடுத்தர வீடு', size: '2–4 kW', value: '2-4kW' },
  { label: '3 BHK / Large Home', labelTa: '3 BHK / பெரிய வீடு', size: '4–6 kW', value: '4-6kW' },
  { label: 'Villa / Commercial', labelTa: 'வில்லா / வணிகம்', size: '6+ kW', value: '6+kW' },
];

const billOptions = [
  { label: 'Below ₹1,000', labelTa: '₹1,000க்கு கீழ்', value: 'below-1000' },
  { label: '₹1,000 – ₹3,000', labelTa: '₹1,000 – ₹3,000', value: '1000-3000' },
  { label: '₹3,000 – ₹6,000', labelTa: '₹3,000 – ₹6,000', value: '3000-6000' },
  { label: 'Above ₹6,000', labelTa: '₹6,000க்கு மேல்', value: 'above-6000' },
];

const WhatsAppQuoteForm = () => {
  const {
    isOpen, setIsOpen,
    step, setStep,
    selectedRoof, setSelectedRoof,
    selectedBill, setSelectedBill,
    location, setLocation,
    handleClose, handleSend,
    progressPercent, en
  } = useWhatsAppLeadViewModel();

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-[60] flex items-center gap-2 bg-[#25D366] text-white p-3.5 md:px-5 md:py-3.5 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.55)] hover:-translate-y-1 transition-all duration-300 font-semibold text-sm border-2 border-white/20"
        aria-label="Get Quote"
      >
        <MessageCircle className="w-6 h-6 md:w-5 md:h-5" />
        <span className="hidden sm:block">{en ? 'Get Quote' : 'மதிப்பீடு பெறுங்கள்'}</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
          
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{en ? 'WhatsApp Quote' : 'வாட்ஸ்அப் மதிப்பீடு'}</p>
                  <p className="text-white/80 text-xs">{en ? 'Get your custom solar quote in 60 seconds' : '60 வினாடியில் மதிப்பீடு பெறுங்கள்'}</p>
                </div>
              </div>
              <button onClick={handleClose} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 bg-gray-100">
              <div
                className="h-full bg-gradient-to-r from-[#25D366] to-[#128C7E] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="px-6 py-6">
              {/* Step Indicator */}
              <p className="text-xs text-[#64748B] mb-4 font-medium">
                {en ? `Step ${step} of 3` : `படி ${step} / 3`}
              </p>

              {/* — STEP 1: Roof Size — */}
              {step === 1 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Home className="w-5 h-5 text-[#FF6A00]" />
                    <h3 className="font-semibold text-[#0B1F4A]">{en ? 'What type of home do you have?' : 'உங்கள் வீட்டு வகை என்ன?'}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {roofOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => setSelectedRoof(opt.value)}
                        className={`p-3 rounded-2xl border-2 text-left transition-all duration-200 ${
                          selectedRoof === opt.value
                            ? 'border-[#25D366] bg-[#25D366]/5'
                            : 'border-[#E2E8F0] hover:border-[#25D366]/40'
                        }`}
                      >
                        <p className="font-medium text-xs text-[#0B1F4A]">{en ? opt.label : opt.labelTa}</p>
                        <p className="text-xs text-[#64748B] mt-0.5">{opt.size}</p>
                        {selectedRoof === opt.value && (
                          <CheckCircle className="w-4 h-4 text-[#25D366] mt-1" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* — STEP 2: Monthly Bill — */}
              {step === 2 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-[#FF6A00]" />
                    <h3 className="font-semibold text-[#0B1F4A]">{en ? "What's your monthly electricity bill?" : 'உங்கள் மாத மின் கட்டணம் எவ்வளவு?'}</h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    {billOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => setSelectedBill(opt.value)}
                        className={`p-4 rounded-2xl border-2 text-left flex items-center justify-between transition-all duration-200 ${
                          selectedBill === opt.value
                            ? 'border-[#25D366] bg-[#25D366]/5'
                            : 'border-[#E2E8F0] hover:border-[#25D366]/40'
                        }`}
                      >
                        <span className="font-medium text-sm text-[#0B1F4A]">{en ? opt.label : opt.labelTa}</span>
                        {selectedBill === opt.value && <CheckCircle className="w-4 h-4 text-[#25D366]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* — STEP 3: Location — */}
              {step === 3 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-[#FF6A00]" />
                    <h3 className="font-semibold text-[#0B1F4A]">{en ? "What's your area / location?" : 'உங்கள் பகுதி / இடம் என்ன?'}</h3>
                  </div>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={en ? 'e.g. Erode, Perundurai, Gobichettipalayam...' : 'எ.கா. ஈரோடு, பெருந்துறை, கோபி...'}
                    className="w-full px-4 py-3.5 border-2 border-[#E2E8F0] rounded-2xl focus:border-[#25D366] outline-none transition-colors text-sm text-[#0B1F4A] placeholder:text-[#94A3B8]"
                    autoFocus
                  />
                  <div className="mt-4 p-4 bg-[#F8FFF9] rounded-2xl border border-[#25D366]/20">
                    <p className="text-xs text-[#64748B] font-medium mb-2">{en ? 'Your Quote Summary:' : 'உங்கள் மதிப்பீடு சுருக்கம்:'}</p>
                    <div className="space-y-1">
                      <p className="text-xs text-[#0B1F4A]">🏠 {en ? roofOptions.find(r => r.value === selectedRoof)?.label : roofOptions.find(r => r.value === selectedRoof)?.labelTa}</p>
                      <p className="text-xs text-[#0B1F4A]">⚡ {en ? billOptions.find(b => b.value === selectedBill)?.label : billOptions.find(b => b.value === selectedBill)?.labelTa}</p>
                      {location && <p className="text-xs text-[#0B1F4A]">📍 {location}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-6">
                {step > 1 && (
                  <button
                    onClick={() => setStep((s) => (s - 1) as Step)}
                    className="flex items-center gap-1.5 px-4 py-3 border-2 border-[#E2E8F0] rounded-full text-sm font-medium text-[#64748B] hover:border-[#0B1F4A] transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> {en ? 'Back' : 'பின்செல்'}
                  </button>
                )}

                {step < 3 ? (
                  <button
                    onClick={() => setStep((s) => (s + 1) as Step)}
                    disabled={step === 1 ? !selectedRoof : !selectedBill}
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 bg-[#0B1F4A] text-white rounded-full text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FF6A00] transition-colors"
                  >
                    {en ? 'Next' : 'அடுத்து'} <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSend}
                    disabled={!location.trim()}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-full text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#128C7E] transition-colors shadow-lg shadow-green-200"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {en ? 'Send via WhatsApp' : 'வாட்ஸ்அப்பில் அனுப்பு'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppQuoteForm;
