// src/pages/AreaClient.tsx
import React, { useState } from 'react';
import { FaGoogle, FaInstagram, FaFacebook, FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';
import ClientAreaHeroImage from '../assets/client-area-hero.jpeg'; // Ganti dengan gambar yang relevan

const AreaClient: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi login
    if (email && password) {
      alert(`Login berhasil dengan Email: ${email}`);
      // Di sini Anda akan melakukan autentikasi ke backend
    } else {
      alert('Mohon masukkan email dan password.');
    }
  };

  const handleSocialLogin = (platform: string) => {
    alert(`Anda akan diarahkan ke ${platform} untuk login.`);
    // Di sini Anda akan mengintegrasikan OAuth untuk Google/Instagram/Facebook
    // Contoh: window.location.href = 'URL_OAUTH_GOOGLE';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* 1. Hero Section (Simple, not full height to allow form to be seen easily) */}
      <section
        className="relative w-full h-48 md:h-64 bg-cover bg-center flex items-center justify-center text-center p-8 mb-10"
        style={{ backgroundImage: `url(${ClientAreaHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 animate-fade-in-up">
            Area Klien
          </h1>
          <p className="text-lg md:text-xl animate-fade-in-up delay-200">
            Akses dashboard dan layanan Anda di sini.
          </p>
        </div>
      </section>

      {/* 2. Login Form Section */}
      <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl w-11/12 max-w-md mb-10 transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Login ke Akun Anda</h2>

        {/* Social Login Buttons */}
        <div className="flex flex-col space-y-4 mb-8">
          <button
            onClick={() => handleSocialLogin('Google')}
            className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105"
          >
            <FaGoogle size={20} className="mr-3" /> Login dengan Google
          </button>
          <button
            onClick={() => handleSocialLogin('Instagram')}
            className="flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105"
          >
            <FaInstagram size={20} className="mr-3" /> Login dengan Instagram
          </button>
          <button
            onClick={() => handleSocialLogin('Facebook')}
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105"
          >
            <FaFacebook size={20} className="mr-3" /> Login dengan Facebook
          </button>
        </div>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500">Atau</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Standard Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email atau Username
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="text-gray-400" />
              </span>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="email@contoh.com"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-gray-400" />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="********"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800 transition duration-200">
              Lupa Password?
            </a>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105 flex items-center"
            >
              Login <FaSignInAlt className="ml-2" />
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">Belum punya akun?</p>
          <a href="#" className="inline-block align-baseline font-bold text-md text-blue-600 hover:text-blue-800 transition duration-200 mt-2 flex items-center justify-center">
            Daftar Sekarang
          </a>
        </div>
      </section>
    </div>
  );
};

export default AreaClient;