import { useState } from 'react';
import { Play } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}

const VideoShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Brand Evolution',
      category: 'Commercial',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165',
    },
    {
      id: 2,
      title: 'Urban Stories',
      category: 'Documentary',
      thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165',
    },
    {
      id: 3,
      title: 'Rhythm & Motion',
      category: 'Music Video',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165',
    },
    {
      id: 4,
      title: 'Heritage',
      category: 'Cultural',
      thumbnail: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165',
    },
    {
      id: 5,
      title: 'Innovation Lab',
      category: 'Corporate',
      thumbnail: 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165',
    },
    {
      id: 6,
      title: 'Dreamscapes',
      category: 'Experimental',
      thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165',
    },
  ];

  return (
    <section id="work" className="min-h-screen bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-light text-black mb-4 tracking-tight">
            Featured <span className="italic">Work</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            A curated selection of our most compelling visual narratives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/5] overflow-hidden bg-black cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              <div
                className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                  hoveredProject === project.id ? 'opacity-60' : 'opacity-20'
                }`}
              />

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 ${
                  hoveredProject === project.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <Play
                  size={48}
                  className="text-white mb-4 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1}
                />
                <h3 className="text-2xl font-light text-white mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-sm uppercase tracking-widest text-white/80 font-light">
                  {project.category}
                </p>
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                  hoveredProject === project.id
                    ? 'opacity-0 translate-y-4'
                    : 'opacity-100 translate-y-0'
                }`}
              >
                <p className="text-xs uppercase tracking-widest text-white/60 font-light mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-light text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
