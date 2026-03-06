import { useCartContext } from '../context/CartContext'

export function useCart() {
  const { state, dispatch } = useCartContext()

  const addItem    = item => dispatch({ type: 'ADD_ITEM', item })
  const removeItem = id   => dispatch({ type: 'REMOVE_ITEM', id })
  const updateQty  = (id, qty) => dispatch({ type: 'UPDATE_QTY', id, qty })
  const setTable   = tableNumber => dispatch({ type: 'SET_TABLE', tableNumber })
  const clearCart  = () => dispatch({ type: 'CLEAR_CART' })

  const itemCount = state.items.reduce((sum, i) => sum + i.qty, 0)
  const total     = state.items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return {
    items: state.items,
    tableNumber: state.tableNumber,
    itemCount,
    total,
    addItem,
    removeItem,
    updateQty,
    setTable,
    clearCart,
  }
}