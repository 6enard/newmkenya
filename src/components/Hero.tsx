import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source
          src="https://videos.ctfassets.net/ckso4uqg4vio/sfVtRtaUdwXqf0WpEiBAi/0875cc235225458a7f2b0878a985c7a9/Global_Summit_Preview_Opt.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-tight">
            Crafting Stories
            <br />
            <span className="italic">Through Motion</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            A creative studio specializing in cinematic storytelling,
            brand narratives, and visual experiences that captivate.
          </p>
        </div>

        <button
          onClick={scrollToWork}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-all duration-300 hover:translate-y-1 animate-bounce-slow"
          aria-label="Scroll to work"
        >
          <ChevronDown size={40} strokeWidth={1} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
