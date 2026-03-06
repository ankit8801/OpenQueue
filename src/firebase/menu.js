import {
  collection, getDocs, addDoc, updateDoc, doc, query, orderBy
} from 'firebase/firestore'
import { db } from './config'

export async function getMenuItems() {
  const q = query(collection(db, 'menu'), orderBy('category'))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function addMenuItem(data) {
  return addDoc(collection(db, 'menu'), data)
}

export async function setItemAvailability(id, available) {
  return updateDoc(doc(db, 'menu'), { available })
}