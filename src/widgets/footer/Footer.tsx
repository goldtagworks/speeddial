import { PlusIcon } from '@/shared/ui';

export function Footer() {
  return (
    <footer className="flex items-center justify-center gap-6 border-t border-white/[0.04] py-4">
      <button className="flex items-center gap-1.5 text-xs text-white/30 transition hover:text-white/55">
        <PlusIcon />
        Add link
      </button>
      <button className="flex items-center gap-1.5 text-xs text-white/30 transition hover:text-white/55">
        <PlusIcon />
        Settings
      </button>
    </footer>
  );
}
