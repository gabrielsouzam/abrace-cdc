import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

const signUpForm = z.object({
  name: z.string().min(1, 'O campo nome é obrigatorio'),
  email: z.string().email('Formato de e-mail inválido'),
  password: z.string().min(6, 'A senha teve ter no mínimo 6 caracteres'),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm),
  })

  function handleSignUp(data: SignUpForm) {
    console.log(data)
  }

  return (
    <>
      <Helmet title="Cadastrar" />
      <div className="flex flex-col justify-center px-24">
        <h1 className="text-2xl font-normal text-zinc-900">Cadastrar</h1>
        <span className="mb-9 text-sm text-zinc-400">
          Conecte-se para fazer a diferença
        </span>

        <form className="flex flex-col" onSubmit={handleSubmit(handleSignUp)}>
          <input
            data-error={!!errors.name}
            type="text"
            placeholder="Nome completo"
            className="mb-2 w-full rounded border-1 border-solid border-zinc-400 bg-transparent px-4 py-4 text-zinc-900 data-[error=true]:border-red-500"
            {...register('name')}
          />

          {errors.name && (
            <span className="mb-4 text-sm text-red-500">
              {errors.name.message}
            </span>
          )}

          <input
            data-error={!!errors.email}
            type="email"
            placeholder="Email"
            className="mb-2 mt-2 w-full rounded border-1 border-solid border-zinc-400 bg-transparent px-4 py-4 text-zinc-900 data-[error=true]:border-red-500"
            {...register('email')}
          />

          {errors.email && (
            <span className="mb-4 text-sm text-red-500">
              {errors.email.message}
            </span>
          )}

          <input
            data-error={!!errors.password}
            type="password"
            placeholder="Senha"
            className="mb-2 mt-2 rounded border-1 border-solid border-zinc-400 bg-transparent px-4 py-4 text-zinc-900 data-[error=true]:border-red-500"
            {...register('password')}
          />

          {errors.password && (
            <span className="mb-4 text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
          <button
            type="submit"
            className="mb-8 mt-8 w-full rounded bg-green-700 p-3 text-zinc-50 hover:bg-green-600"
          >
            CADASTRAR
          </button>
        </form>

        <span className="text-center text-sm text-zinc-400">
          Já tem uma conta?{' '}
          <Link to="/sign-in" className="text-green-700 ">
            Entrar
          </Link>
        </span>
      </div>
    </>
  )
}
