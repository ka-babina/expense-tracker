import { collection, addDoc, doc, getDocs, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Transaction, NewTransaction, Category } from '../types'

export const useTransactionsStore = defineStore('transactions', () => {
  const transactions = ref<Transaction[]>([])
  const categories = ref<Category[]>([])

  async function fetchTransactions() {
    const querySnapshot = await getDocs(collection(db, 'transactions'))
    transactions.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Transaction[]
  }
  async function addTransaction(newTransaction: NewTransaction) {
    const docRef = await addDoc(collection(db, 'transactions'), newTransaction)
    transactions.value.push({ id: docRef.id, ...newTransaction })
  }
  async function deleteTransaction(id: string) {
    await deleteDoc(doc(db, 'transactions', id))
    transactions.value = transactions.value.filter((t) => t.id !== id)
  }
  async function fetchCategories() {
    const querySnapshot = await getDocs(collection(db, 'categories'))
    categories.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Category[]
  }

  return {
    transactions,
    categories,
    fetchTransactions,
    addTransaction,
    deleteTransaction,
    fetchCategories,
  }
})
