import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/ui/Layout';
import HomePage from '@/views/pages/HomePage';
import SchemePage from '@/views/pages/SchemePage';
import ProductsPage from '@/views/pages/ProductsPage';
import ContactPage from '@/views/pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="relative overflow-x-hidden w-full">
        <Toaster position="top-right" richColors />
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="scheme" element={<SchemePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
        
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
