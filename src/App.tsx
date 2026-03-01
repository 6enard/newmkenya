import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-full">
      <Banner />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Booking />
      <Contact />
    </div>
  );
}

export default App;
