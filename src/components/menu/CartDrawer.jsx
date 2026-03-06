import { useState } from 'react'
import { useCart }   from '../../hooks/useCart'
import { addOrder }  from '../../firebase/orders'

export default function CartDrawer({ open, onClose, tableNumber, tokenNumber }) {
  const { items, total, itemCount, updateQty, removeItem, clearCart } = useCart()
  const [placing, setPlacing] = useState(false)
  const [placed, setPlaced]   = useState(false)
  const [err, setErr]         = useState(null)

  async function handlePlaceOrder() {
    if (!items.length || !tokenNumber) return
    setPlacing(true)
    setErr(null)
    try {
      await addOrder({
        tableNumber,
        tokenNumber,
        items: items.map(i => ({
          id:    i.id,
          name:  i.name,
          price: i.price,
          qty:   i.qty,
        })),
        total,
      })
      setPlaced(true)
      clearCart()
      setTimeout(() => { setPlaced(false); onClose() }, 2500)
    } catch (e) {
      setErr('Failed to place order. Please try again.')
      console.error(e)
    } finally {
      setPlacing(false)
    }
  }

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-2xl max-h-[85vh] flex flex-col max-w-[960px] mx-auto">

        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-neutral-light" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#f4f2f1]">
          <h2 className="text-[#171412] text-xl font-black">Your Order</h2>
          <button
            onClick={onClose}
            className="size-9 rounded-lg bg-[#f4f2f1] flex items-center justify-center hover:bg-neutral-light transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Success state */}
        {placed ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 py-12">
            <span className="material-symbols-outlined text-7xl text-green-500">check_circle</span>
            <p className="text-2xl font-black text-[#171412]">Order Placed!</p>
            <div className="bg-[#f4f2f1] rounded-xl px-6 py-3 text-center">
              <p className="text-text-sub text-xs font-bold uppercase tracking-wider">Your Token</p>
              <p className="text-[#171412] text-4xl font-black">#{tokenNumber}</p>
              <p className="text-text-sub text-xs mt-1">Table {tableNumber}</p>
            </div>
            <p className="text-text-sub text-sm">Watch the display screen for your number.</p>
          </div>
        ) : (
          <>
            {/* Cart items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-text-sub gap-3">
                  <span className="material-symbols-outlined text-5xl">shopping_cart</span>
                  <p className="font-medium">Your cart is empty</p>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex items-center gap-3 py-1">
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[#171412] text-sm truncate">{item.name}</p>
                      <p className="text-text-sub text-xs">₹{item.price} each</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => item.qty === 1 ? removeItem(item.id) : updateQty(item.id, item.qty - 1)}
                        className="size-7 rounded-md bg-[#f4f2f1] hover:bg-primary/10 flex items-center justify-center font-bold text-base transition-colors"
                      >−</button>
                      <span className="w-5 text-center font-bold text-sm">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="size-7 rounded-md bg-primary hover:bg-primary/90 text-white flex items-center justify-center font-bold text-base transition-colors"
                      >+</button>
                    </div>
                    <span className="w-16 text-right font-bold text-[#171412] text-sm shrink-0">
                      ₹{item.price * item.qty}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-6 pb-8 pt-4 border-t border-[#f4f2f1] flex flex-col gap-3">
              {/* Table + Token info */}
              <div className="flex justify-between text-xs text-text-sub font-medium">
                <span>Table {tableNumber}</span>
                <span>Token #{tokenNumber ?? '...'}</span>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="text-text-sub text-sm font-bold uppercase tracking-wide">
                  Total ({itemCount} item{itemCount !== 1 ? 's' : ''})
                </span>
                <span className="text-[#171412] text-xl font-black">₹{total}</span>
              </div>

              {/* Error */}
              {err && (
                <p className="text-red-500 text-xs font-medium text-center">{err}</p>
              )}

              {/* CTA */}
              <button
                disabled={placing || !items.length || !tokenNumber}
                onClick={handlePlaceOrder}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl py-3.5 flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-sm"
              >
                {placing ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                    Placing Order…
                  </>
                ) : (
                  <>
                    Place Order
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}