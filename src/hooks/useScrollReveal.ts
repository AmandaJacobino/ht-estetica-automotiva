import { useEffect } from 'react';

/**
 * Observes all `.reveal` and `.stagger` elements and adds the `.in` class
 * when they enter the viewport, triggering the CSS transition animations.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll<Element>('.reveal, .stagger').forEach((el) =>
      io.observe(el),
    );

    return () => io.disconnect();
  }, []);
}
