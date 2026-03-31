import { Phone, Mail, Clock, MapPin, Send, Loader2 } from 'lucide-react';
import { useContactViewModel } from '@/features/contact/viewModels/useContactViewModel';

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    en
  } = useContactViewModel();

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="label-elegant mb-6">{en ? 'Get in Touch' : 'தொடர்பில் இருங்கள்'}</p>
          <h2 className="heading-section text-[#0B1F4A] mb-6">
            {en ? 'Contact Us' : 'எங்களைத் தொடர்பு கொள்ள'}
          </h2>
          <p className="body-elegant">
            {en
              ? 'Have questions about going solar? Our team is here to help. Fill out the form below and we\'ll get back to you within 24 hours.'
              : 'சோலார் அமைப்பது பற்றி கேள்விகள் உள்ளதா? உதவ எங்கள் குழு இங்கே உள்ளது. கீழே உள்ள படிவத்தை பூர்த்தி செய்து அனுப்பவும், 24 மணிநேரத்திற்குள் நாங்கள் உங்களை தொடர்புகொள்வோம்.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <div className="card-luxury p-8 md:p-10 pb-20 lg:pb-10 relative">
            <h3 className="heading-card text-[#0B1F4A] mb-8">{en ? 'Request a Quote' : 'மதிப்பீட்டைக் கோருங்கள்'}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0B1F4A] mb-2">
                    {en ? 'Full Name' : 'முழு பெயர்'}
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full px-4 py-3 border border-[#E2E8F0] bg-white focus:border-[#0B1F4A] outline-none transition-colors"
                    placeholder={en ? 'Your name' : 'உங்கள் பெயர்'}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0B1F4A] mb-2">
                    {en ? 'Phone Number' : 'தொலைபேசி எண்'}
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-[#E2E8F0] bg-white focus:border-[#0B1F4A] outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0B1F4A] mb-2">
                  {en ? 'Email Address' : 'மின்னஞ்சல் முகவரி'}
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-3 border border-[#E2E8F0] bg-white focus:border-[#0B1F4A] outline-none transition-colors"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0B1F4A] mb-2">
                  {en ? 'Address' : 'முகவரி'}
                </label>
                <input
                  type="text"
                  {...register('address')}
                  className="w-full px-4 py-3 border border-[#E2E8F0] bg-white focus:border-[#0B1F4A] outline-none transition-colors"
                  placeholder={en ? 'Your address in Erode, Tamil Nadu' : 'ஈரோடு, தமிழ்நாட்டில் உங்கள் முகவரி'}
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0B1F4A] mb-2">
                  {en ? 'Message' : 'செய்தி'}
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#E2E8F0] bg-white focus:border-[#0B1F4A] outline-none transition-colors resize-none"
                  placeholder={en ? 'Tell us about your requirements...' : 'உங்கள் தேவைகளைப் பற்றி எங்களிடம் கூறுக...'}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-luxury w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {en ? 'Sending...' : 'அனுப்பப்படுகிறது...'}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {en ? 'Send Message' : 'செய்தியை அனுப்பு'}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="card-luxury p-8 md:p-10 mb-8">
              <h3 className="heading-card text-[#0B1F4A] mb-8">{en ? 'Contact Information' : 'தொடர்பு தகவல்'}</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0B1F4A] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0B1F4A]">{en ? 'Phone' : 'தொலைபேசி'}</p>
                    <a href="tel:+919345765116" className="text-[#64748B] hover:text-[#FF6A00] transition-colors">
                      +91 93457 65116
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0B1F4A] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0B1F4A]">{en ? 'Email' : 'மின்னஞ்சல்'}</p>
                    <a href="mailto:rameshkannangandhi73@gmail.com" className="text-[#64748B] hover:text-[#FF6A00] transition-colors">
                      rameshkannangandhi73@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0B1F4A] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0B1F4A]">{en ? 'Business Hours' : 'வணிக நேரம்'}</p>
                    <p className="text-[#64748B]">{en ? 'Monday - Saturday: 9am - 7pm' : 'திங்கள் - சனி: காலை 9:00 - இரவு 7:00'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0B1F4A] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0B1F4A]">{en ? 'Location' : 'தொடர்பு கொள்ள வேண்டிய இடம்'}</p>
                    <p className="text-[#64748B]">
                      {en 
                        ? <><span className="block">123 Solar Street, Erode</span><span>Tamil Nadu, India - 638001</span></>
                        : <><span className="block">123 சோலார் தெரு, ஈரோடு</span><span>தமிழ்நாடு, இந்தியா - 638001</span></>}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-video bg-[#F1F5F9] relative overflow-hidden rounded-xl">
              <iframe
                src="https://maps.google.com/maps?q=11.312693,77.667211&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale-[20%] contrast-125"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
