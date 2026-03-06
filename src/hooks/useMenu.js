import { useState, useEffect } from 'react'
import { MENU_ITEMS, CATEGORIES } from '../data/menuSeed'
// TODO: swap to Firestore once menu collection is seeded:
// import { getMenuItems } from '../firebase/menu'

export function useMenu() {
  const [items, setItems]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    try {
      setItems(MENU_ITEMS)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { items, categories: CATEGORIES, loading, error }
}