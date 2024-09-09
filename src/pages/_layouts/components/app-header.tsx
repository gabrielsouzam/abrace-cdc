import { Heart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import Logo from './../../../assets/logo.svg'

export function AppHeader() {
  return (
    <header className=" mb-20 flex items-center justify-between border-b-1 border-zinc-200 px-32 py-2">
      <Link to="/">
        <img className="24 size-20" src={Logo} alt="Logo Casa da Caridade" />
      </Link>

      <nav className="text-normal space-x-16">
        <Link
          title="quemSomos"
          className="text-zinc-700 hover:text-zinc-950 active:font-bold"
          to="/who-we-are"
        >
          QUEM SOMOS
        </Link>
        <Link
          className="text-zinc-700 hover:text-zinc-900 active:font-bold"
          to="actions"
        >
          AÇÕES
        </Link>
        <Link
          className="text-zinc-700 hover:text-zinc-900 active:font-bold"
          to="events"
        >
          EVENTOS
        </Link>
        <Link
          className="text-zinc-700 hover:text-zinc-900 active:font-bold"
          to="supporters"
        >
          APOIADORES
        </Link>
        <Link
          className="text-zinc-700 hover:text-zinc-900 active:font-bold"
          to="profile"
        >
          PERFIL
        </Link>
      </nav>

      <Link
        to="choose-donation"
        className="text-l flex items-center gap-2 rounded bg-green-700 px-3 py-2 font-medium text-zinc-50"
      >
        <Heart weight="fill" />
        DOE
      </Link>
    </header>
  )
}
