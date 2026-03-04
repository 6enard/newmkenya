import { Mail, Phone, MapPin } from 'lucide-react';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    setTimeout(() => {
      console.log('Form submission:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        company: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
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

    <section
      id="getintouch"
      className="py-16 sm:py-24 text-white"
      style={{
        background: 'linear-gradient(90deg, #10069f 0%, #0123b4 100%)'
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light mb-3 sm:mb-4 tracking-tight">
            Get in <span className="italic">touch.</span> Let's talk about your project and goal
          </h2>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-8 p-6 bg-white/20 border border-white/40 rounded-lg">
            <p className="text-white font-light">
              Thank you for reaching out! We'll get back to you within 24 hours.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-3 font-light text-white/80">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/30 focus:border-white text-white placeholder-white/50 py-3 px-4 outline-none transition-colors font-light text-base min-h-[44px] rounded"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm uppercase tracking-widest mb-3 font-light text-white/80">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/30 focus:border-white text-white placeholder-white/50 py-3 px-4 outline-none transition-colors font-light text-base min-h-[44px] rounded"
                placeholder="+254 780 012 372"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm uppercase tracking-widest mb-3 font-light text-white/80">
              Company Name / Organisation
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-white/30 focus:border-white text-white placeholder-white/50 py-3 px-4 outline-none transition-colors font-light text-base min-h-[44px] rounded"
              placeholder="Your company or organisation"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-3 font-light text-white/80">
              What can we help you with?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-white/10 border border-white/30 focus:border-white text-white placeholder-white/50 py-3 px-4 outline-none transition-colors resize-none font-light text-base min-h-[120px] rounded"
              placeholder="Tell us about your project, goals, and what you're looking for..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-white text-blue-700 hover:bg-white/90 transition-all duration-300 uppercase tracking-widest text-sm font-light rounded min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default Contact;
