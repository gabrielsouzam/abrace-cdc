import { Heart, MapPin, ThumbsUp, User } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Action } from '../../../@types/Action'
import { api } from '../../../lib/axios'
import ActionInfoImage from './../../../assets/action-info-image.svg'
import { LineLevelBig } from './components/line-level-big'

export function ActionInfo() {
  const { id } = useParams()

  const [action, setAction] = useState<Action>()

  useEffect(() => {
    async function getAction() {
      const response = await api.get(`/action/${id}`)
      setAction(response.data)
      console.log(response.data)
    }

    getAction()
  }, [id])

  return (
    <div className="mb-20 flex flex-col items-center px-20">
      <h1 className="mb-4 text-2xl font-medium">{action?.title}</h1>

      <div className="w-full rounded border-1 border-zinc-200 pb-4 shadow-lg">
        <div className="flex items-center gap-4 px-4 pt-4">
          <div className=" flex h-8 w-8 items-center justify-center rounded-full bg-zinc-300">
            <User weight="fill" size={16} className="text-zinc-900" />
          </div>
          <div>
            <span>{action?.organizerEntity.name}</span>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-green-500" />
              <span className="text-sm text-zinc-500">
                {action?.addressEntity.road}, {action?.addressEntity.city},{' '}
                {action?.addressEntity.number}
              </span>
            </div>
          </div>
        </div>
        <div className="px-6 py-4">
          <span className="text-sm text-zinc-500">{action?.description}</span>
        </div>

        <img
          src={ActionInfoImage}
          alt=""
          className="w-full border-1 border-zinc-200 object-cover"
        />

        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">50%</span>
            <LineLevelBig level={30} />
          </div>

          <button className="flex items-center justify-center gap-1 rounded bg-green-700 px-5 py-2 text-zinc-50">
            <Heart weight="fill" size={24} />
            <span className="font-medium">DOE</span>
          </button>
        </div>

        <div className="flex items-center gap-2 px-6">
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
