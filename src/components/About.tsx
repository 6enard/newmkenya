import { Camera, Film, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const capabilities = [
    {
      icon: Film,
      title: 'Cinematic Production',
      description: 'High-end commercial and narrative filmmaking with cutting-edge technology',
    },
    {
      icon: Camera,
      title: 'Brand Stories',
      description: 'Compelling visual narratives that elevate brand identity and engagement',
    },
    {
      icon: Lightbulb,
      title: 'Creative Direction',
      description: 'Strategic creative guidance from concept to final delivery',
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized excellence in visual storytelling and creative innovation',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-12 
      bg-gradient-to-br from-[#10069f] via-[#0d0585] to-[#10069f] 
      text-white relative overflow-hidden"
    >
      {/* Background Glow Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0123b4] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fae714] rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
              Where Vision Meets <span className="italic">Execution</span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-gray-200 font-light leading-relaxed">
              <p className="border-l-2 border-white/20 pl-6">
                StudioMkenya is a multidisciplinary creative studio dedicated to bringing
                visions to life. Based in Nairobi, we blend African creativity with
                contemporary design thinking across all mediums.
              </p>
              <p className="border-l-2 border-white/20 pl-6">
                Our diverse team of designers, photographers, videographers, and artists
                work collaboratively to transform ideas into compelling visual experiences
                that resonate with audiences globally.
              </p>
              <p className="border-l-2 border-white/20 pl-6">
                From brand identity and web design to photography, videography, and large-scale
                murals, we handle every creative challenge with meticulous attention to detail
                and artistic excellence.
              </p>
            </div>
          </div>

          {/* Image with Gradient Glow Border */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0123b4] to-[#fae714] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Studio workspace"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 border border-white/10 
              hover:border-[#fae714] 
              backdrop-blur-sm 
              bg-white/5 
              transition-all duration-300 rounded-lg group"
            >
              <capability.icon
                className="mb-6 text-white group-hover:text-[#fae714] transition-colors"
                size={36}
                strokeWidth={1}
              />
              <h3 className="text-lg sm:text-xl font-light mb-3 group-hover:text-[#fae714] transition-colors">
                {capability.title}
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;