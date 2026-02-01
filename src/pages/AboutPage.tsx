import { Award, Globe, Users, Zap } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'We blend African creativity with international design standards, creating work that resonates across cultures and borders.',
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'Our diverse team thrives on collaboration, bringing multiple perspectives to every project for richer, more innovative solutions.',
    },
    {
      icon: Zap,
      title: 'Creative Excellence',
      description: 'We push creative boundaries with meticulous attention to detail, delivering work that inspires and exceeds expectations.',
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized for our contributions to the creative industry, we maintain the highest standards of craftsmanship.',
    },
  ];

  const team = [
    {
      name: 'Creative Direction',
      count: '5+ specialists',
      description: 'Leading creative strategy and artistic vision across all projects'
    },
    {
      name: 'Design & Visual',
      count: '8+ designers',
      description: 'Expert graphic designers, web designers, and visual artists'
    },
    {
      name: 'Photography & Video',
      count: '6+ professionals',
      description: 'Cinematographers, photographers, and videography specialists'
    },
    {
      name: 'Audio & Production',
      count: '4+ specialists',
      description: 'Sound designers, composers, and production coordinators'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-tight">
              About <span className="italic">StudioMkenya</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl font-light leading-relaxed">
              A multidisciplinary creative studio dedicated to bringing bold visions to life through design, storytelling, and artistic innovation.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Our <span className="italic">Story</span>
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  StudioMkenya emerged from a passion to create world-class creative work rooted in African creativity and culture. Based in the heart of Nairobi, we've grown to become a trusted partner for brands and organizations seeking transformative visual experiences.
                </p>
                <p>
                  Our journey began with a simple belief: that great creative work isn't just about aesthetics—it's about storytelling, connection, and impact. We've spent years refining our craft, building a diverse team of talented professionals who are committed to excellence in every project.
                </p>
                <p>
                  Today, we work with brands across multiple industries, delivering solutions that span brand identity, digital design, photography, videography, audio design, and experiential art. Each project is approached with the same dedication to quality and innovation.
                </p>
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Studio workspace"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-12 sm:mb-16 tracking-tight">
            Our <span className="italic">Values</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 border border-black/10 hover:border-black/30 transition-all duration-300 hover:bg-black/5 rounded-lg">
                <value.icon className="mb-6 text-black" size={32} strokeWidth={1.5} />
                <h3 className="text-xl font-light mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-12 sm:mb-16 tracking-tight">
            Our <span className="italic">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((dept, index) => (
              <div key={index} className="p-8 bg-white rounded-lg border border-black/5 hover:border-black/20 transition-all duration-300">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-2 font-light">{dept.count}</p>
                <h3 className="text-2xl font-light mb-3">{dept.name}</h3>
                <p className="text-base text-gray-600 font-light leading-relaxed">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-12 sm:mb-16 tracking-tight">
            Why Work With <span className="italic">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-light mb-3">Proven Expertise</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Our team brings years of experience across multiple creative disciplines, from commercial production to fine art.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-light mb-3">Collaborative Process</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  We believe in close collaboration with our clients, ensuring your vision is realized with precision and creativity.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-light mb-3">End-to-End Solutions</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  From concept development to final delivery, we handle every aspect of your project with meticulous attention to detail.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-light mb-3">African Perspective</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Our unique position in East Africa allows us to infuse authentic cultural insights into every creative endeavor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
