import { useOrderContext } from '../context/OrderContext'

export function useOrders() {
  const { orders, loading } = useOrderContext()

  const pending   = orders.filter(o => o.status === 'pending')
  const preparing = orders.filter(o => o.status === 'preparing')
  const ready     = orders.filter(o => o.status === 'ready')
  const done      = orders.filter(o => o.status === 'done')

  return { orders, pending, preparing, ready, done, loading }
}