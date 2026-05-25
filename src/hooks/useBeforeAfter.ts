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
  const rafRef = useRef<number | null>(null);
  const pendingPosRef = useRef<number | null>(null);

  const schedulePosUpdate = useCallback((next: number) => {
    pendingPosRef.current = next;
    if (rafRef.current != null) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      if (pendingPosRef.current != null) {
        setPos(pendingPosRef.current);
        pendingPosRef.current = null;
      }
    });
  }, []);

  const move = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const clientX =
        'touches' in e ? (e.touches[0]?.clientX ?? 0) : e.clientX;
      const x = clientX - r.left;
      schedulePosUpdate(Math.max(4, Math.min(96, (x / r.width) * 100)));
    },
    [schedulePosUpdate],
  );

  const handleDragStart = useCallback(() => {
    const onMove = (e: MouseEvent | TouchEvent) => move(e);
    const onUp = () => cleanupRef.current?.();

    cleanupRef.current = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
      cleanupRef.current = undefined;
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      pendingPosRef.current = null;
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
  }, [move]);

  // Remove any active drag listeners if the component unmounts mid-drag
  useEffect(
    () => () => {
      cleanupRef.current?.();
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  return { pos, ref, handleDragStart };
}
