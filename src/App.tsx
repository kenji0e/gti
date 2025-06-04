// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTopButton from './components/ScrollToTopButton';
import LoadingSpinner from './components/LoadingSpinner'; // Import komponen spinner

// Import pages
import Home from './pages/Home';
import History from './pages/AboutUs/History';
import OurCustomer from './pages/AboutUs/OurCustomer';
import Broadband from './pages/Services/Broadband';
import Dedicated from './pages/Services/Dedicated';
import VPN from './pages/Services/VPN';
import Hosting from './pages/Services/Hosting';
import OurSales from './pages/Contact/OurSales';
import OurSupport from './pages/Contact/OurSupport';
import AreaClient from './pages/AreaClient';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasikan waktu loading (misalnya, ambil data dari API)
    // Dalam proyek nyata, Anda akan mengatur isLoading ke false setelah data penting dimuat
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Tampilkan spinner selama 2 detik

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <Router>
      {isLoading && <LoadingSpinner />} {/* Tampilkan spinner jika isLoading true */}

      <div className={`flex flex-col min-h-screen ${isLoading ? 'hidden' : 'block'}`}> {/* Sembunyikan konten utama jika loading */}
        <Header />
        <main className="flex-grow pt-20 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us/history" element={<History />} />
            <Route path="/about-us/our-customer" element={<OurCustomer />} />
            <Route path="/services/broadband" element={<Broadband />} />
            <Route path="/services/dedicated" element={<Dedicated />} />
            <Route path="/services/vpn" element={<VPN />} />
            <Route path="/services/hosting" element={<Hosting />} />
            <Route path="/contact/our-sales" element={<OurSales />} />
            <Route path="/contact/our-support" element={<OurSupport />} />
            <Route path="/area-client" element={<AreaClient />} />
          </Routes>
        </main>
        <div className="hidden md:block h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700"></div>
        <Footer />
        <ScrollToTopButton />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;