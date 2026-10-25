import { useRef, type MouseEvent } from 'react';

export const useTilt = <T extends HTMLElement>(max = 5) => {
  const ref = useRef<T>(null);

  const enabled = () =>
    window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches;

  const onMouseMove = (e: MouseEvent<T>) => {
    const el = ref.current;
    if (!el || !enabled()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateY(-4px)`;
  };

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return { ref, handlers: { onMouseMove, onMouseLeave } };
};