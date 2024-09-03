import { MapPin } from 'lucide-react'

interface supporterCardProps {
  imgLink: string
  name: string
  startDate: string
  addres: string
  link: string
}

export function SupporterCard({
  imgLink,
  name,
  startDate,
  addres,
  link,
}: supporterCardProps) {
  return (
    <div className="w-[22.5rem] rounded bg-zinc-800">
      <a href={link} className="">
        <img
          src={imgLink}
          alt=""
          className="mb-4 rounded-tl-lg rounded-tr-lg"
        />

        <div className="flex flex-col gap-2 px-4 pb-4">
          <h2 className="text-xl">{name}</h2>

          <span className="text-sm text-zinc-300">{startDate}</span>

          <span className="flex items-center gap-1 text-xs text-green-500">
            <MapPin className="inline" size={12} /> {addres}
          </span>
        </div>
      </a>
    </div>
  )
}
