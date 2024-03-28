import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import Logo from '../../assets/logo.svg'

const signInForm = z.object({
  email: z.string(),
  password: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { register, handleSubmit } = useForm<SignInForm>()

  function handleSignIn(data: SignInForm) {
    console.log(data)
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="mx-32 grid grid-cols-2">
        <div className="flex flex-col justify-center px-44 py-28">
          <h1 className="text-2xl font-normal text-zinc-50">Entrar</h1>
          <span className="mb-9 text-sm text-zinc-400">
            Conecte-se para fazer a diferença
          </span>

          <form className="flex flex-col" onSubmit={handleSubmit(handleSignIn)}>
            <input
              type="text"
              placeholder="Email"
              className="mb-4 w-full rounded border-2 border-solid border-zinc-400 bg-transparent px-4 py-5 text-zinc-50"
              {...register('email')}
            />

            <input
              type="password"
              placeholder="Senha"
              className="mb-2 rounded border-2 border-solid border-zinc-400 bg-transparent px-4 py-5 text-zinc-50"
              {...register('password')}
            />
            <a href="#" className="mb-8 text-sm text-blue-700">
              Esqueceu a senha?
            </a>

            <button
              type="submit"
              className="mb-8 w-full rounded bg-blue-700 p-2  text-zinc-50"
            >
              ENTRAR
            </button>
          </form>

          <span className="text-center text-sm text-zinc-400">
            Ainda não tem conta?{' '}
            <Link to="#" className="text-blue-700">
              Criar conta
            </Link>
          </span>
        </div>

        <div className="flex flex-col items-center px-56 py-48 text-zinc-50">
          <img src={Logo} alt="" className="mb-8" />

          <span className="mb-4 text-2xl">
            Bem vindo a <strong>Casa de caridade</strong>
          </span>

          <p className="text-justify text-base">
            Somos uma plataforma inovadora que une voluntários, doadores e
            organizações em uma missão comum de fazer a diferença. Aqui, a
            paixão por ajudar encontra as mãos que fazem, criando uma comunidade
            vibrante focada em iniciativas de caridade e esforços de arrecadação
            de fundos.
          </p>
        </div>
      </div>
    </>
  )
}
