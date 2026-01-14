
import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, ArrowRight, Filter, Search } from 'lucide-react';

// Mock Data for Listings
const listingsData = [
  {
    id: 1,
    price: "$850,000",
    address: "4500 Winery Rd",
    city: "Pahrump, NV 89048",
    beds: 4,
    baths: 3.5,
    sqft: "3,200",
    image: "https://img1.wsimg.com/isteam/stock/107927/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600",
    tag: "Luxury"
  },
  {
    id: 2,
    price: "$425,000",
    address: "2300 Gamebird Rd",
    city: "Pahrump, NV 89048",
    beds: 3,
    baths: 2,
    sqft: "1,850",
    image: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG",
    tag: "New Listing"
  },
  {
    id: 3,
    price: "$315,000",
    address: "150 Hwy 160",
    city: "Pahrump, NV 89048",
    beds: 2,
    baths: 2,
    sqft: "1,400",
    image: "https://img1.wsimg.com/isteam/stock/43920/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730",
    tag: "Commercial"
  },
  {
    id: 4,
    price: "$675,000",
    address: "Mountain Falls Dr",
    city: "Pahrump, NV 89048",
    beds: 5,
    baths: 4,
    sqft: "4,100",
    image: "https://img1.wsimg.com/isteam/stock/12792/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365/qt=q:70",
    tag: "Golf Course"
  },
  {
    id: 5,
    price: "$550,000",
    address: "Artesia Blvd",
    city: "Pahrump, NV 89048",
    beds: 4,
    baths: 3,
    sqft: "2,800",
    image: "https://img1.wsimg.com/isteam/stock/kayaJdA/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365/qt=q:70",
    tag: "Featured"
  },
  {
    id: 6,
    price: "$295,000",
    address: "Calvada Blvd",
    city: "Pahrump, NV 89048",
    beds: 3,
    baths: 2,
    sqft: "1,600",
    image: "https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11.02%25,l:0%25,w:100%25,h:77.95%25/rs=w:1200,h:600,cg:true",
    tag: "Pending"
  }
];

const Listings: React.FC = () => {
  const [filterType, setFilterType] = useState('All');

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-200 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest mb-4">
            Current Inventory
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Exclusive <span className="italic text-green-600">Listings</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Browse our handpicked selection of premier properties in Pahrump and surrounding areas.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col md:flex-row gap-4 items-center justify-between animate-fadeInUp delay-100">
          <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {['All', 'Residential', 'Commercial', 'Land', 'Luxury'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                  filterType === type 
                    ? 'bg-green-600 text-white shadow-lg shadow-green-200' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
             <div className="relative flex-grow md:flex-grow-0">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
               <input 
                 type="text" 
                 placeholder="Search address..." 
                 className="w-full md:w-64 pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
               />
             </div>
             <button className="p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 hover:text-green-600 hover:border-green-200 transition-all">
               <Filter size={18} />
             </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listingsData.map((listing, index) => (
            <div 
              key={listing.id} 
              className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={listing.image} 
                  alt={listing.address} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                
                {/* Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase tracking-widest text-green-800 shadow-lg">
                  {listing.tag}
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-2xl font-serif font-bold">{listing.price}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{listing.address}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <MapPin size={14} className="text-green-500" />
                    {listing.city}
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-gray-50">
                  <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-xl group-hover:bg-green-50 transition-colors duration-300">
                    <Bed size={18} className="text-gray-400 mb-1 group-hover:text-green-600" />
                    <span className="text-xs font-bold text-gray-700">{listing.beds} <span className="font-normal text-gray-400">Beds</span></span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-xl group-hover:bg-green-50 transition-colors duration-300">
                    <Bath size={18} className="text-gray-400 mb-1 group-hover:text-green-600" />
                    <span className="text-xs font-bold text-gray-700">{listing.baths} <span className="font-normal text-gray-400">Baths</span></span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-xl group-hover:bg-green-50 transition-colors duration-300">
                    <Square size={18} className="text-gray-400 mb-1 group-hover:text-green-600" />
                    <span className="text-xs font-bold text-gray-700">{listing.sqft} <span className="font-normal text-gray-400">Sqft</span></span>
                  </div>
                </div>

                <button className="w-full mt-4 py-3 bg-gray-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2 group/btn">
                  View Details
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Listings;
