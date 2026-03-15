import { categories } from '@/entities/category';
import { PlusIcon } from '@/shared/ui';

interface CategoryTabsProps {
  activeKey: string;
  onChange: (key: string) => void;
}

export function CategoryTabs({ activeKey, onChange }: CategoryTabsProps) {
  return (
    <nav className="flex items-center justify-center gap-1 border-b border-white/[0.06] px-4 pt-3">
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onChange(cat.key)}
          className={`relative px-4 py-2.5 text-sm transition ${
            activeKey === cat.key
              ? 'text-white'
              : 'text-white/40 hover:text-white/70'
          }`}
        >
          {cat.name}
          {activeKey === cat.key && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-white" />
          )}
        </button>
      ))}
      <button className="ml-1 flex h-7 w-7 items-center justify-center rounded-lg text-white/30 transition hover:bg-white/5 hover:text-white/60">
        <PlusIcon size={14} />
      </button>
    </nav>
  );
}
