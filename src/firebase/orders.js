import {
  collection, addDoc, updateDoc, doc,
  onSnapshot, query, orderBy, serverTimestamp
} from 'firebase/firestore'
import { db } from './config'

export async function addOrder(data) {
  return addDoc(collection(db, 'orders'), {
    ...data,
    status: 'pending',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export async function updateOrderStatus(id, status) {
  return updateDoc(doc(db, 'orders', id), {
    status,
    updatedAt: serverTimestamp(),
  })
}

// Returns unsubscribe fn — call on unmount
export function listenOrders(callback) {
  const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'))
  return onSnapshot(q, snap =>
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() })))
  )
}