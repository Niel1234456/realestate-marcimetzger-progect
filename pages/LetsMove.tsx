
import React, { useState } from 'react';
import { Send, MapPin, Truck, Home, Calendar, Info, ArrowRight, Sparkles } from 'lucide-react';
import { generateRelocationGuide } from '../services/geminiService';

const LetsMove: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [guide, setGuide] = useState<string | undefined>(undefined);
  const [formData, setFormData] = useState({
    currentCity: '',
    movingTo: 'Pahrump, NV',
    timeframe: '1-3 Months',
    preferences: ''
  });

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await generateRelocationGuide(formData);
      setGuide(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2 space-y-6 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-200 bg-green-50">
              <Truck size={14} className="text-green-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-green-700">Relocation Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">Thinking of <br/><span className="text-green-600 italic">Moving?</span></h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Moving is one of life's biggest transitions. We make it simple. Whether you are moving across town or across the country, our relocation experts are here to guide you home.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://img1.wsimg.com/isteam/stock/107927/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600" 
                alt="Keys to a new home" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white"><MapPin /></div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Expertise In</p>
                <p className="font-bold text-gray-900">Pahrump Valley</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Relocation Form Card */}
          <div className="lg:col-span-1 bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100">
             <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center gap-3">
               <Info size={20} className="text-green-600" /> Relocation Inquiry
             </h2>
             <form className="space-y-4" onSubmit={handleGenerate}>
                <div>
                   <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 ml-1">Moving From</label>
                   <input 
                      type="text" 
                      required
                      placeholder="City, State"
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                      value={formData.currentCity}
                      onChange={(e) => setFormData({...formData, currentCity: e.target.value})}
                   />
                </div>
                <div>
                   <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 ml-1">Moving To</label>
                   <input 
                      type="text" 
                      required
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                      value={formData.movingTo}
                      onChange={(e) => setFormData({...formData, movingTo: e.target.value})}
                   />
                </div>
                <div>
                   <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 ml-1">Timeframe</label>
                   <select 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all appearance-none"
                      value={formData.timeframe}
                      onChange={(e) => setFormData({...formData, timeframe: e.target.value})}
                   >
                      <option>Immediate</option>
                      <option>1-3 Months</option>
                      <option>3-6 Months</option>
                      <option>Just Planning</option>
                   </select>
                </div>
                <div>
                   <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 ml-1">Your Preferences</label>
                   <textarea 
                      rows={3}
                      placeholder="Schools, space, land, etc..."
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all resize-none"
                      value={formData.preferences}
                      onChange={(e) => setFormData({...formData, preferences: e.target.value})}
                   ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-green-600 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-green-700 transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? 'Processing...' : (
                    <>
                      Generate Custom Guide <Sparkles size={16} />
                    </>
                  )}
                </button>
             </form>
          </div>

          {/* AI Result Area */}
          <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 relative overflow-hidden">
             {!guide && !loading && (
               <div className="h-full flex flex-col items-center justify-center text-center p-12 opacity-40">
                  <Truck size={48} className="mb-4 text-gray-300" />
                  <h3 className="text-xl font-serif mb-2">Your Relocation Roadmap</h3>
                  <p className="text-sm max-w-sm">Fill out the form to generate a customized relocation guide powered by our local knowledge.</p>
               </div>
             )}
             
             {loading && (
               <div className="h-full flex flex-col items-center justify-center text-center p-12">
                  <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="font-bold text-gray-900">Crafting your custom move guide...</p>
               </div>
             )}

             {guide && (
               <div className="animate-fadeIn">
                  <h3 className="text-2xl font-serif text-gray-900 mb-6">Your Relocation Strategy</h3>
                  <div className="prose prose-green max-w-none text-gray-600 leading-relaxed whitespace-pre-wrap">
                    {guide}
                  </div>
                  <div className="mt-10 p-6 bg-green-50 rounded-2xl border border-green-100 flex items-center justify-between">
                     <p className="text-sm text-green-800 font-medium">Want to discuss this guide with a pro?</p>
                     <button className="flex items-center gap-2 font-bold text-green-700 hover:text-green-900 transition-colors">
                        Call Marci <ArrowRight size={16} />
                     </button>
                  </div>
               </div>
             )}
          </div>

        </div>

        {/* Benefits Section */}
        <div className="bg-gray-900 rounded-[3rem] p-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
           <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400"><Home /></div>
              <h4 className="text-xl font-serif mb-2">Market Analysis</h4>
              <p className="text-sm text-gray-400">Detailed data on home values in Pahrump compared to your current location.</p>
           </div>
           <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400"><Calendar /></div>
              <h4 className="text-xl font-serif mb-2">Timeline Planning</h4>
              <p className="text-sm text-gray-400">Step-by-step coordination from listing your old home to moving into your new one.</p>
           </div>
           <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400"><MapPin /></div>
              <h4 className="text-xl font-serif mb-2">Community Tour</h4>
              <p className="text-sm text-gray-400">Virtual or in-person tours of the valley to find the perfect neighborhood for you.</p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default LetsMove;
