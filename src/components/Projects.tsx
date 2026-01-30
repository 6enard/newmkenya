import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface VideoProject {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
}

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [touchedProject, setTouchedProject] = useState<number | null>(null);
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

  const videoProjects: VideoProject[] = [
    {
      id: 1,
      title: 'Heritage',
      category: 'Cultural',
      thumbnail: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Innovation Lab',
      category: 'Corporate',
      thumbnail: 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Urban Stories',
      category: 'Documentary',
      thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Rhythm & Motion',
      category: 'Music Video',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Dreamscapes',
      category: 'Experimental',
      thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'Brand Stories',
      category: 'Commercial',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
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

  const handleTouch = (projectId: number) => {
    setTouchedProject(touchedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-20 text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-3 sm:mb-4">
            Our <span className="italic">Work</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A curated collection showcasing our expertise in visual storytelling and creative excellence
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24 mb-16 sm:mb-20">
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
                    className="relative overflow-hidden rounded-lg shadow-2xl transition-transform duration-500 hover:shadow-3xl group"
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
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 sm:mb-16 text-center px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mb-3 sm:mb-4">
            Video <span className="italic">Showcase</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Compelling visual narratives that engage and inspire
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {videoProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/5] overflow-hidden bg-black cursor-pointer rounded-lg"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleTouch(project.id)}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              <div
                className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                  hoveredProject === project.id || touchedProject === project.id
                    ? 'opacity-60'
                    : 'opacity-20'
                }`}
              />

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-500 ${
                  hoveredProject === project.id || touchedProject === project.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <Play
                  size={40}
                  className="text-white mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1}
                />
                <h3 className="text-xl sm:text-2xl font-light text-white mb-2 text-center px-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-white/80 font-light">
                  {project.category}
                </p>
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 transition-all duration-500 ${
                  hoveredProject === project.id || touchedProject === project.id
                    ? 'opacity-0 translate-y-4'
                    : 'opacity-100 translate-y-0'
                }`}
              >
                <p className="text-xs uppercase tracking-widest text-white/60 font-light mb-1 sm:mb-2">
                  {project.category}
                </p>
                <h3 className="text-lg sm:text-xl font-light text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
