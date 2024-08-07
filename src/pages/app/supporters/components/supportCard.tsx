import { MapPin } from 'lucide-react'

type Props = {
  image: string
  name: string
  date: string
  locale: string
}

export function SupportCard({ image, name, date, locale }: Props) {
  return (
    <div className="mb-2 w-[360px] rounded bg-zinc-50 pb-1">
      <div className="relative">
        <img src={image} alt="Imagem do Supporter" className="rounded-t" />

        <div className="absolute inset-0 bg-zinc-950 opacity-50" />
      </div>

      <div className="mx-4 mt-6">
        <p className="text-xl font-medium text-zinc-950">{name}</p>
      </div>

      <div className="mx-4 mt-2">
        <p className="text-base font-medium text-zinc-400">Desde {date}</p>
      </div>

      <div className="mx-4 mb-2 mt-2 flex flex-row items-center">
        <MapPin color="#22C55E" size={14} />
        <p className="ml-2 text-sm font-medium text-green-500 underline">
          {locale}
        </p>
      </div>
    </div>
  )
}
