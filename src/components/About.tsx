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
    <section id="about" className="min-h-screen bg-black text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 tracking-tight">
              Where Vision Meets <span className="italic">Execution</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              <p>
                StudioMkenya is a multidisciplinary creative studio dedicated to bringing
                visions to life. Based in Nairobi, we blend African creativity with
                contemporary design thinking across all mediums.
              </p>
              <p>
                Our diverse team of designers, photographers, videographers, and artists
                work collaboratively to transform ideas into compelling visual experiences
                that resonate with audiences globally.
              </p>
              <p>
                From brand identity and web design to photography, videography, and large-scale
                murals, we handle every creative challenge with meticulous attention to detail
                and artistic excellence.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Studio workspace"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/5 rounded-lg"
            >
              <capability.icon className="mb-4 sm:mb-6 text-white" size={36} strokeWidth={1} />
              <h3 className="text-lg sm:text-xl font-light mb-2 sm:mb-3">{capability.title}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
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
