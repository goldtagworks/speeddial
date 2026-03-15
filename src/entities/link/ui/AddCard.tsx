export function AddCard() {
  return (
    <button className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/10 bg-transparent p-5 text-white/25 transition hover:border-white/20 hover:bg-white/[0.03] hover:text-white/45">
      <span className="text-2xl leading-none">+</span>
      <span className="text-[11px]">Add link</span>
    </button>
  );
}
