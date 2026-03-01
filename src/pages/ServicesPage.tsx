import { Palette, Pen, Share2, Globe, Camera, Video, Headphones, Brush, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      id: 'logo-identity',
      icon: Palette,
      title: 'Logo & Identity',
      shortDesc: 'Unique brand identities',
      fullDescription: 'We create distinctive logos and comprehensive brand identity systems that capture your essence. Our process includes research, concept development, and refinement to ensure your brand stands out.',
      includes: ['Logo Design', 'Brand Guidelines', 'Color Palette Development', 'Typography Selection', 'Visual Consistency Framework'],
    },
    {
      id: 'graphic-design',
      icon: Pen,
      title: 'Graphic Design',
      shortDesc: 'Eye-catching visuals',
      fullDescription: 'From posters to packaging, we design stunning visual communications that grab attention and deliver your message effectively across both print and digital mediums.',
      includes: ['Print Design', 'Digital Graphics', 'Packaging Design', 'Poster & Flyer Design', 'Infographics'],
    },
    {
      id: 'social-media',
      icon: Share2,
      title: 'Social Media',
      shortDesc: 'Engaging content',
      fullDescription: 'We develop strategic social media content that builds engaged communities and drives meaningful interactions across all major platforms.',
      includes: ['Content Strategy', 'Social Posts', 'Stories & Reels', 'Community Management', 'Campaign Planning'],
    },
    {
      id: 'web-design',
      icon: Globe,
      title: 'Web Design',
      shortDesc: 'Digital experiences',
      fullDescription: 'We design and develop responsive websites that blend stunning aesthetics with seamless functionality for an optimal user experience.',
      includes: ['UI/UX Design', 'Web Development', 'Responsive Design', 'Mobile Optimization', 'CMS Integration'],
    },
    {
      id: 'photography',
      icon: Camera,
      title: 'Photography',
      shortDesc: 'Stunning shots',
      fullDescription: 'From commercial product shots to editorial photography, we capture powerful imagery with technical precision and creative vision.',
      includes: ['Product Photography', 'Commercial Shoots', 'Portrait Sessions', 'Event Coverage', 'Architectural Photography'],
    },
    {
      id: 'videography',
      icon: Video,
      title: 'Videography',
      shortDesc: 'Compelling stories',
      fullDescription: 'We produce cinematic narratives from concept to completion, creating engaging video content that elevates brands and tells powerful stories.',
      includes: ['Commercial Production', 'Music Videos', 'Brand Storytelling', 'Documentary Style', 'Motion Graphics'],
    },
    {
      id: 'audio-design',
      icon: Headphones,
      title: 'Audio Design',
      shortDesc: 'Soundscapes',
      fullDescription: 'We craft immersive audio experiences including sound design, mixing, and original compositions that enhance your visual content.',
      includes: ['Sound Design', 'Audio Mixing', 'Original Compositions', 'Voice Over Production', 'Podcast Production'],
    },
    {
      id: 'mural-art',
      icon: Brush,
      title: 'Mural Art',
      shortDesc: 'Street art & murals',
      fullDescription: 'We transform spaces with large-scale artistic installations that make bold visual statements and inspire communities.',
      includes: ['Mural Design', 'Wall Art Installation', 'Community Art Projects', 'Concept Development', 'Site Assessment'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Our <span className="italic">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl font-light leading-relaxed">
              A comprehensive suite of creative services designed to elevate your brand and bring your vision to life through expert design, storytelling, and innovation.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="group p-8 bg-white border border-black/10 hover:border-black/30 transition-all duration-300 hover:shadow-lg rounded-lg"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-black/10 group-hover:border-black/30 transition-all duration-300 rounded mb-4">
                    <service.icon className="text-black" size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-light mb-2">{service.title}</h3>
                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-light">
                    {service.shortDesc}
                  </p>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed line-clamp-3">
                  {service.fullDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 text-white bg-gradient-to-br from-[#10069f] via-[#0d0585] to-[#10069f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#0123b4] rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fae714] rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-12 sm:mb-16 tracking-tight">
            Our <span className="italic">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <div className="text-4xl font-light mb-4 text-white/40">01</div>
                <h3 className="text-2xl font-light mb-3">Discovery & Strategy</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  We begin by understanding your goals, audience, and brand values. Through detailed consultation and research, we develop a strategic foundation for all creative work.
                </p>
              </div>
              <div>
                <div className="text-4xl font-light mb-4 text-white/40">02</div>
                <h3 className="text-2xl font-light mb-3">Concept & Creation</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Our team develops creative concepts and executes them with precision. We iterate and refine until we achieve excellence.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <div className="text-4xl font-light mb-4 text-white/40">03</div>
                <h3 className="text-2xl font-light mb-3">Review & Refinement</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Your feedback is crucial. We collaborate closely to refine work, ensuring it meets your vision and exceeds expectations.
                </p>
              </div>
              <div>
                <div className="text-4xl font-light mb-4 text-white/40">04</div>
                <h3 className="text-2xl font-light mb-3">Delivery & Support</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  We deliver final files in all required formats and provide ongoing support to ensure smooth implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-12 sm:mb-16 tracking-tight">
            Why Choose Our <span className="italic">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Multidisciplinary expertise across all creative fields',
              'Collaborative approach that prioritizes your vision',
              'Attention to detail in every deliverable',
              'On-time delivery without compromising quality',
              'Competitive pricing for professional-grade work',
              'Long-term partnership mindset, not just one-off projects',
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <Check className="text-black flex-shrink-0 mt-1" size={20} strokeWidth={1.5} />
                <p className="text-gray-700 font-light leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl" style={{ backgroundColor: '#fae714' }}></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl" style={{ backgroundColor: '#0123b4' }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
            Ready to <span className="italic">Start</span>?
          </h2>
          <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
            Let's discuss your project and find the perfect creative solution for your needs.
          </p>
          <Link
            to="/booking"
            className="inline-block px-8 sm:px-12 py-4 bg-[#fae714] text-black hover:bg-white transition-all duration-300 uppercase tracking-widest text-sm font-light rounded"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
