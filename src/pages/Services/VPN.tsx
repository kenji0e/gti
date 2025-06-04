// src/pages/Services/VPN.tsx
import React from 'react';

const VPN: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">VPN Solutions</h2>
      <p>Secure your network and enable remote access with our robust VPN (Virtual Private Network) solutions. Protect your data in transit, connect multiple branches securely, and empower your remote workforce with encrypted and private connections.</p>
      <ul className="list-disc list-inside mt-4">
        <li>Site-to-Site VPN</li>
        <li>Remote Access VPN</li>
        <li>Data Encryption</li>
        <li>Network Security</li>
      </ul>
    </div>
  );
};

export default VPN;