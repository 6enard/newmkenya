import { Mail, MapPin, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';

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
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-white/20 text-white/80 hover:border-[#fae714] hover:text-[#fae714] transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-white/20 text-white/80 hover:border-[#fae714] hover:text-[#fae714] transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-white/20 text-white/80 hover:border-[#fae714] hover:text-[#fae714] transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border border-white/20 text-white/80 hover:border-[#fae714] hover:text-[#fae714] transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Facebook"
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
