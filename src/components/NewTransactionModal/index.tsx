import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './style'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../contexts'
import { useContextSelector } from 'use-context-selector'

const newTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  type: z.enum(['income', 'outcome']),
  category: z.string(),
})

type NewTransactionModalProps = z.infer<typeof newTransactionSchema>

export const NewTransactionModal = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionModalProps>({
    resolver: zodResolver(newTransactionSchema),
  })

  const createNewTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.createNewTransactions
    },
  )

  async function handleCreateNewTransaction(data: NewTransactionModalProps) {
    const { description, price, type, category } = data
    await createNewTransactions({
      description,
      price,
      type,
      category,
    })
    reset()
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={25} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
            required
          />
          <input
            type="number"
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
            required
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton
                    value="income"
                    variant="income"
                    {...register('type')}
                  >
                    <ArrowCircleUp size={20} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton
                    value="outcome"
                    variant="outcome"
                    {...register('type')}
                  >
                    <ArrowCircleDown size={20} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
