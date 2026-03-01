import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasBanner, setHasBanner] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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

      const sections = ['home', 'about', 'work', 'studio', 'booking', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll();
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

  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offset = 80;
          const sectionTop = section.offsetTop - offset;
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 80;
        const sectionTop = section.offsetTop - offset;
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      }
    }
  };

  const navItems = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Work', sectionId: 'work' },
    { label: 'Studio', sectionId: 'studio' }, 
    { label: 'Booking', sectionId: 'booking' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'bg-transparent'
      } ${hasBanner ? 'top-[52px]' : 'top-0'}`}
      style={{
        background: isScrolled
          ? 'linear-gradient(90deg, #10069f 0%, #0123b4 100%)'
          : 'transparent'
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#home"
            onClick={(e) => handleNavClick('home', e)}
            className="transition-all duration-300 hover:opacity-70 min-h-[44px] flex items-center"
            aria-label="Studio Mkenya - Go to home page"
          >
            <img
              src="/studio-mkenya-LOGO.png"
              alt="Studio Mkenya"
              className="h-8 sm:h-10 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.sectionId}`}
                onClick={(e) => handleNavClick(item.sectionId, e)}
                className={`text-sm font-light tracking-wide uppercase px-3 lg:px-4 py-2 min-h-[44px] flex items-center transition-all duration-300 relative rounded ${
                  activeSection === item.sectionId
                    ? 'text-[#fae714] border-b-2 border-[#fae714]'
                    : 'text-white/80 hover:text-[#fae714] border-b-2 border-transparent'
                }`}
                aria-current={activeSection === item.sectionId ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://shopmkenya.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light tracking-wide uppercase px-4 lg:px-5 py-2 min-h-[44px] flex items-center transition-all duration-300 rounded bg-[#fae714] text-black hover:bg-white hover:shadow-lg ml-2"
            >
              Shop
            </a>
          </div>

          <button
            className="md:hidden text-white hover:text-[#fae714] transition-all duration-300 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/10 rounded"
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
            <a
              key={item.label}
              href={`#${item.sectionId}`}
              onClick={(e) => handleNavClick(item.sectionId, e)}
              className={`block text-base font-light tracking-wide uppercase min-h-[44px] flex items-center px-4 py-2 rounded transition-all duration-300 ${
                activeSection === item.sectionId
                  ? 'text-[#fae714] bg-white/10'
                  : 'text-white/80 hover:text-[#fae714] hover:bg-white/5'
              }`}
              aria-current={activeSection === item.sectionId ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://shopmkenya.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-base font-light tracking-wide uppercase min-h-[44px] flex items-center justify-center px-4 py-2 rounded transition-all duration-300 bg-[#fae714] text-black hover:bg-white mt-4"
          >
            Shop
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
