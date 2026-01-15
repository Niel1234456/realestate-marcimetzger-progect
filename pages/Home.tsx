
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, TrendingUp, Star, Home as HomeIcon, Megaphone, Search, MapPin, Camera, CheckCircle, Building2, UserCheck, Layers, Sparkles, Phone, Mail, Clock, ChevronDown, Send, User, MessageSquare } from 'lucide-react';

// Unified small font label for all slides
const BRAND_LABEL = "MARCI METZGER - THE RIDGE REALTY GROUP";

const slides = [
  {
    id: 0,
    title: 'Pahrump',
    highlight: 'Realtor',
    description: 'Your trusted partner for buying and selling homes in Pahrump, Nevada. Experience integrity, expertise, and results with The Ridge Realty Group.',
    image: "https://scontent.fmnl25-7.fna.fbcdn.net/v/t39.30808-6/480877284_1153959160021082_1293992860742485288_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=71e4&_nc_ohc=MaQc4Gs7gdQQ7kNvwEfWuYZ&_nc_oc=AdmWOl7c9LSiygWZmT-L7BWJUKnUrKhZPq8M6qtdqj1InxBI-pu5Nv_0ZnJJIXplO-MiqKcqAns_ct3k3pWSARmE&_nc_zt=23&_nc_ht=scontent.fmnl25-7.fna&_nc_gid=W8N8yH_uZCYriRW7HTVing&oh=00_Afp2B7wKjVhGDqG4YChCT8EorJGd55KXVmOYORwObFPrlw&oe=696BF677",
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

const services = [
  {
    title: "Real Estate Done Right",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://img1.wsimg.com/isteam/stock/12792/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365/qt=q:70",
    description: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    bgIcon: "https://cdn-icons-png.flaticon.com/512/1040/1040999.png"
  },
  {
    title: "Commercial & Residential",
    icon: <Layers className="w-6 h-6" />,
    image: "https://img1.wsimg.com/isteam/stock/43920/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365/qt=q:70",
    description: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    bgIcon: "https://cdn-icons-png.flaticon.com/512/895/895448.png"
  },
  {
    title: "Rely on Expertise",
    icon: <UserCheck className="w-6 h-6" />,
    image: "https://img1.wsimg.com/isteam/stock/kayaJdA/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365/qt=q:70",
    description: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    bgIcon: "https://cdn-icons-png.flaticon.com/512/9750/9750906.png"
  }
];

const galleryImages = [
  "https://scontent.fmnl25-5.fna.fbcdn.net/v/t39.30808-6/548269509_1333343485415981_2827082723537900492_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zU4a7d62iKUQ7kNvwH7UdI_&_nc_oc=AdkfvaijsTQ_xA0kjp9FSkSDgZ4IPRG88Wub5LPAQsdZ8ihO2osJ3DM97fJdTTrQs6PFZPixtQPbqiF0JqCTlv2H&_nc_zt=23&_nc_ht=scontent.fmnl25-5.fna&_nc_gid=-nKu4f4p1DU0F7Gp-PTkhg&oh=00_AfpN0jc99BW0wJN3Ulc-pw3JzV0aN8fO7rVXTAVthBJJjw&oe=696D4F12",
  "https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/490653698_1201921425224855_1496396098191417700_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f5G3kC65tjsQ7kNvwF8r4i4&_nc_oc=AdnRYb-AjnCCxH_CH_BmgsNNK0nrez5V12KCxTZ0hQc3KCv5s56k5XaHxajtzPtKfQ9KQlBGmw-cj1INN-nSdXhO&_nc_zt=23&_nc_ht=scontent.fmnl25-4.fna&_nc_gid=niW_ZNCRZFaspNHbHvzSEQ&oh=00_AfpIFWfM_ZoitbxeIH7R9OCFRECFQ5pmd5fBc2IiV-Q-xg&oe=696D6708",
  "https://scontent.fmnl25-6.fna.fbcdn.net/v/t39.30808-6/490885175_1201818635235134_6999460516769562170_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TFnC8OrvXm0Q7kNvwGEybzi&_nc_oc=AdmRnyII9pYiUYqwaQhgtcBD_mvGXd7x5Tencd8ZAHcNxYxCrTfcjvRTKY4yYCSqydZ0Z_6NJ3F3_LTCt_IimUJw&_nc_zt=23&_nc_ht=scontent.fmnl25-6.fna&_nc_gid=lFYZX4B7QsdLdm9fySOLQQ&oh=00_AfpDrnHAz88xE4P24jWUs6R9WSgjMmxmt2cAElW0aeGbwQ&oe=696D7228",
  "https://s3-media0.fl.yelpcdn.com/bphoto/RHFYhbTYb9hNAjJGhOp6Qw/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/h64xNKaxZGxne429Pfcgfg/o.jpg",
  "https://photos.zillowstatic.com/fp/46c73919ea0db10bc51d4883cf04d265-cc_ft_960.webp"
];

// Repeat logos to ensure seamless scroll even on wide screens
const displayLogos = [...logos, ...logos, ...logos];

// Social Media Links Data with High-Quality Icons
const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/MarciHomes/", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png", color: "hover:shadow-blue-200" },
  { name: "Instagram", url: "https://www.instagram.com/marciandlauren_nvrealtors/", icon: "https://cdn-icons-png.flaticon.com/512/15707/15707749.png", color: "hover:shadow-pink-200" },
  { name: "Yelp", url: "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump", icon: "https://cdn-icons-png.flaticon.com/512/3670/3670104.png", color: "hover:shadow-red-200" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/marci-metzger-30642496/", icon: "https://cdn-icons-png.flaticon.com/512/4494/4494497.png", color: "hover:shadow-blue-200" }
];

// Mock Data for Search Suggestions
const searchSuggestions = [
  { text: "4500 Winery Rd, Pahrump", type: "Address" },
  { text: "MLS #982103", type: "MLS" },
  { text: "2300 Gamebird Rd", type: "Address" },
  { text: "Mountain Falls Golf Course", type: "Community" },
  { text: "150 Hwy 160", type: "Commercial" },
  { text: "Calvada Valley Unit 7", type: "Area" },
  { text: "Artesia at Hafen Ranch", type: "Community" }
];

// Search Options Data
const searchOptions = {
  locations: [
    "Pahrump, NV", 
    "Las Vegas, NV", 
    "Henderson, NV", 
    "North Las Vegas, NV", 
    "Summerlin, NV", 
    "Boulder City, NV", 
    "Mesquite, NV", 
    "Mt Charleston, NV", 
    "Blue Diamond, NV",
    "Enterprise, NV"
  ],
  types: ["Single Family", "Condo / Townhouse", "Multi-Family", "Manufactured", "Land / Lot", "Commercial", "Luxury Estate", "Rental"],
  sorts: ["Newest Listings", "Price: Low to High", "Price: High to Low", "Bedrooms: High to Low", "Bathrooms: High to Low", "Square Feet: High to Low", "Year Built: Newest", "Most Popular"],
  beds: ["Any Bedrooms", "Studio", "1+ Bedrooms", "2+ Bedrooms", "3+ Bedrooms", "4+ Bedrooms", "5+ Bedrooms", "6+ Bedrooms"],
  baths: ["Any Bathrooms", "1+ Bathrooms", "1.5+ Bathrooms", "2+ Bathrooms", "2.5+ Bathrooms", "3+ Bathrooms", "4+ Bathrooms", "5+ Bathrooms"],
  minPrice: ["No Min Price", "$100,000", "$200,000", "$300,000", "$400,000", "$500,000", "$600,000", "$800,000"],
  maxPrice: ["No Max Price", "$300,000", "$400,000", "$500,000", "$600,000", "$700,000", "$800,000", "$1,000,000+"]
};

// Office Hours Data
const officeHours = [
  { day: "Monday", hours: "08:00 am – 07:00 pm" },
  { day: "Tuesday", hours: "08:00 am – 07:00 pm" },
  { day: "Wednesday", hours: "08:00 am – 07:00 pm" },
  { day: "Thursday", hours: "08:00 am – 07:00 pm" },
  { day: "Friday", hours: "08:00 am – 07:00 pm" },
  { day: "Saturday", hours: "08:00 am – 07:00 pm" },
  { day: "Sunday", hours: "08:00 am – 07:00 pm" },
];

const CurvedGallery: React.FC = () => {
  const scrollRef = useRef(0);
  const requestRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // 3 sets of images for seamless loop
  const displayImages = [...galleryImages, ...galleryImages, ...galleryImages]; 
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Responsive item width
  const itemWidth = isMobile ? 220 : 280; 
  const gap = isMobile ? 20 : 30;
  const totalItemWidth = itemWidth + gap;
  const totalWidth = galleryImages.length * totalItemWidth; // Width of ONE set

  useEffect(() => {
    const speed = isMobile ? 0.4 : 0.6; // Slower on mobile

    const animate = (time: number) => {
      if (!containerRef.current) return;
      
      scrollRef.current += speed; 
      
      // Reset logic for infinite loop
      if (scrollRef.current >= totalWidth) {
        scrollRef.current = 0;
      }

      const centerX = window.innerWidth / 2;
      const screenWidth = window.innerWidth;

      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        let xPos = (index * totalItemWidth) - scrollRef.current;
        const itemCenter = xPos + itemWidth / 2;
        
        // Normalized distance from center (-1 to 1 based on half screen width)
        const distNorm = (itemCenter - centerX) / (screenWidth * (isMobile ? 0.7 : 0.55));
        
        // Math for Straight-to-Curved Transition
        // Center zone is flatter, edges curve away rapidly
        const absNorm = Math.abs(distNorm);
        
        // Z-Translation: Move back significantly at edges (Convex/Cylinder effect)
        // Using power function to keep center straighter
        const z = -Math.pow(absNorm, 2) * (isMobile ? 120 : 300);
        
        // Rotation: Rotate inward to face center
        // Left side (dist < 0) rotates positive Y (faces right/in)
        // Right side (dist > 0) rotates negative Y (faces left/in)
        const rotateY = -distNorm * (isMobile ? 15 : 35);

        // Opacity: Fade edges slightly
        const opacity = Math.max(0.2, 1 - Math.pow(absNorm, 3));

        item.style.transform = `translate3d(${xPos}px, 0, ${z}px) rotateY(${rotateY}deg)`;
        item.style.opacity = opacity.toString();
        // Z-Index is critical for 3D overlap handling
        item.style.zIndex = (1000 - Math.floor(absNorm * 100)).toString();
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [totalWidth, itemWidth, gap, isMobile]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[320px] md:h-[450px] overflow-hidden select-none"
      style={{ perspective: '1200px' }} // Critical for 3D effect
    >
       {/* Gradient Overlays for smooth entry/exit - Light Theme */}
       <div className="absolute top-0 left-0 w-8 md:w-1/5 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-50 pointer-events-none"></div>
       <div className="absolute top-0 right-0 w-8 md:w-1/5 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-50 pointer-events-none"></div>

       {displayImages.map((img, i) => (
          <div
            key={i}
            // Fix: Wrap ref assignment to return void instead of returning the assigned element
            ref={(el) => { itemsRef.current[i] = el; }}
            className="absolute top-2 left-0 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 origin-center bg-white"
            style={{ 
              width: `${itemWidth}px`,
              aspectRatio: '3/4',
              willChange: 'transform, opacity',
              transformStyle: 'preserve-3d', // Ensure children don't flatten
            }}
          >
             <img 
               src={img} 
               alt={`Gallery ${i}`} 
               className="w-full h-full object-cover pointer-events-none" 
               loading="eager"
             />
             {/* Gradient for text readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
             
             {/* Text Content with slight parallax feel via translation */}
             <div className="absolute bottom-0 left-0 right-0 p-6 translate-z-10">
                <div className="h-0.5 w-8 bg-green-400 mb-2"></div>
                <div className="text-[10px] text-green-300 font-bold tracking-widest uppercase mb-1">Featured</div>
                <div className="text-white font-serif text-xl italic opacity-90">Residence</div>
             </div>
          </div>
       ))}
    </div>
  );
};

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Intersection Observer for Hero Section Re-triggering
  const heroRef = useRef<HTMLDivElement>(null);
  const [isHeroInView, setIsHeroInView] = useState(false);

  // Intersection Observer state for the About Section animation
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  // Intersection Observer for the 'Get It Sold' section
  const soldSectionRef = useRef<HTMLDivElement>(null);
  const [isSoldVisible, setIsSoldVisible] = useState(false);

  // Intersection Observer for the 'Find Your Dream Home' section
  const findHomeRef = useRef<HTMLDivElement>(null);
  const [isFindHomeVisible, setIsFindHomeVisible] = useState(false);

  // Intersection Observer for the 'Gallery' section
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);

  // Intersection Observer for the 'Services' section
  const servicesRef = useRef<HTMLDivElement>(null);
  const [isServicesVisible, setIsServicesVisible] = useState(false);

  // Intersection Observer for the 'Contact' section
  const contactRef = useRef<HTMLDivElement>(null);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isHoursOpen, setIsHoursOpen] = useState(false);

  // State for search input focus/dropdown
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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
          if (entry.target === heroRef.current) {
             setIsHeroInView(entry.isIntersecting);
          }
          if (entry.target === aboutSectionRef.current) {
             setIsAboutVisible(entry.isIntersecting);
          }
          if (entry.target === soldSectionRef.current) {
             setIsSoldVisible(entry.isIntersecting);
          }
          if (entry.target === findHomeRef.current) {
             setIsFindHomeVisible(entry.isIntersecting);
          }
          if (entry.target === galleryRef.current) {
             setIsGalleryVisible(entry.isIntersecting);
          }
          if (entry.target === servicesRef.current) {
             setIsServicesVisible(entry.isIntersecting);
          }
          if (entry.target === contactRef.current) {
             setIsContactVisible(entry.isIntersecting);
          }
        });
      },
      { 
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px"
      } 
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (aboutSectionRef.current) observer.observe(aboutSectionRef.current);
    if (soldSectionRef.current) observer.observe(soldSectionRef.current);
    if (findHomeRef.current) observer.observe(findHomeRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden font-sans">
      
      {/* ---------------- HERO SECTION ---------------- */}
      <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
        
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
          <div className="max-w-5xl pointer-events-auto mt-20 sm:mt-24">
            
            {/* Top Label (Static with specific requested zoom effect) */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className={`h-px w-8 sm:w-12 bg-green-500 transition-all duration-1000 ${isHeroInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></span>
              <p className={`text-green-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-base md:text-lg origin-center ${isHeroInView ? 'animate-zoomInCenter' : 'opacity-0'}`}>
                {BRAND_LABEL}
              </p>
            </div>
            
            <div key={`${currentSlide}-${isHeroInView}`} className="space-y-4 sm:space-y-8">
              {/* Titles - Adjusted font sizes and added zoomInCenter effect */}
              <div className="space-y-[-0.25rem] sm:space-y-[-1rem]">
                <div className="overflow-hidden">
                  <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-extrabold text-white tracking-tighter leading-[0.9] origin-center drop-shadow-2xl transition-opacity duration-300 ${isHeroInView ? 'animate-zoomInCenter delay-100' : 'opacity-0'}`}>
                    {slides[currentSlide].title}
                  </h1>
                </div>
                <div className="overflow-hidden">
                   <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-white to-green-300 tracking-tighter leading-[0.9] origin-center drop-shadow-2xl pb-2 transition-opacity duration-300 ${isHeroInView ? 'animate-zoomInCenter delay-200' : 'opacity-0'}`}>
                    {slides[currentSlide].highlight}
                  </h1>
                </div>
              </div>

              {/* Description */}
              <div className="max-w-lg pt-2 sm:pt-4">
                <p className={`text-base sm:text-lg md:text-xl text-gray-100 font-medium leading-relaxed border-l-2 border-white/30 pl-4 sm:pl-6 drop-shadow-md transition-all duration-1000 ${isHeroInView ? 'opacity-100 blur-0 translate-x-0' : 'opacity-0 blur-lg -translate-x-4'}`}>
                  {slides[currentSlide].description}
                </p>
              </div>
              
              {/* Buttons */}
              <div className="pt-6 sm:pt-8">
                <div className={`flex flex-wrap gap-6 transition-all duration-1000 delay-300 ${isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <Link 
                    to="/lets-move"
                    className="relative group overflow-hidden px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-500 ease-expo hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:border-white/50"
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
          <div className="flex items-end gap-4 h-24 sm:h-44 md:h-56">
            {slides.map((slide, index) => {
              const relativeIndex = (index - currentSlide + slides.length) % slides.length;
              
              let queueClass = '';
              let isVisible = false;
              
              if (relativeIndex === 0) {
                queueClass = 'w-0 opacity-0 border-0 m-0 pointer-events-none scale-0';
              } else if (relativeIndex === 1 || relativeIndex === 2) {
                // Hide thumbnails on very small screens to save space
                queueClass = 'hidden sm:block sm:w-32 md:w-40 opacity-100 hover:scale-105 hover:border-white/60 scale-100';
                isVisible = true;
              } else if (relativeIndex === 3) {
                queueClass = 'hidden sm:block sm:w-6 md:w-8 opacity-30 pointer-events-none grayscale scale-95';
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

          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 sm:gap-3">
               {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-[3px] transition-all duration-700 ease-expo rounded-full ${index === currentSlide ? 'w-16 sm:w-24 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'w-8 sm:w-12 bg-white/20 hover:bg-white/50'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
               ))}
             </div>
             <span className="text-lg sm:text-xl font-mono font-bold text-white tracking-widest pl-4 sm:pl-6 border-l border-white/30 shadow-black drop-shadow-lg animate-fadeIn">0{currentSlide + 1}</span>
          </div>
        </div>
      </div>

      {/* ---------------- REALTOR PROFILE SECTION ---------------- */}
      <section ref={aboutSectionRef} className="relative w-full py-12 lg:py-16 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/20 to-white z-0"></div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-green-100/30 rounded-full blur-[100px] animate-blob pointer-events-none mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-emerald-50/40 rounded-full blur-[80px] animate-blob animation-delay-2000 pointer-events-none mix-blend-multiply"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
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

            <div className={`lg:col-span-7 flex flex-col justify-center relative pl-0 lg:pl-10 transition-all duration-[1000ms] delay-150 ease-expo ${isAboutVisible ? 'opacity-100 blur-0 translate-y-0 scale-100' : 'opacity-0 blur-xl translate-y-24 scale-90'}`}>
               <div className="absolute inset-0 opacity-[0.05] pointer-events-none -z-20 rounded-2xl" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
               <span className="absolute -top-12 -left-4 text-[10rem] leading-none text-green-100 font-serif -z-10 select-none hidden xl:block pointer-events-none mix-blend-multiply">“</span>
               <div className="mb-6 lg:mb-8 relative z-10">
                  <div className="flex items-center gap-3 mb-4"><div className="w-10 h-0.5 bg-green-600"></div><span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-green-700">The Expert</span></div>
                  <div className="space-y-0">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[0.9] font-light tracking-tight">Unrivaled <span className="font-serif italic font-medium text-green-700 relative inline-block">Legacy<svg className="absolute w-full h-3 -bottom-1 left-0 text-green-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" /></svg></span></h2>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[0.9] font-bold tracking-tight">In Real Estate.</h2>
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-8 relative z-10">
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">Marci Metzger brings nearly three decades of negotiation mastery and market insight to the Pahrump Valley.</p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Originally establishing her reputation in Washington State, she has redefined the standard of service in Southern Nevada, blending corporate precision with a personal touch.</p>
               </div>
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

      {/* ---------------- REMAINING SECTIONS UNCHANGED ---------------- */}
      {/* (Sections: Partners, Sold, Find Home, Gallery, Services, Contact remain as defined previously) */}
      <section className="w-full bg-white border-t border-gray-100 py-10 lg:py-14 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          <div className="flex w-full group overflow-hidden">
            <div className="flex items-center gap-12 sm:gap-16 md:gap-24 flex-shrink-0 animate-scroll whitespace-nowrap pr-12 sm:pr-16 md:pr-24">
              {displayLogos.map((logo, index) => (
                 <img key={`logo-1-${index}`} src={logo} alt="Partner Logo" className="h-12 sm:h-16 md:h-24 w-auto object-contain transition-transform duration-300 cursor-pointer hover:scale-110" />
              ))}
            </div>
            <div className="flex items-center gap-12 sm:gap-16 md:gap-24 flex-shrink-0 animate-scroll whitespace-nowrap pr-12 sm:pr-16 md:pr-24" aria-hidden="true">
              {displayLogos.map((logo, index) => (
                 <img key={`logo-2-${index}`} src={logo} alt="Partner Logo" className="h-12 sm:h-16 md:h-24 w-auto object-contain transition-transform duration-300 cursor-pointer hover:scale-110" />
              ))}
            </div>
          </div>
      </section>

      <section ref={soldSectionRef} className="py-12 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
              <div className={`flex flex-col md:flex-row items-end justify-between mb-8 gap-6 transition-all duration-1000 ease-expo ${isSoldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="max-w-2xl">
                      <div className="flex items-center gap-3 mb-4"><div className="h-px w-8 bg-green-600"></div><span className="text-green-700 font-bold tracking-[0.25em] uppercase text-xs">The Process</span></div>
                      <h2 className="text-5xl md:text-7xl font-serif text-gray-900 leading-[0.9]">Get It <span className="font-serif italic text-green-700 relative inline-block">Sold<svg className="absolute w-full h-3 -bottom-1 left-0 text-green-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" /></svg></span></h2>
                  </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 h-auto lg:h-[500px]">
                  <div className={`group relative rounded-[2rem] overflow-hidden bg-gray-900 shadow-xl lg:col-span-2 lg:row-span-2 transition-all duration-1000 ease-expo ${isSoldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24 scale-95'}`}>
                      <img src="https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11.02%25,l:0%25,w:100%25,h:77.95%25/rs=w:1200,h:600,cg:true" alt="Luxury Estate" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 lg:p-10 flex flex-col justify-end">
                          <h3 className="text-2xl lg:text-3xl font-serif text-white mb-2 leading-tight">Top Residential <br/>Sales Last 5 Years</h3>
                          <p className="text-gray-300 text-sm max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-500 overflow-hidden">We closed 28.5 million in sales in 2021. Our team excels to provide the best market analysis and results for our clients.</p>
                      </div>
                  </div>
                  <div className={`group relative rounded-[2rem] overflow-hidden bg-green-700 shadow-xl lg:col-span-1 lg:row-span-1 transition-all duration-1000 delay-300 ${isSoldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24 scale-95'}`}>
                      <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                          <TrendingUp className="w-8 h-8 opacity-70" />
                          <h3 className="text-3xl font-serif">Just List It?</h3>
                      </div>
                  </div>
                  <div className={`group relative rounded-[2rem] overflow-hidden bg-white border border-gray-200 shadow-xl lg:col-span-1 lg:row-span-1 transition-all duration-1000 delay-500 ${isSoldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24 scale-95'}`}>
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                         <Megaphone className="text-green-600 mb-2" size={24} />
                         <h3 className="text-3xl font-serif text-gray-900">Don't Just List it.</h3>
                      </div>
                  </div>
                  <div className={`group relative rounded-[2rem] overflow-hidden bg-gray-900 shadow-xl lg:col-span-2 lg:row-span-1 transition-all duration-1000 delay-700 ${isSoldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24 scale-95'}`}>
                      <img src="https://img1.wsimg.com/isteam/stock/771/:/cr=t:5.36%25,l:1.76%25,w:96.47%25,h:89.29%25/rs=w:1200,h:600,cg:true,m" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent p-8 flex flex-col justify-center">
                          <h3 className="text-3xl font-serif text-white">Guide to Buyers</h3>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section ref={findHomeRef} className="relative py-4 lg:py-6 overflow-hidden bg-white">
         <div className="relative z-10 w-full px-2 sm:px-4">
            <div className={`bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row transition-all duration-[1200ms] ease-out transform ${isFindHomeVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'}`}>
               <div className="lg:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-4xl font-serif text-gray-900 mb-1">Find Your <span className="text-green-600 italic">Dream Home</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-4">
                     <SelectFieldLight label="Location" options={searchOptions.locations} delay={0} isVisible={isFindHomeVisible} />
                     <SelectFieldLight label="Property Type" options={searchOptions.types} delay={50} isVisible={isFindHomeVisible} />
                     <button className="md:col-span-2 w-full h-[46px] bg-green-600 hover:bg-green-700 text-white font-bold text-xs tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2">Search <ArrowRight size={14} /></button>
                  </div>
               </div>
               <div className="lg:w-1/2 relative min-h-[250px] overflow-hidden group">
                  <img src="https://ssl.cdn-redfin.com/photo/95/bigphoto/101/2264101_2.jpg" alt="Dream Home" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
               </div>
            </div>
         </div>
      </section>

      <section ref={galleryRef} className="relative py-16 lg:py-20 overflow-hidden bg-white">
         <div className={`relative z-10 w-full transition-all duration-[1000ms] ease-out transform ${isGalleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
             <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                 <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-gray-900">Photo <span className="font-serif italic text-green-600">Gallery</span></h2>
             </div>
             <CurvedGallery />
         </div>
      </section>

      <section ref={servicesRef} className="py-10 lg:py-14 relative overflow-hidden bg-white">
         <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className={`text-center mb-8 max-w-3xl mx-auto transition-all duration-1000 ease-out ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-3 tracking-tight">Exceptional <span className="font-serif italic text-green-600">Services</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
               {services.map((service, index) => (
                  <div key={index} className={`group relative bg-white rounded-[1.5rem] border border-gray-100 p-6 flex flex-col h-full transform transition-all duration-700 ease-elastic hover:-translate-y-2 ${isServicesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 translate-y-20'}`} style={{ transitionDelay: isServicesVisible ? `${index * 150}ms` : '0ms' }}>
                     <div className="relative h-48 overflow-hidden rounded-[1.2rem] mb-4">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     </div>
                     <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{service.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <section ref={contactRef} className="py-6 lg:py-10 relative overflow-hidden bg-white border-t border-gray-100">
         <div className={`relative z-10 max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-1000 transform ${isContactVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
               <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100">
                     <h2 className="text-2xl font-serif text-gray-900 mb-4">Send <span className="text-green-600 italic">Message</span></h2>
                     <form className="space-y-3">
                        <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm" placeholder="Full Name" />
                        <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm" placeholder="Email Address" />
                        <textarea rows={3} className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm" placeholder="Your Message"></textarea>
                        <button className="w-full py-3 bg-black text-white rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-green-600 transition-colors">Send Message</button>
                     </form>
                  </div>
               </div>
               <div className="lg:col-span-7 h-full min-h-[400px] relative">
                  <iframe width="100%" height="100%" src="https://maps.google.com/maps?q=3190%20HW-160,%20Suite%20F,%20Pahrump,%20Nevada%2089048,%20United%20States&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" className="w-full h-full rounded-[2rem] shadow-2xl border border-gray-100" title="Ridge Realty Location"></iframe>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

const SelectFieldLight = ({ label, options, delay, isVisible }: { label: string, options: string[], delay: number, isVisible: boolean }) => (
   <div className={`group transition-all duration-700 ease-out`} style={{ transitionDelay: `${delay}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(10px)' }}>
      <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1 ml-1">{label}</label>
      <div className="relative">
         <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 appearance-none focus:outline-none focus:border-green-500 transition-all cursor-pointer">
            {options.map((opt, i) => (
               <option key={i} value={opt}>{opt}</option>
            ))}
         </select>
         <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <ChevronDown size={14} />
         </div>
      </div>
   </div>
 );

export default Home;
