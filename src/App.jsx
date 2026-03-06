import { Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider }  from './context/CartContext'
import { OrderProvider } from './context/OrderContext'
import MenuPage          from './pages/MenuPage'
import AdminPage         from './pages/AdminPage'
import DisplayPage       from './pages/DisplayPage'

export default function App() {
  return (
    <OrderProvider>
      <CartProvider>
        <Routes>
          <Route path="/menu"    element={<MenuPage />}    />
          <Route path="/admin"   element={<AdminPage />}   />
          <Route path="/display" element={<DisplayPage />} />
          <Route path="*"        element={<Navigate to="/menu" replace />} />
        </Routes>
      </CartProvider>
    </OrderProvider>
  )
}