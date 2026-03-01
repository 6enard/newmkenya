import { Mail, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const TikTokIcon = (props: any) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.75 2.9 2.9 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.07A6.85 6.85 0 0 0 5 20.1a6.85 6.85 0 0 0 11.74-4.35V10.5a8.08 8.08 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.54-.05z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative text-white py-16 sm:py-20"
      style={{
        background: 'linear-gradient(90deg, #10069f 0%, #0123b4 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 mb-12">
          <div className="flex flex-col items-start">
            <img
              src="/studio-mkenya-LOGO.png"
              alt="Studio Mkenya"
              className="h-10 sm:h-12 w-auto mb-6"
            />
            <p className="text-white/70 font-light text-sm leading-relaxed max-w-xs">
              Transforming creative visions into digital experiences through innovative design and strategic thinking.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-light uppercase tracking-widest mb-6 text-[#fae714]">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:bob@mkenya.me"
                className="flex items-center gap-3 text-white/80 hover:text-[#fae714] transition-colors min-h-[44px]"
              >
                <Mail size={18} strokeWidth={1.5} />
                <span className="font-light text-sm">bob@mkenya.me</span>
              </a>
              <div className="flex items-center gap-3 text-white/80 min-h-[44px]">
                <MapPin size={18} strokeWidth={1.5} />
                <span className="font-light text-sm">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-light uppercase tracking-widest mb-6 text-[#fae714]">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/mk3ny4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-white/20 text-white/80 hover:border-[#fae714] hover:text-[#fae714] transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="LinkedIn - @mk3ny4"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://instagram.com/mk3ny4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-white/20 text-white/80 hover:border-[#fae714] hover:text-[#fae714] transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Instagram - @mk3ny4"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://tiktok.com/@mk3ny4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-white/20 text-white/80 hover:border-[#fae714] hover:text-[#fae714] transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="TikTok - @mk3ny4"
              >
                <TikTokIcon style={{ width: '18px', height: '18px' }} />
              </a>
              <a
                href="https://facebook.com/mk3ny4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-white/20 text-white/80 hover:border-[#fae714] hover:text-[#fae714] transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Facebook - @mk3ny4"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 font-light text-sm">
            © {currentYear} Studio Mkenya. All rights reserved.
          </p>
          <div className="flex gap-6 sm:gap-8">
            <a
              href="#"
              className="text-white/60 hover:text-[#fae714] transition-colors font-light text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[#fae714] transition-colors font-light text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
