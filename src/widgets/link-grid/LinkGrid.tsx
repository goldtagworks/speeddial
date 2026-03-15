import type { Link } from '@/entities/link';
import { SpeedDialCard, AddCard } from '@/entities/link';

interface LinkGridProps {
  links: Link[];
}

export function LinkGrid({ links }: LinkGridProps) {
  return (
    <div className="w-full max-w-5xl">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {links.map((link) => (
          <SpeedDialCard key={link.title} link={link} />
        ))}
        <AddCard />
      </div>
    </div>
  );
}
