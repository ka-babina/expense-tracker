export type TransactionType = 'income' | 'expense'
export interface Category {
  id: string
  name: string
  color: string
}
export interface Transaction {
  id: string
  amount: number
  categoryId: string
  date: string
  type: TransactionType
  note?: string
}
export type NewTransaction = Omit<Transaction, 'id'>
