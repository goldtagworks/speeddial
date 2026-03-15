import type { Link } from '../model';

export function SpeedDialCard({ link }: { link: Link }) {
  return (
    <a
      href={`https://${link.url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 transition hover:border-white/15 hover:bg-white/[0.07]"
    >
      <div
        className="flex h-20 w-full items-center justify-center rounded-xl text-3xl"
        style={{ background: `${link.color}18` }}
      >
        <span className="drop-shadow-sm" style={{ filter: 'saturate(1.1)' }}>
          {link.emoji}
        </span>
      </div>

      <span className="max-w-full truncate text-[13px] font-medium text-white/85">
        {link.title}
      </span>

      <div className="flex max-w-full items-center gap-1.5">
        <span
          className="flex h-4 w-4 shrink-0 items-center justify-center rounded text-[9px]"
          style={{ background: `${link.color}30`, color: link.color }}
        >
          {link.emoji}
        </span>
        <span className="truncate text-[11px] text-white/35">{link.url}</span>
      </div>
    </a>
  );
}
