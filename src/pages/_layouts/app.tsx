import { Heart } from '@phosphor-icons/react'
import { Search } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

import Logo from './../../assets/logo.svg'

export function AppLayout() {
  return (
    <div className="h-screen bg-zinc-900 text-zinc-50">
      <header className="mb-28 flex items-center gap-12 px-20 py-8">
        <img className="h-9 w-10" src={Logo} alt="" />

        <form className="text-zinc-400">
          <div
            className="flex items-center gap-2 rounded border-2 
          border-solid border-transparent bg-zinc-800 p-3 focus:border-red-500"
          >
            <button>
              <Search size={24} />
            </button>
            <input
              type="text"
              className="w-96 bg-transparent focus:outline-none "
              placeholder="Pesquisar por nome da ação, categoria da ação..."
            />
          </div>
        </form>

        <nav className="text-md space-x-8">
          <Link to="/who-we-are">QUEM SOMOS</Link>
          <Link to="actions">AÇÕES</Link>
          <Link to="events">EVENTOS</Link>
          <Link to="supporters">APOIADORES</Link>
          <Link to="profile">PERIFL</Link>
        </nav>

        <Link
          to="donate"
          className="flex items-center gap-2 rounded bg-blue-700 px-4 py-2"
        >
          <Heart weight="fill" />
          DOE
        </Link>
      </header>
      <Outlet />
    </div>
  )
}
