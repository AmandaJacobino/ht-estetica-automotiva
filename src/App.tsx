import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Packages } from './components/sections/Packages';
import { Testimonials } from './components/sections/Testimonials';
import { Faq } from './components/sections/Faq';
import { Contact } from './components/sections/Contact';
import { Atmosphere } from './components/ui/Atmosphere';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <Atmosphere />
      <div className="wrap">
        <Nav />
        <main id="main-content">
          <Hero />
          <Services />
          <About />
          <Packages />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
      <FloatingWhatsApp />
    </>
  );
}

export default App;
