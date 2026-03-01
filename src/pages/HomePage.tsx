import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Studio from '../components/Studio';
import Booking from '../components/Booking';

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Work />
      <Studio />
      <Booking />
    </div>
  );
};

export default HomePage;
