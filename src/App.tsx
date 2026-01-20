import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PortfolioCarousel from './components/PortfolioCarousel';
import VideoShowcase from './components/VideoShowcase';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <PortfolioCarousel />
      <VideoShowcase />
      <About />
      <Contact />
    </div>
  );
}

export default App;
