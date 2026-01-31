import { Palette, Pen, Share2, Globe, Camera, Video, Headphones, Brush, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'logo-identity',
      icon: Palette,
      title: 'Logo & Identity',
      description: 'Unique brand identities',
      details: 'Crafting memorable logos and comprehensive brand systems that capture your essence and resonate with your audience.',
    },
    {
      id: 'graphic-design',
      icon: Pen,
      title: 'Graphic Design',
      description: 'Eye-catching visuals',
      details: 'Creating stunning visual communications from print to digital that capture attention and convey your message effectively.',
    },
    {
      id: 'social-media',
      icon: Share2,
      title: 'Social Media',
      description: 'Engaging content',
      details: 'Developing strategic social content that builds communities and drives meaningful engagement across platforms.',
    },
    {
      id: 'web-design',
      icon: Globe,
      title: 'Web Design',
      description: 'Digital experiences',
      details: 'Designing and developing responsive websites that blend aesthetics with functionality for seamless user experiences.',
    },
    {
      id: 'photography',
      icon: Camera,
      title: 'Photography',
      description: 'Stunning shots',
      details: 'Capturing powerful imagery for commercial, editorial, and artistic projects with technical precision and creative vision.',
    },
    {
      id: 'videography',
      icon: Video,
      title: 'Videography',
      description: 'Compelling stories',
      details: 'Producing cinematic narratives from concept to completion that engage audiences and elevate brands.',
    },
    {
      id: 'audio-design',
      icon: Headphones,
      title: 'Audio Design',
      description: 'Soundscapes',
      details: 'Crafting immersive audio experiences including sound design, mixing, and original compositions.',
    },
    {
      id: 'mural-art',
      icon: Brush,
      title: 'Mural Art',
      description: 'Street art & murals',
      details: 'Transforming spaces with large-scale artistic installations that make bold statements and inspire communities.',
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-black mb-3 sm:mb-4 tracking-tight">
            What We <span className="italic">Create</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            A full spectrum of creative services to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/service/${service.id}`}
              className="group relative bg-white p-6 sm:p-8 border border-black/10 hover:border-black/30 transition-all duration-500 hover:shadow-xl rounded-lg cursor-pointer"
            >
              <div className="mb-6">
                <div className="w-12 h-12 flex items-center justify-center border border-black/10 group-hover:border-black/30 transition-all duration-300 rounded mb-4">
                  <service.icon className="text-black" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-black mb-2">
                  {service.title}
                </h3>
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-light">
                  {service.description}
                </p>
              </div>

              <div className="flex items-start justify-between">
                <p className="text-sm text-gray-600 font-light leading-relaxed flex-1">
                  {service.details}
                </p>
                <ArrowRight size={18} className="text-gray-600 group-hover:text-black transition-colors flex-shrink-0 ml-3 mt-1 group-hover:translate-x-1 transition-transform" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-lg" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
