
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, TrendingUp, Star, Home as HomeIcon, Megaphone, ArrowUpRight } from 'lucide-react';

// Unified small font label for all slides
const BRAND_LABEL = "MARCI METZGER - THE RIDGE REALTY GROUP";

const slides = [
  {
    id: 0,
    title: 'Pahrump',
    highlight: 'Realtor',
    description: 'Your trusted partner for buying and selling homes in Pahrump, Nevada. Experience integrity, expertise, and results with The Ridge Realty Group.',
    image: "https://scontent.fmnl25-7.fna.fbcdn.net/v/t39.30808-6/480877284_1153959160021082_1293992860742485288_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=MaQc4Gs7gdQQ7kNvwEfWuYZ&_nc_oc=AdmWOl7c9LSiygWZmT-L7BWJUKnUrKhZPq8M6qtdqj1InxBI-pu5Nv_0ZnJJIXplO-MiqKcqAns_ct3k3pWSARmE&_nc_zt=23&_nc_ht=scontent.fmnl25-7.fna&_nc_gid=W8N8yH_uZCYriRW7HTVing&oh=00_Afp2B7wKjVhGDqG4YChCT8EorJGd55KXVmOYORwObFPrlw&oe=696BF677",
  },
  {
    id: 1,
    title: 'Commercial &',
    highlight: 'Residential',
    description: 'Expertise across the board. Whether you are looking for your next headquarters or your forever home.',
    image: "https://img1.wsimg.com/isteam/stock/43920/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730",
  },
  {
    id: 2,
    title: 'Real Estate',
    highlight: 'Done Right',
    description: 'Transparency, trust, and results. We redefine the standard of service in every transaction.',
    image: "https://img1.wsimg.com/isteam/stock/107927/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600",
  },
  {
    id: 3,
    title: 'Curated',
    highlight: 'Spaces',
    description: 'Step inside designs that inspire. Every detail crafted for comfort, style, and modern living.',
    image: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG",
  },
];

const logos = [
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/BIG%20CIRCLE%202.png/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200",
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Equal%20Housing%20Logo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:199,h:200,cg:true",
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Realtor%20Pin.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:223,h:200,cg:true",
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Chamber.jpg/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200"
];

