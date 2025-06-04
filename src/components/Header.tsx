// src/components/Header.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-4 text-black hover:text-blue-600 ${isActive ? 'text-red-600 font-semibold' : ''}`;

  const subNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-1 pl-8 text-black hover:text-blue-600 ${isActive ? 'text-red-600 font-semibold' : ''}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md p-4 flex items-center justify-between">
      {/* Logo and Company Name (Left Side) */}
      <div className="flex items-center">
        <img src={logo} alt="Graha Telekomunikasi Indonesia Logo" className="h-10 mr-3" />
        <h1 className="text-xl font-bold text-black hidden md:block">Graha Telekomunikasi Indonesia</h1>
      </div>

      {/* Mobile Menu Button (Hamburger Icon) */}
      <button
        onClick={handleToggleMobileMenu}
        className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>

      {/* Desktop Navigation (Right Side) */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          {/* Perubahan di sini untuk About Us */}
          <li className="relative group">
            {/* Summary tetap sebagai pemicu native details */}
            <details className="cursor-pointer">
              <summary className="flex items-center py-2 px-4 text-black hover:text-blue-600">
                About Us <FaChevronDown className="ml-1 text-xs transition-transform duration-200 group-open:rotate-180" />
              </summary>
            </details>
            {/* Submenu sekarang disembunyikan/ditampilkan berdasarkan hover pada LI induk */}
            <ul className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 hidden group-hover:block">
              <li>
                <NavLink to="/about-us/history" className={subNavLinkClass}>
                  History
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us/our-customer" className={subNavLinkClass}>
                  Our Customer
                </NavLink>
              </li>
            </ul>
          </li>
          {/* Perubahan di sini untuk Services */}
          <li className="relative group">
            <details className="cursor-pointer">
              <summary className="flex items-center py-2 px-4 text-black hover:text-blue-600">
                Services <FaChevronDown className="ml-1 text-xs transition-transform duration-200 group-open:rotate-180" />
              </summary>
            </details>
            <ul className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 hidden group-hover:block">
              <li>
                <NavLink to="/services/broadband" className={subNavLinkClass}>
                  Broadband
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/dedicated" className={subNavLinkClass}>
                  Dedicated
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/vpn" className={subNavLinkClass}>
                  VPN
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/hosting" className={subNavLinkClass}>
                  Hosting
                </NavLink>
              </li>
            </ul>
          </li>
          {/* Perubahan di sini untuk Contact */}
          <li className="relative group">
            <details className="cursor-pointer">
              <summary className="flex items-center py-2 px-4 text-black hover:text-blue-600">
                Contact <FaChevronDown className="ml-1 text-xs transition-transform duration-200 group-open:rotate-180" />
              </summary>
            </details>
            <ul className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 hidden group-hover:block">
              <li>
                <NavLink to="/contact/our-sales" className={subNavLinkClass}>
                  Our Sales
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact/our-support" className={subNavLinkClass}>
                  Our Support
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/area-client" className={navLinkClass}>
              Area Client
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Overlay/Backdrop untuk menutup menu saat diklik di luar */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Navigation (Slide-in from right) */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <div className="p-4 flex justify-end">
          <button
            onClick={closeMobileMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="mt-4">
          <li>
            <NavLink to="/" className={navLinkClass} onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center py-2 px-4 text-black cursor-pointer hover:text-blue-600">
                About Us <FaChevronDown className="ml-1 text-xs transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <ul className="pl-4">
                <li>
                  <NavLink to="/about-us/history" className={subNavLinkClass} onClick={closeMobileMenu}>
                    History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us/our-customer" className={subNavLinkClass} onClick={closeMobileMenu}>
                    Our Customer
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center py-2 px-4 text-black cursor-pointer hover:text-blue-600">
                Services <FaChevronDown className="ml-1 text-xs transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <ul className="pl-4">
                <li>
                  <NavLink to="/services/broadband" className={subNavLinkClass} onClick={closeMobileMenu}>
                    Broadband
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/dedicated" className={subNavLinkClass} onClick={closeMobileMenu}>
                    Dedicated
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/vpn" className={subNavLinkClass} onClick={closeMobileMenu}>
                    VPN
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/hosting" className={subNavLinkClass} onClick={closeMobileMenu}>
                    Hosting
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center py-2 px-4 text-black cursor-pointer hover:text-blue-600">
                Contact <FaChevronDown className="ml-1 text-xs transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <ul className="pl-4">
                <li>
                  <NavLink to="/contact/our-sales" className={subNavLinkClass} onClick={closeMobileMenu}>
                    Our Sales
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact/our-support" className={subNavLinkClass} onClick={closeMobileMenu}>
                    Our Support
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NavLink to="/area-client" className={navLinkClass} onClick={closeMobileMenu}>
              Area Client
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;