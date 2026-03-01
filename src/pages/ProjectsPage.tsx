import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
  year: string;
  scope: string[];
}

const ProjectsPage = () => {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardsRef = useRef<Map<string, HTMLElement>>(new Map());

  const portfolioItems: PortfolioItem[] = [
    {
      id: 'project-1',
      title: 'Urban Landscape Campaign',
      description: 'Cinematic urban storytelling capturing the essence of city life',
      fullDescription: 'A comprehensive brand campaign showcasing urban culture and modern aesthetics through stunning visual narratives.',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      category: 'Commercial',
      year: '2024',
      scope: ['Cinematography', 'Color Grading', 'Motion Design', 'Brand Integration'],
    },
    {
      id: 'project-2',
      title: 'Motion Design Series',
      description: 'Dynamic visual effects that bring brands to life',
      fullDescription: 'A series of motion graphics and animation pieces designed to elevate brand presence across digital platforms.',
      image: 'https://images.pexels.com/photos/3218654/pexels-photo-3218654.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      category: 'Digital',
      year: '2024',
      scope: ['Animation', 'Graphics Design', 'VFX', 'Post-Production'],
    },
    {
      id: 'project-3',
      title: 'Brand Identity Evolution',
      description: 'Identity transformation through strategic motion',
      fullDescription: 'A complete brand identity refresh including logo redesign, brand guidelines, and a motion design system.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      category: 'Branding',
      year: '2023',
      scope: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Motion Guidelines'],
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
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Our <span className="italic">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl font-light leading-relaxed">
              A curated collection of our most compelling work, showcasing expertise in visual storytelling, creative innovation, and brand transformation.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
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

                  <div className="w-full lg:flex-1 lg:min-w-0 space-y-4 sm:space-y-6 px-2">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <p className="text-xs sm:text-sm font-light tracking-widest text-gray-500 uppercase">
                          {item.category}
                        </p>
                        <p className="text-xs sm:text-sm font-light tracking-widest text-gray-500 uppercase">
                          {item.year}
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group-hover:gap-4 transition-all">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-black">
                          {item.title}
                        </h3>
                        <ArrowRight size={24} className="text-gray-600 group-hover:text-black transition-colors flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      {item.fullDescription}
                    </p>
                    <div className="pt-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-light">Project Scope</p>
                      <div className="flex flex-wrap gap-2">
                        {item.scope.map((scope, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded font-light">
                            {scope}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
            More <span className="italic">Projects</span> Coming Soon
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl leading-relaxed">
            We're constantly working on new and exciting projects. Follow our social media for the latest updates and behind-the-scenes content.
          </p>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mb-8">
            Visit <span className="italic">Us</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Located in the heart of Nairobi, our studio is open for visits and consultations. Stop by to see our work and discuss your project.
          </p>
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127644.27071753207!2d36.8067255086898!3d-1.2403462476148008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1137995dd891%3A0x41d708cee52d4b56!2sstudio%20mkenya!5e0!3m2!1sen!2ske!4v1772354233802!5m2!1sen!2ske"
              width="600"
              height="450"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg max-w-full"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 text-white text-center bg-gradient-to-br from-[#10069f] via-[#0d0585] to-[#10069f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#0123b4] rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fae714] rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
            Have a <span className="italic">Project</span> in Mind?
          </h2>
          <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
            Let's create something extraordinary together. Get in touch to discuss your vision.
          </p>
          <Link
            to="/booking"
            className="inline-block px-8 sm:px-12 py-4 bg-[#fae714] text-black hover:bg-white transition-all duration-300 uppercase tracking-widest text-sm font-light rounded"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
