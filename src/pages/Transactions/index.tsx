import { Header } from '../../components/header'
import Summary from '../../components/summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionContainer,
  TransactionsTable,
} from './styles'

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td> Venda</td>
              <td> 15/05/2024</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td> Venda</td>
              <td> 15/05/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  )
}
