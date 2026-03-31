import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export type Step = 1 | 2 | 3;

interface UseWhatsAppLeadViewModelReturn {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  step: Step;
  setStep: (step: Step | ((s: Step) => Step)) => void;
  selectedRoof: string;
  setSelectedRoof: (val: string) => void;
  selectedBill: string;
  setSelectedBill: (val: string) => void;
  location: string;
  setLocation: (val: string) => void;
  handleClose: () => void;
  handleSend: () => void;
  progressPercent: number;
  en: boolean;
}

const PHONE_NUMBER = '+919345765116';

export const useWhatsAppLeadViewModel = (): UseWhatsAppLeadViewModelReturn => {
  const { language } = useLanguage();
  const en = language === 'en';
  
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [selectedRoof, setSelectedRoof] = useState('');
  const [selectedBill, setSelectedBill] = useState('');
  const [location, setLocation] = useState('');

  const reset = () => {
    setStep(1);
    setSelectedRoof('');
    setSelectedBill('');
    setLocation('');
  };

  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  const buildMessage = () => {
    const msg = en
      ? `Hello The Solar Store! I would like a solar quote.\n\n🏠 Home Size: ${selectedRoof}\n⚡ Monthly Bill: ${selectedBill}\n📍 Location: ${location}\n\nPlease suggest the best solar system for me!`
      : `வணக்கம் தி சோலார் ஸ்டோர்! எனக்கு சோலார் மதிப்பீடு வேண்டும்.\n\n🏠 வீடு: ${selectedRoof}\n⚡ மாத பில்: ${selectedBill}\n📍 இடம்: ${location}\n\nசிறந்த சோலார் சிஸ்டத்தை பரிந்துரைக்கவும்!`;
    return encodeURIComponent(msg);
  };

  const handleSend = () => {
    // Ideally this will also call an API service like leadService.createLead(...)
    // For now we just redirect to WhatsApp as before.
    const url = `https://wa.me/${PHONE_NUMBER}?text=${buildMessage()}`;
    window.open(url, '_blank');
    handleClose();
  };

  const progressPercent = step === 1 ? 33 : step === 2 ? 66 : 100;

  return {
    isOpen,
    setIsOpen,
    step,
    setStep,
    selectedRoof,
    setSelectedRoof,
    selectedBill,
    setSelectedBill,
    location,
    setLocation,
    handleClose,
    handleSend,
    progressPercent,
    en
  };
};
