import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@studiomkenya.com',
      href: 'mailto:hello@studiomkenya.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 700 000 000',
      href: 'tel:+254700000000',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="min-h-screen bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-black mb-3 sm:mb-4 tracking-tight">
            Let's Create <span className="italic">Together</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div className="space-y-8 sm:space-y-12">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-start space-x-4 sm:space-x-6 group min-h-[44px]"
              >
                <div className="p-3 sm:p-4 border border-black/10 group-hover:border-black/30 transition-all duration-300 rounded">
                  <item.icon size={20} strokeWidth={1} className="text-black sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-1 sm:mb-2 font-light">
                    {item.label}
                  </p>
                  <p className="text-lg sm:text-xl font-light text-black group-hover:opacity-60 transition-opacity break-words">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="pt-6 sm:pt-8 border-t border-black/10">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-4 sm:mb-6 font-light">
                Follow Us
              </p>
              <div className="flex space-x-4 sm:space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 border border-black/10 hover:border-black/30 hover:bg-black/5 transition-all duration-300 rounded min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <social.icon size={20} strokeWidth={1} className="text-black" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black p-6 sm:p-8 lg:p-12 text-white rounded-lg">
            <form className="space-y-6 sm:space-y-8">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 font-light">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 sm:py-4 outline-none transition-colors font-light text-base min-h-[44px]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 font-light">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 sm:py-4 outline-none transition-colors font-light text-base min-h-[44px]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 font-light">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 sm:py-4 outline-none transition-colors resize-none font-light text-base min-h-[100px]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 sm:py-5 border border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-light rounded min-h-[44px]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-black/10 text-center">
          <p className="text-sm text-gray-500 font-light">
            &copy; {new Date().getFullYear()} StudioMkenya. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
