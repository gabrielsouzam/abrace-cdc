import { CaretRight, Heart, ThumbsUp } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import Cookies from 'js-cookie'
import { JwtPayload } from 'jsonwebtoken'
import { jwtDecode } from 'jwt-decode'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { api } from '../../../../lib/axios'
import cardImage from './../../../../assets/donation-card-image.svg'
import { LineLevel } from './line-level'
import { NewDonationActionModal } from './new-donation-action-modal'

interface ActionCardProps {
  title: string
  id: string
  subtile: string
  category: string
  value: number
  actionImage: string | null
}

interface CustomJwtPayload extends JwtPayload {
  userId?: string
  userRole?: string
}

export function ActionCard({
  title,
  subtile,
  category,
  actionImage,
  id,
  value,
}: ActionCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [userId, setUserId] = useState('')
  const [amount, setAmount] = useState(0)
  const [percentual, setPercentual] = useState(0)
  const navigate = useNavigate()
  let urlImage = cardImage
  const tokenRetrived = Cookies.get('authToken')

  if (actionImage) {
    urlImage = actionImage
  }

  function handleCloseModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    async function getAmount() {
      const response = await api.get(`/action/amount/${id}`)

      setAmount(response.data)

      const percentual = Math.min((amount / value) * 100, 100)

      setPercentual(percentual)
    }

    getAmount()
  }, [id, value, amount, isOpen])

  function handleViewActionInfo() {
    navigate(`/action/${id}`)
  }

  function handleDonateAction() {
    if (tokenRetrived) {
      const decodedToken = jwtDecode<CustomJwtPayload>(tokenRetrived)
      console.log(decodedToken)
      const id = decodedToken.userId
      if (id) {
        setUserId(id)
      }

      setIsOpen(true)
    } else {
      navigate('/sign-up')
      toast.info('É necessário possuir uma conta para doar.')
    }
  }

  return (
    <>
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

            <button className="flex items-center justify-center rounded-full bg-zinc-300 p-2 text-zinc-50">
              <ThumbsUp size={24} weight="fill" />
            </button>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <LineLevel level={percentual} />
            <span className="text-sm text-zinc-800">{percentual}%</span>
          </div>

          <div className="flex justify-end gap-2">
            <button
              onClick={handleViewActionInfo}
              className="flex items-center justify-center gap-1 rounded border-1 border-green-700 bg-transparent p-2 text-sm text-green-700"
            >
              <span>VER MAIS</span> <CaretRight size={12} />
            </button>
            <button
              className=" flex items-center justify-center gap-1 rounded bg-green-700 p-2 text-sm text-zinc-50"
              onClick={handleDonateAction}
            >
              <Heart weight="fill" size={16} />
              <span>DOE</span>
            </button>
          </div>
        </div>
      </div>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <NewDonationActionModal
          title={title}
          actionId={id}
          userId={userId}
          handleCloseModal={handleCloseModal}
        />
      </Dialog.Root>
    </>
  )
}
