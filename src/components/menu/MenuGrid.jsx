import MenuItemCard from './MenuItemCard'

export default function MenuGrid({ items }) {
  if (!items.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-text-sub">
        <span className="material-symbols-outlined text-5xl mb-3">coffee_off</span>
        <p className="font-medium">No items found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map(item => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}