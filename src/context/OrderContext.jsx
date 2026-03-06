import { createContext, useContext, useEffect, useState } from 'react'
import { listenOrders } from '../firebase/orders'

const OrderContext = createContext(null)

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = listenOrders(data => {
      setOrders(data)
      setLoading(false)
    })
    return unsub
  }, [])

  return (
    <OrderContext.Provider value={{ orders, loading }}>
      {children}
    </OrderContext.Provider>
  )
}

export function useOrderContext() {
  return useContext(OrderContext)
}