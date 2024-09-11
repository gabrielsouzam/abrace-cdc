import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Event } from '../../../@types/Event'
import Doacao from '../../../assets/Doacao.png'
import { api } from '../../../lib/axios'
import { EventCardAdmin } from './components/event-card-admin'

export function EventsAdmin() {
  const [events, setEvents] = useState<Event[]>()

  useEffect(() => {
    async function getAllEvents() {
      const response = await api.get('/api/events')
      console.log(response.data)
      setEvents(response.data)
    }

    getAllEvents()
  }, [])

  return (
    <>
      <Helmet title="Events" />
      <div className="mb-20 px-14 text-zinc-900">
        <div className="mb-11 flex justify-between">
          <h1 className="text-4xl font-semibold">Eventos</h1>
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
          {events?.map((event) => {
            return (
              <EventCardAdmin
                image={Doacao}
                title={event.title}
                subtitle={event.caption}
                author={event.organizer.name}
                locale={`${event.address.city}, ${event.address.road}, ${event.address.number}`}
                date={event.dateTime}
                tag={event.category.name}
                key={event.id}
                id={event.id}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
