// src/pages/AboutUs/History.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // <--- ADD THIS LINE
import HistoryHeroImage from '../../assets/history-hero.jpg';

const History: React.FC = () => {
  const historyEvents = [
    {
      year: '2005',
      title: 'Pendirian Graha Telekomunikasi Indonesia',
      description: 'Didirikan dengan visi untuk menjadi penyedia solusi telekomunikasi terdepan di Indonesia, memulai perjalanan dengan fokus pada layanan internet broadband untuk bisnis.',
      icon: '✨',
      image: 'https://via.placeholder.com/600x400/93c5fd/ffffff?text=Pendirian', // Placeholder image
    },
    {
      year: '2008',
      title: 'Ekspansi Jaringan Awal',
      description: 'Memperluas infrastruktur jaringan ke beberapa kota besar di Jawa, meningkatkan jangkauan dan kapasitas layanan broadband.',
      icon: '📡',
      image: 'https://via.placeholder.com/600x400/60a5fa/ffffff?text=Ekspansi+Jaringan', // Placeholder image
    },
    {
      year: '2012',
      title: 'Peluncuran Layanan Dedicated Internet',
      description: 'Menanggapi kebutuhan pasar akan koneksi internet yang lebih stabil dan eksklusif, kami meluncurkan layanan Dedicated Internet dengan SLA tinggi.',
      icon: '🚀',
      image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=Dedicated+Internet', // Placeholder image
    },
    {
      year: '2016',
      title: 'Inovasi Cloud & VPN Solutions',
      description: 'Memperkenalkan solusi cloud dan VPN yang aman, membantu klien mengamankan data dan operasional mereka di era digital yang semakin kompleks.',
      icon: '☁️',
      image: 'https://via.placeholder.com/600x400/2563eb/ffffff?text=Cloud+VPN', // Placeholder image
    },
    {
      year: '2020',
      title: 'Adopsi Teknologi Fiber Optic',
      description: 'Mengimplementasikan teknologi fiber optic secara masif untuk memberikan kecepatan internet yang lebih tinggi dan latensi yang lebih rendah kepada pelanggan.',
      icon: '💡',
      image: 'https://via.placeholder.com/600x400/1d4ed8/ffffff?text=Fiber+Optic', // Placeholder image
    },
    {
      year: '2023',
      title: 'Penghargaan dan Pengakuan Industri',
      description: 'Menerima beberapa penghargaan dari industri telekomunikasi atas komitmen kami terhadap inovasi, kualitas layanan, dan kepuasan pelanggan.',
      icon: '🏆',
      image: 'https://via.placeholder.com/600x400/1e40af/ffffff?text=Penghargaan', // Placeholder image
    },
    {
      year: '2024',
      title: 'Ekspansi Layanan ke Seluruh Indonesia',
      description: 'Memperluas jangkauan layanan ke seluruh pelosok Indonesia, memperkuat posisi kami sebagai penyedia telekomunikasi nasional.',
      icon: '🌐',
      image: 'https://via.placeholder.com/600x400/172554/ffffff?text=Seluruh+Indonesia', // Placeholder image
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* 1. Hero Section */}
      <section
        className="relative bg-cover bg-center h-64 md:h-80 flex items-center justify-center text-center p-8"
        style={{ backgroundImage: `url(${HistoryHeroImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div> {/* Overlay biru tua */}
        <div className="relative z-10 text-white max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 animate-fade-in-up">
            Perjalanan Kami
          </h1>
          <p className="text-lg md:text-xl animate-fade-in-up delay-200">
            Sejarah Graha Telekomunikasi Indonesia: Inovasi dan Dedikasi Sejak 2005.
          </p>
        </div>
      </section>

      {/* 2. Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Momen Penting dalam Sejarah Kami</h2>

          <div className="relative wrap overflow-hidden p-10 h-full">
            {/* Garis vertikal timeline */}
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2 transform -translate-x-1/2 hidden md:block"></div>

            {historyEvents.map((event, index) => (
              <div
                key={index}
                className={`mb-8 flex justify-between items-center w-full ${
                  index % 2 === 0 ? 'flex-row-reverse md:flex-row' : 'flex-row'
                }`}
              >
                {/* Image & Description (Left on even, Right on odd for mobile) */}
                <div className={`order-1 w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
                    <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </div>

                {/* Mobile: Space for Year, Icon & Year for Desktop */}
                <div className="order-1 w-full md:w-1/12 px-2 flex justify-center items-center">
                  {/* Mobile Year */}
                  <div className="md:hidden bg-blue-600 text-white font-bold text-lg rounded-full w-12 h-12 flex items-center justify-center -ml-6 mr-4 flex-shrink-0">
                    {event.year.slice(-2)} {/* Ambil 2 digit terakhir tahun */}
                  </div>
                  {/* Desktop Year & Icon */}
                  <div className="hidden md:block z-10 flex items-center order-1 bg-blue-600 shadow-xl w-24 h-24 rounded-full text-white text-center">
                    <h4 className="mx-auto font-extrabold text-2xl leading-none">
                      {event.year}
                      <span className="block text-4xl">{event.icon}</span>
                    </h4>
                  </div>
                </div>

                {/* Description (Right on even, Left on odd for mobile) */}
                <div className={`order-1 w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  {/* Kosong untuk menyelaraskan layout grid, konten ada di sisi lain */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Future Vision (Optional) */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Melihat ke Masa Depan</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Kami terus berinovasi dan beradaptasi dengan teknologi terbaru, berkomitmen untuk menjadi pemimpin dalam industri telekomunikasi Indonesia dan mendukung pertumbuhan digital bangsa.
          </p>
          <Link
            to="/contact/our-sales"
            className="bg-white text-blue-700 hover:bg-gray-200 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block"
          >
            Jadilah Bagian dari Kisah Kami
          </Link>
        </div>
      </section>
    </div>
  );
};

export default History;