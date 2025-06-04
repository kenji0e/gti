// src/pages/Contact/OurSales.tsx
import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaComments, FaCheckCircle } from 'react-icons/fa';
import SalesHeroImage from '../../assets/sales-hero.jpg'; // Ganti dengan gambar yang relevan

const OurSales: React.FC = () => {
  const salesPhoneNumber = '+62811181558';
  const salesEmail = 'ardian28@gmail.com';
  const whatsappLink = `https://wa.me/${salesPhoneNumber.replace(/\+/g, '')}`; // Link WhatsApp

  // State untuk form (opsional, bisa dikembangkan)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika untuk mengirim email atau data form
    // Contoh: console.log('Form submitted:', formData);
    alert('Pesan Anda telah terkirim! Tim sales kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Hero Section */}
      <section
        className="relative bg-cover bg-center h-64 md:h-80 flex items-center justify-center text-center p-8"
        style={{ backgroundImage: `url(${SalesHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay gelap */}
        <div className="relative z-10 text-white max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 animate-fade-in-up">
            Hubungi Tim Sales Kami
          </h1>
          <p className="text-lg md:text-xl animate-fade-in-up delay-200">
            Kami siap membantu Anda menemukan solusi telekomunikasi terbaik untuk bisnis Anda.
          </p>
        </div>
      </section>

      {/* 2. Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Informasi Kontak Sales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:bg-green-600"
            >
              <FaWhatsapp size={48} className="mb-4 group-hover:animate-bounce-icon" /> {/* Custom animation for icon */}
              <p className="text-2xl font-bold mb-2">{salesPhoneNumber}</p>
              <p className="text-lg">Chat via WhatsApp</p>
            </a>
            {/* Phone Call */}
            <a
              href={`tel:${salesPhoneNumber}`}
              className="group bg-blue-600 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700"
            >
              <FaPhone size={48} className="mb-4 group-hover:animate-bounce-icon" />
              <p className="text-2xl font-bold mb-2">{salesPhoneNumber}</p>
              <p className="text-lg">Telepon Kami</p>
            </a>
            {/* Email */}
            <a
              href={`mailto:${salesEmail}`}
              className="group bg-red-600 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:bg-red-700"
            >
              <FaEnvelope size={48} className="mb-4 group-hover:animate-bounce-icon" />
              <p className="text-2xl font-bold mb-2">{salesEmail}</p>
              <p className="text-lg">Kirim Email</p>
            </a>
          </div>
          <p className="text-gray-600 mt-8 text-lg">
            Atau kunjungi kantor kami di: <span className="font-semibold">Jl. KH Abdullah Syafei No.53 A, RT.5/RW.2, Manggarai Sel., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12860</span>
            <br/><a href="https://www.google.com/maps/place/GTNet+-+Graha+Telekomunikasi+Indonesia/@-6.2231564,106.8477019,17z/data=!4m14!1m7!3m6!1s0x2e69f3630735357b:0x8336019e118ea0dc!2sGTNet+-+Graha+Telekomunikasi+Indonesia!8m2!3d-6.2235175!4d106.8502554!16s%2Fg%2F11rhntj3vj!3m5!1s0x2e69f3630735357b:0x8336019e118ea0dc!8m2!3d-6.2235175!4d106.8502554!16s%2Fg%2F11rhntj3vj?hl=id&entry=ttu&g_ep=EgoyMDI1MDYwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">Lihat di Google Maps <FaMapMarkerAlt className="inline ml-1" /></a>
          </p>
        </div>
      </section>

      {/* 3. Contact Form (Opsional) */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Kirim Pesan Langsung</h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Masukkan email Anda"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Pesan Anda
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105 flex items-center"
              >
                Kirim Pesan <FaComments className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 4. Why Choose Us/Benefits (Specific for Sales Interaction) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Keuntungan Menghubungi Tim Sales Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-blue-200 bg-blue-50 text-blue-800 flex flex-col items-center hover:shadow-md transition-shadow duration-300">
              <FaCheckCircle size={36} className="mb-3 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Konsultasi Gratis</h3>
              <p className="text-center">Dapatkan saran ahli tanpa biaya untuk kebutuhan spesifik Anda.</p>
            </div>
            <div className="p-6 rounded-lg border border-green-200 bg-green-50 text-green-800 flex flex-col items-center hover:shadow-md transition-shadow duration-300">
              <FaCheckCircle size={36} className="mb-3 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Solusi Kustom</h3>
              <p className="text-center">Kami rancang solusi yang paling sesuai dengan skala dan tujuan bisnis Anda.</p>
            </div>
            <div className="p-6 rounded-lg border border-purple-200 bg-purple-50 text-purple-800 flex flex-col items-center hover:shadow-md transition-shadow duration-300">
              <FaCheckCircle size={36} className="mb-3 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Proses Cepat</h3>
              <p className="text-center">Kami menghargai waktu Anda dengan proses responsif dan efisien.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurSales;