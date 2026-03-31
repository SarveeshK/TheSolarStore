import { Outlet } from 'react-router-dom';
import Navigation from '@/ui/Navigation';
import Footer from '@/ui/Footer';
import WhatsAppWidget from '@/shared/components/WhatsAppWidget';
import BookVisitWidget from '@/shared/components/BookVisitWidget';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-[80px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
      <BookVisitWidget />
      

    </div>
  );
};

export default Layout;
