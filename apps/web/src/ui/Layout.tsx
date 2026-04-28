import { Outlet } from 'react-router-dom';
import Navigation from '@/ui/Navigation';
import Footer from '@/ui/Footer';
import BookVisitWidget from '@/shared/components/BookVisitWidget';
import WhatsAppQuoteForm from '@/shared/components/WhatsAppQuoteForm';
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-[80px]">
        <Outlet />
      </main>
      <Footer />
      <BookVisitWidget />
      <WhatsAppQuoteForm />

    </div>
  );
};

export default Layout;
