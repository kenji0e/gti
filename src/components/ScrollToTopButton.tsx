// src/components/ScrollToTopButton.tsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Munculkan tombol setelah scroll 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Animasi scroll halus
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center z-50 transition-opacity duration-300 opacity-100"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;