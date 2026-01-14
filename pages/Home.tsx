
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

  // 3 sets of images for seamless loop
  const displayImages = [...galleryImages, ...galleryImages, ...galleryImages]; 
  
  // Responsive item width
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const itemWidth = isMobile ? 180 : 280; // Reduced size
  const gap = isMobile ? 15 : 30;
  const totalItemWidth = itemWidth + gap;
  const totalWidth = galleryImages.length * totalItemWidth; // Width of ONE set

  useEffect(() => {
    let lastTime = 0;
    const speed = 0.6; // Slightly slower for elegance

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
        const distNorm = (itemCenter - centerX) / (screenWidth * 0.55);
        
        // Math for Straight-to-Curved Transition
        // Center zone is flatter, edges curve away rapidly
        const absNorm = Math.abs(distNorm);
        
        // Z-Translation: Move back significantly at edges (Convex/Cylinder effect)
        // Using power function to keep center straighter
        const z = -Math.pow(absNorm, 2) * (isMobile ? 150 : 300);
        
        // Rotation: Rotate inward to face center
        // Left side (dist < 0) rotates positive Y (faces right/in)
        // Right side (dist > 0) rotates negative Y (faces left/in)
        const rotateY = -distNorm * (isMobile ? 25 : 35);

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
       <div className="absolute top-0 left-0 w-1/5 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-50 pointer-events-none"></div>
       <div className="absolute top-0 right-0 w-1/5 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-50 pointer-events-none"></div>

       {displayImages.map((img, i) => (
          <div
            key={i}
            ref={el => itemsRef.current[i] = el}
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
        threshold: 0.15,
        rootMargin: "-50px 0px"
      } 
    );

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

      {/* ---------------- FIND YOUR DREAM HOME SECTION ---------------- */}
      <section ref={findHomeRef} className="relative py-4 lg:py-6 overflow-hidden bg-white">
         {/* Decorative Background Blobs - Light Theme */}
         <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
             <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-green-100/40 rounded-full blur-[80px]"></div>
             <div className="absolute top-[20%] right-[10%] w-[30%] h-[60%] bg-emerald-50/60 rounded-full blur-[100px] rotate-12"></div>
         </div>

         <div className="relative z-10 w-full px-2 sm:px-4">
            
            <div className={`bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row transition-all duration-[1200ms] ease-out transform ${isFindHomeVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'}`}>
               
               {/* Left Side - Search Interface (50% Width) */}
               <div className="lg:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col justify-center">
                  
                  <div className="mb-3">
                     <span className="inline-block py-0.5 px-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-[9px] font-bold tracking-[0.2em] uppercase mb-1">
                       Exclusive Listings
                     </span>
                     <h2 className="text-2xl md:text-4xl font-serif text-gray-900 mb-1">
                       Find Your <span className="text-green-600 italic">Dream Home</span>
                     </h2>
                     <p className="text-gray-500 text-xs md:text-sm max-w-lg">
                       Browse our curated selection of premium properties.
                     </p>
                  </div>

                  {/* Search Form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                     
                     {/* Main Search Input - Full Width in this column */}
                     <div className="md:col-span-2 group relative z-50 mb-0.5">
                        <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1 ml-1 group-focus-within:text-green-600 transition-colors">Search Listing</label>
                        <div className="relative">
                           <input 
                             type="text" 
                             value={searchValue}
                             onChange={(e) => setSearchValue(e.target.value)}
                             onFocus={() => setIsSearchFocused(true)}
                             onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)} // Delay close to allow clicks
                             placeholder="Enter address, city, zip code, or MLS number..." 
                             className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 pl-10 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300 relative z-20" 
                           />
                           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors z-20" size={16} />
                           
                           {/* Search Suggestions Dropdown */}
                           {isSearchFocused && (
                             <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-30 animate-fadeIn origin-top transform transition-all duration-300">
                                <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                                   Suggestions
                                </div>
                                {searchSuggestions.map((item, index) => (
                                  <button 
                                     key={index}
                                     onClick={() => { setSearchValue(item.text); setIsSearchFocused(false); }}
                                     className="w-full text-left px-5 py-3 hover:bg-green-50 flex items-center justify-between group/item transition-colors"
                                  >
                                     <div className="flex items-center gap-3">
                                        <div className="p-2 bg-gray-100 rounded-full text-gray-500 group-hover/item:bg-white group-hover/item:text-green-600 transition-colors">
                                           <MapPin size={14} />
                                        </div>
                                        <span className="text-gray-700 group-hover/item:text-green-900 font-medium text-sm">{item.text}</span>
                                     </div>
                                     <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded-full group-hover/item:bg-white group-hover/item:text-green-600 transition-colors font-bold uppercase">{item.type}</span>
                                  </button>
                                ))}
                             </div>
                           )}
                        </div>
                     </div>

                     {/* Filters using Helper Component with updated styling */}
                     <SelectFieldLight label="Location" options={searchOptions.locations} delay={0} isVisible={isFindHomeVisible} />
                     <SelectFieldLight label="Property Type" options={searchOptions.types} delay={50} isVisible={isFindHomeVisible} />
                     <SelectFieldLight label="Sort By" options={searchOptions.sorts} delay={100} isVisible={isFindHomeVisible} />
                     <SelectFieldLight label="Bedrooms" options={searchOptions.beds} delay={150} isVisible={isFindHomeVisible} />
                     <SelectFieldLight label="Bathrooms" options={searchOptions.baths} delay={200} isVisible={isFindHomeVisible} />
                     <SelectFieldLight label="Min Price" options={searchOptions.minPrice} delay={250} isVisible={isFindHomeVisible} />
                     <SelectFieldLight label="Max Price" options={searchOptions.maxPrice} delay={300} isVisible={isFindHomeVisible} />

                     {/* Search Button - Full width on mobile, auto on desktop */}
                     <div className="md:col-span-1 flex items-end mt-2 md:mt-0">
                        <button className="w-full h-[46px] bg-green-600 hover:bg-green-700 text-white font-bold text-xs tracking-widest uppercase rounded-xl shadow-lg shadow-green-200 hover:shadow-green-300 transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 active:scale-95">
                           <span>Search</span>
                           <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                     </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap justify-between items-center gap-3 text-[10px] font-medium text-gray-500">
                     <div className="flex gap-4">
                        <a href="#" className="hover:text-green-600 transition-colors underline decoration-transparent hover:decoration-green-600 underline-offset-4">Advanced Search</a>
                        <a href="#" className="hover:text-green-600 transition-colors underline decoration-transparent hover:decoration-green-600 underline-offset-4">Map Search</a>
                     </div>
                     <div>
                        <span className="text-gray-400">Looking for commercial?</span> <a href="#" className="text-green-600 hover:text-green-700 font-bold ml-1">Click here</a>
                     </div>
                  </div>

               </div>

               {/* Right Side - Image (50% Width) */}
               <div className="lg:w-1/2 relative min-h-[250px] lg:min-h-full overflow-hidden group">
                  <img 
                    src="https://ssl.cdn-redfin.com/photo/95/bigphoto/101/2264101_2.jpg" 
                    alt="Dream Home" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  {/* Overlay Text on Image */}
                  <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <p className="font-serif italic text-xl opacity-90 mb-2">Discover</p>
                     <p className="font-bold text-3xl md:text-4xl tracking-tight leading-none mb-4">Luxury Living<br/>In Pahrump</p>
                     <div className="h-1 w-12 bg-green-400 rounded-full"></div>
                  </div>
               </div>

            </div>

         </div>
      </section>

      {/* ---------------- PHOTO GALLERY SECTION ---------------- */}
      <section ref={galleryRef} className="relative py-16 lg:py-20 overflow-hidden bg-white">
         {/* Decorative Background Blobs */}
         <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
             <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-green-100/40 rounded-full blur-[80px]"></div>
             <div className="absolute top-[20%] right-[10%] w-[30%] h-[60%] bg-emerald-50/60 rounded-full blur-[100px] rotate-12"></div>
         </div>
         
         <div className={`relative z-10 w-full transition-all duration-[1000ms] ease-out transform ${isGalleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
             
             {/* Header */}
             <div className="max-w-7xl mx-auto px-6 mb-8 relative z-10 text-center">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50/80 backdrop-blur-sm mb-2">
                    <Camera size={14} className="text-green-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Visual Experience</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-gray-900">
                    Photo <span className="font-serif italic text-green-600">Gallery</span>
                 </h2>
                 <p className="mt-2 text-gray-500 text-sm max-w-lg mx-auto">
                    Explore the luxury and comfort of our featured properties through this interactive gallery.
                 </p>
             </div>

             {/* Continuous Curve Slider */}
             <CurvedGallery />
         </div>
      </section>

      {/* ---------------- OUR SERVICES SECTION (New) ---------------- */}
      <section ref={servicesRef} className="py-10 lg:py-14 relative overflow-hidden bg-white">
         {/* 1. Sophisticated Background */}
         <div className="absolute inset-0 pointer-events-none">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.05),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.05),transparent_40%)]"></div>
            
            {/* Architectural Grid - Blueprint feel */}
            <div className="absolute inset-0 opacity-[0.03]" 
                 style={{ 
                     backgroundImage: 'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)', 
                     backgroundSize: '40px 40px' 
                 }}>
            </div>
         </div>

         {/* 2. Modern Decorative Accents */}
         {/* Spinning Dashed Ring (Compass abstract) */}
         <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] border border-dashed border-green-200/40 rounded-full animate-spin-slow pointer-events-none" style={{ animationDuration: '60s' }}></div>
         <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] border border-green-100/30 rounded-full pointer-events-none"></div>

         {/* Geometric Shapes */}
         <div className="absolute top-24 left-10 w-16 h-16 border-2 border-green-500/10 rotate-12 rounded-2xl pointer-events-none animate-float"></div>
         <div className="absolute bottom-12 left-1/4 w-2 h-24 bg-gradient-to-b from-green-200/50 to-transparent pointer-events-none"></div>
         <div className="absolute bottom-24 right-12 flex gap-2 opacity-20 pointer-events-none">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-150"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
         </div>

         {/* Soft Glow behind header */}
         <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-r from-green-50/50 via-emerald-50/30 to-transparent blur-[80px] pointer-events-none"></div>

         <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            {/* Section Header */}
            <div className={`text-center mb-8 max-w-3xl mx-auto relative transition-all duration-1000 ease-out ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] mb-4">
                  <Sparkles size={12} className="text-green-600 fill-green-100" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-800">Elite Standards</span>
               </div>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-3 tracking-tight">
                  Exceptional <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 relative z-10">Services</span>
               </h2>
               
               <div className="flex flex-col items-center mt-2">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-green-400 to-transparent mb-4 opacity-50"></div>
                  <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    <span className="text-gray-400 font-serif italic mr-1">"</span>
                    Tailored real estate solutions designed to <span className="text-green-700 border-b border-green-200 pb-0.5">elevate your experience</span>.
                    <span className="text-gray-400 font-serif italic ml-1">"</span>
                  </p>
               </div>
            </div>

            {/* Services Grid with Staggered Zoom Transition */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
               {services.map((service, index) => (
                  <div 
                     key={index}
                     className={`group relative bg-white rounded-[1.5rem] border border-gray-100 overflow-hidden flex flex-col h-full transform transition-all duration-700 ease-elastic hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.1)] ${
                        isServicesVisible 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-75 translate-y-20'
                     }`}
                     style={{ transitionDelay: isServicesVisible ? `${index * 150}ms` : '0ms' }}
                  >
                     {/* Background Icon Watermark */}
                     <img 
                        src={service.bgIcon} 
                        alt="" 
                        className="absolute -bottom-6 -right-6 w-40 h-40 object-contain opacity-5 group-hover:opacity-15 transition-all duration-700 ease-out z-0 pointer-events-none group-hover:scale-110 group-hover:-rotate-12 grayscale group-hover:grayscale-0"
                     />

                     {/* Hover Gradient Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-b from-green-50/0 via-green-50/0 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                     {/* Image Container */}
                     <div className="relative h-48 overflow-hidden m-1.5 rounded-[1.2rem]">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                        <img 
                           src={service.image} 
                           alt={service.title} 
                           className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        
                        {/* Modern Glass Icon Badge */}
                        <div className="absolute top-3 right-3 w-10 h-10 bg-white/30 backdrop-blur-md border border-white/50 rounded-xl flex items-center justify-center text-white shadow-lg z-20 group-hover:bg-green-600 group-hover:border-green-500 transition-all duration-300">
                           {React.cloneElement(service.icon as React.ReactElement, { size: 18 })}
                        </div>
                     </div>

                     {/* Content */}
                     <div className="p-6 flex-grow flex flex-col relative z-20">
                        <div className="mb-3 flex items-baseline gap-2">
                           <span className="text-[10px] font-bold text-green-600/60 uppercase tracking-widest">0{index + 1}</span>
                           <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                              {service.title}
                           </h3>
                        </div>
                        
                        <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-grow border-l-2 border-gray-100 pl-3 group-hover:border-green-300 transition-colors duration-300">
                           {service.description}
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors">Details</span>
                           <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-green-500 group-hover:text-green-600 group-hover:bg-green-50 transition-all duration-300">
                              <ArrowRight size={12} />
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </section>

      {/* ---------------- CALL OR VISIT SECTION ---------------- */}
      <section ref={contactRef} className="py-6 lg:py-10 relative overflow-hidden bg-white border-t border-gray-100">
         {/* Background Elements */}
         <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.05),transparent_40%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_40%)]"></div>
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>
         </div>
         <div className="absolute top-10 right-10 w-24 h-24 border border-green-500/10 rounded-full animate-pulse delay-700 pointer-events-none"></div>
         <div className="absolute bottom-10 left-10 w-32 h-32 border border-green-500/10 rounded-full animate-pulse pointer-events-none"></div>

         <div className={`relative z-10 max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-1000 ease-in-out transform ${isContactVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            
             {/* NEW HEADER SECTION */}
            <div className="text-center mb-6 max-w-3xl mx-auto">
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] mb-4">
                    <MapPin size={12} className="text-green-600 fill-green-100" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-800">Connect With Us</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4 tracking-tight">
                    Call or <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 relative z-10">Visit</span>
                 </h2>
                 <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                    Ready to start your real estate journey? Our team is here to assist you every step of the way.
                 </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
               
               {/* Left Side: Contact Form & Info */}
               <div className="lg:col-span-5 flex flex-col gap-6">
                  
                  {/* Contact Form Card */}
                  <div className="bg-white rounded-[2rem] p-6 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"></div>
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-50 rounded-tr-full -ml-10 -mb-10 transition-transform duration-700 group-hover:scale-110"></div>
                      
                      <div className="relative z-10">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-200"><MessageSquare size={18} /></div>
                            <div><span className="text-[9px] font-bold uppercase tracking-widest text-green-600 block mb-0.5">Get in touch</span><h2 className="text-2xl font-serif text-gray-900">Send <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 italic">Message</span></h2></div>
                         </div>
                         <form className="space-y-3">
                            <div className="group/field relative">
                               <label className="block text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1 ml-1 group-focus-within/field:text-green-600 transition-colors">Full Name</label>
                               <div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5 group-focus-within/field:text-green-600 transition-colors" /><input type="text" className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-2.5 pl-10 pr-4 text-gray-900 text-xs focus:outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all duration-300" placeholder="e.g. John Doe" /></div>
                            </div>
                            <div className="group/field relative">
                               <label className="block text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1 ml-1 group-focus-within/field:text-green-600 transition-colors">Email Address</label>
                               <div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5 group-focus-within/field:text-green-600 transition-colors" /><input type="email" className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-2.5 pl-10 pr-4 text-gray-900 text-xs focus:outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all duration-300" placeholder="name@example.com" /></div>
                            </div>
                            <div className="group/field relative">
                               <label className="block text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1 ml-1 group-focus-within/field:text-green-600 transition-colors">Your Message</label>
                               <textarea rows={3} className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-2.5 px-4 text-gray-900 text-xs focus:outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all duration-300 resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full py-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl font-bold tracking-widest uppercase text-[10px] hover:from-green-600 hover:to-emerald-700 transition-all duration-500 flex items-center justify-center gap-2 group/btn shadow-xl shadow-gray-200 hover:shadow-green-200/50 transform hover:-translate-y-1"><span>Send Message</span><Send className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /></button>
                         </form>
                      </div>
                  </div>

                  {/* Contact Info (Moved below form) */}
                  <div className="bg-white rounded-[2rem] p-6 border border-gray-100/80">
                     <div className="space-y-4">
                         {/* Address & Phone */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="group">
                                <h3 className="text-[9px] font-bold text-green-600 tracking-[0.2em] uppercase mb-2 flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-green-500"></span> Visit Us</h3>
                                <div className="flex items-start gap-3 text-gray-600">
                                   <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0 group-hover:bg-green-50 group-hover:text-green-600 group-hover:border-green-200 transition-all duration-300"><MapPin size={16} /></div>
                                   <div>
                                      <h4 className="font-serif text-base text-gray-900 mb-0.5">Pahrump Office</h4>
                                      <p className="leading-relaxed text-xs text-gray-500">3190 HW-160, Suite F,<br/>Pahrump, Nevada 89048</p>
                                   </div>
                                </div>
                             </div>
                             <div className="group">
                                <h3 className="text-[9px] font-bold text-green-600 tracking-[0.2em] uppercase mb-2 flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-green-500"></span> Call Us</h3>
                                <div className="flex items-start gap-3">
                                   <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0 group-hover:bg-green-50 group-hover:text-green-600 group-hover:border-green-200 transition-all duration-300"><Phone size={16} /></div>
                                   <div>
                                      <h4 className="font-serif text-base text-gray-900 mb-0.5">Inquiries</h4>
                                      <a href="tel:2069196886" className="text-sm text-gray-500 hover:text-green-600 transition-colors underline decoration-transparent hover:decoration-green-500">(206) 919-6886</a>
                                   </div>
                                </div>
                             </div>
                         </div>

                         <div className="w-full h-px bg-gray-100"></div>

                         {/* Hours & Social */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                             <div>
                                <h3 className="text-[9px] font-bold text-green-600 tracking-[0.2em] uppercase mb-2 flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-green-500"></span> Office Hours</h3>
                                <div className="bg-gray-50/50 rounded-lg border border-gray-100">
                                   <button onClick={() => setIsHoursOpen(!isHoursOpen)} className="w-full flex items-center justify-between p-2.5 hover:bg-white rounded-lg transition-all duration-300 group">
                                      <div className="flex items-center gap-2"><Clock size={14} className="text-gray-400 group-hover:text-green-600" /><span className="font-bold text-gray-900 text-[10px] uppercase tracking-wide">View Hours</span></div>
                                      <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${isHoursOpen ? 'rotate-180' : ''}`} />
                                   </button>
                                   <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isHoursOpen ? 'max-h-[300px] border-t border-gray-100' : 'max-h-0'}`}>
                                      <div className="p-3 space-y-1.5">
                                         {officeHours.map((item, idx) => (
                                            <div key={idx} className="flex justify-between text-[10px] text-gray-500"><span className="font-medium">{item.day}</span><span>{item.hours}</span></div>
                                         ))}
                                      </div>
                                   </div>
                                </div>
                             </div>
                             <div>
                                <h3 className="text-[9px] font-bold text-green-600 tracking-[0.2em] uppercase mb-2 flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-green-500"></span> Connect</h3>
                                <div className="flex gap-2">
                                   {socialLinks.map((item, idx) => (
                                      <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 ${item.color}`} title={item.name}><img src={item.icon} alt={item.name} className="w-4 h-4 object-contain" /></a>
                                   ))}
                                </div>
                             </div>
                         </div>
                     </div>
                  </div>
               </div>

               {/* Right Side: Vertical Map (Full Height) */}
               <div className="lg:col-span-7 h-full min-h-[400px] lg:min-h-0 relative">
                  <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden group">
                      <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=3190%20HW-160,%20Suite%20F,%20Pahrump,%20Nevada%2089048,%20United%20States&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} className="w-full h-full transition-all duration-700" title="Ridge Realty Location"></iframe>
                      
                      {/* Interactive Overlay on Map */}
                      <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 flex items-center justify-between transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600"><MapPin size={20} /></div>
                             <div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Locate Us</p>
                                <p className="text-sm font-bold text-gray-900">Ridge Realty Group</p>
                             </div>
                          </div>
                          <a href="https://www.google.com/maps/search/?api=1&query=3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048" target="_blank" rel="noreferrer" className="px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-green-600 transition-colors">Open Map</a>
                      </div>
                  </div>
                  {/* Decorative blobs behind map */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100 rounded-full blur-3xl -z-10 opacity-50"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl -z-10 opacity-50"></div>
               </div>

            </div>
         </div>
      </section>

    </div>
  );
};

