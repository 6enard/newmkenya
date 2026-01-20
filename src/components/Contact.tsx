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
    <section id="contact" className="min-h-screen bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-black mb-4 tracking-tight">
            Let's Create <span className="italic">Together</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-start space-x-6 group"
              >
                <div className="p-4 border border-black/10 group-hover:border-black/30 transition-all duration-300">
                  <item.icon size={24} strokeWidth={1} className="text-black" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-2 font-light">
                    {item.label}
                  </p>
                  <p className="text-xl font-light text-black group-hover:opacity-60 transition-opacity">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="pt-8 border-t border-black/10">
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-6 font-light">
                Follow Us
              </p>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 border border-black/10 hover:border-black/30 hover:bg-black/5 transition-all duration-300"
                  >
                    <social.icon size={20} strokeWidth={1} className="text-black" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black p-12 text-white">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-3 font-light">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 outline-none transition-colors font-light"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-3 font-light">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 outline-none transition-colors font-light"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-3 font-light">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 outline-none transition-colors resize-none font-light"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-light"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-black/10 text-center">
          <p className="text-sm text-gray-500 font-light">
            &copy; {new Date().getFullYear()} StudioMkenya. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
