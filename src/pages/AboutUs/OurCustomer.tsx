// src/pages/AboutUs/OurCustomer.tsx
import React from 'react';

const OurCustomer: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Our Valued Customers</h2>
      <p>At Graha Telekomunikasi Indonesia, our customers are at the heart of everything we do. We are proud to serve a diverse range of clients, from small businesses to large enterprises, across various industries.</p>
      <ul className="list-disc list-inside mt-4">
        <li>Enterprise Solutions</li>
        <li>SME Partnerships</li>
        <li>Government Agencies</li>
        <li>Educational Institutions</li>
      </ul>
      <p className="mt-4">We are committed to building long-lasting relationships based on trust, reliability, and exceptional service.</p>
    </div>
  );
};

export default OurCustomer;