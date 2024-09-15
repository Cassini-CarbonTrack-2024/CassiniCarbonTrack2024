import React from 'react';
import Header from './Header';
import {Thermometer, ScrollText, Satellite, Earth, ChartNoAxesCombined, SearchCheck } from 'lucide-react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DemoPage from './DemoPage';
import SuStandards from './SuStandards';

const LandingPage = () => (
  <div className="bg-gray-100 min-h-screen">
    <Header />
    
    <main className="container mx-auto mt-8 p-4">
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Unified Emissions Monitoring, Temperature Tracking, and Carbon Offset Verification</h2>
        <p className="text-xl mb-6">Real-time satellite data for comprehensive sustainability tracking</p>
        <div className="space-x-4">
          <Link to="/demo" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">Get Started</Link>
        </div>
      </section>
      
      <section id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Earth className="mx-auto mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">Global Monitoring</h3>
          <p>Track emissions worldwide with Sentinel-5P data</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <ChartNoAxesCombined className="mx-auto mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">AI Analytics</h3>
          <p>Advanced insights and predictive modeling</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Thermometer className="mx-auto mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">Temperature Tracking</h3>
          <p>Monitor urban heat with Sentinel-3 data</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <SearchCheck className="mx-auto mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">Offset Verification</h3>
          <p>Verify carbon offset projects with high-resolution imaging</p>
        </div>

        <Link to="/sus" className="bg-white p-6 rounded-lg shadow-md text-center">
          <ScrollText className="mx-auto mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">Sustainability Standards</h3>
          <p>Read up on comprehensive summaries of the 
            <a href="https://www.cdp.net/en" target="_blank" rel="noopener noreferrer" className="text-green-500 "> <b>CDP</b></a>,
            <a href="https://www.iso.org/standard/66453.html" target="_blank" rel="noopener noreferrer" className="text-green-500 "> <b>ISO-14064</b></a>, and 
            <a href="https://sciencebasedtargets.org/net-zero" target="_blank" rel="noopener noreferrer" className="text-green-500 "> <b>SBTi</b></a> standards</p>
          </Link>
    

        <a href="https://browser.dataspace.copernicus.eu/" target="_blank" rel="noopener noreferrer">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Satellite className="mx-auto mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">Copernicus Browser</h3>
          <p>Take a closer look at the environmental data provided by Copernicus</p>
        </div>
        </a>
      </section>
    </main> 
    
    <footer className="bg-gray-800 text-white mt-12 py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 CarbonTrack. All rights reserved (for now).</p>
      </div>
    </footer>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="/sus" element={<SuStandards />} />
    </Routes>
  </Router>
);

export default App;