// Repeat logos to ensure seamless scroll even on wide screens
const displayLogos = [...logos, ...logos, ...logos];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Intersection Observer state for the About Section animation
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  // Intersection Observer for the 'Get It Sold' section
  const soldSectionRef = useRef<HTMLDivElement>(null);
  const [isSoldVisible, setIsSoldVisible] = useState(false);

  useEffect(() => {
    // Slide Timer
    const duration = currentSlide === 0 ? 5000 : 3500;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    // Scroll Animation Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === aboutSectionRef.current) {
             setIsAboutVisible(entry.isIntersecting);
          }
          if (entry.target === soldSectionRef.current) {
             setIsSoldVisible(entry.isIntersecting);
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: "-50px 0px"
      } 
    );

    if (aboutSectionRef.current) observer.observe(aboutSectionRef.current);
    if (soldSectionRef.current) observer.observe(soldSectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden font-sans">
      
      {/* ---------------- HERO SECTION ---------------- */}
      <div className="relative h-screen w-full overflow-hidden">
        
        {/* Background Layer with Blur Fade Transition */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[2500ms] ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 blur-0 scale-110 z-10' 
                : 'opacity-0 blur-2xl scale-100 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          </div>
        ))}

        {/* Main Text Content */}
        <div className="absolute inset-0 z-20 w-full max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 pointer-events-none flex flex-col justify-center">
          <div className="max-w-5xl pointer-events-auto mt-32 sm:mt-24">
            
            {/* Top Label (Static) */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8 animate-fadeIn">
              <span className="h-px w-8 sm:w-12 bg-green-500"></span>
              <p className="text-green-400 font-bold tracking-[0.2em] uppercase text-sm sm:text-base md:text-lg">
                {BRAND_LABEL}
              </p>
            </div>
            
            <div key={currentSlide} className="space-y-6 sm:space-y-8">
              {/* Titles */}
              <div className="space-y-[-0.5rem] sm:space-y-[-1rem]">
                <div>
                  <h1 className="text-5xl sm:text-7xl lg:text-[6rem] xl:text-[7rem] font-extrabold text-white tracking-tighter leading-[0.9] animate-blurInUp delay-100 opacity-0 drop-shadow-2xl">
                    {slides[currentSlide].title}
                  </h1>
                </div>
                <div>
                   <h1 className="text-5xl sm:text-7xl lg:text-[6rem] xl:text-[7rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-white to-green-300 tracking-tighter leading-[0.9] animate-blurInUp delay-200 opacity-0 drop-shadow-2xl pb-2">
                    {slides[currentSlide].highlight}
                  </h1>
                </div>
              </div>

              {/* Description */}
              <div className="max-w-lg pt-2 sm:pt-4">
                <p className="text-lg sm:text-xl text-gray-100 font-medium leading-relaxed animate-blurInUp delay-300 opacity-0 border-l-2 border-white/30 pl-6 drop-shadow-md">
                  {slides[currentSlide].description}
                </p>
              </div>
              
              {/* Buttons */}
              <div className="pt-6 sm:pt-8">
                <div className="flex flex-wrap gap-6 animate-blurInUp delay-400 opacity-0">
                  <Link 
                    to="/lets-move"
                    className="relative group overflow-hidden px-10 py-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-500 ease-expo hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:border-white/50"
                  >
                    <div className="absolute inset-0 bg-white translate-y-[101%] transition-transform duration-500 ease-expo group-hover:translate-y-0" />
                    <span className="relative z-10 flex items-center gap-3 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase text-white transition-colors duration-500 group-hover:text-black">
                      Explore <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Thumbnail Queue (Bottom Right) */}
        <div 
          className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-30 flex flex-col items-end gap-6 pointer-events-auto"
        >
          <div className="flex items-end gap-4 h-32 sm:h-44 md:h-56">
            {slides.map((slide, index) => {
              const relativeIndex = (index - currentSlide + slides.length) % slides.length;
              
              let queueClass = '';
              let isVisible = false;
              
              if (relativeIndex === 0) {
                queueClass = 'w-0 opacity-0 border-0 m-0 pointer-events-none scale-0';
              } else if (relativeIndex === 1 || relativeIndex === 2) {
                queueClass = 'w-24 sm:w-32 md:w-40 opacity-100 hover:scale-105 hover:border-white/60 scale-100';
                isVisible = true;
              } else if (relativeIndex === 3) {
                queueClass = 'w-3 sm:w-6 md:w-8 opacity-30 pointer-events-none grayscale scale-95';
              } else {
                queueClass = 'w-0 opacity-0 border-0 m-0 overflow-hidden scale-0';
              }

              return (
                <div
                  key={slide.id}
                  onClick={() => relativeIndex > 0 && setCurrentSlide(index)}
                  style={{ order: relativeIndex }}
                  className={`group relative overflow-hidden cursor-pointer rounded-xl shadow-2xl transition-all duration-700 ease-expo border border-white/10 backdrop-blur-sm h-full ${queueClass}`}
                >
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover transition-transform duration-700 ease-expo group-hover:scale-110" />
                  {isVisible && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-3 sm:p-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500 ease-expo">
                        <span className="text-[10px] sm:text-xs text-green-400 font-mono font-bold tracking-widest block mb-0.5">0{index + 1}</span>
                        <h4 className="text-white font-bold text-xs sm:text-sm tracking-widest uppercase leading-tight drop-shadow-md truncate">{slide.title} {slide.highlight}</h4>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-6">
             <div className="flex items-center gap-3">
               {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-[3px] transition-all duration-700 ease-expo rounded-full ${index === currentSlide ? 'w-24 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'w-12 bg-white/20 hover:bg-white/50'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
               ))}
             </div>
             <span className="text-xl font-mono font-bold text-white tracking-widest pl-6 border-l border-white/30 shadow-black drop-shadow-lg animate-fadeIn">0{currentSlide + 1}</span>
          </div>
        </div>
      </div>

      {/* ---------------- REALTOR PROFILE SECTION (The Expert) ---------------- */}
      <section ref={aboutSectionRef} className="relative w-full py-12 lg:py-16 overflow-hidden bg-white">
        {/* ... (Previous code for this section remains unchanged, just need to ensure it's here) ... */}
        {/* Base Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/20 to-white z-0"></div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-green-100/30 rounded-full blur-[100px] animate-blob pointer-events-none mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-emerald-50/40 rounded-full blur-[80px] animate-blob animation-delay-2000 pointer-events-none mix-blend-multiply"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
             {/* Left Column: Image Composition (5 cols) */}
             <div className={`lg:col-span-5 relative h-full flex items-center justify-center px-4 md:px-0 transition-all duration-[1000ms] ease-expo ${isAboutVisible ? 'opacity-100 blur-0 translate-y-0 scale-100' : 'opacity-0 blur-xl translate-y-24 scale-90'}`}>
               <div className="absolute -top-12 -right-12 w-64 h-64 opacity-30 -z-20 hidden md:block" style={{ backgroundImage: 'radial-gradient(#15803d 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>
               <div className="absolute -top-6 -left-6 w-full h-full border-2 border-green-800/10 -z-10 hidden md:block"></div>
               <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 bg-green-100/50 -z-10 hidden md:block"></div>
               <div className="relative z-10 w-full aspect-[3/4] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] bg-gray-100">
                 <img src="https://scontent.fmnl25-6.fna.fbcdn.net/v/t39.30808-6/384230302_798510298899305_5227004426085687196_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=EYRivX5IbKMQ7kNvwHDe2JM&_nc_oc=Adl7u4YMwBK1LQtj8bhzMLeg5_fBUqngbaklkqhBTRlHPRm4wJBid3Su1U0pMb9Bl8AN920A4AMc03pHeQp-_s1l&_nc_zt=23&_nc_ht=scontent.fmnl25-6.fna&_nc_gid=zGPtKMzUN2SQrAv14egOkg&oh=00_Afq_lqElTeSzC91UJuP4TC8qBuzsOHHYEN1reGxhXIUymw&oe=696D0435" alt="Marci Metzger" className="w-full h-full object-cover transition-transform duration-[2s] ease-out hover:scale-105" />
               </div>
               <div className={`absolute -bottom-8 -right-8 bg-white p-5 shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-green-50 z-20 hidden md:flex items-center gap-4 transition-all duration-1000 delay-500 ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                   <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600"><Star className="w-6 h-6 fill-current" /></div>
                   <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Since 1996</p><p className="text-lg font-serif font-bold text-gray-900">Top Rated Agent</p></div>
               </div>
            </div>

            {/* Right Column: Editorial Content (7 cols) */}
            <div className={`lg:col-span-7 flex flex-col justify-center relative pl-0 lg:pl-10 transition-all duration-[1000ms] delay-150 ease-expo ${isAboutVisible ? 'opacity-100 blur-0 translate-y-0 scale-100' : 'opacity-0 blur-xl translate-y-24 scale-90'}`}>
               <div className="absolute inset-0 opacity-[0.05] pointer-events-none -z-20 rounded-2xl" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
               <span className="absolute -top-12 -left-4 text-[10rem] leading-none text-green-100 font-serif -z-10 select-none hidden xl:block pointer-events-none mix-blend-multiply">“</span>
               <div className="absolute -top-8 right-0 w-24 h-24 hidden lg:block pointer-events-none opacity-60">
                  <div className="absolute top-0 right-0 w-full h-full bg-green-50/50 z-[-1]"></div>
                  <div className="absolute top-3 right-3 w-full h-full border border-green-200 z-[-1]"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-green-500"></div>
               </div>
               <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 rotate-90 origin-center hidden xl:flex items-center gap-3 opacity-20">
                  <span className="h-px w-8 bg-black"></span><span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black whitespace-nowrap">Executive Profile</span><span className="h-px w-8 bg-black"></span>
               </div>
               <div className="absolute -bottom-8 -right-2 font-serif text-[8rem] font-bold text-gray-100 -z-10 leading-none select-none hidden xl:block pointer-events-none">28</div>
               <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-200 to-transparent hidden lg:block opacity-50"></div>

               <div className="mb-6 lg:mb-8 relative z-10">
                  <div className="flex items-center gap-3 mb-4"><div className="w-10 h-0.5 bg-green-600"></div><span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-green-700">The Expert</span></div>
                  <div className="space-y-0">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[0.9] font-light tracking-tight">Unrivaled <span className="font-serif italic font-medium text-green-700 relative inline-block">Legacy<svg className="absolute w-full h-3 -bottom-1 left-0 text-green-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" /></svg></span></h2>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[0.9] font-bold tracking-tight">In Real Estate.</h2>
                  </div>
               </div>
               
               <div className="flex items-center gap-4 mb-6 opacity-30 max-w-sm"><div className="h-px bg-green-800 flex-1"></div><div className="w-1.5 h-1.5 border border-green-800 rotate-45"></div><div className="h-px bg-green-800 flex-1"></div></div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-8 relative z-10">
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">Marci Metzger brings nearly three decades of negotiation mastery and market insight to the Pahrump Valley.</p>
                  <div className="space-y-4">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">Originally establishing her reputation in Washington State, she has redefined the standard of service in Southern Nevada, blending corporate precision with a personal touch.</p>
                  </div>
               </div>

               <div className="mb-8 relative"><span className="font-serif italic text-3xl text-gray-400 rotate-[-2deg] inline-block mix-blend-multiply">Marci Metzger</span><div className="w-32 h-0.5 bg-green-500/20 rotate-[-2deg] mt-1 ml-2"></div></div>
               <div className="w-full h-px bg-gray-200 mb-8"></div>

               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 relative z-10">
                  <div className="flex gap-10 sm:gap-14">
                     <div className="group cursor-default">
                        <span className="block text-3xl md:text-4xl font-serif text-gray-900 relative transition-colors group-hover:text-green-700">28<span className="text-green-600 text-xl absolute top-0 -right-3">+</span></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1 block group-hover:text-green-600 transition-colors">Years Exp.</span>
                     </div>
                     <div className="group cursor-default">
                        <span className="block text-3xl md:text-4xl font-serif text-gray-900 relative transition-colors group-hover:text-green-700">500<span className="text-green-600 text-xl absolute top-0 -right-3">+</span></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1 block group-hover:text-green-600 transition-colors">Happy Clients</span>
                     </div>
                  </div>
                  <Link to="/about" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-gray-50 border border-gray-200 hover:border-green-600 hover:bg-green-600 transition-all duration-300">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-gray-900 group-hover:text-white transition-colors">Biography</span>
                     <ArrowRight className="w-3.5 h-3.5 text-gray-900 group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PARTNER LOGO CAROUSEL ---------------- */}
      <section className="w-full bg-white border-t border-gray-100 py-10 lg:py-14 overflow-hidden relative">
          {/* Gradient Masks for seamless fade effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-full group overflow-hidden">
            {/* First Set */}
            <div className="flex items-center gap-16 md:gap-24 flex-shrink-0 animate-scroll whitespace-nowrap pr-16 md:pr-24">
              {displayLogos.map((logo, index) => (
                 <img 
                    key={`logo-1-${index}`} 
                    src={logo} 
                    alt="Partner Logo" 
                    className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 cursor-pointer hover:scale-110" 
                 />
              ))}
            </div>
             {/* Second Set for seamless loop */}
            <div className="flex items-center gap-16 md:gap-24 flex-shrink-0 animate-scroll whitespace-nowrap pr-16 md:pr-24" aria-hidden="true">
              {displayLogos.map((logo, index) => (
                 <img 
                    key={`logo-2-${index}`} 
                    src={logo} 
                    alt="Partner Logo" 
                    className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 cursor-pointer hover:scale-110" 
                 />
              ))}
            </div>
          </div>
      </section>

      {/* ---------------- GET IT SOLD SECTION (Bento Grid Mosaic) ---------------- */}
      <section ref={soldSectionRef} className="py-12 bg-slate-50 relative overflow-hidden">
          
          {/* 1. Technical Grid Background */}
          <div className="absolute inset-0 pointer-events-none opacity-40" 
               style={{ 
                   backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)', 
                   backgroundSize: '40px 40px' 
               }}>
          </div>

          {/* 2. Large Watermark Text */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-full text-center transition-all duration-1000 ease-out ${isSoldVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <h1 className="text-[20vw] leading-none font-black text-gray-900/5 select-none tracking-tighter blur-sm whitespace-nowrap">
                  RESULTS
              </h1>
          </div>

          {/* 3. Gradient Orbs */}
          <div className={`absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-br from-green-200/30 to-transparent rounded-full blur-3xl pointer-events-none mix-blend-multiply transition-all duration-[1500ms] ${isSoldVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-20 scale-50'}`}></div>
          <div className={`absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-gradient-to-tr from-gray-200/40 to-transparent rounded-full blur-3xl pointer-events-none mix-blend-multiply transition-all duration-[1500ms] delay-300 ${isSoldVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-50'}`}></div>

          {/* 4. Decorative Accents */}
          {/* Top Left Circle Spinner */}
          <div className={`absolute top-24 left-12 w-32 h-32 border border-green-500/20 rounded-full pointer-events-none animate-spin-slow transition-all duration-1000 delay-500 ${isSoldVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} style={{ animationDuration: '20s' }}></div>
          {/* Bottom Right Diamond */}
          <div className={`absolute bottom-24 right-12 w-24 h-24 border border-gray-900/10 rotate-45 pointer-events-none transition-all duration-1000 delay-700 ${isSoldVisible ? 'opacity-100 rotate-45 scale-100' : 'opacity-0 rotate-0 scale-0'}`}></div>
          {/* Top Right Pulse Dot */}
          <div className={`absolute top-1/3 right-1/4 w-4 h-4 bg-green-500/20 rounded-full blur-sm pointer-events-none animate-pulse transition-all duration-700 delay-1000 ${isSoldVisible ? 'opacity-100' : 'opacity-0'}`}></div>
          {/* Angled Lines */}
          <div className={`absolute top-10 left-1/3 w-16 h-1 bg-green-500/10 rotate-12 transition-all duration-1000 delay-[600ms] ${isSoldVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}></div>
          <div className={`absolute bottom-10 right-1/3 w-1 h-16 bg-gray-500/10 -rotate-12 transition-all duration-1000 delay-[800ms] ${isSoldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}></div>
          
          {/* New Accents: Corner Dot Pattern (Top Right) */}
          <div className={`absolute top-0 right-0 p-8 grid grid-cols-4 gap-2 opacity-20 pointer-events-none transition-all duration-1000 delay-700 ${isSoldVisible ? 'translate-y-0 opacity-20' : '-translate-y-10 opacity-0'}`}>
             {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-green-800 rounded-full"></div>
             ))}
          </div>
          
          {/* New Accents: Floating Geometric Shape (Bottom Left) */}
          <div className={`absolute bottom-0 left-0 p-12 opacity-10 pointer-events-none transition-all duration-[2000ms] ease-out ${isSoldVisible ? 'translate-x-0 translate-y-0 opacity-10' : '-translate-x-20 translate-y-20 opacity-0'}`}>
             <div className="w-48 h-48 border-2 border-gray-900 rounded-full opacity-50 absolute -bottom-12 -left-12"></div>
             <div className="w-64 h-64 border border-green-500 rounded-full opacity-30 absolute -bottom-20 -left-20"></div>
          </div>

          {/* New Accents: Diagonal Stripes (Center Right Background) */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-full opacity-5 pointer-events-none overflow-hidden hidden xl:block">
             {[...Array(10)].map((_, i) => (
                 <div key={i} className={`h-32 bg-gray-900 -rotate-45 transform mb-12 transition-all duration-1000 ease-out ${isSoldVisible ? 'translate-x-12 opacity-100' : 'translate-x-48 opacity-0'}`} style={{ transitionDelay: `${i * 100}ms` }}></div>
             ))}
          </div>

          <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
              
              {/* Header */}
              <div className={`flex flex-col md:flex-row items-end justify-between mb-8 gap-6 transition-all duration-1000 ease-expo ${isSoldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="max-w-2xl">
                      <div className="flex items-center gap-3 mb-4">
                          <div className="h-px w-8 bg-green-600"></div>
                          <span className="text-green-700 font-bold tracking-[0.25em] uppercase text-xs">The Process</span>
                      </div>
                      <h2 className="text-5xl md:text-7xl font-serif text-gray-900 leading-[0.9]">
                          Get It <span className="font-serif italic text-green-700 relative inline-block">Sold
                              <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
                          </span>
                      </h2>
                  </div>
              </div>

              {/* Bento Grid Layout - Fixed Frame on Desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 h-auto lg:h-[500px]">
                  
                  {/* Card 1: Top Residential Sales (Large Square: 2x2) */}
                  <div 
                      className={`
                        group relative rounded-[2rem] overflow-hidden bg-gray-900 shadow-xl 
                        lg:col-span-2 lg:row-span-2
                        transition-all duration-1000 ease-expo hover:shadow-2xl hover:z-10 hover:-translate-y-1 delay-100
                        ${isSoldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24 scale-95'}
                      `}
                  >
                      <img 
                          src="https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11.02%25,l:0%25,w:100%25,h:77.95%25/rs=w:1200,h:600,cg:true"
                          alt="Luxury Estate" 
                          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-40"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                          <div className="transform transition-transform duration-500 ease-expo group-hover:-translate-y-4">
                               <div className="w-12 h-12 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-green-600 group-hover:border-green-500 transition-colors duration-300">
                                   <Trophy size={20} />
                               </div>
                               <h3 className="text-2xl lg:text-3xl font-serif text-white mb-2 leading-tight">Top Residential <br/>Sales Last 5 Years</h3>
                               
                               {/* Collapsible Content */}
                               <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-expo group-hover:max-h-[300px] group-hover:opacity-100 group-hover:mt-6">
                                   <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6 border-l-2 border-white/30 pl-4">
                                      We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.
                                   </p>
                               </div>
                          </div>
                      </div>
                  </div>

                  {/* Card 2: Strategy (Small Square: 1x1) */}
                  <div 
                      className={`
                        group relative rounded-[2rem] overflow-hidden bg-green-700 shadow-xl 
                        lg:col-span-1 lg:row-span-1
                        transition-all duration-1000 ease-expo hover:shadow-2xl hover:z-10 hover:-translate-y-1 delay-300
                        ${isSoldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24 scale-95'}
                      `}
                  >
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                      
                      <div className="absolute inset-0 p-8 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                              <span className="px-3 py-1 rounded-full border border-green-300/30 bg-green-800/50 text-green-100 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">Strategy</span>
                              <TrendingUp className="text-green-200 w-8 h-8 opacity-70 group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          
                          <div className="transform transition-transform duration-500 ease-expo group-hover:-translate-y-2">
                            <h3 className="text-3xl font-serif text-white leading-[1.1]">
                                Just List It?
                            </h3>
                             {/* Collapsible Content */}
                            <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-expo group-hover:max-h-[150px] group-hover:opacity-100 group-hover:mt-4">
                                <p className="text-green-100/90 text-xs font-medium leading-relaxed mb-4">
                                    We use digital marketing, staging, and outreach.
                                </p>
                            </div>
                          </div>
                      </div>
                  </div>

                  {/* Card 3: Don't Just List it (Small Square: 1x1) */}
                  <div 
                      className={`
                        group relative rounded-[2rem] overflow-hidden bg-white border border-gray-200 shadow-xl 
                        lg:col-span-1 lg:row-span-1
                        transition-all duration-1000 ease-expo hover:shadow-2xl hover:z-10 hover:-translate-y-1 hover:border-green-300 delay-500
                        ${isSoldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24 scale-95'}
                      `}
                  >
                      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                           <div className="absolute top-8 right-8 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <Megaphone size={18} />
                           </div>
                           
                           <div className="transform transition-transform duration-500 ease-expo group-hover:-translate-y-2">
                               <h3 className="text-3xl font-serif text-gray-900 mb-1 leading-tight">Don't Just<br/> List it.</h3>
                               
                               {/* Collapsible Content */}
                               <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-expo group-hover:max-h-[180px] group-hover:opacity-100 group-hover:mt-4">
                                   <p className="text-gray-500 text-xs leading-relaxed mb-4">
                                      Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.
                                   </p>
                               </div>
                           </div>
                      </div>
                      <img 
                          src="https://img1.wsimg.com/isteam/stock/107927/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600"
                          alt="Keys"
                          className="absolute top-0 left-0 w-full h-[70%] object-cover opacity-60 transition-all duration-700 group-hover:opacity-40"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Card 4: Guide to Buyers (Wide Rectangle: 2x1) */}
                  <div 
                      className={`
                        group relative rounded-[2rem] overflow-hidden bg-gray-900 shadow-xl 
                        lg:col-span-2 lg:row-span-1
                        transition-all duration-1000 ease-expo hover:shadow-2xl hover:z-10 hover:-translate-y-1 delay-700
                        ${isSoldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24 scale-95'}
                      `}
                  >
                      <img 
                          src="https://img1.wsimg.com/isteam/stock/771/:/cr=t:5.36%25,l:1.76%25,w:96.47%25,h:89.29%25/rs=w:1200,h:600,cg:true,m"
                          alt="Unlock Value" 
                          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-50"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
                      
                      <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-center items-start">
                          <div className="transform transition-transform duration-500 ease-expo group-hover:-translate-y-2 max-w-lg">
                               <div className="flex items-center gap-4 mb-3">
                                   <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                      <HomeIcon size={18} strokeWidth={1.5} />
                                   </div>
                                   <span className="text-green-400 text-xs font-bold uppercase tracking-[0.2em]">Buying</span>
                               </div>
                               
                               <h3 className="text-3xl font-serif text-white leading-tight">Guide to Buyers</h3>
                               
                               {/* Collapsible Content */}
                               <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-expo group-hover:max-h-[150px] group-hover:opacity-100 group-hover:mt-4">
                                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                     Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!
                                  </p>
                               </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>

    </div>
  );
};

export default Home;
