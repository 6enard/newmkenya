import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasBanner, setHasBanner] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navItems = ['Home', 'About', 'Services', 'Projects', 'Booking'];

  return (
    <nav
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-md' : 'bg-transparent'
      } ${hasBanner ? 'top-[52px]' : 'top-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#home"
            className="text-xl sm:text-2xl font-light italic tracking-tight text-white transition-opacity duration-300 hover:opacity-80 min-h-[44px] flex items-center"
          >
            StudioMkenya
          </a>

          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-light tracking-wide uppercase text-white transition-all duration-300 hover:opacity-60 min-h-[44px] flex items-center px-2"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white transition-colors duration-300 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:opacity-80"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-black border-t border-white/10 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 py-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-base font-light tracking-wide uppercase text-white hover:bg-white/10 transition-colors min-h-[44px] flex items-center px-4 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
