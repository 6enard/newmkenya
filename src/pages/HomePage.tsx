import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Work />
    </div>
  );
};

export default HomePage;
