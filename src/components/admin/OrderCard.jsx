import { updateOrderStatus } from '../../firebase/orders'
import StatusBadge from '../shared/StatusBadge'

function timeAgo(ts) {
  if (!ts?.toMillis) return ''
  const secs = Math.floor((Date.now() - ts.toMillis()) / 1000)
  if (secs < 60) return 'Just now'
  const mins = Math.floor(secs / 60)
  return `${mins} min${mins > 1 ? 's' : ''} ago`
}

const stripColor = {
  pending:   'bg-gray-400',
  preparing: 'bg-primary animate-pulse',
  ready:     'bg-green-500',
  done:      'bg-blue-400',
}

const actionConfig = {
  pending:   { label: 'Start Preparing', next: 'preparing', cls: 'bg-primary text-text-main hover:bg-primary/90 hover:scale-[1.02]' },
  preparing: { label: 'Mark Ready',      next: 'ready',     cls: 'bg-green-500 text-white hover:bg-green-600 hover:scale-[1.02]' },
  ready:     { label: 'Complete',        next: 'done',      cls: 'bg-neutral-light dark:bg-gray-700 text-text-main dark:text-white hover:bg-neutral-200' },
  done:      null,
}

export default function OrderCard({ order }) {
  const action = actionConfig[order.status]
  const isReady = order.status === 'ready'

  return (
    <div className={`group flex flex-col md:flex-row items-stretch gap-0 md:gap-4 rounded-xl bg-white dark:bg-neutral-dark border border-neutral-light dark:border-neutral-dark/50 shadow-sm hover:shadow-md transition-all overflow-hidden ${isReady ? 'opacity-80 hover:opacity-100' : ''}`}>

      {/* Status strip */}
      <div className={`h-1.5 md:h-auto md:w-2 w-full md:order-first ${stripColor[order.status] ?? 'bg-gray-300'}`} />

      <div className="flex flex-col p-5 gap-4 flex-1">
        {/* Order header */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h3 className="text-text-main dark:text-white text-2xl font-extrabold leading-tight">
                #{order.tokenNumber}
              </h3>
              <StatusBadge status={order.status} />
            </div>
            <p className="text-text-sub dark:text-gray-400 text-sm font-medium">
              Table {order.tableNumber} • {order.items?.length ?? 0} item{order.items?.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="text-right text-xs text-text-sub dark:text-gray-500">
            {timeAgo(order.createdAt)}
          </div>
        </div>

        <div className="border-t border-dashed border-neutral-light dark:border-gray-700 my-1" />

        {/* Item list */}
        <ul className="flex flex-col gap-2 text-sm text-text-main dark:text-gray-200">
          {order.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className={`material-symbols-outlined text-[18px] pt-0.5 ${isReady ? 'text-green-600' : 'text-text-sub'}`}>
                {isReady ? 'check_circle' : 'check_box_outline_blank'}
              </span>
              <span>{item.qty}x {item.name}</span>
              <span className="ml-auto text-text-sub">₹{item.price * item.qty}</span>
            </li>
          ))}
        </ul>

        {/* Total row */}
        {order.total && (
          <p className="text-right text-sm font-bold text-text-main dark:text-white">
            Total: ₹{order.total}
          </p>
        )}

        {/* Action button */}
        {action && (
          <div className="flex gap-3 mt-2 md:justify-end">
            <button
              onClick={() => updateOrderStatus(order.id, action.next)}
              className={`flex flex-1 md:flex-none md:w-40 cursor-pointer items-center justify-center rounded-xl h-10 px-4 font-bold text-sm shadow-sm active:scale-95 transition-all ${action.cls}`}
            >
              {action.label}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}