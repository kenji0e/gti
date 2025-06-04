// src/components/Footer.tsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black p-4 flex flex-col md:flex-row items-center justify-between shadow-md">
      <div className="flex space-x-4 mb-4 md:mb-0">
        {/* Facebook: Default hitam, hover biru */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
          <FaFacebook size={24} />
        </a>
        {/* Instagram: Default hitam, hover pink */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-500">
          <FaInstagram size={24} />
        </a>
        {/* TikTok: Default hitam, hover hitam (sesuai permintaan, jadi tidak ada perubahan warna signifikan pada hover untuk TikTok) */}
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700"> {/* TikTok sendiri dominan hitam/putih, bisa pakai hover gray jika ingin sedikit beda */}
          <FaTiktok size={24} />
        </a>
        {/* YouTube: Default hitam, hover merah */}
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-red-600">
          <FaYoutube size={24} />
        </a>
      </div>
      {/* Gradient line for mobile */}
      <div className="md:hidden w-full h-px bg-gradient-to-r from-red-400 via-red-500 to-red-600 my-4"></div>
      <div className="text-right">
        © {new Date().getFullYear()} Graha Telekomunikasi Indonesia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;