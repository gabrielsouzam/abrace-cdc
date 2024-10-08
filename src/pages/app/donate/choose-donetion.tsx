import { Heart } from '@phosphor-icons/react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import Logo from './../../../assets/logo.svg'

export function ChooseDonation() {
  return (
    <>
      <Helmet title="Forma doação" />
      <div className="in flex flex-col items-center space-y-8">
        <h1 className="mt-16 text-2xl font-semibold text-zinc-900">
          Para quem você deseja fazer uma ação hoje?
        </h1>

        <div className="flex items-center gap-16">
          <Link
            to="/donate"
            className="flex h-50 w-50 flex-col items-center justify-center gap-8 rounded bg-zinc-50  hover:bg-zinc-300"
          >
            <img src={Logo} alt="" className="h-16 w-18" />
            <span className="font-semibold text-zinc-900">
              Casa de caridade
            </span>
          </Link>
          <Link
            to="/donate/other"
            className="flex h-50 w-50 flex-col items-center justify-center gap-8 rounded bg-zinc-50 hover:bg-zinc-300"
          >
            <Heart weight="fill" className="h-16 w-18 text-green-500" />
            <span className="font-semibold text-zinc-900">Outra ação</span>
          </Link>
        </div>
      </div>
    </>
  )
}
