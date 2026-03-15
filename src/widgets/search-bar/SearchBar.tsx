export function SearchBar() {
  return (
    <div className="mb-10 w-full max-w-2xl">
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 transition focus-within:border-white/20 focus-within:bg-white/[0.06]">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="shrink-0 text-white/30">
          <circle cx="8" cy="8" r="5.5" />
          <path d="M12.5 12.5L16 16" />
        </svg>
        <input
          type="text"
          placeholder="Search links..."
          className="flex-1 bg-transparent text-sm text-white/90 placeholder:text-white/30 outline-none"
        />
        <kbd className="hidden rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/30 md:inline-block">
          ⌘K
        </kbd>
      </div>
    </div>
  );
}
