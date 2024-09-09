import { CaretRight } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useNavigate } from 'react-router-dom'

import cardImage from './../../../../assets/donation-card-image.svg'
import { DeleteActionModal } from './delete-action-modal'
import { LineLevel } from './line-level'

interface ActionCardProps {
  title: string
  id: string
  subtile: string
  category: string
  actionImage: string | null
}

export function ActionCardAdmin({
  title,
  subtile,
  category,
  actionImage,
  id,
}: ActionCardProps) {
  const navigate = useNavigate()
  let urlImage = cardImage

  if (actionImage) {
    urlImage = actionImage
  }

  function handleViewActionInfo() {
    navigate(`/action/${id}`)
  }

  return (
    <div className="w-[23.75rem] rounded border-1 border-zinc-200">
      <img src={urlImage} alt="" className="mb-6 rounded-t" />

      <div className="mb-4 px-4">
        <h2 className="mb-2 text-xl font-medium text-zinc-800">{title}</h2>
        <span className="text-base text-zinc-500">{subtile}</span>

        <div className="mb-6 mt-4 flex items-center justify-between">
          <div className="space-x-2">
            <span className="rounded-full bg-zinc-300 px-2 py-2 text-sm text-zinc-800">
              {category}
            </span>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <LineLevel level={50} />
          <span className="text-sm text-zinc-800">50%</span>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={handleViewActionInfo}
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

            <DeleteActionModal />
          </Dialog.Root>
        </div>
      </div>
    </div>
  )
}
