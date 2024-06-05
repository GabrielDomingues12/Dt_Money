import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../pages/login'
import { SingUp } from '../pages/signUp'
import { Transactions } from '../pages/Transactions'
import { ErrorPage } from '../pages/errorPage'

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SingUp />,
      },
      {
        path: '/transactions',
        element: <Transactions />,
      },
    ],
  },
])
