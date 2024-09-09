import { Heart, MapPin, ThumbsUp, User } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Event } from '../../../@types/Event'
import Doacao from '../../../assets/Doacao.png'
import { api } from '../../../lib/axios'

export function EventInfo() {
  const { id } = useParams()

  const [event, setEvent] = useState<Event>()

  useEffect(() => {
    async function getEvent() {
      const response = await api.get(`/api/events/${id}`)
      setEvent(response.data)
      console.log(response.data)
    }

    getEvent()
  }, [id])

  return (
    <div className="mb-20 flex flex-col items-center px-20">
      <h1 className="mb-4 text-2xl font-medium">{event?.title}</h1>

      <div className="w-full rounded border-1 border-zinc-200 pb-4 shadow-lg">
        <div className="flex items-center gap-4 px-4 pt-4">
          <div className=" flex h-8 w-8 items-center justify-center rounded-full bg-zinc-300">
            <User weight="fill" size={16} className="text-zinc-900" />
          </div>
          <div>
            <span>{event?.organizer.name}</span>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-green-500" />
              <span className="text-sm text-zinc-500">
                {event?.address.road}, {event?.address.city},{' '}
                {event?.address.number}
              </span>
            </div>
          </div>
        </div>
        <div className="px-6 py-4">
          <span className="text-sm text-zinc-500">{event?.description}</span>
        </div>

        <img
          src={Doacao}
          alt=""
          className="w-full border-1 border-zinc-200 object-cover"
        />

        <div className="flex items-center gap-2 px-6 py-6">
          <button className="flex items-center gap-3 rounded-full border-none bg-zinc-200 p-2">
            <ThumbsUp className="text-green-500" size={20} weight="fill" />
            <span className="text-sm text-zinc-800">Gostei</span>
          </button>

          <span className="text-sm text-zinc-800">50,230 gosteis</span>
        </div>
      </div>
    </div>
  )
}
