import { useEffect, useRef, useState } from 'react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const PortfolioCarousel = () => {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardsRef = useRef<Map<string, HTMLElement>>(new Map());

  const portfolioItems: PortfolioItem[] = [
    {
      id: 'project-1',
      title: 'Urban Landscape',
      description: 'Cinematic urban storytelling',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      category: 'Commercial'
    },
    {
      id: 'project-2',
      title: 'Motion Design',
      description: 'Dynamic visual effects',
      image: 'https://images.pexels.com/photos/3218654/pexels-photo-3218654.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      category: 'Digital'
    },
    {
      id: 'project-3',
      title: 'Brand Evolution',
      description: 'Identity through motion',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      category: 'Branding'
    },
    {
      id: 'project-4',
      title: 'Nature Documentary',
      description: 'Immersive visual narratives',
      image: 'https://images.pexels.com/photos/1226614/pexels-photo-1226614.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      category: 'Documentary'
    },
    {
      id: 'project-5',
      title: 'Tech Innovation',
      description: 'Future-forward storytelling',
      image: 'https://images.pexels.com/photos/1440262/pexels-photo-1440262.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      category: 'Technology'
    },
    {
      id: 'project-6',
      title: 'Cultural Impact',
      description: 'Stories that resonate',
      image: 'https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      category: 'Culture'
    }
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
        <div className="mb-12 sm:mb-16 text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-3 sm:mb-4">
            Our Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A curated collection of projects showcasing our expertise in
            cinematic storytelling and visual excellence
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => handleCardRef(item.id, el)}
              id={item.id}
              className={`transition-all duration-1000 ease-out transform ${
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
                    className={`relative overflow-hidden rounded-lg shadow-2xl transition-transform duration-500 hover:shadow-3xl group`}
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
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-black">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  <button
                    className="inline-flex items-center gap-2 text-black font-light border-b-2 border-black pb-1 hover:border-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black min-h-[44px]"
                    aria-label={`View ${item.title} project`}
                  >
                    Explore Project
                    <span className="transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
