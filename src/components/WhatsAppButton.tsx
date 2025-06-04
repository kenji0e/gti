// src/components/WhatsAppButton.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '+62811181558';
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, '')}`; // Hapus '+' untuk link wa.me

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center z-50 animate-bounce-custom"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;