import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Booking from './components/Booking';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-900">
      <Banner />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Booking />
    </div>
  );
}

export default App;
