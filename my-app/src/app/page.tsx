import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <p className="p-3 text-lg font-bold text-blue-500">Welcome Home</p>
      </div>
      <Footer />
    </div>
  );
}
