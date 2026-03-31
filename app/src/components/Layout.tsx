import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import WhatsAppWidget from './WhatsAppWidget';
import BookVisitWidget from './BookVisitWidget';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-[80px] pb-24 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
      <BookVisitWidget />
      
      {/* Mobile Sticky CTA */}
      <div className="mobile-sticky-cta">
        <button 
          onClick={() => document.getElementById('dialog-booking')?.click()}
          className="flex-1 bg-[#0B1F4A] text-white py-3 rounded-xl font-medium text-sm flex justify-center items-center shadow-md active:bg-[#0B1F4A]/90"
        >
          Book Visit
        </button>
        <button 
          onClick={() => window.open('https://wa.me/1234567890', '_blank')}
          className="flex-1 bg-[#10B981] text-white py-3 rounded-xl font-medium text-sm flex justify-center items-center shadow-md active:bg-[#10B981]/90"
        >
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Layout;
