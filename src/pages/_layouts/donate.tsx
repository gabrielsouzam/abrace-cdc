import { MapPin } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function DonateLayout() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-2 text-xl font-semibold">Casa da caridade</h1>
      <div className="mb-8 flex items-center gap-2">
        <MapPin className="h-4 w-4 text-green-500" />
        <span className="text-sm text-zinc-500">
          Rua Rodrigues Júnior, 111, Centro, Quixadá - CE
        </span>
      </div>

      <Outlet />
    </div>
  )
}
