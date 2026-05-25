import { useEffect } from 'react';

/**
 * Observes all `.reveal` and `.stagger` elements and adds the `.in` class
 * when they enter the viewport, triggering the CSS transition animations.
 *
 * When the user prefers reduced motion, all elements are revealed immediately
 * without animation so content stays accessible.
 *
 * Note: only observes elements present at mount time (static landing page).
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const elements = document.querySelectorAll<Element>('.reveal, .stagger');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
