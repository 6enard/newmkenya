import { Calendar, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferred_date: string;
}

const BookingComponent = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferred_date: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Logo & Identity',
    'Graphic Design',
    'Social Media Content',
    'Web Design',
    'Photography',
    'Videography',
    'Audio Design',
    'Mural Art',
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    setTimeout(() => {
      console.log('Booking submission:', formData);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferred_date: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="min-h-screen text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[#10069f] via-[#0d0585] to-[#10069f] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0123b4] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fae714] rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 border border-white/20 rounded-full mb-6">
            <Calendar size={32} strokeWidth={1} className="text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-white mb-3 sm:mb-4 tracking-tight">
            Book a <span className="italic">Session</span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Schedule a consultation with our creative team
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-8 p-6 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-4 animate-fade-in">
            <CheckCircle2 size={24} className="text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-light mb-1">Booking Request Received</h3>
              <p className="text-sm text-white/70 font-light">
                Thank you for your booking request. We'll get back to you within 24 hours to confirm your session.
              </p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-8 p-6 bg-red-500/10 border border-red-500/30 rounded-lg animate-fade-in">
            <p className="text-sm text-red-400 font-light">
              Something went wrong. Please try again or contact us directly at hello@studiomkenya.com
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 font-light">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 sm:py-4 outline-none transition-colors font-light text-base min-h-[44px]"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 font-light">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 sm:py-4 outline-none transition-colors font-light text-base min-h-[44px]"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <label htmlFor="phone" className="block text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 font-light">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 sm:py-4 outline-none transition-colors font-light text-base min-h-[44px]"
                placeholder="+254 700 000 000"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 font-light">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 sm:py-4 outline-none transition-colors font-light text-base min-h-[44px] cursor-pointer"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="preferred_date" className="block text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 font-light">
              Preferred Date
            </label>
            <input
              type="date"
              id="preferred_date"
              name="preferred_date"
              value={formData.preferred_date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 sm:py-4 outline-none transition-colors font-light text-base min-h-[44px] cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 font-light">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 sm:py-4 outline-none transition-colors resize-none font-light text-base min-h-[100px]"
              placeholder="Tell us about your project, goals, and any specific requirements..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 sm:py-5 bg-white text-black hover:bg-[#fae714] hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-light rounded min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Book Session'}
          </button>
        </form>

        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10 text-center">
          <p className="text-sm text-white/60 font-light mb-4">
            Need immediate assistance?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href="mailto:hello@studiomkenya.com"
              className="text-white/80 hover:text-[#fae714] transition-colors font-light min-h-[44px] flex items-center"
            >
              hello@studiomkenya.com
            </a>
            <a
              href="tel:+254700000000"
              className="text-white/80 hover:text-[#fae714] transition-colors font-light min-h-[44px] flex items-center"
            >
              +254 700 000 000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingComponent;
