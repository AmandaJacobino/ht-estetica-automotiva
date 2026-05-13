import { useState, useRef, useCallback, useEffect } from 'react';

interface UseBeforeAfterReturn {
  pos: number;
  ref: React.RefObject<HTMLDivElement>;
  handleDragStart: (e: React.MouseEvent | React.TouchEvent) => void;
}

/**
 * Manages the drag/touch interaction for the before-after slider.
 * Returns the current position (0-100), a ref to attach to the slider container,
 * and a handler for mousedown/touchstart events.
 */
export function useBeforeAfter(initialPos = 50): UseBeforeAfterReturn {
  const [pos, setPos] = useState(initialPos);
  const ref = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  const move = useCallback((e: MouseEvent | TouchEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - r.left;
    setPos(Math.max(4, Math.min(96, (x / r.width) * 100)));
  }, []);

  const handleDragStart = useCallback(() => {
    const onMove = (e: MouseEvent | TouchEvent) => move(e);
    const onUp = () => cleanupRef.current?.();

    cleanupRef.current = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
      cleanupRef.current = undefined;
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
  }, [move]);

  // Remove any active drag listeners if the component unmounts mid-drag
  useEffect(() => () => cleanupRef.current?.(), []);

  return { pos, ref, handleDragStart };
}
