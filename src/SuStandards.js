import React, { useState } from 'react';
import Header from './Header';

const SuStandards = () => {
    
    
    return (
      <div className="bg-gray-100 min-h-screen">
        <Header isDemo={true} />
        
        <div className="container mx-auto mt-8 p-4">
          <h1 className="text-3xl font-bold mb-8">Sustainability Standards: A Summary</h1>
          
            <div className = "grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-xl font-semibold mb-4"><a href="https://www.cdp.net/en" target="_blank" rel="noopener noreferrer" className="text-green-500 "> CDP</a></h2>
                    <p>The Carbon Disclosure Project (CDP) is a global organization that facilitates the disclosure of environmental impacts by companies and cities, with a focus on climate change, water security, and deforestation. Its primary purpose is to provide a platform where organizations can report their environmental data, allowing investors and stakeholders to understand their climate-related risks and opportunities. Organizations submit detailed reports on their environmental impact and strategies for managing risks, and CDP scores them based on their disclosure and performance.</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4"><a href="https://www.iso.org/standard/66453.html" target="_blank" rel="noopener noreferrer" className="text-green-500 "> ISO-14064</a></h2>
                <p>ISO-14064 is an international standard designed for quantifying and reporting greenhouse gas (GHG) emissions. It is divided into three parts: Part 1 covers the organizational level for quantification and reporting of GHG emissions and removals; Part 2 focuses on the project level for quantification, monitoring, and reporting of GHG reductions or removals; and Part 3 provides guidance for validating and verifying GHG assertions. The purpose of ISO 14064 is to provide a clear framework for measuring and reporting GHG emissions and reductions, ensuring consistency and credibility. Organizations follow the guidelines to calculate their emissions and reductions and then report this data, which can be independently verified.</p>
            </div>


            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4"><a href="https://sciencebasedtargets.org/net-zero" target="_blank" rel="noopener noreferrer" className="text-green-500 "> SBTi</a></h2>
                <p>The Science Based Targets initiative (SBTi) is a global organization that helps companies set emissions reduction targets based on the latest climate science. Its goal is to encourage companies to establish targets that align with limiting global warming to well below 2°C above pre-industrial levels, with an aspiration for 1.5°C. Companies commit to reducing their greenhouse gas emissions according to scientific benchmarks, and SBTi provides guidance, tools, and support to help them set and achieve these targets.</p>

            </div>
        </div>
      </div>
    );
  };

export default SuStandards;