import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLanguage } from '@/contexts/LanguageContext';
import { apiClient } from '@/services/apiClient';
import { toast } from 'sonner';

const ContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^\d{10}$/, "Invalid 10-digit phone number"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address is required"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof ContactSchema>;

export const useContactViewModel = () => {
  const { language } = useLanguage();
  const en = language === 'en';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // API call to our new Backend
      const response = await apiClient.post('/leads', {
        name: data.name,
        phone: data.phone,
        location: data.address,
        requirement: data.message,
      });

      if (response.data.success) {
        toast.success(en ? 'Thank you! We will contact you within 24 hours.' : 'நன்றி! 24 மணி நேரத்திற்குள் உங்களைத் தொடர்புகொள்வோம்.');
        reset();
      }
    } catch (error) {
      toast.error(en ? 'Network error. Please try again later.' : 'பிணைய பிழை. சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும்.');
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    en
  };
};
