import { useEffect, useRef, useState } from 'react';

/** Passe à true une seule fois, quand l'élément entre à l'écran. */
export const useInView = <T extends HTMLElement>(threshold = 0.2) => {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, seen] as const;
};