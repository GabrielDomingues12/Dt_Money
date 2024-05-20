import { HeaderContainer, HeaderContent, NewTransactionButton } from './style'
import LogoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="Logo" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>Nova transação</Dialog.Title>
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
