import { useEffect, useState } from 'react';

export const useTypewriter = (phrases: string[], speed = { type: 55, erase: 28, hold: 1800 }) => {
  const [text, setText] = useState('');
  const key = phrases.join('|');

  useEffect(() => {
    const list = key ? key.split('|') : [];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || list.length === 0) {
      setText(list[0] ?? '');
      return;
    }
    let i = 0, n = 0, erasing = false, id = 0;
    const tick = () => {
      const p = list[i];
      if (!erasing) {
        n++;
        setText(p.slice(0, n));
        if (n === p.length) { erasing = true; id = window.setTimeout(tick, speed.hold); return; }
        id = window.setTimeout(tick, speed.type);
      } else {
        n--;
        setText(p.slice(0, n));
        if (n === 0) { erasing = false; i = (i + 1) % list.length; id = window.setTimeout(tick, 350); return; }
        id = window.setTimeout(tick, speed.erase);
      }
    };
    id = window.setTimeout(tick, 400);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return text;
};