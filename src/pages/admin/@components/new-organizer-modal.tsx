import { zodResolver } from '@hookform/resolvers/zod'
import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { api } from '../../../lib/axios'

interface NewOrganizerModalProps {
  handleCloseModal: () => void
}

const createOrganizerSchema = z.object({
  name: z.string().min(1, 'O campo nome é obrigatório'),
  cellphone: z.string().min(1, 'O campo cellphone é obrigatório'),
  email: z.string().min(1, 'O campo e-mail é obrigatório'),
})

type CreateOrganizerForm = z.infer<typeof createOrganizerSchema>

export function NewOrganizerModal({
  handleCloseModal,
}: NewOrganizerModalProps) {
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, reset } = useForm<CreateOrganizerForm>({
    resolver: zodResolver(createOrganizerSchema),
  })

  async function handleCreateOrganizer(data: CreateOrganizerForm) {
    setLoading(true)
    try {
      const response = await api.post('/organizer/create', {
        name: data.name,
        cellphone: data.cellphone,
        email: data.email,
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
        <Dialog.Title className="text-lg font-semibold">
          Novo organizador
        </Dialog.Title>

        <Dialog.Close className="absolute right-6 top-6 cursor-pointer border-0 bg-transparent leading-none text-gray-500">
          <X size={24} />
        </Dialog.Close>

        <form
          className="mt-10 flex w-full flex-col space-y-3"
          onSubmit={(event) => {
            event.stopPropagation() // Impede a propagação do evento de submit para o formulário pai
            handleSubmit(handleCreateOrganizer)(event)
          }}
          id="new-organizer-form"
        >
          <input
            type="text"
            placeholder="Nome"
            className=" rounded border-1 border-zinc-400 bg-zinc-200 px-2 py-3 text-sm text-zinc-900 outline-none"
            {...register('name')}
          />
          <input
            type="text"
            placeholder="E-mail"
            className=" rounded border-1 border-zinc-400 bg-zinc-200 px-2 py-3 text-sm text-zinc-900 outline-none"
            {...register('email')}
          />
          <input
            type="text"
            placeholder="Telefone"
            className=" rounded border-1 border-zinc-400 bg-zinc-200 px-2 py-3 text-sm text-zinc-900 outline-none"
            {...register('cellphone')}
          />

          <button
            type="submit"
            form="new-organizer-form"
            className="mb-8 w-full rounded bg-green-600 p-3 text-zinc-50 hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'CRIAR ORGANIZADOR'}
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
