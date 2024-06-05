import { ErrorPageContainer, ErrorPageContent } from './style'
import NotFound from '../../assets/404-error.png'

export const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorPageContent>
        <img src={NotFound} alt="Not Found" width={100} />
        <p>Página não encontrada</p>
      </ErrorPageContent>
    </ErrorPageContainer>
  )
}
