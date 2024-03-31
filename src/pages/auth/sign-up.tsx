import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

const signUpForm = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const { register, handleSubmit } = useForm<SignUpForm>()

  function handleSignUp(data: SignUpForm) {
    console.log(data)
  }

  return (
    <>
      <Helmet title="Cadastrar" />
      <div className="flex flex-col justify-center px-24">
        <h1 className="text-2xl font-normal text-zinc-50">Cadastrar</h1>
        <span className="mb-9 text-sm text-zinc-400">
          Conecte-se para fazer a diferença
        </span>

        <form className="flex flex-col" onSubmit={handleSubmit(handleSignUp)}>
          <input
            type="text"
            placeholder="Nome completo"
            className="mb-4 w-full rounded border-2 border-solid border-zinc-400 bg-transparent px-4 py-4 text-zinc-50"
            {...register('name')}
          />

          <input
            type="text"
            placeholder="Email"
            className="mb-4 w-full rounded border-2 border-solid border-zinc-400 bg-transparent px-4 py-4 text-zinc-50"
            {...register('email')}
          />

          <input
            type="password"
            placeholder="Senha"
            className="mb-8 rounded border-2 border-solid border-zinc-400 bg-transparent px-4 py-4 text-zinc-50"
            {...register('password')}
          />

          <button
            type="submit"
            className="mb-8 w-full rounded bg-green-700 p-3 text-zinc-50"
          >
            CADASTRAR
          </button>
        </form>

        <span className="text-center text-sm text-zinc-400">
          Já tem uma conta?{' '}
          <Link to="/sign-in" className="text-green-700">
            Entrar
          </Link>
        </span>
      </div>
    </>
  )
}
