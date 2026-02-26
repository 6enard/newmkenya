import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const Projects = () => {
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
    <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-20 text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-3 sm:mb-4">
            Featured <span className="italic">Work</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Selected projects showcasing our creative excellence
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24 mb-16 sm:mb-20">
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
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-black group-hover:text-[#1498d4] transition-colors">
                        {item.title}
                      </h3>
                      <ArrowRight size={24} className="text-gray-600 group-hover:text-[#1498d4] transition-colors flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
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

        <div className="mb-12 sm:mb-16 text-center px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mb-3 sm:mb-4">
            Visit <span className="italic">Us</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Find us at our studio location in Kenya
          </p>
        </div>

        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0406837957685!2d36.978520174044625!3d-1.1312444354743905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1137995dd891%3A0x41d708cee52d4b56!2smkenya%20studio!5e0!3m2!1sen!2ske!4v1769816659013!5m2!1sen!2ske"
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
    </section>
  );
};

export default Projects;
