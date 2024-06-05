import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { TransactionProvider } from './contexts'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </TransactionProvider>
    </ThemeProvider>
  )
}

export default App
