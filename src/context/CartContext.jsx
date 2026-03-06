import { createContext, useReducer, useContext } from 'react'

const CartContext = createContext(null)

const initialState = {
  items: [],       // [{ id, name, price, qty, image }]
  tableNumber: null,
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.item.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i
          ),
        }
      }
      return { ...state, items: [...state.items, { ...action.item, qty: 1 }] }
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.id) }
    case 'UPDATE_QTY':
      return {
        ...state,
        items: state.items
          .map(i => i.id === action.id ? { ...i, qty: action.qty } : i)
          .filter(i => i.qty > 0),
      }
    case 'SET_TABLE':
      return { ...state, tableNumber: action.tableNumber }
    case 'CLEAR_CART':
      return initialState
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext)
}