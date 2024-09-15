import React, { useState }  from 'react';
import Header from './Header';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';


const emissionsData = [
  { month: 'Jan', co2: 1000, ch4: 500, no2: 300 },
  { month: 'Feb', co2: 1200, ch4: 550, no2: 320 },
  { month: 'Mar', co2: 1100, ch4: 600, no2: 350 },
  { month: 'Apr', co2: 1300, ch4: 580, no2: 340 },
  { month: 'May', co2: 1400, ch4: 620, no2: 360 },
  { month: 'Jun', co2: 1350, ch4: 590, no2: 330 },
];

const temperatureData = [
  { month: 'Jan', temp: 25 },
  { month: 'Feb', temp: 26 },
  { month: 'Mar', temp: 27 },
  { month: 'Apr', temp: 28 },
  { month: 'May', temp: 29 },
  { month: 'Jun', temp: 30 },
];

const DemoPage = () => {
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header isDemo={true} />
      
      <div className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-8">CarbonTrack Demo</h1>
        
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Emissions Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={emissionsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="co2" stroke="#8884d8" />
              <Line type="monotone" dataKey="ch4" stroke="#82ca9d" />
              <Line type="monotone" dataKey="no2" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Temperature Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={temperatureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="temp" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Satellite monitoring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
                <h3 className="font-semibold mb-2">Pollution tracking with Sentinel-5P</h3>
                <div className="aspect-w-16 aspect-h-9">
                <img 
                    src="/images/mapgif.gif" 
                    className='w-full h-auto'
                    alt="Sentinel-5P CO Concentration" 
                    
                />
                </div>
                
            </div>  
            <div>
              <h3 className="font-semibold mb-2">Temperature monitoring with Sentinel-3</h3>
              <img src="https://via.placeholder.com/600x400" alt="Temp monitoring w Sen3" className="w-full h-auto mb-2" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Land use monitoring with Sentinel-2</h3>
              <img src="https://via.placeholder.com/600x400" alt="Solar Farm" className="w-full h-auto mb-2" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">High-res CO2 emissions data with CO2M</h3>
              <img src="https://via.placeholder.com/600x400" alt="Solar Farm" className="w-full h-auto mb-2" />
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
    
    <footer className="bg-gray-800 text-white mt-12 py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 CarbonTrack. All rights reserved (for now).</p>
      </div>
    </footer>
    </div>
  );
};

export default DemoPage;