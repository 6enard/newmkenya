import { X, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const bannerDismissed = sessionStorage.getItem('bannerDismissed');
    if (!bannerDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('bannerDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 text-white py-3 px-4 sm:px-6 animate-slide-down" style={{ backgroundColor: '#0123b4' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex justify-center items-center gap-4 sm:gap-8">
          <a
            href="mailto:bob@mkenya.me"
            className="flex items-center gap-2 text-sm sm:text-base font-light tracking-wide hover:text-[#1498d4] transition-colors min-h-[44px]"
          >
            <Mail size={16} strokeWidth={1.5} />
            <span className="hidden sm:inline">bob@mkenya.me</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm sm:text-base font-light tracking-wide hover:text-[#1498d4] transition-colors min-h-[44px]"
          >
            <MapPin size={16} strokeWidth={1.5} />
            <span>Nairobi, Kenya</span>
          </a>
        </div>
        <button
          onClick={handleClose}
          className="ml-4 p-2 hover:bg-white/10 hover:text-[#fae714] transition-colors rounded min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Close banner"
        >
          <X size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
