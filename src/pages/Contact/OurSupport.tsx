// src/pages/Contact/OurSupport.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeadset, FaEnvelope, FaClock, FaQuestionCircle, FaBook, FaTicketAlt, FaLightbulb, FaArrowRight, FaComments } from 'react-icons/fa'; // Pastikan FaComments juga diimpor jika digunakan
import SupportHeroImage from '../../assets/support-hero.jpg';

const OurSupport: React.FC = () => {
  const supportEmail = 'cs@grahakomindo.com';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Hero Section */}
      <section
        className="relative bg-cover bg-center h-64 md:h-80 flex items-center justify-center text-center p-8"
        style={{ backgroundImage: `url(${SupportHeroImage})` }}
      >
        <div className="absolute inset-0 bg-blue-800 opacity-70"></div> {/* Overlay biru gelap */}
        <div className="relative z-10 text-white max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 animate-fade-in-up">
            Dukungan Pelanggan Prioritas Utama Kami
          </h1>
          <p className="text-lg md:text-xl animate-fade-in-up delay-200">
            Kami siap membantu Anda kapan pun Anda membutuhkan.
          </p>
        </div>
      </section>

      {/* 2. Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Hubungi Tim Dukungan Kami</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 text-blue-800 p-6 rounded-lg shadow-md max-w-md mx-auto flex items-center justify-center space-x-4 animate-fade-in-up">
            <FaEnvelope size={40} className="text-blue-600" />
            <div>
              <p className="text-lg font-semibold">Email Dukungan:</p>
              <a href={`mailto:${supportEmail}`} className="text-2xl font-bold hover:underline transition-colors duration-200">
                {supportEmail}
              </a>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center text-gray-700 text-lg">
            <FaClock size={20} className="mr-2 text-green-600" />
            <span className="font-semibold">Support 24/7 Siap Membantu Anda</span>
          </div>
        </div>
      </section>

      {/* 3. Support Channels */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Pilih Saluran Dukungan Anda</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* FAQ */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <FaQuestionCircle size={60} className="text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">FAQ</h3>
              <p className="text-gray-600 mb-4">Temukan jawaban cepat untuk pertanyaan umum Anda.</p>
              <Link
                to="/faq"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
              >
                <span>Lihat FAQ</span> <FaArrowRight className="ml-2 text-sm" /> {/* Dibungkus span */}
              </Link>
            </div>
            {/* Knowledge Base */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <FaBook size={60} className="text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Basis Pengetahuan</h3>
              <p className="text-gray-600 mb-4">Sumber daya lengkap dan panduan untuk produk kami.</p>
              <Link
                to="/knowledge-base"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
              >
                <span>Kunjungi Basis Pengetahuan</span> <FaArrowRight className="ml-2 text-sm" /> {/* Dibungkus span */}
              </Link>
            </div>
            {/* Submit Ticket */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <FaTicketAlt size={60} className="text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Kirim Tiket Dukungan</h3>
              <p className="text-gray-600 mb-4">Untuk masalah yang lebih spesifik, kirim tiket kepada kami.</p>
              <Link
                to="/submit-ticket"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
              >
                <span>Buat Tiket Baru</span> <FaArrowRight className="ml-2 text-sm" /> {/* Dibungkus span */}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits of Our Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Keunggulan Dukungan Graha Telekomunikasi Indonesia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaHeadset size={36} className="text-blue-600 mr-4 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tim Profesional</h3>
                <p className="text-gray-600">Dukungan diberikan oleh tim ahli yang terlatih dan berpengalaman.</p>
              </div>
            </div>
            <div className="flex items-start bg-green-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaLightbulb size={36} className="text-green-600 mr-4 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Solusi Efisien</h3>
                <p className="text-gray-600">Kami fokus pada penyelesaian masalah yang cepat dan efektif.</p>
              </div>
            </div>
            <div className="flex items-start bg-yellow-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaClock size={36} className="text-yellow-600 mr-4 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Respons Cepat</h3>
                <p className="text-gray-600">Kami berkomitmen untuk memberikan tanggapan dan penanganan secepat mungkin.</p>
              </div>
            </div>
            <div className="flex items-start bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaComments size={36} className="text-purple-600 mr-4 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Komunikasi Transparan</h3>
                <p className="text-gray-600">Kami selalu menjaga Anda tetap terinformasi sepanjang proses dukungan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-cyan-600 text-white text-center">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Butuh Bantuan Lebih Lanjut?</h2>
          <p className="text-lg md:text-xl mb-8">
            Jangan ragu untuk menghubungi tim dukungan kami. Kami siap membantu Anda 24/7.
          </p>
          <a
            href={`mailto:${supportEmail}`}
            className="bg-white text-blue-700 hover:bg-gray-200 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block"
          >
            Kirim Email ke Support
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurSupport;