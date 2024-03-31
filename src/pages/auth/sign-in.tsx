import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

const signInForm = z.object({
  email: z.string(),
  password: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<SignInForm>()

  function handleSignIn(data: SignInForm) {
    console.log(data)

    navigate('/')
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="flex flex-col justify-center px-24 ">
        <h1 className="text-2xl font-normal text-zinc-50">Entrar</h1>
        <span className="mb-9 text-sm text-zinc-400">
          Conecte-se para fazer a diferença
        </span>

        <form className="flex flex-col" onSubmit={handleSubmit(handleSignIn)}>
          <input
            type="email"
            placeholder="Email"
            className="mb-4 w-full rounded border-2 border-solid border-zinc-400 bg-transparent px-4 py-4 text-zinc-50"
            {...register('email')}
          />

          <input
            type="password"
            placeholder="Senha"
            className="mb-2 rounded border-2 border-solid border-zinc-400 bg-transparent px-4 py-4 text-zinc-50"
            {...register('password')}
          />
          <a href="#" className="mb-8 text-sm text-green-700">
            Esqueceu a senha?
          </a>

          <button
            type="submit"
            className="mb-8 w-full rounded bg-green-700 p-3  text-zinc-50"
          >
            ENTRAR
          </button>
        </form>

        <span className="text-center text-sm text-zinc-400">
          Ainda não tem conta?{' '}
          <Link to="/sign-up" className="text-green-700">
            Criar conta
          </Link>
        </span>
      </div>
    </>
  )
}