// Helper Component for Select Fields (Dark Theme - kept for potential future use or if needed elsewhere)
const SelectField = ({ label, options, delay, isVisible }: { label: string, options: string[], delay: number, isVisible: boolean }) => (
  <div className={`group transition-all duration-700 ease-out`} style={{ transitionDelay: `${delay}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(10px)' }}>
     <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1 group-focus-within:text-green-400 transition-colors">{label}</label>
     <div className="relative">
        <select className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white appearance-none focus:outline-none focus:border-green-500/50 focus:bg-black/60 focus:ring-1 focus:ring-green-500/50 transition-all duration-300 cursor-pointer shadow-sm hover:border-white/20">
           {options.map((opt, i) => (
              <option key={i} value={opt} className="bg-gray-900 text-gray-300">{opt}</option>
           ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-hover:text-gray-300 transition-colors">
           <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        </div>
     </div>
  </div>
);

// Helper Component for Select Fields (Light Theme)
const SelectFieldLight = ({ label, options, delay, isVisible }: { label: string, options: string[], delay: number, isVisible: boolean }) => (
   <div className={`group transition-all duration-700 ease-out`} style={{ transitionDelay: `${delay}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(10px)' }}>
      <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1 ml-1 group-focus-within:text-green-600 transition-colors">{label}</label>
      <div className="relative">
         <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 appearance-none focus:outline-none focus:bg-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300 cursor-pointer shadow-sm hover:border-green-200">
            {options.map((opt, i) => (
               <option key={i} value={opt} className="bg-white text-gray-900">{opt}</option>
            ))}
         </select>
         {/* Custom Arrow Icon */}
         <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-green-600 transition-colors">
            <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
         </div>
      </div>
   </div>
 );

export default Home;
