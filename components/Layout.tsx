
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  // Direct link format for the provided Google Drive image
  const LOGO_URL = "https://lh3.googleusercontent.com/d/1CkY6ieN8w-P7JBdoH033f4-2DvtOGimv";

  // Handle scroll effect for glass intensity and padding
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/listings?q=${encodeURIComponent(searchQuery)}`);
      (e.target as HTMLInputElement).blur();
      setSearchActive(false);
      setIsMenuOpen(false);
    }
  };

  /**
   * Theme configuration based on route and scroll state
   * isHome: True for the landing page which features a dark hero and dark glass nav
   * logoWhite: Applied via CSS filter to turn the logo white for dark backgrounds
   */
  const theme = isHome 
    ? {
        navContainer: `border-white/10 ${scrolled ? 'bg-black/60 backdrop-blur-xl py-1' : 'bg-white/5 backdrop-blur-lg py-1.5'} text-white`,
        linkActive: 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]',
        linkInactive: 'text-gray-300 hover:text-white hover:bg-white/10',
        logoFilter: 'brightness(0) invert(1)', // Transform to white
        mobileMenu: 'bg-black/95 border-white/10 text-white',
        mobileInput: 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/20',
        mobileIcon: 'text-white/50'
      }
    : {
        navContainer: `border-gray-200/60 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-md py-1' : 'bg-white/60 backdrop-blur-lg shadow-sm py-1.5'} text-gray-900`,
        linkActive: 'bg-black text-white shadow-lg',
        linkInactive: 'text-gray-600 hover:text-black hover:bg-black/5',
        logoFilter: 'none', // Keep original color
        mobileMenu: 'bg-white border-gray-100 text-gray-900 shadow-xl',
        mobileInput: 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-green-500',
        mobileIcon: 'text-gray-400'
      };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/listings', label: 'Listings' },
    { path: '/lets-move', label: "Let's Move" },
    { path: '/about', label: 'About' }
  ];

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/MarciHomes/", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png", color: "hover:shadow-blue-200" },
    { name: "Instagram", url: "https://www.instagram.com/marciandlauren_nvrealtors/", icon: "https://cdn-icons-png.flaticon.com/512/15707/15707749.png", color: "hover:shadow-pink-200" },
    { name: "Yelp", url: "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump", icon: "https://cdn-icons-png.flaticon.com/512/3670/3670104.png", color: "hover:shadow-red-200" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/marci-metzger-30642496/", icon: "https://cdn-icons-png.flaticon.com/512/4494/4494497.png", color: "hover:shadow-blue-200" }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-green-500 selection:text-white">
      
      {/* Dynamic Floating Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-expo ${scrolled ? 'mt-2' : 'mt-4 sm:mt-6'}`}>
        <nav 
          className={`
            relative flex items-center justify-between 
            px-4 sm:px-8 rounded-full border 
            transition-all duration-700 ease-expo
            ${theme.navContainer}
            ${isMenuOpen ? 'rounded-2xl ring-2 ring-green-500/20' : 'rounded-full'}
            ${isHome ? 'w-[95%] max-w-6xl' : 'w-[95%] max-w-6xl'}
          `}
        >
          {/* Logo Section - Features color transform based on background */}
          <Link 
            to="/" 
            className="flex items-center group py-1 flex-shrink-0" 
            onClick={() => setIsMenuOpen(false)}
          >
            <img 
              src={LOGO_URL} 
              alt="Ridge Realty Logo" 
              style={{ filter: theme.logoFilter }}
              className={`
                h-12 sm:h-14 w-auto object-contain transition-all duration-500 ease-expo 
                group-hover:scale-105 group-active:scale-95
                ${isHome ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]' : 'drop-shadow-sm'}
              `}
            />
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    px-4 lg:px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-500 ease-expo whitespace-nowrap
                    ${isActive ? theme.linkActive : theme.linkInactive}
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center pr-1 gap-3 flex-shrink-0">
             <div className={`
                relative flex items-center transition-all duration-500 ease-expo group
                ${searchActive ? 'w-48 lg:w-60' : 'w-32 lg:w-40'}
              `}>
                <Search className={`
                  absolute left-3.5 w-4 h-4 transition-colors duration-300 pointer-events-none
                  ${isHome ? 'text-white/50 group-hover:text-white/80' : 'text-gray-400 group-hover:text-gray-600'}
                `} />
                <input 
                  type="text" 
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                  onFocus={() => setSearchActive(true)}
                  onBlur={() => setSearchActive(false)}
                  className={`
                    w-full py-1.5 pl-10 pr-4 rounded-full text-xs sm:text-sm font-medium outline-none border backdrop-blur-md transition-all duration-500 ease-expo
                    ${isHome 
                      ? `bg-white/10 border-white/5 text-white placeholder-white/40 hover:bg-white/20 focus:bg-black/50 focus:border-white/20 focus:shadow-[0_0_20px_rgba(255,255,255,0.1)]` 
                      : `bg-gray-100/80 border-transparent text-gray-900 placeholder-gray-400 hover:bg-white focus:bg-white focus:border-gray-200 focus:shadow-lg`
                    }
                  `}
                />
             </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-1.5 rounded-full transition-colors ${isHome ? 'hover:bg-white/20' : 'hover:bg-black/5'}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

           {/* Mobile Dropdown Menu */}
           {isMenuOpen && (
            <div className={`
              absolute top-full left-0 right-0 mt-3 p-3 rounded-3xl border backdrop-blur-3xl animate-slideDown
              flex flex-col gap-2 overflow-hidden shadow-2xl origin-top z-50
              ${theme.mobileMenu}
            `}>
              <div className="mb-2 px-2 pt-1">
                 <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search listings..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleSearch}
                      className={`w-full py-3 pl-10 pr-4 rounded-xl text-base font-medium outline-none border transition-all ${theme.mobileInput}`}
                    />
                    <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.mobileIcon}`} />
                 </div>
              </div>

              <div className="h-px bg-current opacity-10 mx-2 mb-1"></div>

              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    block px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300
                    ${location.pathname === link.path 
                      ? 'bg-green-500 text-white shadow-lg' 
                      : 'hover:bg-white/10'
                    }
                  `}
                >
                   {link.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white via-green-50 to-green-100/30 border-t border-green-100 pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
            
            {/* Brand Column */}
            <div className="space-y-5">
              <div className="flex items-center gap-4 group">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-green-50 p-2 transition-transform duration-500 group-hover:scale-105">
                  <img 
                    src={LOGO_URL} 
                    alt="Ridge Realty" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-2xl text-gray-900 tracking-tight leading-tight">Ridge Realty</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-600">The Gold Standard</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Dedicated to providing exceptional service in the Pahrump real estate market since 1996. Your trust is our foundation.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((item, idx) => (
                   <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className={`w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center bg-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 ${item.color}`} title={item.name}>
                      <img src={item.icon} alt={item.name} className="w-4 h-4 object-contain" />
                   </a>
                ))}
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-gray-500 hover:text-green-600 text-sm font-semibold transition-colors">Home Experience</Link></li>
                <li><Link to="/listings" className="text-gray-500 hover:text-green-600 text-sm font-semibold transition-colors">Property Listings</Link></li>
                <li><Link to="/lets-move" className="text-gray-500 hover:text-green-600 text-sm font-semibold transition-colors">Let's Move</Link></li>
                <li><Link to="/about" className="text-gray-500 hover:text-green-600 text-sm font-semibold transition-colors">Our Legacy</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-6">Office Info</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li className="flex items-start gap-3">
                  <span className="leading-relaxed">3190 HW-160, Suite F<br/>Pahrump, NV 89048</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-900 font-bold">(206) 919-6886</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>Open weekdays: 8am – 7pm</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400 font-medium text-center md:text-left">
              &copy; {new Date().getFullYear()} The Ridge Realty Group. All rights reserved. Professional Real Estate Services in Nevada.
            </p>
            <div className="flex gap-8 text-xs text-gray-400 font-bold uppercase tracking-wider">
              <a href="#" className="hover:text-green-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-green-600 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
