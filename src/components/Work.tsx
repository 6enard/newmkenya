import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Pen, Share2, Globe, Camera, Video, Headphones, Brush } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface Service {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  details: string;
}

const Work = () => {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardsRef = useRef<Map<string, HTMLElement>>(new Map());

  const portfolioItems: PortfolioItem[] = [
    {
      id: 'project-1',
      title: 'Urban Landscape',
      description: 'Cinematic urban storytelling capturing the essence of city life',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      category: 'Commercial'
    },
    {
      id: 'project-2',
      title: 'Motion Design',
      description: 'Dynamic visual effects that bring brands to life',
      image: 'https://images.pexels.com/photos/3218654/pexels-photo-3218654.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      category: 'Digital'
    },
    {
      id: 'project-3',
      title: 'Brand Evolution',
      description: 'Identity transformation through strategic motion',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      category: 'Branding'
    },
  ];

  const services: Service[] = [
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

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardsRef.current.forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleCardRef = (id: string, element: HTMLElement | null) => {
    if (element) {
      cardsRef.current.set(id, element);
      observerRef.current?.observe(element);
    }
  };

  return (
    <section id="work" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16 sm:mb-20 text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-3 sm:mb-4">
            Our <span className="italic">Work</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A full spectrum of creative services and projects showcasing our excellence
          </p>
        </div>

        <div className="mb-24">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mb-12 text-center">
            What We <span className="italic">Create</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="group relative bg-white p-6 sm:p-8 border border-black/5 hover:border-[#1498d4] transition-all duration-300 rounded cursor-pointer block"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-black/5 group-hover:border-[#1498d4] transition-all duration-300 rounded mb-4">
                    <service.icon className="text-black group-hover:text-[#1498d4] transition-colors" size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-black mb-2 group-hover:text-[#1498d4] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-light">
                    {service.description}
                  </p>
                </div>

                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {service.details}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-16 sm:mt-24 text-center">
            <Link
              to="/services"
              className="inline-block px-8 sm:px-12 py-4 bg-[#fae714] text-black hover:bg-white transition-all duration-300 uppercase tracking-widest text-sm font-light rounded min-h-[44px]"
            >
              See All Services
            </Link>
          </div>
        </div>

        <div className="mb-16 sm:mb-20 text-center px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mb-3 sm:mb-4">
            Featured <span className="italic">Projects</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Selected projects showcasing our creative excellence
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {portfolioItems.map((item, index) => (
            <Link
              key={item.id}
              to={`/project/${item.id}`}
              ref={(el) => handleCardRef(item.id, el)}
              id={item.id}
              className={`group transition-all duration-1000 ease-out transform block cursor-pointer ${
                visibleCards.has(item.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div
                className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:flex-1 lg:min-w-0">
                  <div
                    className="relative overflow-hidden rounded-lg shadow-2xl transition-transform duration-500 hover:shadow-3xl"
                    style={{
                      transform: visibleCards.has(item.id) && window.innerWidth >= 1024
                        ? `perspective(1200px) rotateY(${
                            index % 2 === 0 ? -5 : 5
                          }deg) rotateX(2deg)`
                        : 'perspective(1200px) rotateY(0deg) rotateX(0deg)',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div className="w-full lg:flex-1 lg:min-w-0 space-y-3 sm:space-y-4 px-2">
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm font-light tracking-widest text-gray-500 uppercase">
                      {item.category}
                    </p>
                    <div className="flex items-start gap-3 group-hover:gap-4 transition-all">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-black">
                        {item.title}
                      </h3>
                      <ArrowRight size={24} className="text-gray-600 group-hover:text-black transition-colors flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 sm:mt-24 text-center">
          <Link
            to="/projects"
            className="inline-block px-8 sm:px-12 py-4 bg-[#fae714] text-black hover:bg-white transition-all duration-300 uppercase tracking-widest text-sm font-light rounded min-h-[44px]"
          >
            See More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
