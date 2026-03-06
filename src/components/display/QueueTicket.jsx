export default function QueueTicket({ token, highlight = false, size = 'sm' }) {
  if (highlight) {
    return (
      <div className="flex flex-col items-center justify-center aspect-[4/3] rounded-2xl bg-primary/10 dark:bg-primary/20 border-4 border-primary shadow-lg p-6 animate-[pulse_3s_ease-in-out_infinite]">
        <span className="text-xs font-bold uppercase tracking-widest mb-2 text-text-sub dark:text-gray-400">Pick Up Now</span>
        <span className="text-slate-900 dark:text-white text-9xl font-black">{token}</span>
      </div>
    )
  }
  if (size === 'lg') {
    return (
      <div className="flex flex-col items-center justify-center aspect-[4/3] rounded-2xl bg-white dark:bg-[#152e15] border-2 border-primary/50 shadow-md p-6">
        <span className="text-xs font-bold uppercase tracking-widest mb-2 text-text-sub dark:text-gray-400">Pick Up Now</span>
        <span className="text-slate-900 dark:text-white text-9xl font-black">{token}</span>
      </div>
    )
  }
  // size === 'sm' — preparing grid tile
  return (
    <div className="flex items-center justify-center aspect-square rounded-xl bg-white dark:bg-[#152e15] border-2 border-slate-200 dark:border-slate-700 shadow-sm p-4">
      <span className="text-slate-700 dark:text-slate-300 text-6xl font-bold">{token}</span>
    </div>
  )
}