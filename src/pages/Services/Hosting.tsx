// src/pages/Services/Hosting.tsx
import React from 'react';

const Hosting: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Hosting Services</h2>
      <p>Establish your online presence with our reliable and scalable hosting services. Whether you need web hosting for your corporate website or dedicated servers for demanding applications, we offer a range of solutions to meet your specific requirements.</p>
      <ul className="list-disc list-inside mt-4">
        <li>Shared Hosting</li>
        <li>VPS Hosting</li>
        <li>Dedicated Servers</li>
        <li>Cloud Hosting</li>
      </ul>
    </div>
  );
};

export default Hosting;