import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasBanner, setHasBanner] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkBanner = () => {
      const bannerDismissed = sessionStorage.getItem('bannerDismissed');
      setHasBanner(!bannerDismissed);
    };

    checkBanner();
    window.addEventListener('storage', checkBanner);

    const interval = setInterval(checkBanner, 100);

    return () => {
      window.removeEventListener('storage', checkBanner);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setActiveNavItem(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        const menuButton = document.querySelector('[aria-label="Toggle menu"]');
        if (menuButton && !menuButton.contains(e.target as Node)) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    setActiveNavItem(path);
  };

  const navItems = [
    { label: 'Home', path: '/', sectionId: 'home' },
    { label: 'About', path: '/about', sectionId: 'about' },
    { label: 'Services', path: '/services', sectionId: 'services' },
    { label: 'Projects', path: '/projects', sectionId: 'projects' },
    { label: 'Booking', path: '/booking', sectionId: 'booking' },
  ];

  const isLinkActive = (path: string) => {
    if (path === '/') {
      return activeNavItem === '/';
    }
    return activeNavItem.startsWith(path);
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
      } ${hasBanner ? 'top-[52px]' : 'top-0'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            to="/"
            className="transition-all duration-300 hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white min-h-[44px] flex items-center"
            aria-label="Studio Mkenya - Go to home page"
          >
            <img
              src="/studio-mkenya-LOGO.png"
              alt="Studio Mkenya"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm font-light tracking-wide uppercase px-3 lg:px-4 py-2 min-h-[44px] flex items-center transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded ${
                  isLinkActive(item.path)
                    ? 'text-[#fae714] border-b-2 border-[#fae714]'
                    : 'text-white/80 hover:text-[#fae714] border-b-2 border-transparent'
                }`}
                aria-current={isLinkActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-white hover:text-[#fae714] transition-all duration-300 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`md:hidden bg-black border-t border-white/10 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="region"
        aria-label="Mobile navigation"
      >
        <div className="px-4 sm:px-6 py-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`block text-base font-light tracking-wide uppercase min-h-[44px] flex items-center px-4 py-2 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
                isLinkActive(item.path)
                  ? 'text-[#fae714] bg-white/10'
                  : 'text-white/80 hover:text-[#fae714] hover:bg-white/5'
              }`}
              aria-current={isLinkActive(item.path) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
