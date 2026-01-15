
import React from 'react';
import { ArrowRight, Star, Shield, Users, Award, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-16 px-4 overflow-hidden sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border border-green-100 -z-10 rounded-2xl"></div>
            <img 
              src="https://scontent.fmnl25-6.fna.fbcdn.net/v/t39.30808-6/384230302_798510298899305_5227004426085687196_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=EYRivX5IbKMQ7kNvwHDe2JM&_nc_oc=Adl7u4YMwBK1LQtj8bhzMLeg5_fBUqngbaklkqhBTRlHPRm4wJBid3Su1U0pMb9Bl8AN920A4AMc03pHeQp-_s1l&_nc_zt=23&_nc_ht=scontent.fmnl25-6.fna&_nc_gid=zGPtKMzUN2SQrAv14egOkg&oh=00_Afq_lqElTeSzC91UJuP4TC8qBuzsOHHYEN1reGxhXIUymw&oe=696D0435" 
              alt="Marci Metzger" 
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
            <div className="absolute bottom-8 right-8 bg-white p-6 shadow-xl rounded-xl border border-green-50">
              <p className="text-3xl font-serif font-bold text-gray-900 leading-none mb-1">28+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-green-600">Years of Experience</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <span className="text-green-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Our Founder</span>
              <h1 className="text-5xl lg:text-7xl font-serif text-gray-900 leading-[0.9] mb-6">
                Marci <span className="italic text-green-700">Metzger</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Real estate isn't just about property; it's about the people and the futures we help build. Marci has dedicated nearly three decades to mastering the art of the deal and the heart of the home.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <Shield className="text-green-600 mb-3" size={24} />
                <h3 className="font-bold text-gray-900 mb-2">Integrity First</h3>
                <p className="text-sm text-gray-500">Honesty isn't a policy; it's our foundation. We provide transparent advice even when it's tough.</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <Award className="text-green-600 mb-3" size={24} />
                <h3 className="font-bold text-gray-900 mb-2">Market Mastery</h3>
                <p className="text-sm text-gray-500">Deep local knowledge in Pahrump and Southern Nevada that gives our clients a competitive edge.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-3xl font-serif text-gray-900 mb-8">The Journey to <span className="italic">Ridge Realty</span></h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Marci started her real estate career in Washington State, where she quickly rose to the top as a high-volume producer. Bringing that same work ethic and tenacity to Pahrump, Nevada, she founded The Ridge Realty Group with a single goal: to provide "Executive Level" service to everyone.
            </p>
            <p>
              Whether you are buying your first mobile home or selling a multi-million dollar commercial complex, Marci's team applies the same level of rigorous market analysis and negotiation expertise. We believe that every client deserves a pro at their service.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="text-center p-10 bg-green-50 rounded-[3rem] border border-green-100">
            <Users className="mx-auto text-green-600 mb-4" size={32} />
            <p className="text-4xl font-serif font-bold text-gray-900 mb-2">500+</p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Families Served</p>
          </div>
          <div className="text-center p-10 bg-green-50 rounded-[3rem] border border-green-100">
            <Star className="mx-auto text-green-600 mb-4" size={32} />
            <p className="text-4xl font-serif font-bold text-gray-900 mb-2">Top 1%</p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Pahrump Agents</p>
          </div>
          <div className="text-center p-10 bg-green-50 rounded-[3rem] border border-green-100">
            <MapPin className="mx-auto text-green-600 mb-4" size={32} />
            <p className="text-4xl font-serif font-bold text-gray-900 mb-2">NV/WA</p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Licensed States</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Let's write your next <span className="italic text-green-400">chapter</span> together.</h2>
          <button className="px-10 py-5 bg-green-600 hover:bg-green-700 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-xl shadow-green-900/20">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
