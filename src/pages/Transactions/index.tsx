import { Header } from '../../components/header'
import Summary from '../../components/summary'
import { SearchForm } from './components/SearchForm'
import {
  PaginateContainer,
  PriceHighLight,
  TransactionContainer,
  TransactionsTable,
} from './styles'
import { TransactionContext } from '../../contexts'
import { priceFormatter, formatteDate } from '../../@utils/formatter'
import { useContextSelector } from 'use-context-selector'
import { useEffect, useState } from 'react'
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from 'phosphor-react'
export const Transactions = () => {
  const [paginate, setPaginate] = useState(1)
  const [pageNumber, setPageNumber] = useState<number[]>([])
  const transactionsPerPage = 5

  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  const indexOfLastTransaction = paginate * transactionsPerPage
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage
  const currentPage = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction,
  )

  useEffect(() => {
    const totalPages = Math.ceil(transactions.length / transactionsPerPage)
    const pageNumbersArray = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbersArray.push(i)
    }
    setPageNumber(pageNumbersArray)
  }, [transactions])

  function handleNextPage() {
    setPaginate(paginate + 1)
  }

  function handleBeforePage() {
    setPaginate(paginate - 1)
  }

  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {currentPage.map((prev) => {
              return (
                <>
                  <tr key={prev.id}>
                    <td width="50%">{prev.description}</td>
                    <td>
                      <PriceHighLight variant={prev.type}>
                        {priceFormatter.format(prev.price)}
                      </PriceHighLight>
                    </td>
                    <td>{prev.category}</td>
                    <td>{formatteDate.format(new Date(prev.createdAt))}</td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </TransactionsTable>
        <PaginateContainer>
          <CaretDoubleLeft size={15} onClick={() => setPaginate(1)} />
          <CaretLeft size={15} onClick={handleBeforePage} />
          <span>{`${paginate} / ${pageNumber.length}`}</span>
          <CaretRight size={15} onClick={handleNextPage} />
          <CaretDoubleRight
            size={15}
            onClick={() => setPaginate(pageNumber.length)}
          />
        </PaginateContainer>
      </TransactionContainer>
    </div>
  )
}
