import { doc, runTransaction } from 'firebase/firestore'
import { db } from './config'

/**
 * Atomically increments the token counter and returns the next token number.
 * Firestore doc: counters/tokenCounter  { current: number }
 * Creates the doc at 0 if it doesn't exist yet.
 */
export async function getNextToken() {
  const ref = doc(db, 'counters', 'tokenCounter')
  const nextToken = await runTransaction(db, async (tx) => {
    const snap = await tx.get(ref)
    const current = snap.exists() ? snap.data().current : 0
    const next = current + 1
    tx.set(ref, { current: next })
    return next
  })
  return nextToken
}