import { Outlet } from 'react-router-dom'

import Logo from '../../assets/logo.svg'

export function AuthLayout() {
  return (
    <div className="flex h-screen items-center bg-zinc-50 ">
      <div className="mx-32 grid grid-cols-2 items-center">
        <Outlet />

        <div className="flex flex-col items-center px-28 text-zinc-900">
          <img src={Logo} alt="" className="mb-8" />

          <span className="mb-4 text-2xl text-zinc-900">
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
    </div>
  )
}
