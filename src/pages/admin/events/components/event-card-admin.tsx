import { CaretRight } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Clock, MapPin, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Tag } from '../../../_layouts/components/tag'
import { DeleteEventModal } from '../components/delete-event-modal'

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

export function EventCardAdmin({
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
  function handleViewEventInfo() {
    navigate(`/event/${id}`)
  }

  const dateFormated = format(new Date(date), 'dd MMM yyyy HH:mm', {
    locale: ptBR,
  }).toUpperCase()

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
      <div className="flex justify-end gap-2">
        <button
          onClick={handleViewEventInfo}
          className="flex items-center justify-center gap-1 rounded border-1 border-green-700 bg-transparent p-2 text-sm text-green-700"
        >
          <span>VER MAIS</span> <CaretRight size={12} />
        </button>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className=" flex items-center justify-center gap-1 rounded bg-red-600 p-2 text-sm text-zinc-50">
              <span>EXCLUIR</span>
            </button>
          </Dialog.Trigger>

          <DeleteEventModal />
        </Dialog.Root>
      </div>
    </div>
  )
}
