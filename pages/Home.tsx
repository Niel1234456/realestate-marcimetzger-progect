import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 0,
    label: 'Residence',
    title: 'Modern',
    highlight: 'Living',
    description: 'Discover a sanctuary that reflects your success. Exclusive properties designed for the extraordinary lifestyle.',
    image: "https://scontent.fmnl25-7.fna.fbcdn.net/v/t39.30808-6/480877284_1153959160021082_1293992860742485288_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=MaQc4Gs7gdQQ7kNvwEfWuYZ&_nc_oc=AdmWOl7c9LSiygWZmT-L7BWJUKnUrKhZPq8M6qtdqj1InxBI-pu5Nv_0ZnJJIXplO-MiqKcqAns_ct3k3pWSARmE&_nc_zt=23&_nc_ht=scontent.fmnl25-7.fna&_nc_gid=W8N8yH_uZCYriRW7HTVing&oh=00_Afp2B7wKjVhGDqG4YChCT8EorJGd55KXVmOYORwObFPrlw&oe=696BF677",
  },
  {
    id: 1,
    label: 'Services',
    title: 'Commercial &',
    highlight: 'Residential',
    description: 'Expertise across the board. Whether you are looking for your next headquarters or your forever home.',
    image: "https://img1.wsimg.com/isteam/stock/43920/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730",
  },
  {
    id: 2,
    label: 'Integrity',
    title: 'Real Estate',
    highlight: 'Done Right',
    description: 'Transparency, trust, and results. We redefine the standard of service in every transaction.',
    image: "https://img1.wsimg.com/isteam/stock/107927/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600",
  },
  {
    id: 3,
    label: 'Interiors',
    title: 'Curated',
    highlight: 'Spaces',
    description: 'Step inside designs that inspire. Every detail crafted for comfort, style, and modern living.',
    image: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG",
  },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2500); 
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden font-sans">
      <div className="relative flex-grow h-screen w-full">
        
        {/* Background Layer */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-expo ${
              index === currentSlide ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-110 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.label}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          </div>
        ))}

        {/* Main Text Content */}
        <div className="absolute inset-0 z-10 w-full max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 pointer-events-none flex flex-col justify-center">
          {/* Increased top margin to prevent header overlap */}
          <div className="max-w-5xl pointer-events-auto mt-32 sm:mt-24">
            
            <div key={currentSlide} className="space-y-6 sm:space-y-8">
              {/* Top Label */}
              <div className="overflow-hidden">
                <div className="flex items-center gap-3 animate-slideUp">
                  <span className="h-px w-8 sm:w-12 bg-green-500"></span>
                  <p className="text-green-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
                    {slides[currentSlide].label} Collection
                  </p>
                </div>
              </div>

              {/* Huge Typography */}
              <div className="space-y-[-0.5rem] sm:space-y-[-1rem]">
                <div className="overflow-hidden">
                  <h1 className="text-6xl sm:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-extrabold text-white tracking-tighter leading-[0.9] animate-slideUp delay-100 drop-shadow-2xl">
                    {slides[currentSlide].title}
                  </h1>
                </div>
                <div className="overflow-hidden">
                   <h1 className="text-6xl sm:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-white to-green-300 tracking-tighter leading-[0.9] animate-slideUp delay-200 drop-shadow-2xl pb-2">
                    {slides[currentSlide].highlight}
                  </h1>
                </div>
              </div>

              {/* Description */}
              <div className="overflow-hidden max-w-lg pt-2 sm:pt-4">
                <p className="text-lg sm:text-xl text-gray-100 font-medium leading-relaxed animate-slideUp delay-300 border-l-2 border-white/30 pl-6 drop-shadow-md">
                  {slides[currentSlide].description}
                </p>
              </div>
              
              {/* Buttons */}
              <div className="pt-6 sm:pt-8 overflow-hidden">
                <div className="flex flex-wrap gap-6 animate-slideUp delay-400">
                  <Link 
                    to="/lets-move"
                    className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-white text-gray-900 rounded-full overflow-hidden transition-all duration-300 hover:bg-green-50 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    <span className="relative flex items-center font-bold tracking-widest text-xs sm:text-sm uppercase">
                      Explore Now <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Right Controls */}
        <div 
          className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 flex flex-col items-end gap-6 pointer-events-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Thumbnail Queue */}
          <div className="flex items-end gap-4 h-32 sm:h-44 md:h-56">
            {slides.map((slide, index) => {
              // Calculate relative index for circular display logic
              const relativeIndex = (index - currentSlide + slides.length) % slides.length;
              
              let queueClass = '';
              let isVisible = false;
              
              if (relativeIndex === 0) {
                // Active slide: Hidden
                queueClass = 'w-0 opacity-0 border-0 m-0 pointer-events-none';
              } else if (relativeIndex === 1 || relativeIndex === 2) {
                // Next two slides: Fully Visible
                queueClass = 'w-24 sm:w-32 md:w-40 opacity-100 hover:scale-105 hover:border-white/60';
                isVisible = true;
              } else if (relativeIndex === 3) {
                // 3rd slide: Partially Visible (narrower, faded)
                queueClass = 'w-3 sm:w-6 md:w-8 opacity-30 pointer-events-none grayscale';
              } else {
                // > 3: Hidden (for scalability if more slides added)
                queueClass = 'w-0 opacity-0 border-0 m-0 overflow-hidden';
              }

              return (
                <div
                  key={slide.id}
                  onClick={() => relativeIndex > 0 && setCurrentSlide(index)}
                  style={{ order: relativeIndex }}
                  className={`
                    group relative overflow-hidden cursor-pointer rounded-xl shadow-2xl
                    transition-all duration-700 ease-expo
                    border border-white/10 backdrop-blur-sm h-full
                    ${queueClass}
                  `}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.label} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {isVisible && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-3 sm:p-4 opacity-90 group-hover:opacity-100 transition-opacity">
                      <div className="transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-[10px] sm:text-xs text-green-400 font-mono font-bold tracking-widest block mb-0.5">
                          0{index + 1}
                        </span>
                        <h4 className="text-white font-bold text-xs sm:text-sm tracking-widest uppercase leading-tight drop-shadow-md">
                          {slide.label}
                        </h4>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Pagination Navigator */}
          <div className="hidden sm:flex items-center gap-6">
             <div className="flex items-center gap-3">
               {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-[3px] transition-all duration-500 ease-out rounded-full ${
                      index === currentSlide 
                        ? 'w-24 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]' 
                        : 'w-12 bg-white/20 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
               ))}
             </div>
             <span className="text-xl font-mono font-bold text-white tracking-widest pl-6 border-l border-white/30 shadow-black drop-shadow-lg">
                0{currentSlide + 1}
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;