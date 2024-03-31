import { Star, ThumbsUp } from '@phosphor-icons/react'
import { ChevronRight, Clock, MapPin, User } from 'lucide-react'

import { Tag } from './tag'

type Props = {
  image: string
  title: string
  subtitle: string
  author: string
  locale: string
  date: string
}

export function EventCard({
  image,
  title,
  subtitle,
  author,
  locale,
  date,
}: Props) {
  return (
    <div className="mb-2 w-[448px] rounded bg-zinc-50">
      <div className="relative">
        <img src={image} alt="Imagem do Evento" className="rounded-t" />

        <div className="absolute inset-0 bg-zinc-950 opacity-50" />
      </div>

      <div className="ml-4 mr-4 mt-6">
        <p className="text-xl font-medium text-zinc-950">{title}</p>
        <p className="mt-2 text-base font-medium text-zinc-500   ">
          {subtitle}
        </p>
      </div>

      <div className="ml-4 mt-4 flex flex-row gap-2">
        <Tag text="Doação" />
        <Tag text="Roupas" />
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

          <p className="ml-2 text-sm font-medium text-zinc-500">{date}</p>
        </div>
      </div>

      <div className="ml-4 mr-4 mt-4 flex flex-row justify-between pb-2">
        <button className="flex h-10 w-32 flex-row items-center justify-center rounded bg-green-700">
          Ver Mais
          <ChevronRight color="#FAFAFA" size={20} />
        </button>

        <div className="flex flex-row">
          <button className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-300">
            <ThumbsUp color="#71717A" size={24} weight="fill" />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-300">
            <Star color="#71717A" size={24} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  )
}
