
import React from 'react';
import { Shield, Award, Users, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-16 px-4 overflow-hidden sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-100 bg-green-50 mb-4">
            <Shield size={14} className="text-green-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-green-700">Established Expertise</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">About <span className="text-green-600 italic">Ridge Realty</span></h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Leading the Pahrump real estate market with integrity, deep local roots, and a commitment to excellence since 1996.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative animate-slideUp">
             <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://scontent.fmnl25-6.fna.fbcdn.net/v/t39.30808-6/384230302_798510298899305_5227004426085687196_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=EYRivX5IbKMQ7kNvwHDe2JM&_nc_oc=Adl7u4YMwBK1LQtj8bhzMLeg5_fBUqngbaklkqhBTRlHPRm4wJBid3Su1U0pMb9Bl8AN920A4AMc03pHeQp-_s1l&_nc_zt=23&_nc_ht=scontent.fmnl25-6.fna&_nc_gid=zGPtKMzUN2SQrAv14egOkg&oh=00_Afq_lqElTeSzC91UJuP4TC8qBuzsOHHYEN1reGxhXIUymw&oe=696D0435" 
                  alt="Marci Metzger" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-50 rounded-full -z-10 blur-3xl opacity-60"></div>
          </div>

          <div className="space-y-8 animate-fadeIn">
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">The Story of <span className="font-bold">Marci Metzger</span></h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Marci Metzger is more than just a real estate agent; she is a community advocate with nearly three decades of experience in the industry. Originally building a powerhouse reputation in Washington State, Marci relocated to Pahrump, Nevada, bringing with her a level of corporate precision rarely seen in local markets.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As the broker/owner of The Ridge Realty Group, Marci specializes in residential, commercial, and investment properties. Her philosophy is simple: **"Real Estate Done Right."** This means transparency, aggressive negotiation on behalf of clients, and a white-glove service level regardless of the property value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <Award className="text-green-600 mb-3" size={24} />
                <h3 className="font-bold text-gray-900 mb-1">Top Tier Performance</h3>
                <p className="text-sm text-gray-500">Consistently ranked in the top 5% of agents in the Pahrump Valley for sales volume.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <Users className="text-green-600 mb-3" size={24} />
                <h3 className="font-bold text-gray-900 mb-1">Client Focused</h3>
                <p className="text-sm text-gray-500">Over 500+ successful closings and a lifetime of repeat clients and referrals.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-900 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 relative z-10">Our Core Mission</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10 relative z-10">
            "To empower our clients through education, protect their interests through expertise, and build a stronger community through ethical real estate practices."
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <div className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white text-sm font-bold uppercase tracking-widest">Integrity First</div>
            <div className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white text-sm font-bold uppercase tracking-widest">Market Mastery</div>
            <div className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white text-sm font-bold uppercase tracking-widest">Community Driven</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
