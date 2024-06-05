import { SignUpContainer, SignUpContent, SignUpForm } from './style'
import Zod, { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const singUpSchema = Zod.object({
  name: Zod.string(),
  email: Zod.string().email(),
  password: Zod.string().min(6),
  confirmPassword: Zod.string().min(6),
}).superRefine(({ password, confirmPassword }, ctx) => {
  if (password !== confirmPassword) {
    ctx.addIssue({
      code: 'custom',
      path: ['confirmPassword'],
      message: 'As senhas devem ser iguais',
    })
  }
})

type SingUpFormProps = z.infer<typeof singUpSchema>

export const SingUp = () => {
  const { handleSubmit, register } = useForm<SingUpFormProps>({
    resolver: zodResolver(singUpSchema),
  })

  return (
    <SignUpContainer>
      <SignUpContent>
        <SignUpForm onSubmit={handleSubmit()}>
          <h1>Cadastro</h1>
          <input
            type="text"
            placeholder="Nome"
            {...register('name')}
            required
          />
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            {...register('password')}
            required
          />
          <input
            type="password"
            placeholder="Confirme a Senha"
            {...register('confirmPassword')}
            required
          />
          <button type="submit">Entrar</button>
        </SignUpForm>
      </SignUpContent>
    </SignUpContainer>
  )
}
