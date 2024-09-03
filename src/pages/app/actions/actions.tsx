import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { api } from '../../../lib/axios'

interface Action {
  id: string
  title: string
  subtitle: string
  addressEntity: {
    cep: string
    city: string
    complement: string
    id: string
    number: number
    road: string
  }
  categoryEntity: {
    description: string
    id: string
    name: string
  }
  organizerEntity: {
    id: string
    name: string
    email: string
    cellphone: string
  }
  registers: {
    id: string
    urlImage: string
    email: string
    description: string
  }[]
  dateTime: string
  description: string
  duration: string
}

export function Actions() {
  const [actions, setActions] = useState<Action[]>()

  useEffect(() => {
    async function getAllActions() {
      const response = await api.get('/action/')
      console.log(response)
      setActions(response.data)
    }

    getAllActions()
  }, [])

  return (
    <>
      <Helmet title="Actions" />
      <div>
        {actions?.map((action) => (
          <div key={action.id} className="text-zinc-900">
            <h1>Titulo: {action.title}</h1>
            <span>Subtitulo: {action.subtitle}</span>
          </div>
        ))}
      </div>
    </>
  )
}
