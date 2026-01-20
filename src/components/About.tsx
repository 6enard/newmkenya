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
    <section id="about" className="min-h-screen bg-black text-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
              Where Vision Meets <span className="italic">Execution</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
              <p>
                StudioMkenya is a creative studio dedicated to crafting visual experiences
                that resonate. Based in Nairobi, we blend African storytelling traditions
                with contemporary cinematography.
              </p>
              <p>
                Our team of directors, cinematographers, and creative strategists work
                collaboratively to transform ideas into compelling visual narratives that
                captivate audiences globally.
              </p>
              <p>
                From concept development to post-production, we handle every aspect of the
                creative process with meticulous attention to detail and artistic excellence.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Studio workspace"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/5"
            >
              <capability.icon className="mb-6 text-white" size={40} strokeWidth={1} />
              <h3 className="text-xl font-light mb-3">{capability.title}</h3>
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
