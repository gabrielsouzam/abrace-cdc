import { Heart } from '@phosphor-icons/react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

import Logo from './../../../assets/logo.svg'

export function AppHeader() {
  return (
    <header className="mb-28 flex items-center gap-8 px-20 py-8">
      <img className="h-9 w-10" src={Logo} alt="" />

      <form className="flex-1 text-zinc-400">
        <div
          className="flex items-center gap-2 rounded border-2 
          border-solid border-transparent bg-zinc-800 p-3 focus:border-red-500"
        >
          <button>
            <Search size={24} />
          </button>
          <input
            type="text"
            className="w-full bg-transparent focus:outline-none"
            placeholder="Pesquisar por nome da ação, categoria da ação..."
          />
        </div>
      </form>

      <nav className="space-x-6">
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
        <Link className="hover:text-zinc-300 active:font-bold" to="supporters">
          APOIADORES
        </Link>
        <Link className="hover:text-zinc-300 active:font-bold" to="profile">
          PERFIL
        </Link>
      </nav>

      <Link
        to="choose-donation"
        className="flex items-center gap-2 rounded bg-green-700 px-4 py-2"
      >
        <Heart weight="fill" />
        DOE
      </Link>
    </header>
  )
}
