import { Header } from '../../components/header'
import Summary from '../../components/summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionContainer,
  TransactionsTable,
} from './styles'
import { TransactionContext } from '../../contexts'
import { priceFormatter, formatteDate } from '../../@utils/formatter'
import { useContextSelector } from 'use-context-selector'
export const Transactions = () => {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((prev) => {
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
      </TransactionContainer>
    </div>
  )
}
