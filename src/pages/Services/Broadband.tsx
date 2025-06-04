// src/pages/Services/Broadband.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaWifi, FaMoneyBillWave, FaArrowUp, FaUsers } from 'react-icons/fa';
import BroadbandHeroImage from '../../assets/broadband-hero.jpg'; // Ganti dengan gambar yang relevan

const Broadband: React.FC = () => {
  const broadbandPackages = [
    {
      name: 'GTNET 20',
      tagline: 'Internet broadband cepat',
      price: 'Rp. 200.000',
      speed: 'Up to 20Mbps',
      devices: 'Untuk 5 perangkat',
      setupFee: 'Gratis bea pasang',
      wifi: 'Wifi dari GTNET',
      buttonText: 'Pilih Paket Ini',
      buttonLink: '/contact/our-sales?package=GTNET20' // Contoh: mengirim parameter paket
    },
    {
      name: 'GTNET 50',
      tagline: 'Internet broadband super',
      price: 'Rp. 300.000',
      speed: 'Up to 50Mbps',
      devices: 'Untuk 12 perangkat',
      setupFee: 'Gratis bea pasang',
      wifi: 'Wifi 5G dari GTNET',
      isPopular: true, // Untuk menandai paket populer
      buttonText: 'Pilih Paket Ini',
      buttonLink: '/contact/our-sales?package=GTNET50'
    },
    {
      name: 'GTNET 100',
      tagline: 'Internet broadband ultra',
      price: 'Rp. 500.000',
      speed: 'Up to 100Mbps',
      devices: 'Untuk 20 perangkat',
      setupFee: 'Gratis bea pasang',
      wifi: 'Wifi 5G dari GTNET',
      buttonText: 'Pilih Paket Ini',
      buttonLink: '/contact/our-sales?package=GTNET100'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Hero Section */}
      <section
        className="relative bg-cover bg-center h-64 md:h-80 flex items-center justify-center text-center p-8"
        style={{ backgroundImage: `url(${BroadbandHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay gelap */}
        <div className="relative z-10 text-white max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 animate-fade-in-up">
            Layanan Broadband Terbaik
          </h1>
          <p className="text-lg md:text-xl animate-fade-in-up delay-200">
            Nikmati koneksi internet cepat dan stabil untuk rumah dan bisnis Anda.
          </p>
        </div>
      </section>

      {/* 2. Service Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Pilih Paket yang Sesuai untuk Anda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {broadbandPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-2 ${
                  pkg.isPopular ? 'border-blue-600 transform scale-105 transition-transform duration-300 z-10' : 'border-gray-200 hover:shadow-xl transition-shadow duration-300'
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Paling Populer
                  </span>
                )}
                <h3 className="text-3xl font-extrabold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{pkg.tagline}</p>
                <div className="my-6">
                  <span className="text-5xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-600">/bulan</span>
                </div>
                <ul className="text-left text-gray-700 space-y-3 mb-8 w-full">
                  <li className="flex items-center">
                    <FaArrowUp className="text-green-500 mr-3" />
                    <span>Kecepatan: <span className="font-semibold">{pkg.speed}</span></span>
                  </li>
                  <li className="flex items-center">
                    <FaUsers className="text-blue-500 mr-3" />
                    <span>Koneksi: <span className="font-semibold">{pkg.devices}</span></span>
                  </li>
                  <li className="flex items-center">
                    <FaMoneyBillWave className="text-purple-500 mr-3" />
                    <span>Biaya Pasang: <span className="font-semibold">{pkg.setupFee}</span></span>
                  </li>
                  <li className="flex items-center">
                    <FaWifi className="text-orange-500 mr-3" />
                    <span>Router: <span className="font-semibold">{pkg.wifi}</span></span>
                  </li>
                </ul>
                <Link
                  to={pkg.buttonLink}
                  className={`block w-full py-3 px-6 rounded-full text-white font-bold transition duration-300 transform hover:scale-105 ${
                    pkg.isPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'
                  }`}
                >
                  {pkg.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Call to Action */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Butuh Paket Lainnya?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Kami juga menyediakan solusi broadband kustom untuk kebutuhan unik Anda.
          </p>
          <Link
            to="/contact/our-sales"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block"
          >
            Hubungi Sales Kami
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Broadband;