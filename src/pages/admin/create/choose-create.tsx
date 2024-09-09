import { Plus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export function ChooseCreate() {
  return (
    <>
      <Helmet title="Criar" />
      <div className="in flex flex-col items-center space-y-8">
        <h1 className="mt-16 text-2xl font-semibold text-zinc-900">
          O que você deseja criar?
        </h1>

        <div className="flex items-center gap-16">
          <Link
            to="/admin/create/create-event"
            className="flex h-50 w-50 flex-col items-center justify-center gap-8 rounded bg-zinc-50  hover:bg-zinc-300"
          >
            <Plus height="fill" className="h-16 w-18 text-green-500" />
            <span className="font-semibold text-zinc-900">Novo evento</span>
          </Link>
          <Link
            to="/admin/create"
            className="flex h-50 w-50 flex-col items-center justify-center gap-8 rounded bg-zinc-50 hover:bg-zinc-300"
          >
            <Plus height="fill" className="h-16 w-18 text-green-500" />
            <span className="font-semibold text-zinc-900">Nova ação</span>
          </Link>
        </div>
      </div>
    </>
  )
}
