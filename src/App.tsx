import { useState, useEffect } from 'react';

// Layout
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';

// Sections
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Packages } from './components/sections/Packages';
import { Testimonials } from './components/sections/Testimonials';
import { Faq } from './components/sections/Faq';
import { Contact } from './components/sections/Contact';

// UI
import { Atmosphere } from './components/ui/Atmosphere';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { TweaksPanel } from './components/ui/TweaksPanel';

// Hooks & lib
import { useScrollReveal } from './hooks/useScrollReveal';
import { applyTweaks, DEFAULT_TWEAKS, type Tweaks } from './lib/tweaks';

// Initial tweaks come from the original window.TWEAKS injection (legacy compat)
declare global {
  interface Window {
    TWEAKS?: Partial<Tweaks>;
  }
}

function App() {
  const [tweaks, setTweaks] = useState<Tweaks>({
    ...DEFAULT_TWEAKS,
    ...(window.TWEAKS ?? {}),
  });
  const [tweakOn, setTweakOn] = useState(false);

  // Apply CSS custom properties whenever tweaks change
  useEffect(() => {
    applyTweaks(tweaks);
  }, [tweaks]);

  // Listen for edit-mode postMessages (tweaks panel toggle from host frame)
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (!e.data) return;
      if (e.data.type === '__activate_edit_mode') setTweakOn(true);
      if (e.data.type === '__deactivate_edit_mode') setTweakOn(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  // Scroll-triggered reveal / stagger animations
  useScrollReveal();

  return (
    <>
      {/* Fixed decorative background layers */}
      <Atmosphere />

      {/* Main page content — z-index:1 above atmosphere */}
      <div className="wrap">
        <Nav />
        <Hero />
        <Services />
        <About />
        <Packages />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
      </div>

      {/* Fixed overlays */}
      <FloatingWhatsApp />
      <TweaksPanel on={tweakOn} tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

export default App;
