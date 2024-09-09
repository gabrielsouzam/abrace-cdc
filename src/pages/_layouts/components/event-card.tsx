import { ThumbsUp } from '@phosphor-icons/react'
import { format } from 'date-fns'
import { ChevronRight, Clock, MapPin, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Tag } from './tag'

interface EventCardProps {
  image: string
  title: string
  subtitle: string
  author: string
  locale: string
  date: string
  tag: string
  id: string
}

export function EventCard({
  image,
  title,
  subtitle,
  author,
  locale,
  date,
  tag,
  id,
}: EventCardProps) {
  const navigate = useNavigate()
  const dateFormated = format(new Date(date), 'dd/MM/yyyy HH:mm')

  function handleViewEventInfo() {
    navigate(`/event/${id}`)
  }
  return (
    <div className="w-[23.75rem] rounded border-1 border-zinc-200">
      <div className="relative">
        <img src={image} alt="Imagem do Evento" className="mb-6" />

        <div className="absolute inset-0 rounded-t bg-zinc-950 opacity-50" />
      </div>

      <div className="ml-4 mr-4 mt-6">
        <p className="text-xl font-medium text-zinc-950">{title}</p>
        <p className="mt-2 text-base font-medium text-zinc-500   ">
          {subtitle}
        </p>
      </div>

      <div className="ml-4 mt-4 flex flex-row gap-2">
        <Tag text={tag} />
      </div>

      <div className="ml-4 mt-6">
        <div className="mb-1 flex flex-row items-center">
          <User color="#22C55E" size={14} />

          <p className="ml-2 text-sm font-medium text-zinc-500">{author}</p>
        </div>

        <div className="mb-1 flex flex-row items-center">
          <MapPin color="#22C55E" size={14} />

          <p className="ml-2 text-sm font-medium text-zinc-500">{locale}</p>
        </div>

        <div className="flex flex-row items-center">
          <Clock color="#22C55E" size={14} />

          <p className="ml-2 text-sm font-medium text-zinc-500">
            {dateFormated}
          </p>
        </div>
      </div>

      <div className="ml-4 mr-4 mt-4 flex flex-row justify-between pb-2">
        <button
          onClick={handleViewEventInfo}
          className="flex h-10 w-32 flex-row items-center justify-center rounded bg-green-700 text-zinc-50"
        >
          Ver Mais
          <ChevronRight color="#FAFAFA" size={20} />
        </button>

        <div className="flex flex-row">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-300">
            <ThumbsUp color="#71717A" size={24} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  )
}
