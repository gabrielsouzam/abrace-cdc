import { Link } from 'react-router-dom'

import Logo from './../../../assets/logo.svg'

export function AppHeaderAdmin() {
  return (
    <header className="mb-28 flex items-center justify-between gap-16 px-36 py-8">
      <Link to="/">
        <img className="24" src={Logo} alt="Logo Casa da Caridade" />
      </Link>

      <div className="flex flex-row items-center gap-6">
        <nav className="text-normal space-x-14">
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
            DOADORES
          </Link>
        </nav>
      </div>

      <Link
        to="choose-donation"
        className="text-l flex items-center gap-2 rounded bg-green-700 px-3 py-2 font-medium text-zinc-50"
      >
        CRIAR
      </Link>
    </header>
  )
}
