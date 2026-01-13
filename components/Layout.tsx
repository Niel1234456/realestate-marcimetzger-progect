import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, Search } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Handle scroll effect for glass intensity and padding
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme configuration based on route
  const theme = isHome 
    ? {
        // Dark/Transparent theme for Home
        navContainer: `border-white/10 ${scrolled ? 'bg-black/60 backdrop-blur-xl py-2' : 'bg-white/5 backdrop-blur-lg py-3'} text-white`,
        logoBg: 'bg-white/10',
        logoIcon: 'text-green-400',
        linkActive: 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]',
        linkInactive: 'text-gray-300 hover:text-white hover:bg-white/10',
        mobileMenu: 'bg-black/95 border-white/10 text-white'
      }
    : {
        // Light/Glass theme for other pages
        navContainer: `border-gray-200/60 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-md py-2' : 'bg-white/60 backdrop-blur-lg shadow-sm py-3'} text-gray-900`,
        logoBg: 'bg-green-50',
        logoIcon: 'text-green-600',
        linkActive: 'bg-black text-white shadow-lg',
        linkInactive: 'text-gray-600 hover:text-black hover:bg-black/5',
        mobileMenu: 'bg-white border-gray-100 text-gray-900 shadow-xl'
      };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/lets-move', label: "Let's Move" },
    { path: '/about', label: 'About' }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-green-500 selection:text-white">
      
      {/* Dynamic Floating Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-expo ${scrolled ? 'mt-2' : 'mt-6'}`}>
        <nav 
          className={`
            relative flex items-center justify-between 
            px-2 rounded-full border 
            transition-all duration-700 ease-expo
            ${theme.navContainer}
            ${isMenuOpen ? 'rounded-2xl ring-2 ring-green-500/20' : 'rounded-full'}
            ${isHome ? 'w-[92%] max-w-5xl' : 'w-[95%] max-w-5xl'}
          `}
        >
          {/* Logo Section - Flex Start */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group px-2 py-1 flex-shrink-0" 
            onClick={() => setIsMenuOpen(false)}
          >
            <div className={`p-2 rounded-full transition-colors duration-500 ease-expo ${theme.logoBg} group-hover:scale-110`}>
              <Activity className={`h-4 w-4 sm:h-5 sm:w-5 ${theme.logoIcon}`} />
            </div>
            <span className="font-bold text-base sm:text-lg tracking-tight hidden sm:block">MoveAI</span>
          </Link>
          
          {/* Desktop Navigation Links - Centered in remaining space */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-500 ease-expo whitespace-nowrap
                    ${isActive ? theme.linkActive : theme.linkInactive}
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions - Flex End */}
          <div className="hidden md:flex items-center pr-1 gap-3 flex-shrink-0">
             <div className={`
                relative flex items-center transition-all duration-500 ease-expo group
                ${searchActive ? 'w-60' : 'w-40'}
              `}>
                <Search className={`
                  absolute left-3.5 w-4 h-4 transition-colors duration-300 pointer-events-none
                  ${isHome ? 'text-white/50 group-hover:text-white/80' : 'text-gray-400 group-hover:text-gray-600'}
                `} />
                <input 
                  type="text" 
                  placeholder="Search"
                  onFocus={() => setSearchActive(true)}
                  onBlur={() => setSearchActive(false)}
                  className={`
                    w-full py-2 pl-10 pr-4 rounded-full text-xs sm:text-sm font-medium outline-none border backdrop-blur-md transition-all duration-500 ease-expo
                    ${isHome 
                      ? `bg-white/10 border-white/5 text-white placeholder-white/40 hover:bg-white/20 focus:bg-black/50 focus:border-white/20 focus:shadow-[0_0_20px_rgba(255,255,255,0.1)]` 
                      : `bg-gray-100/80 border-transparent text-gray-900 placeholder-gray-400 hover:bg-white focus:bg-white focus:border-gray-200 focus:shadow-lg`
                    }
                  `}
                />
             </div>
          </div>

          {/* Mobile Menu Toggle - Absolute Right on Mobile, but here flex works because desktop elements are hidden */}
          <div className="flex md:hidden pr-1 ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-colors ${isHome ? 'hover:bg-white/20' : 'hover:bg-black/5'}`}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

           {/* Mobile Dropdown Menu */}
           {isMenuOpen && (
            <div className={`
              absolute top-full left-0 right-0 mt-3 p-2 rounded-3xl border backdrop-blur-3xl animate-slideDown
              flex flex-col gap-1 overflow-hidden shadow-2xl origin-top
              ${theme.mobileMenu}
            `}>
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    block px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300
                    ${location.pathname === link.path 
                      ? 'bg-green-500 text-white' 
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

      {/* Footer (Hidden on Home for immersive effect) */}
      {!isHome && (
        <footer className="bg-white border-t border-gray-100 py-12 mt-12">
          <div className="max-w-7xl mx-auto px-6 text-center animate-fadeInUp">
            <div className="flex justify-center items-center gap-2 mb-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <Activity className="h-5 w-5 text-green-600" />
               <span className="font-bold text-gray-900">MoveAI</span>
            </div>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} MoveAI. Powered by Google Gemini.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;