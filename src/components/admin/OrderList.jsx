import OrderCard from './OrderCard'

export default function OrderList({ orders, loading }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-text-sub gap-3">
        <span className="material-symbols-outlined animate-spin text-3xl">progress_activity</span>
        <span className="font-medium">Loading orders…</span>
      </div>
    )
  }
  if (!orders.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-text-sub gap-2">
        <span className="material-symbols-outlined text-5xl">inbox</span>
        <p className="font-medium">No orders here</p>
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-4 pb-20">
      {orders.map(order => <OrderCard key={order.id} order={order} />)}
    </div>
  )
}