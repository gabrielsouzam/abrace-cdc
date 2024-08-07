import { Heart } from '@phosphor-icons/react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

import Logo from './../../../assets/logo.svg'

export function AppHeader() {
  return (
    <header className="mb-28 flex items-center gap-16 px-24 py-8">
      <Link to="/">
        <img className="24" src={Logo} alt="Logo Casa da Caridade" />
      </Link>

      <form className="flex-1 text-zinc-400">
        <div
          className="flex items-center gap-4 rounded border-2 
          border-solid border-transparent bg-zinc-800 p-2 px-4 focus:border-red-500"
        >
          <button>
            <Search size={20} />
          </button>
          <input
            type="text"
            className="text-l w-full bg-transparent focus:outline-none"
            placeholder="Pesquisar por nome da ação, categoria da ação..."
          />
        </div>
      </form>

      <div className="flex flex-row items-center gap-6">
        <nav className="text-normal space-x-6">
          <Link
            title="quemSomos"
            className="hover:text-zinc-300 active:font-bold"
            to="/who-we-are"
          >
            QUEM SOMOS
          </Link>
          <Link className="hover:text-zinc-300 active:font-bold" to="actions">
            AÇÕES
          </Link>
          <Link className="hover:text-zinc-300 active:font-bold" to="events">
            EVENTOS
          </Link>
          <Link
            className="hover:text-zinc-300 active:font-bold"
            to="supporters"
          >
            APOIADORES
          </Link>
          <Link className="hover:text-zinc-300 active:font-bold" to="profile">
            PERFIL
          </Link>
        </nav>

        <Link
          to="choose-donation"
          className="text-l flex items-center gap-2 rounded bg-green-700 px-3 py-2 font-medium"
        >
          <Heart weight="fill" />
          DOE
        </Link>
      </div>
    </header>
  )
}
