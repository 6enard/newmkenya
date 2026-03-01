import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="w-full">
      <ScrollToTop />
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetailsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service/:id" element={<ServiceDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
