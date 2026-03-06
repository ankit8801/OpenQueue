import { useEffect, useState } from 'react'
import { useSearchParams }     from 'react-router-dom'
import { getNextToken }        from '../firebase/counter'

/**
 * Reads table number from URL (?table=4).
 * Generates a unique token number via Firestore atomic counter — once per session.
 * Both values are stable for the lifetime of the page session.
 */
export function useTableAndToken() {
  const [searchParams]          = useSearchParams()
  const [tokenNumber, setToken] = useState(null)
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)

  const tableNumber = searchParams.get('table') ?? '1'

  useEffect(() => {
    // Only generate token once per session — store in sessionStorage
    const cached = sessionStorage.getItem('tokenNumber')
    if (cached) {
      setToken(Number(cached))
      setLoading(false)
      return
    }
    getNextToken()
      .then(n => {
        sessionStorage.setItem('tokenNumber', String(n))
        setToken(n)
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return { tableNumber, tokenNumber, loading, error }
}