// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isDemo = false }) => (
  <header className="bg-green-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">CarbonTrack</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          <li>
            {isDemo ? (
              <Link to="/" className="bg-white text-green-600 px-3 py-1 rounded hover:bg-green-100">Home</Link>
            ) : (
              <Link to="/demo" className="bg-white text-green-600 px-3 py-1 rounded hover:bg-green-100">Demo</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;