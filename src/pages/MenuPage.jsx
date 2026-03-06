import { useState }           from 'react'
import { useMenu }             from '../hooks/useMenu'
import { useCart }             from '../hooks/useCart'
import { useTableAndToken }    from '../hooks/useTableAndToken'
import MenuGrid                from '../components/menu/MenuGrid'
import CartDrawer              from '../components/menu/CartDrawer'

const CATEGORY_ICONS = {
  'All':               'restaurant_menu',
  'Never I Have Ever': 'star',
  'Crazy Potatoes':    'lunch_dining',
  'Quickies':          'bolt',
  'Mexican Tamasha':   'local_fire_department',
  'Between The Bread': 'bakery_dining',
  'Chocolate Chaos':   'cake',
  'Pancakes':          'breakfast_dining',
  'Milky Treat':       'coffee',
  'Cheesecake':        'icecream',
  'Mocktails':         'emoji_food_beverage',
}

export default function MenuPage() {
  const { items, categories, loading: menuLoading } = useMenu()
  const { itemCount, total }                         = useCart()
  const { tableNumber, tokenNumber, loading: tokenLoading, error: tokenError } = useTableAndToken()

  const [activeCategory, setActiveCategory] = useState('All')
  const [cartOpen, setCartOpen]             = useState(false)

  const filtered = activeCategory === 'All'
    ? items
    : items.filter(i => i.category === activeCategory)

  // Token loading gate — prevents duplicate token generation
  if (tokenLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white">
        <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-[28px] animate-spin">progress_activity</span>
        </div>
        <p className="text-text-sub font-medium">Setting up your session…</p>
      </div>
    )
  }

  if (tokenError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white px-6 text-center">
        <span className="material-symbols-outlined text-5xl text-red-400">error</span>
        <p className="text-text-main font-bold">Couldn't connect to the server.</p>
        <p className="text-text-sub text-sm">Please check your internet connection and refresh.</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 bg-primary text-white font-bold rounded-xl px-6 py-3"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[960px] mx-auto bg-white min-h-screen shadow-sm flex flex-col relative overflow-hidden">

      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#f4f2f1] px-6 py-4 sticky top-0 bg-white/95 backdrop-blur-sm z-20">
        <div className="flex items-center gap-3">
          <div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-lg">
            <span className="material-symbols-outlined text-[24px]">coffee</span>
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#171412]">Cafe Twenty Twenty</h1>
            <p className="text-text-sub text-xs font-medium uppercase tracking-wide">
              Table {tableNumber} • Open
            </p>
          </div>
        </div>
        <button
          aria-label="Cart"
          onClick={() => setCartOpen(true)}
          className="relative bg-[#f4f2f1] hover:bg-[#ebe8e6] text-[#171412] p-2 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined">shopping_cart</span>
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
              {itemCount}
            </span>
          )}
        </button>
      </header>

      <main className="flex-1 px-4 py-6" style={{ paddingBottom: '120px' }}>
        <div className="mb-8">
          <h2 className="text-3xl font-black text-[#171412] tracking-tight mb-2">Our Menu</h2>
          <p className="text-text-sub text-base">Order fresh food directly to your table.</p>
        </div>

        {/* Category filter */}
        <div className="flex gap-3 overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 transition-colors active:scale-95 ${
                activeCategory === cat
                  ? 'bg-[#171412] text-white shadow-sm'
                  : 'bg-[#f4f2f1] hover:bg-primary/10 text-[#171412]'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                {CATEGORY_ICONS[cat] ?? 'label'}
              </span>
              <span className={`text-sm whitespace-nowrap ${activeCategory === cat ? 'font-bold' : 'font-medium'}`}>
                {cat}
              </span>
            </button>
          ))}
        </div>

        {menuLoading ? (
          <div className="flex items-center justify-center py-20 text-text-sub gap-3">
            <span className="material-symbols-outlined animate-spin text-3xl">progress_activity</span>
            <span>Loading menu…</span>
          </div>
        ) : (
          <MenuGrid items={filtered} />
        )}

        {/* Token card */}
        <div className="mt-10 mb-6">
          <div className="bg-[#f4f2f1] rounded-xl p-6 text-center border border-[#e5e2e0]">
            <span className="material-symbols-outlined text-4xl text-primary mb-2">receipt_long</span>
            <p className="text-text-sub text-sm uppercase font-bold tracking-wider mb-1">Your Session</p>
            <p className="text-[#171412] text-2xl font-black">Token #{tokenNumber}</p>
            <p className="text-text-sub text-sm mt-1">Table {tableNumber}</p>
            <p className="text-text-sub text-xs mt-2">Watch the display screen for your order status.</p>
          </div>
        </div>
      </main>

      {/* Bottom bar — only when cart has items */}
      {itemCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 w-full z-40 px-4 pb-6 pointer-events-none">
          <div className="max-w-[960px] mx-auto pointer-events-auto">
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#f4f2f1] p-4 flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-text-sub text-xs font-bold uppercase tracking-wide">
                  Total ({itemCount} item{itemCount !== 1 ? 's' : ''})
                </span>
                <span className="text-[#171412] text-xl font-black">₹{total}</span>
              </div>
              <button
                onClick={() => setCartOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white text-base font-bold rounded-xl px-6 py-3 flex items-center gap-2 shadow-sm transition-all active:scale-[0.98]"
              >
                Review Order
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        tableNumber={tableNumber}
        tokenNumber={tokenNumber}
      />
    </div>
  )
}