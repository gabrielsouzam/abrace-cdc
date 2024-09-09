import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Action } from '../../../@types/Action'
import { api } from '../../../lib/axios'
import { ActionCard } from './components/action-card'

export function Actions() {
  const [actions, setActions] = useState<Action[]>()

  useEffect(() => {
    async function getAllActions() {
      const response = await api.get('/action/')
      console.log(response.data)
      setActions(response.data)
    }

    getAllActions()
  }, [])

  return (
    <>
      <Helmet title="Actions" />
      <div className="mb-20 px-14 text-zinc-900">
        <div className="mb-11 flex justify-between">
          <h1 className="text-4xl font-semibold">Ações</h1>
          <form className="space-x-4">
            <input
              placeholder="Categoria"
              className="rounded border-1 border-zinc-500 bg-transparent px-2 py-1 placeholder-gray-400"
            />
            <input
              placeholder="Bairro"
              className="rounded border-1 border-zinc-500 bg-transparent px-2 py-1 placeholder-gray-400"
            />
          </form>
        </div>

        <div className="grid w-full grid-cols-3 gap-10">
          {actions?.map((action) => {
            return (
              <ActionCard
                key={action.id}
                title={action.title}
                subtile={action.subtitle}
                category={action.categoryEntity.name}
                id={action.id}
                actionImage={
                  action.registers.length > 0 && action.registers[0].urlImage
                    ? action.registers[0].urlImage
                    : null
                }
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
