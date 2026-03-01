import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Get in <span className="italic">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl font-light leading-relaxed">
              Have a question or ready to start your project? We'd love to hear from you. Reach out to our team and let's create something amazing together.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-light mb-8 tracking-tight">
                  Contact <span className="italic">Information</span>
                </h2>
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
                        href="mailto:hello@studiomkenya.com"
                        className="text-gray-600 hover:text-black transition-colors font-light"
                      >
                        hello@studiomkenya.com
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
                        href="tel:+254700000000"
                        className="text-gray-600 hover:text-black transition-colors font-light"
                      >
                        +254 700 000 000
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

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg border border-black/10">
                        <Clock className="text-black" size={24} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-light mb-2">Business Hours</h3>
                      <p className="text-gray-600 font-light">
                        Monday - Friday: 9:00 AM - 5:00 PM
                      </p>
                      <p className="text-gray-600 font-light">
                        Saturday - Sunday: By appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-black/10">
                <h3 className="text-xl font-light mb-4">Quick Start</h3>
                <p className="text-gray-600 font-light mb-4">
                  Not sure where to begin? Check out our booking page to schedule a consultation with our team.
                </p>
                <a
                  href="/booking"
                  className="inline-block px-8 py-3 bg-[#fae714] text-black hover:bg-white transition-all duration-300 uppercase tracking-widest text-sm font-light rounded"
                >
                  Book a Session
                </a>
              </div>
            </div>

            <div className="h-full min-h-[500px] rounded-lg overflow-hidden border border-black/10 shadow-lg">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8156854844736!2d36.77619!3d-1.28645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1c0c1c1c1c1d%3A0x1c1c1c1c1c1c1c1c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2skenyu!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Mkenya Location in Nairobi, Kenya"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Have a <span className="italic">Question</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Whether you're interested in our services, want to collaborate, or just want to say hello, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-black/10 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-gray-100 mb-4">
                <Mail className="text-black" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-light mb-3">Email Us</h3>
              <p className="text-gray-600 font-light mb-4">
                Send us an email and we'll get back to you as soon as possible.
              </p>
              <a
                href="mailto:hello@studiomkenya.com"
                className="text-black hover:text-gray-600 transition-colors font-light underline"
              >
                hello@studiomkenya.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg border border-black/10 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-gray-100 mb-4">
                <Phone className="text-black" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-light mb-3">Call Us</h3>
              <p className="text-gray-600 font-light mb-4">
                Reach out to our team directly for immediate assistance.
              </p>
              <a
                href="tel:+254700000000"
                className="text-black hover:text-gray-600 transition-colors font-light underline"
              >
                +254 700 000 000
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg border border-black/10 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-gray-100 mb-4">
                <MapPin className="text-black" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-light mb-3">Visit Us</h3>
              <p className="text-gray-600 font-light mb-4">
                Schedule an in-person meeting at our Nairobi location.
              </p>
              <a
                href="/booking"
                className="text-black hover:text-gray-600 transition-colors font-light underline"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
