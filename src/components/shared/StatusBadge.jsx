const config = {
  pending:   { label: 'Pending',   cls: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 ring-gray-500/10' },
  preparing: { label: 'Preparing', cls: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-500 ring-yellow-600/20' },
  ready:     { label: 'Ready',     cls: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 ring-green-600/20' },
  done:      { label: 'Done',      cls: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 ring-blue-600/20' },
}
export default function StatusBadge({ status }) {
  const { label, cls } = config[status] ?? config.pending
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${cls}`}>
      {label}
    </span>
  )
}