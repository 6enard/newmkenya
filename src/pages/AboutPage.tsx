import { Award, Globe, Users, Zap, Sparkles, Target, Heart } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'We blend African creativity with international design standards, creating work that resonates across cultures and borders.',
      color: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'Our diverse team thrives on collaboration, bringing multiple perspectives to every project for richer, more innovative solutions.',
      color: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: Zap,
      title: 'Creative Excellence',
      description: 'We push creative boundaries with meticulous attention to detail, delivering work that inspires and exceeds expectations.',
      color: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized for our contributions to the creative industry, we maintain the highest standards of craftsmanship.',
      color: 'from-pink-500/10 to-rose-500/10'
    },
  ];

  const team = [
    {
      name: 'Creative Direction',
      count: '5+ specialists',
      description: 'Leading creative strategy and artistic vision across all projects',
      icon: Target
    },
    {
      name: 'Design & Visual',
      count: '8+ designers',
      description: 'Expert graphic designers, web designers, and visual artists',
      icon: Sparkles
    },
    {
      name: 'Photography & Video',
      count: '6+ professionals',
      description: 'Cinematographers, photographers, and videography specialists',
      icon: Zap
    },
    {
      name: 'Audio & Production',
      count: '4+ specialists',
      description: 'Sound designers, composers, and production coordinators',
      icon: Heart
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '8', label: 'Years Experience' },
    { number: '100%', label: 'Dedication' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-subtle"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-black/5 rounded-full">
              <span className="text-sm uppercase tracking-widest text-gray-600 font-light">About Us</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-6 tracking-tight">
              About <span className="italic bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">StudioMkenya</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              A multidisciplinary creative studio dedicated to bringing bold visions to life through design, storytelling, and artistic innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl sm:text-5xl font-light mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-light uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                <span className="text-sm uppercase tracking-widest text-white/80 font-light">Our Journey</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-8 tracking-tight">
                Our <span className="italic">Story</span>
              </h2>
              <div className="space-y-6 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                <p className="border-l-2 border-white/20 pl-6">
                  StudioMkenya emerged from a passion to create world-class creative work rooted in African creativity and culture. Based in the heart of Nairobi, we've grown to become a trusted partner for brands and organizations seeking transformative visual experiences.
                </p>
                <p className="border-l-2 border-white/20 pl-6">
                  Our journey began with a simple belief: that great creative work isn't just about aesthetics—it's about storytelling, connection, and impact. We've spent years refining our craft, building a diverse team of talented professionals who are committed to excellence in every project.
                </p>
                <p className="border-l-2 border-white/20 pl-6">
                  Today, we work with brands across multiple industries, delivering solutions that span brand identity, digital design, photography, videography, audio design, and experiential art. Each project is approached with the same dedication to quality and innovation.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Studio workspace"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-black/5 rounded-full">
              <span className="text-sm uppercase tracking-widest text-gray-600 font-light">Core Values</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Our <span className="italic">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-white to-gray-50 border border-black/10 hover:border-black/20 transition-all duration-500 hover:shadow-2xl rounded-2xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className="w-14 h-14 mb-6 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <value.icon className="text-black" size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-light mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-black/5 rounded-full">
              <span className="text-sm uppercase tracking-widest text-gray-600 font-light">Meet The Team</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Our <span className="italic">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Talented professionals united by a passion for creative excellence
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((dept, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-black/5 hover:border-black/15 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:from-black group-hover:to-gray-800 transition-all duration-500">
                  <dept.icon className="text-gray-600 group-hover:text-white transition-colors duration-500" size={24} strokeWidth={1.5} />
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-light">{dept.count}</p>
                <h3 className="text-xl font-light mb-3">{dept.name}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <span className="text-sm uppercase tracking-widest text-white/80 font-light">Why Choose Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Why Work With <span className="italic">Us</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              We deliver exceptional creative solutions with dedication and expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-8">
              <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                <h3 className="text-2xl font-light mb-3 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  Proven Expertise
                </h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Our team brings years of experience across multiple creative disciplines, from commercial production to fine art.
                </p>
              </div>
              <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                <h3 className="text-2xl font-light mb-3 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Collaborative Process
                </h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  We believe in close collaboration with our clients, ensuring your vision is realized with precision and creativity.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                <h3 className="text-2xl font-light mb-3 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  End-to-End Solutions
                </h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  From concept development to final delivery, we handle every aspect of your project with meticulous attention to detail.
                </p>
              </div>
              <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                <h3 className="text-2xl font-light mb-3 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                  African Perspective
                </h3>
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
