import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Booking from '../components/Booking';

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Projects />
      <About />
      <Services />
      <Booking />
    </div>
  );
};

export default HomePage;
