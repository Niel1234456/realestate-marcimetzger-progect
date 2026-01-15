
import React from 'react';
import { ArrowRight, Plane, School, Heart, Sun, Map } from 'lucide-react';

const LetsMove: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Relocation Guide</span>
          <h1 className="text-5xl lg:text-7xl font-serif text-gray-900 mb-6">Let's <span className="italic text-green-700">Move</span></h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Everything you need to know about making Pahrump, Nevada your new home.</p>
        </div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
            <Sun className="text-green-600 mb-4" size={32} />
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Why Pahrump?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Located just 60 miles west of Las Vegas, Pahrump offers a unique blend of rural charm and modern convenience. Low property taxes, stunning mountain views, and a thriving community make it the perfect escape from big city noise.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
            <School className="text-green-600 mb-4" size={32} />
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Schools & Family</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Pahrump is served by the Nye County School District. With several elementary, middle, and high schools, as well as a community college campus, educational needs are well-covered for families of all ages.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
            <Heart className="text-green-600 mb-4" size={32} />
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Community Life</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              From the annual Fall Festival to local wineries and golf courses, there's always something to do. Enjoy outdoor adventures at the nearby Spring Mountains or relax at one of our local resorts.
            </p>
          </div>

        </div>

        {/* Relocation Resources */}
        <div className="bg-white rounded-[3rem] p-10 lg:p-16 border border-gray-100 shadow-xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-gray-900 mb-6">Moving Services & <span className="italic text-green-700">Resources</span></h2>
              <p className="text-gray-600 mb-8">We have built a network of trusted local contractors, utility providers, and services to make your transition seamless.</p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-900 font-bold">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Utility Setup Guide
                </li>
                <li className="flex items-center gap-3 text-gray-900 font-bold">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Local DMV Information
                </li>
                <li className="flex items-center gap-3 text-gray-900 font-bold">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Preferred Lenders List
                </li>
                <li className="flex items-center gap-3 text-gray-900 font-bold">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Pet & Livestock Guidelines
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <img src="https://img1.wsimg.com/isteam/stock/107927/:/rs=w:600,h:600,cg:true" className="w-full h-full object-cover" alt="Community" />
              </div>
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden mt-8">
                <img src="https://img1.wsimg.com/isteam/stock/43920/:/rs=w:600,h:600,cg:true" className="w-full h-full object-cover" alt="Local Life" />
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6">Ready to make the jump?</p>
          <a href="tel:2069196886" className="inline-flex items-center gap-4 px-12 py-6 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-2xl">
            Contact Relocation Team <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LetsMove;
