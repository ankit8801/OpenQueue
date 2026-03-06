export default function StatsBar({ pending, preparing, ready, done }) {
  const avgWaitMins = (pending + preparing) * 3   // rough estimate: 3 min per order
  const revenueEst  = done * 220                   // rough avg ₹220 per order

  const stats = [
    { label: 'Queue',     value: pending + preparing,                    always: true  },
    { label: 'Wait Time', value: `~${avgWaitMins || 0}m`,               always: true  },
    { label: 'Completed', value: done,                                   always: false },
    { label: 'Revenue',   value: `₹${(revenueEst/1000).toFixed(1)}k`,  always: false },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
      {stats.map(s => (
        <div
          key={s.label}
          className={`bg-white dark:bg-neutral-dark rounded-xl p-4 shadow-sm border border-neutral-light dark:border-neutral-dark/30 ${!s.always ? 'hidden md:block' : ''}`}
        >
          <p className="text-text-sub dark:text-gray-400 text-xs font-semibold uppercase tracking-wider">{s.label}</p>
          <p className="text-2xl font-bold text-text-main dark:text-white mt-1">{s.value}</p>
        </div>
      ))}
    </div>
  )
}