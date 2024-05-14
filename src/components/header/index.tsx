import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style"
import LogoImg from '../../assets/logo.svg'
export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="Logo" />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
