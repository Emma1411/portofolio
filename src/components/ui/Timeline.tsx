import { useInView } from '../../hooks/useInView';
import type { TimelineEntry } from '../../interfaces/content';
import TimelineItem from './TimelineItem';

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const [ref, shown] = useInView<HTMLDivElement>(0.1);

  return (
    <div ref={ref} className="relative max-w-4xl">
      <span aria-hidden className="absolute bottom-6 left-4 top-6 w-px bg-azure/20" />
      <span
        aria-hidden
        className={`absolute bottom-6 left-4 top-6 w-px origin-top bg-gradient-to-b from-cobalt to-cyan-electric transition-transform duration-[1400ms] ease-out ${
          shown ? 'scale-y-100' : 'scale-y-0'
        }`}
      />
      <ol className="space-y-6">
        {entries.map((e, i) => (
          <TimelineItem key={e.id} entry={e} shown={shown} index={i} />
        ))}
      </ol>
    </div>
  );
}