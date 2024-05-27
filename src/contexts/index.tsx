import { useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'
interface TransactionData {
  id: number
  createdAt: string
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
}

interface CreateTransactionsProps {
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
}

interface TransactionContextType {
  transactions: TransactionData[]
  fetchTransactions: (query?: string) => Promise<void>
  createNewTransactions: (data: CreateTransactionsProps) => Promise<void>
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionData[]>([])

  const createNewTransactions = useCallback(
    async (input: CreateTransactionsProps) => {
      const { description, category, price, type } = input

      const response = await api.post('transactions', {
        description,
        category,
        price,
        type,
        createdAt: new Date(),
      })

      setTransactions((prev) => [...prev, response.data])
    },
    [],
  )

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createNewTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
