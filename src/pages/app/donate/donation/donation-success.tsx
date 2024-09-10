import { Check } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { DonationStage } from './components/donation-stage'

export function DonationSuccess() {
  return (
    <div>
      <Helmet title="Concluído" />
      <DonationStage stage={3} />

      <div className="mb-18 flex flex-col items-center">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-600">
          <Check className="h-8 w-8 text-zinc-50" />
        </div>

        <h1 className="mb-2 text-xl font-semibold text-zinc-900">
          Sua doação foi aprovada!
        </h1>
        <span className="text-sm text-zinc-400">
          Obrigado por fazer a diferença
        </span>
      </div>

      <Link
        to="/"
        className="block w-full rounded bg-green-700 py-2 text-center text-zinc-50"
      >
        VOLTAR PARA TELA INICIAL
      </Link>
    </div>
  )
}
