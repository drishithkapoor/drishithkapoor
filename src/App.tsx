import { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Journey from './components/Journey';
import BioTwin from './components/BioTwin';
import Research from './components/Research';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Service from './components/Service';
import Academic from './components/Academic';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    if (window.location.hash === '' || window.location.hash === '#top') {
      history.replaceState(null, '', '#about');
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, []);

  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar />
      <main>
        <About />
        <Journey />
        <BioTwin />
        <Research />
        <Experience />
        <Skills />
        <Leadership />
        <Service />
        <Academic />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
