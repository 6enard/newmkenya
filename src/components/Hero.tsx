import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const videos = [
    {
      url: 'https://videos.ctfassets.net/ckso4uqg4vio/sfVtRtaUdwXqf0WpEiBAi/0875cc235225458a7f2b0878a985c7a9/Global_Summit_Preview_Opt.mp4',
      title: 'Global Summit',
      description: 'A cinematic showcase of global moments and connections'
    },
    {
      url: 'https://videos.ctfassets.net/ckso4uqg4vio/aBIDFod77iNGOtqEsMG8L/f9111d8c2d946f025f21881b37f37377/Nike_Oly_Opt.mp4',
      title: 'Nike Olympics',
      description: 'Dynamic storytelling of athletic excellence and inspiration'
    }
  ];

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <video
        key={videos[currentSlide].url}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source
          src={videos[currentSlide].url}
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

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={prevSlide}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Previous video"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>

            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-light text-white mb-2">
                {videos[currentSlide].title}
              </h2>
              <p className="text-sm md:text-base text-white/75">
                {videos[currentSlide].description}
              </p>
            </div>

            <button
              onClick={nextSlide}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Next video"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
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
