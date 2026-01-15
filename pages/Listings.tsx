
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, ArrowRight, Home, Search } from 'lucide-react';

// Mock Data for Listings
const MOCK_LISTINGS = [
  {
    id: 1,
    title: "Luxury Desert Estate",
    address: "4500 Winery Rd, Pahrump, NV 89048",
    price: "$850,000",
    beds: 4,
    baths: 3.5,
    sqft: "3,200",
    image: "https://photos.zillowstatic.com/fp/46c73919ea0db10bc51d4883cf04d265-cc_ft_960.webp",
    type: "Single Family"
  },
  {
    id: 2,
    title: "Modern Mountain View Home",
    address: "2300 Gamebird Rd, Pahrump, NV 89048",
    price: "$425,000",
    beds: 3,
    baths: 2,
    sqft: "1,850",
    image: "https://img1.wsimg.com/isteam/stock/107927/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600",
    type: "Single Family"
  },
  {
    id: 3,
    title: "Commercial Opportunity",
    address: "150 Hwy 160, Pahrump, NV 89048",
    price: "$1,200,000",
    beds: 0,
    baths: 2,
    sqft: "5,000",
    image: "https://img1.wsimg.com/isteam/stock/43920/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730",
    type: "Commercial"
  },
  {
    id: 4,
    title: "Cozy Starter Home",
    address: "123 Calvada Blvd, Pahrump, NV 89048",
    price: "$315,000",
    beds: 2,
    baths: 2,
    sqft: "1,400",
    image: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG",
    type: "Single Family"
  },
  {
    id: 5,
    title: "Golf Course Villa",
    address: "Mountain Falls Dr, Pahrump, NV 89048",
    price: "$550,000",
    beds: 3,
    baths: 2.5,
    sqft: "2,400",
    image: "https://scontent.fmnl25-5.fna.fbcdn.net/v/t39.30808-6/548269509_1333343485415981_2827082723537900492_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zU4a7d62iKUQ7kNvwH7UdI_&_nc_oc=AdkfvaijsTQ_xA0kjp9FSkSDgZ4IPRG88Wub5LPAQsdZ8ihO2osJ3DM97fJdTTrQs6PFZPixtQPbqiF0JqCTlv2H&_nc_zt=23&_nc_ht=scontent.fmnl25-5.fna&_nc_gid=-nKu4f4p1DU0F7Gp-PTkhg&oh=00_AfpN0jc99BW0wJN3Ulc-pw3JzV0aN8fO7rVXTAVthBJJjw&oe=696D4F12",
    type: "Single Family"
  },
  {
    id: 6,
    title: "Spacious Ranch Style",
    address: "789 Homestead Rd, Pahrump, NV 89048",
    price: "$480,000",
    beds: 4,
    baths: 3,
    sqft: "2,600",
    image: "https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/490653698_1201921425224855_1496396098191417700_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f5G3kC65tjsQ7kNvwF8r4i4&_nc_oc=AdnRYb-AjnCCxH_CH_BmgsNNK0nrez5V12KCxTZ0hQc3KCv5s56k5XaHxajtzPtKfQ9KQlBGmw-cj1INN-nSdXhO&_nc_zt=23&_nc_ht=scontent.fmnl25-4.fna&_nc_gid=niW_ZNCRZFaspNHbHvzSEQ&oh=00_AfpIFWfM_ZoitbxeIH7R9OCFRECFQ5pmd5fBc2IiV-Q-xg&oe=696D6708",
    type: "Single Family"
  }
];

const Listings: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const filteredListings = MOCK_LISTINGS.filter(item => {
      if (!query) return true;
      const lowerQuery = query.toLowerCase();
      return (
          item.title.toLowerCase().includes(lowerQuery) ||
          item.address.toLowerCase().includes(lowerQuery) ||
          item.type.toLowerCase().includes(lowerQuery)
      );
  });

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
           <div>
              <div className="flex items-center gap-2 mb-2">
                 <div className="p-1.5 bg-green-100 rounded-md">
                   <Home size={16} className="text-green-600" />
                 </div>
                 <span className="text-xs font-bold uppercase tracking-widest text-green-700">Real Estate</span>
              </div>
              <h1 className="text-4xl font-serif text-gray-900 leading-tight">Current <span className="text-green-600 italic">Listings</span></h1>
           </div>
           
           {query && (
             <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-green-100 flex items-center gap-2">
                <span className="text-sm text-gray-500">Searching for:</span>
                <span className="font-bold text-gray-900">"{query}"</span>
                <span className="ml-2 text-xs text-gray-400">({filteredListings.length} results)</span>
             </div>
           )}
        </div>

        {filteredListings.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredListings.map((listing) => (
                 <div key={listing.id} className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl hover:border-green-200 transition-all duration-500">
                    <div className="relative h-64 overflow-hidden">
                       <img 
                          src={listing.image} 
                          alt={listing.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                       />
                       <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-green-800 shadow-sm">
                          {listing.type}
                       </div>
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                       <div className="absolute bottom-4 right-4 text-white font-bold text-xl drop-shadow-md">
                          {listing.price}
                       </div>
                    </div>
                    
                    <div className="p-6">
                       <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                          {listing.title}
                       </h3>
                       <div className="flex items-start gap-2 text-gray-500 mb-6">
                          <MapPin size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm leading-relaxed">{listing.address}</p>
                       </div>
                       
                       <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-4 mb-4">
                          <div className="flex flex-col items-center">
                             <div className="flex items-center gap-1.5 text-gray-900 font-bold">
                                <Bed size={16} className="text-gray-400" /> <span>{listing.beds}</span>
                             </div>
                             <span className="text-[10px] text-gray-400 uppercase tracking-wide">Beds</span>
                          </div>
                          <div className="flex flex-col items-center border-l border-gray-100">
                             <div className="flex items-center gap-1.5 text-gray-900 font-bold">
                                <Bath size={16} className="text-gray-400" /> <span>{listing.baths}</span>
                             </div>
                             <span className="text-[10px] text-gray-400 uppercase tracking-wide">Baths</span>
                          </div>
                          <div className="flex flex-col items-center border-l border-gray-100">
                             <div className="flex items-center gap-1.5 text-gray-900 font-bold">
                                <Square size={16} className="text-gray-400" /> <span>{listing.sqft}</span>
                             </div>
                             <span className="text-[10px] text-gray-400 uppercase tracking-wide">Sq Ft</span>
                          </div>
                       </div>
                       
                       <button className="w-full py-3 rounded-xl bg-gray-50 text-gray-900 font-bold text-xs uppercase tracking-widest hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                          View Details <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                       </button>
                    </div>
                 </div>
              ))}
           </div>
        ) : (
           <div className="text-center py-20 bg-white rounded-[2rem] border border-gray-100 shadow-sm">
               <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                  <Search size={32} />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-2">No listings found</h3>
               <p className="text-gray-500 max-w-md mx-auto">We couldn't find any properties matching "{query}". Try adjusting your search or browsing our featured listings.</p>
               <button 
                  onClick={() => window.location.href = '#/listings'} 
                  className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full font-bold text-sm hover:bg-green-700 transition-colors"
               >
                  View All Listings
               </button>
           </div>
        )}
      </div>
    </div>
  );
};

export default Listings;
