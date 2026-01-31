import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies?: string[];
  gallery?: string[];
  relatedProjects?: string[];
}

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const projects: { [key: string]: ProjectDetail } = {
    'project-1': {
      id: 'project-1',
      title: 'Urban Landscape',
      description: 'Cinematic urban storytelling capturing the essence of city life',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Commercial',
      fullDescription: 'This cinematic project captures the raw energy and beauty of urban life. Through careful composition and color grading, we transformed everyday city scenes into compelling visual narratives that tell stories of movement, architecture, and human connection.',
      challenge: 'Creating a cohesive visual narrative across diverse urban locations while maintaining cinematic quality and consistent color grading throughout the production.',
      solution: 'We developed a detailed shot list, used consistent camera movements, and applied a unified color grade that emphasized the contrast between warm artificial light and cool shadows of the urban environment.',
      results: [
        'Over 2 million views across social platforms',
        'Featured in 3 international design publications',
        'Increased brand awareness by 45%',
        'Used as case study in creative agencies'
      ],
      technologies: ['4K Cinema Camera', 'Advanced Color Grading', 'Motion Graphics', 'Drone Cinematography'],
      gallery: [
        'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/3218654/pexels-photo-3218654.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      relatedProjects: ['project-2', 'project-3']
    },
    'project-2': {
      id: 'project-2',
      title: 'Motion Design',
      description: 'Dynamic visual effects that bring brands to life',
      image: 'https://images.pexels.com/photos/3218654/pexels-photo-3218654.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Digital',
      fullDescription: 'A comprehensive motion design project that brought a brand\'s identity to life through dynamic animations and visual effects. Every frame was carefully crafted to communicate the brand\'s values while maintaining visual elegance and technical precision.',
      challenge: 'Translating static brand identity into dynamic, engaging motion that works across multiple platforms and maintains brand consistency at every frame.',
      solution: 'We created a detailed motion guideline system, developed custom animations that emphasize key brand elements, and optimized the content for various social media formats and video platforms.',
      results: [
        'Won 2 international motion design awards',
        'Engagement rate increased by 120%',
        'Viral performance with 5M+ impressions',
        'Became brand template for future campaigns'
      ],
      technologies: ['After Effects', 'Cinema 4D', '3D Animation', 'Sound Design'],
      gallery: [
        'https://images.pexels.com/photos/3218654/pexels-photo-3218654.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      relatedProjects: ['project-1', 'project-3']
    },
    'project-3': {
      id: 'project-3',
      title: 'Brand Evolution',
      description: 'Identity transformation through strategic motion',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Branding',
      fullDescription: 'A complete brand transformation project that evolved an established identity into a modern, flexible system. We created a comprehensive visual language that adapts across applications while maintaining core brand values.',
      challenge: 'Modernizing a classic brand identity without alienating existing customers while creating flexibility for digital and traditional media.',
      solution: 'We developed a modular brand system with adaptive elements, new typography hierarchy, and a dynamic color system that allows both traditional and contemporary expressions.',
      results: [
        'Brand recognition increased by 65%',
        'Positive media coverage across 15+ publications',
        'Sales increase of 38% in first quarter',
        'Enhanced employee and stakeholder satisfaction'
      ],
      technologies: ['Brand Strategy', 'Identity Design', 'Motion Graphics', 'Digital Implementation'],
      gallery: [
        'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/3218654/pexels-photo-3218654.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      relatedProjects: ['project-1', 'project-2']
    },
  };

  const project = projects[id || ''];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-3xl font-light text-black mb-4">Project not found</h1>
          <button
            onClick={() => navigate('/projects')}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const getRelatedProject = (projectId: string) => {
    return projects[projectId];
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pb-24">
        <Breadcrumb
          items={[
            { label: 'Home', path: '/' },
            { label: 'Projects', path: '/projects' },
            { label: project.title },
          ]}
        />
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8 sm:mb-12 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded"
          aria-label={`Back to projects list`}
        >
          <ChevronLeft size={20} />
          <span className="font-light">Back to Projects</span>
        </button>

        <div className="mb-12 sm:mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-light mb-4 sm:mb-6">
            {project.category}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-4 sm:mb-6">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        <div className="mb-12 sm:mb-16">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 sm:h-[500px] object-cover rounded-lg shadow-2xl"
          />
        </div>

        <div className="space-y-12 sm:space-y-16">
          <section>
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">
              Project Overview
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
              {project.fullDescription}
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">
                The Challenge
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">
                Our Solution
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
                {project.solution}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">
              Results & Impact
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 rounded-full bg-black mt-2 sm:mt-3 flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700 font-light">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {project.technologies && (
            <section>
              <h2 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">
                Technologies & Tools
              </h2>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-black/5 border border-black/10 rounded-full text-base sm:text-lg text-gray-700 font-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {project.gallery && project.gallery.length > 1 && (
            <section>
              <h2 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {project.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
                  />
                ))}
              </div>
            </section>
          )}

          {project.relatedProjects && project.relatedProjects.length > 0 && (
            <section className="border-t border-black/10 pt-12 sm:pt-16">
              <h2 className="text-2xl sm:text-3xl font-light text-black mb-8 sm:mb-10">
                More Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {project.relatedProjects.map((projectId) => {
                  const relatedProject = getRelatedProject(projectId);
                  return (
                    <Link
                      key={projectId}
                      to={`/project/${projectId}`}
                      className="group cursor-pointer"
                    >
                      <div className="overflow-hidden rounded-lg mb-4 sm:mb-6">
                        <img
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-sm uppercase tracking-widest text-gray-500 font-light mb-2">
                        {relatedProject.category}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-light text-black group-hover:text-gray-600 transition-colors flex items-center gap-2">
                        {relatedProject.title}
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                      </h3>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          <section className="border-t border-black/10 pt-12 sm:pt-16">
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-light mb-6 sm:mb-8">
              Ready to start your next project? Get in touch with our team to discuss your vision.
            </p>
            <button
              onClick={() => navigate('/booking')}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-black text-white rounded-lg font-light tracking-wide uppercase transition-all duration-300 hover:bg-black/80 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black min-h-[44px]"
            >
              Start a Project
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
