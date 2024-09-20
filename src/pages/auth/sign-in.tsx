import { zodResolver } from '@hookform/resolvers/zod'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { api } from '../../lib/axios'

const signInForm = z.object({
  email: z.string().email('Formato de e-mail inválido'),
  password: z.string().min(6, 'A senha teve ter no mínimo 6 caracteres'),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({ resolver: zodResolver(signInForm) })

  async function handleSignIn(data: SignInForm) {
    setLoading(true)
    try {
      const response = await api.post('/auth/login', {
        email: data.email,
        password: data.password,
      })

      const token = response.data.token
      const expirationDate = new Date(
        new Date().getTime() + 60 * 60 * 24000 * 7,
      ) // 7 dias

      Cookies.set('authToken', token, { expires: expirationDate })

      const tokenRetriced = Cookies.get('authToken')
      console.log(tokenRetriced)
      navigate('/')
    } catch (error) {
      console.error('Erro ao criar a ação:', error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="flex flex-col justify-center px-24 ">
        <h1 className="text-2xl font-normal text-zinc-900">Entrar</h1>
        <span className="mb-9 text-sm text-zinc-400">
          Conecte-se para fazer a diferença
        </span>

        <form className="flex flex-col" onSubmit={handleSubmit(handleSignIn)}>
          <input
            data-error={!!errors.email}
            type="email"
            placeholder="Email"
            className="mb-2 w-full rounded border-1 border-solid border-zinc-400 bg-transparent px-4 py-4 text-zinc-900 data-[error=true]:border-red-500"
            {...register('email')}
          />

          {errors.email && (
            <span className="mb-2 text-sm text-red-500">
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
            <span className="mb-2 text-sm text-red-500">
              {errors.password.message}
            </span>
          )}

          <a href="#" className="mb-8 text-sm text-green-700">
            Esqueceu a senha?
          </a>

          <button
            type="submit"
            disabled={loading}
            className=" w-full rounded bg-green-700 p-3 text-zinc-50 hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? 'Enviando...' : 'ENTRAR'}
          </button>
          {error && (
            <span className="mb-2 mt-2 text-sm text-red-500">
              Senha ou e-mail inválido.
            </span>
          )}
        </form>

        <span className="mt-8 text-center text-sm text-zinc-400">
          Ainda não tem conta?{' '}
          <Link to="/sign-up" className="text-green-700">
            Criar conta
          </Link>
        </span>
      </div>
    </>
  )
}
