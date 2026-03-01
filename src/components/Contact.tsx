import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-black mb-3 sm:mb-4 tracking-tight">
            Get in <span className="italic">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Have a question or ready to start your project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg border border-black/10">
                  <Mail className="text-black" size={24} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-light mb-2">Email</h3>
                <a
                  href="mailto:bob@mkenya.me"
                  className="text-gray-600 hover:text-black transition-colors font-light"
                >
                  bob@mkenya.me
                </a>
                <p className="text-sm text-gray-500 font-light mt-1">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg border border-black/10">
                  <Phone className="text-black" size={24} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-light mb-2">Phone</h3>
                <a
                  href="tel:+254780012372"
                  className="text-gray-600 hover:text-black transition-colors font-light"
                >
                  +254 780 012 372
                </a>
                <p className="text-sm text-gray-500 font-light mt-1">
                  Monday - Friday, 9AM - 5PM EAT
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg border border-black/10">
                  <MapPin className="text-black" size={24} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-light mb-2">Location</h3>
                <p className="text-gray-600 font-light">
                  Nairobi, Kenya
                </p>
                <p className="text-sm text-gray-500 font-light mt-1">
                  Available for in-person and remote consultations
                </p>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[400px] rounded-lg overflow-hidden border border-black/10 shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127644.27071753207!2d36.8067255086898!3d-1.2403462476148008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1137995dd891%3A0x41d708cee52d4b56!2sstudio%20mkenya!5e0!3m2!1sen!2ske!4v1772354233802!5m2!1sen!2ske"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Mkenya Location in Nairobi, Kenya"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-50 p-8 rounded-lg">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-white mb-4 border border-black/10">
              <Mail className="text-black" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-light mb-3">Email Us</h3>
            <p className="text-gray-600 font-light mb-4">
              Send us an email and we'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:bob@mkenya.me"
              className="text-black hover:text-gray-600 transition-colors font-light underline"
            >
              bob@mkenya.me
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-white mb-4 border border-black/10">
              <Phone className="text-black" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-light mb-3">Call Us</h3>
            <p className="text-gray-600 font-light mb-4">
              Reach out to our team directly for immediate assistance.
            </p>
            <a
              href="tel:+254780012372"
              className="text-black hover:text-gray-600 transition-colors font-light underline"
            >
              +254 780 012 372
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-white mb-4 border border-black/10">
              <MapPin className="text-black" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-light mb-3">Visit Us</h3>
            <p className="text-gray-600 font-light mb-4">
              Schedule an in-person meeting at our Nairobi location.
            </p>
            <a
              href="#booking"
              className="text-black hover:text-gray-600 transition-colors font-light underline"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
