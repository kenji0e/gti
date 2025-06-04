// src/pages/Services/Dedicated.tsx
import React from 'react';

const Dedicated: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Dedicated Internet Access</h2>
      <p>For businesses that demand uncompromising performance and stability, our dedicated internet access provides exclusive bandwidth, ensuring consistent speeds and superior reliability. Eliminate contention and guarantee your critical operations run smoothly.</p>
      <ul className="list-disc list-inside mt-4">
        <li>Guaranteed Bandwidth</li>
        <li>Symmetric Upload and Download Speeds</li>
        <li>Enhanced Security</li>
        <li>SLA-backed Performance</li>
      </ul>
    </div>
  );
};

export default Dedicated;