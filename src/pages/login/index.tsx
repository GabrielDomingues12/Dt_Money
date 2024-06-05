import { Link } from 'react-router-dom'
import { LoginContainer, LoginContent, LoginForm } from './style'
import Zod, { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const loginSchema = Zod.object({
  email: Zod.string().email(),
  password: Zod.string().min(6),
})

type LoginFormProps = z.infer<typeof loginSchema>

export const Login = () => {
  const { handleSubmit, register } = useForm<LoginFormProps>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <LoginContainer>
      <LoginContent>
        <LoginForm onSubmit={handleSubmit()}>
          <h1>Login</h1>
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
          <button type="submit">Entrar</button>
          <Link to="signup">Não possuo cadastro</Link>
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  )
}
