import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-16 px-4 overflow-hidden sm:px-6 lg:px-8">
      <div className="relative max-w-xl mx-auto animate-fadeInUp opacity-0">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">About MoveAI</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Bridging the gap between technology and physical well-being.
          </p>
        </div>
        
        <div className="mt-12 animate-fadeInUp delay-100 opacity-0">
          <div className="prose prose-green prose-lg text-gray-500 mx-auto">
            <p>
              <strong>MoveAI</strong> is a demonstration of how Generative AI can assist in our daily lives without being intrusive. 
              We believe that fitness shouldn't be complicated. You shouldn't need a subscription to an expensive app or hours of research to find a workout that fits your schedule.
            </p>
            <p>
              By leveraging the power of the <strong>Gemini API</strong>, we create unique, on-the-fly workout routines tailored specifically to the constraints you provide.
            </p>
            <ul role="list">
              <li>Dynamic generation based on time availability.</li>
              <li>Adaptable to equipment (or lack thereof).</li>
              <li>Privacy-focused: No personal data is stored.</li>
            </ul>
            <p>
              This is a static web application built with React, TypeScript, and Tailwind CSS. It represents a modern approach to web development where the backend logic is handled by powerful AI models via API calls.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 animate-fadeInUp delay-200 opacity-0">
           <h3 className="text-xl font-bold text-gray-900 mb-4">Tech Stack</h3>
           <div className="grid grid-cols-2 gap-4">
             <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
               <span className="font-semibold text-gray-900 block">Frontend</span>
               <span className="text-gray-600">React 18, TypeScript, Vite</span>
             </div>
             <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
               <span className="font-semibold text-gray-900 block">Styling</span>
               <span className="text-gray-600">Tailwind CSS</span>
             </div>
             <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
               <span className="font-semibold text-gray-900 block">AI Model</span>
               <span className="text-gray-600">Google Gemini 3 Flash</span>
             </div>
             <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
               <span className="font-semibold text-gray-900 block">Routing</span>
               <span className="text-gray-600">React Router (Hash)</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;