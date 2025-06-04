// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaGlobe, FaShieldAlt, FaHeadset } from 'react-icons/fa'; // Contoh ikon layanan
import HeroImage from '../assets/hero-telecom.png'; // Pastikan Anda memiliki gambar di src/assets
import AboutImage from '../assets/about-telecom.png'; // Pastikan Anda memiliki gambar di src/assets

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen-75 flex items-center justify-center text-center p-8"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay gelap */}
        <div className="relative z-10 text-white max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 animate-fade-in-up">
            Menghubungkan Anda dengan Dunia Digital
          </h2>
          <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-200">
            Graha Telekomunikasi Indonesia: Solusi telekomunikasi inovatif untuk masa depan bisnis Anda.
          </p>
          <Link
            to="/contact/our-sales"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block animate-fade-in-up delay-400"
          >
            Hubungi Sales Kami
          </Link>
        </div>
      </section>

      {/* 2. About Us Snippet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img src={AboutImage} alt="About Us" className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Tentang Graha Telekomunikasi Indonesia</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kami adalah penyedia solusi telekomunikasi terdepan yang berkomitmen untuk mendukung pertumbuhan bisnis Anda melalui konektivitas yang handal dan inovasi teknologi. Dengan pengalaman bertahun-tahun, kami siap menjadi mitra terpercaya Anda.
            </p>
            <Link
              to="/about-us/history"
              className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
            >
              Pelajari Sejarah Kami &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-10">Layanan Unggulan Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <FaLaptopCode size={48} className="text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Broadband Cepat</h4>
              <p className="text-gray-600">Koneksi internet super cepat dan stabil untuk kebutuhan rumah dan bisnis Anda.</p>
              <Link to="/services/broadband" className="text-blue-600 hover:text-blue-800 text-sm mt-3 inline-block">Detail</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <FaGlobe size={48} className="text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Dedicated Internet</h4>
              <p className="text-gray-600">Bandwidth eksklusif dengan SLA tinggi untuk performa bisnis optimal.</p>
              <Link to="/services/dedicated" className="text-blue-600 hover:text-blue-800 text-sm mt-3 inline-block">Detail</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <FaShieldAlt size={48} className="text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Solusi VPN Aman</h4>
              <p className="text-gray-600">Jaga keamanan data dan privasi komunikasi bisnis Anda.</p>
              <Link to="/services/vpn" className="text-blue-600 hover:text-blue-800 text-sm mt-3 inline-block">Detail</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <FaHeadset size={48} className="text-orange-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Hosting Andal</h4>
              <p className="text-gray-600">Layanan hosting website dan aplikasi yang cepat dan stabil.</p>
              <Link to="/services/hosting" className="text-blue-600 hover:text-blue-800 text-sm mt-3 inline-block">Detail</Link>
            </div>
          </div>
          <Link
            to="/services/broadband"
            className="mt-12 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-full transition duration-300 inline-block"
          >
            Lihat Semua Layanan
          </Link>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-10">Mengapa Memilih Kami?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors duration-300">
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">Konektivitas Handal</h4>
              <p className="text-gray-600">Jaringan kami didesain untuk uptime maksimal, memastikan Anda selalu terhubung.</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors duration-300">
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">Dukungan Responsif</h4>
              <p className="text-gray-600">Tim support kami siap membantu 24/7 kapan pun Anda membutuhkan.</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors duration-300">
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">Solusi Inovatif</h4>
              <p className="text-gray-600">Kami terus berinovasi untuk memberikan teknologi telekomunikasi terbaru.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="container mx-auto px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Siap Tingkatkan Bisnis Anda?</h3>
          <p className="text-lg md:text-xl mb-8">
            Jangan ragu untuk menghubungi kami untuk konsultasi gratis dan temukan solusi terbaik.
          </p>
          <Link
            to="/contact/our-sales"
            className="bg-white text-blue-700 hover:bg-gray-200 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block"
          >
            Mulai Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;