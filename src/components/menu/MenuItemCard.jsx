import { useCart } from '../../hooks/useCart'

export default function MenuItemCard({ item }) {
  const { addItem, items, updateQty, removeItem } = useCart()
  const inCart = items.find(i => i.id === item.id)

  return (
    <div className="group bg-white rounded-xl border border-[#f4f2f1] shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full">
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="text-[#171412] font-bold text-base leading-tight">{item.name}</h3>
          <span className="text-[#171412] font-bold text-base shrink-0">₹{item.price}</span>
        </div>
        <p className="text-text-sub text-sm leading-relaxed line-clamp-2 mb-4 flex-1">{item.description}</p>

        {!item.available ? (
          <div className="w-full text-center py-2 rounded-lg bg-[#f4f2f1] text-text-sub text-sm font-medium">
            Unavailable
          </div>
        ) : !inCart ? (
          <button
            onClick={() => addItem({ id: item.id, name: item.name, price: item.price })}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>Add to Order</span>
          </button>
        ) : (
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => inCart.qty === 1 ? removeItem(item.id) : updateQty(item.id, inCart.qty - 1)}
              className="size-9 rounded-lg bg-[#f4f2f1] hover:bg-primary/10 flex items-center justify-center font-bold text-lg transition-colors"
            >−</button>
            <span className="font-bold text-[#171412]">{inCart.qty}</span>
            <button
              onClick={() => updateQty(item.id, inCart.qty + 1)}
              className="size-9 rounded-lg bg-primary hover:bg-primary/90 text-white flex items-center justify-center font-bold text-lg transition-colors"
            >+</button>
          </div>
        )}
      </div>
    </div>
  )
}