import { zodResolver } from '@hookform/resolvers/zod'
import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { api } from '../../../../lib/axios'

interface NewDonationActionModalProps {
  title: string
  actionId: string
  userId: string
  handleCloseModal: () => void
}

const createDonationActionSchema = z.object({
  value: z
    .string()
    .min(1, 'É necessário informar o valor')
    .refine((val) => !isNaN(Number(val)), {
      message: 'O valor deve ser numérico.',
    })
    .transform((val) => Number(val)),
})

type CreateDonationActionForm = z.infer<typeof createDonationActionSchema>

export function NewDonationActionModal({
  title,
  actionId,
  userId,
  handleCloseModal,
}: NewDonationActionModalProps) {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset } = useForm<CreateDonationActionForm>({
    resolver: zodResolver(createDonationActionSchema),
  })

  async function handleCreateDonationAction(data: CreateDonationActionForm) {
    setLoading(true)
    try {
      const response = await api.post('donation-action/create', {
        userId,
        actionId,
        value: data.value,
      })
      console.log(response.data)
    } catch (error) {
      console.error('Erro ao criar a ação:', error)
    } finally {
      setLoading(false)
      reset()
      handleCloseModal()
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-black/75" />

      <Dialog.Content
        className="fixed left-1/2 top-1/2 min-w-[32rem] -translate-x-1/2 
      -translate-y-1/2 transform rounded-md bg-zinc-100 px-6 py-12"
      >
        <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>

        <Dialog.Close className="absolute right-6 top-6 cursor-pointer border-0 bg-transparent leading-none text-gray-500">
          <X size={24} />
        </Dialog.Close>

        <form
          onSubmit={handleSubmit(handleCreateDonationAction)}
          className="mt-8 space-y-5"
        >
          <div className=" flex items-center gap-2">
            <label id="value" className="font-semibold">
              Valor:
            </label>{' '}
            <input
              type="text"
              id="value"
              className="w-full rounded border-1 border-zinc-400 bg-zinc-200 px-2 py-3 text-sm text-zinc-900 outline-none"
              {...register('value')}
            />
          </div>

          <button
            type="submit"
            className="mb-8 w-full rounded bg-green-600 p-3 text-zinc-50 hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'REALIZAR DOAÇÃO'}
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
