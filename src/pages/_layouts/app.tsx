import { TopBar } from "../app/components/TopBar"

export function AppLayout() {
  return (
    <div className="bg-zinc-900 text-zinc-50">
      <header className="mb-28 flex items-center gap-16 px-20 py-8">
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

        <nav className="space-x-10 text-xl">
          <Link className="hover:text-zinc-300" to="/who-we-are">
            QUEM SOMOS
          </Link>
          <Link className="hover:text-zinc-300" to="actions">
            AÇÕES
          </Link>
          <Link className="hover:text-zinc-300" to="events">
            EVENTOS
          </Link>
          <Link className="hover:text-zinc-300" to="supporters">
            APOIADORES
          </Link>
          <Link className="hover:text-zinc-300" to="profile">
            PERFIL
          </Link>
        </nav>

        <Link
          to="donate"
          className="flex items-center gap-2 rounded bg-green-500 px-5 py-3 text-xl"
        >
          <Heart weight="fill" />
          DOE
        </Link>
      </header>
      <Outlet />
    </div>
  )
}
