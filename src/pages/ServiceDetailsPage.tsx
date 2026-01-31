import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Palette, Pen, Share2, Globe, Camera, Video, Headphones, Brush } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  details: string;
  fullDescription: string;
  process: string[];
  deliverables: string[];
  pricing?: string;
}

const ServiceDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const services: { [key: string]: Service } = {
    'logo-identity': {
      id: 'logo-identity',
      icon: Palette,
      title: 'Logo & Identity',
      description: 'Unique brand identities',
      details: 'Crafting memorable logos and comprehensive brand systems that capture your essence and resonate with your audience.',
      fullDescription: 'Your logo is the cornerstone of your brand identity. We create distinctive visual marks that not only look beautiful but also communicate your brand\'s values and mission. Our comprehensive identity systems ensure consistency across all touchpoints, from business cards to digital platforms.',
      process: [
        'Discovery & Research: Understanding your brand, market, and competitors',
        'Concept Development: Creating multiple design directions',
        'Refinement: Iterating based on feedback to perfect the design',
        'Brand Guidelines: Developing comprehensive guidelines for consistent application',
      ],
      deliverables: [
        'Logo Design (multiple variations)',
        'Brand Guidelines Document',
        'Color Palette & Typography',
        'Icon Set',
        'Business Card Design',
      ],
      pricing: '$1,500 - $3,500'
    },
    'graphic-design': {
      id: 'graphic-design',
      icon: Pen,
      title: 'Graphic Design',
      description: 'Eye-catching visuals',
      details: 'Creating stunning visual communications from print to digital that capture attention and convey your message effectively.',
      fullDescription: 'Visual communication is powerful. Whether it\'s a poster, flyer, infographic, or advertisement, we design graphics that grab attention and deliver your message with impact. Each design is tailored to your brand and audience.',
      process: [
        'Brief Review: Understanding your requirements and goals',
        'Concept & Sketches: Brainstorming visual approaches',
        'Design Execution: Creating high-quality digital designs',
        'Revision & Finalization: Perfecting every detail',
      ],
      deliverables: [
        'Original Design Files',
        'High-Resolution Exports',
        'Print-Ready Files',
        'Digital Formats',
        'Source Files',
      ],
      pricing: '$500 - $2,000 per project'
    },
    'social-media': {
      id: 'social-media',
      icon: Share2,
      title: 'Social Media',
      description: 'Engaging content',
      details: 'Developing strategic social content that builds communities and drives meaningful engagement across platforms.',
      fullDescription: 'Social media is where your audience connects with your brand. We create compelling, on-brand content that sparks engagement and grows your community. From Instagram stories to TikTok videos, we understand what resonates.',
      process: [
        'Strategy Development: Creating a content roadmap',
        'Content Creation: Designing graphics and recording videos',
        'Scheduling: Planning optimal posting times',
        'Engagement: Monitoring and responding to your community',
      ],
      deliverables: [
        'Monthly Content Calendar',
        'Graphic Templates',
        'Video Content',
        'Captions & Copy',
        'Performance Analytics',
      ],
      pricing: '$1,200 - $3,000/month'
    },
    'web-design': {
      id: 'web-design',
      icon: Globe,
      title: 'Web Design',
      description: 'Digital experiences',
      details: 'Designing and developing responsive websites that blend aesthetics with functionality for seamless user experiences.',
      fullDescription: 'Your website is your digital storefront. We design and develop responsive, fast, and beautiful websites that convert visitors into customers. Every element is carefully crafted for optimal user experience.',
      process: [
        'Strategy & Planning: Defining site structure and user flows',
        'Wireframing: Creating layout blueprints',
        'Design: Building visual mockups',
        'Development: Coding responsive, functional websites',
      ],
      deliverables: [
        'Responsive Website',
        'Mobile Optimization',
        'SEO Implementation',
        'Contact Forms',
        'Analytics Setup',
      ],
      pricing: '$2,500 - $7,500'
    },
    'photography': {
      id: 'photography',
      icon: Camera,
      title: 'Photography',
      description: 'Stunning shots',
      details: 'Capturing powerful imagery for commercial, editorial, and artistic projects with technical precision and creative vision.',
      fullDescription: 'Photography brings stories to life. Whether it\'s product photography for your e-commerce store or portraits for your personal brand, we capture stunning imagery that elevates your visual narrative.',
      process: [
        'Pre-production: Planning the shoot and location scouting',
        'Photo Session: Capturing images with professional equipment',
        'Post-processing: Editing and color grading',
        'Delivery: Providing high-resolution final images',
      ],
      deliverables: [
        'High-Resolution Images (50-100+)',
        'Edited Photos',
        'Color Graded Exports',
        'Digital Delivery',
        'Usage Rights',
      ],
      pricing: '$500 - $2,500 per shoot'
    },
    'videography': {
      id: 'videography',
      icon: Video,
      title: 'Videography',
      description: 'Compelling stories',
      details: 'Producing cinematic narratives from concept to completion that engage audiences and elevate brands.',
      fullDescription: 'Video is the most engaging content format. We produce cinematic videos that tell your story, whether it\'s a brand documentary, product demo, or social media content. Each frame is crafted for maximum impact.',
      process: [
        'Concept Development: Writing scripts and storyboards',
        'Pre-production: Planning and location scouting',
        'Production: Filming with professional cameras',
        'Post-production: Editing, color grading, and sound design',
      ],
      deliverables: [
        'Final Video (multiple formats)',
        'Raw Footage',
        'Color Graded Sequences',
        'Sound Design',
        'Subtitles/Captions',
      ],
      pricing: '$2,000 - $8,000'
    },
    'audio-design': {
      id: 'audio-design',
      icon: Headphones,
      title: 'Audio Design',
      description: 'Soundscapes',
      details: 'Crafting immersive audio experiences including sound design, mixing, and original compositions.',
      fullDescription: 'Sound shapes perception. We design custom audio experiences, from brand jingles to immersive soundscapes for video projects. Quality audio elevates your entire production.',
      process: [
        'Brief & Reference: Understanding your audio needs',
        'Composition: Creating original music or sourcing sounds',
        'Production: Recording and arranging audio',
        'Mixing & Mastering: Perfecting the final sound',
      ],
      deliverables: [
        'Original Compositions',
        'Sound Effects',
        'Voiceover Recording',
        'Mixed Masters',
        'Multiple Formats',
      ],
      pricing: '$800 - $3,000'
    },
    'mural-art': {
      id: 'mural-art',
      icon: Brush,
      title: 'Mural Art',
      description: 'Street art & murals',
      details: 'Transforming spaces with large-scale artistic installations that make bold statements and inspire communities.',
      fullDescription: 'Murals transform spaces into galleries. We create large-scale artistic installations that reflect your brand or beautify your space. Each mural is a conversation starter.',
      process: [
        'Concept & Design: Creating custom artwork',
        'Site Preparation: Preparing the wall surface',
        'Installation: Painting the mural with precision',
        'Finishing: Sealing and protecting the artwork',
      ],
      deliverables: [
        'Custom Mural Design',
        'Installation Service',
        'High-Resolution Documentation',
        'Maintenance Guidance',
        'Usage Rights',
      ],
      pricing: '$2,000 - $10,000+'
    },
  };

  const service = services[id || ''];

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-3xl font-light text-black mb-4">Service not found</h1>
          <button
            onClick={() => navigate('/services')}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pb-24">
        <button
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8 sm:mb-12 min-h-[44px]"
        >
          <ChevronLeft size={20} />
          <span className="font-light">Back to Services</span>
        </button>

        <div className="mb-12 sm:mb-16">
          <div className="flex items-start gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-black/10 rounded-lg flex-shrink-0">
              <IconComponent className="text-black" size={32} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-sm uppercase tracking-widest text-gray-500 font-light mb-2">
                {service.description}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-black">
                {service.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="space-y-12 sm:space-y-16">
          <section>
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">
              Overview
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
              {service.fullDescription}
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">
              Our Process
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {service.process.map((step, index) => (
                <div key={index} className="flex gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-black/20 bg-black/5 text-black font-light text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="pt-0.5">
                    <p className="text-base sm:text-lg text-gray-700 font-light">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">
              What You'll Receive
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {service.deliverables.map((deliverable, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 rounded-full bg-black mt-2 sm:mt-3 flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700 font-light">
                    {deliverable}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {service.pricing && (
            <section className="border-t border-black/10 pt-12 sm:pt-16">
              <h2 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">
                Pricing
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 font-light">
                {service.pricing}
              </p>
              <p className="text-base text-gray-600 font-light mt-4">
                Contact us for a custom quote based on your specific needs.
              </p>
            </section>
          )}

          <section className="border-t border-black/10 pt-12 sm:pt-16">
            <h2 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">
              Ready to Get Started?
            </h2>
            <button
              onClick={() => navigate('/booking')}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-black text-white rounded-lg font-light tracking-wide uppercase transition-all duration-300 hover:bg-black/80 hover:shadow-lg min-h-[44px]"
            >
              Book a Consultation
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
