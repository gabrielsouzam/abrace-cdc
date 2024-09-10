import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import * as Select from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Category } from '../../../@types/Category'
import { Organizer } from '../../../@types/Organizer'
import { api } from '../../../lib/axios'
import { NewOrganizerModal } from '../@components/new-organizer-modal'

// Validação do schema com zod
const createActionSchema = z.object({
  title: z.string().min(1, 'O título é obrigatório.'),
  subtitle: z.string().optional(),
  value: z
    .string()
    .min(1, 'É necessário informar o valor')
    .refine((val) => !isNaN(Number(val)), {
      message: 'O valor deve ser numérico.',
    })
    .transform((val) => Number(val)),
  description: z.string().optional(),
  image: z.any().optional(),
  category: z.string().nonempty(),
  organizer: z.string().min(1, 'O campo organizer é obrigatório.'),
})

type CreateActionForm = z.infer<typeof createActionSchema>

export function NewAction() {
  const [loading, setLoading] = useState(false)
  const [organizers, setOrganizers] = useState<Organizer[]>()
  const [categories, setCategories] = useState<Category[]>()

  const [isOpen, setIsOpen] = useState(false)

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<CreateActionForm>({
    resolver: zodResolver(createActionSchema),
  })

  const handleCloseModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    async function getAllOrganizer() {
      const response = await api.get('/organizer/')
      setOrganizers(response.data)
    }

    async function getAllCategories() {
      const response = await api.get('/categories/')
      setCategories(response.data)
    }

    if (isOpen === false) {
      getAllOrganizer()
      getAllCategories()
    }
  }, [isOpen])

  async function handleCreateAction(data: CreateActionForm) {
    setLoading(true)
    try {
      const response = await api.post('/action/create', {
        categoryId: data.category,
        organizerId: data.organizer,
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        value: data.value,
      })
      console.log(response.data)
    } catch (error) {
      console.error('Erro ao criar a ação:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto flex w-2/6 min-w-96 max-w-full flex-col justify-center">
      <h1 className="pb-4 text-2xl font-semibold">Nova Ação</h1>
      <form
        className="mb-4 flex flex-col"
        onSubmit={handleSubmit(handleCreateAction)}
      >
        {/* Campo de título */}
        <label
          className={`relative left-2 top-2 mt-4 inline text-xs ${errors.title ? 'text-red-500' : 'text-zinc-900'}`}
        >
          <span className="bg-zinc-50 px-1 ">Título da Ação</span>
        </label>

        <div
          className={` mb-2 flex  h-12 items-start rounded border-1 p-2 outline-none ${errors.title ? 'border-red-500' : 'border-zinc-400'}`}
        >
          <input
            type="text"
            placeholder="Título da Ação"
            className="h-full w-full bg-transparent text-sm text-zinc-900 outline-none"
            {...register('title')}
          />
        </div>

        {errors.title && (
          <span className="text-xs text-red-500">{errors.title.message}</span>
        )}

        {/* Campo de subtítulo */}
        <label className="relative left-2 top-2 mt-4 inline text-xs">
          <span className="bg-zinc-50 pl-1 text-zinc-900">Subtítulo</span>
          <span className="bg-zinc-50 pr-1 text-zinc-400">(opcional)</span>
        </label>

        <div className="mb-2 flex h-12 items-start rounded border-1 border-zinc-400 p-2 outline-none">
          <input
            type="text"
            placeholder="Subtítulo"
            className="h-full w-full bg-transparent text-sm text-zinc-900 outline-none"
            {...register('subtitle')}
          />
        </div>

        {/* Campo de valor */}
        <span className="relative left-2 top-2 mt-4 inline text-xs ">
          <span
            data-error={!!errors.value}
            className="bg-zinc-50 px-1 text-zinc-900 data-[error=true]:text-red-500"
          >
            Valor
          </span>
        </span>

        <div
          data-error={!!errors.value}
          className="mb-2 flex h-12 items-start rounded border-1 border-zinc-400 p-2 outline-none data-[error=true]:border-red-500"
        >
          <input
            type="text"
            placeholder="Valor a ser arrecadado"
            className="h-full w-full bg-transparent text-sm text-zinc-900 outline-none "
            {...register('value')}
          />
        </div>

        {errors.value && (
          <span className="text-xs text-red-500">{errors.value.message}</span>
        )}

        <div className="mt-2 flex gap-2">
          <div className="flex-1 space-y-2">
            <Controller
              control={control}
              name="category"
              render={({ field }) => {
                return (
                  <Select.Root
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <Select.Trigger
                      data-error={!!errors.category}
                      className="inline-flex w-full items-center justify-between gap-1 rounded border-1 border-solid 
                border-zinc-400 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none focus:shadow-[0_0_0_1px]
                focus:shadow-white data-[error=true]:border-red-500 data-[placeholder]:text-gray-400 "
                      aria-label="Food"
                    >
                      <Select.Value placeholder="Seleciona uma categoria" />
                      <Select.Icon className="text-zinc-900 ">
                        <ChevronDownIcon
                          data-error={!!errors.category}
                          className="text-zinc-400 data-[error=true]:text-red-500"
                        />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className=" overflow-hidden rounded-md bg-zinc-100 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                        <Select.Viewport className="p-1">
                          <Select.Group>
                            <Select.Label className="px-6 py-2 text-sm text-zinc-900">
                              Categorias
                            </Select.Label>
                            {categories?.map((category) => (
                              <Select.Item
                                key={category.id}
                                value={category.id}
                                className="relative flex h-7 select-none items-center rounded px-6 text-sm text-zinc-900 hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-300 data-[disabled]:text-zinc-300 data-[highlighted]:text-zinc-900 data-[highlighted]:outline-none"
                              >
                                <Select.ItemText>
                                  {category.name}
                                </Select.ItemText>
                                <Select.ItemIndicator className="absolute left-1 inline-flex h-4 w-4 items-center justify-center">
                                  <CheckIcon />
                                </Select.ItemIndicator>
                              </Select.Item>
                            ))}
                          </Select.Group>

                          <Select.Separator className="bg-violet6 m-[5px] h-[1px]" />
                        </Select.Viewport>
                        <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet-500">
                          <ChevronDownIcon />
                        </Select.ScrollDownButton>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                )
              }}
            />
            {errors.category && (
              <span className="ml-1 text-xs text-red-500">
                O campo categoria é obrigatório
              </span>
            )}
          </div>
          <div className="flex-1 space-y-2">
            <Controller
              control={control}
              name="organizer"
              render={({ field }) => {
                return (
                  <Select.Root
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <Select.Trigger
                      data-error={!!errors.organizer}
                      className="inline-flex w-full items-center justify-between gap-1 rounded border-1 border-solid 
                border-zinc-400 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none focus:shadow-[0_0_0_1px]
                focus:shadow-white data-[error=true]:border-red-500 data-[placeholder]:text-gray-400"
                      aria-label="Food"
                    >
                      <Select.Value placeholder="Seleciona um organizador" />
                      <Select.Icon className="text-zinc-900 ">
                        <ChevronDownIcon
                          data-error={!!errors.organizer}
                          className="text-zinc-400 data-[error=true]:text-red-500"
                        />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className=" overflow-hidden rounded-md bg-zinc-100 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                        <Select.Viewport className="p-1">
                          <Select.Group>
                            <Select.Label className="px-6 py-2 text-sm text-zinc-900">
                              Organizadores
                            </Select.Label>
                            {organizers?.map((organizer) => (
                              <Select.Item
                                key={organizer.id}
                                value={organizer.id}
                                className="relative flex h-7 select-none items-center rounded px-6 text-sm text-zinc-900 hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-300 data-[disabled]:text-zinc-300 data-[highlighted]:text-zinc-900 data-[highlighted]:outline-none"
                              >
                                <Select.ItemText>
                                  {organizer.name}
                                </Select.ItemText>
                                <Select.ItemIndicator className="absolute left-1 inline-flex h-4 w-4 items-center justify-center">
                                  <CheckIcon />
                                </Select.ItemIndicator>
                              </Select.Item>
                            ))}
                          </Select.Group>

                          <Select.Separator className="bg-violet6 m-[5px] h-[1px]" />
                        </Select.Viewport>
                        <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet-500">
                          <ChevronDownIcon />
                        </Select.ScrollDownButton>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                )
              }}
            />

            {errors.organizer && (
              <span className="ml-1 text-xs text-red-500">
                O campo organizador é obrigatório
              </span>
            )}

            <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
              <Dialog.Trigger asChild>
                <button className=" flex w-full items-center justify-center gap-1 rounded border-1 border-zinc-400 bg-zinc-200 p-2 text-sm text-zinc-950 hover:bg-zinc-300">
                  <span>Adicionar organizador</span>
                </button>
              </Dialog.Trigger>

              <NewOrganizerModal handleCloseModal={handleCloseModal} />
            </Dialog.Root>
          </div>
        </div>

        {/* Campo de descrição */}
        <span className="relative left-2 top-2 mt-4 inline text-xs">
          <span className="bg-zinc-50 pl-1 text-zinc-900">Descrição</span>
          <span className="bg-zinc-50 pr-1 text-zinc-400">(opcional)</span>
        </span>

        <div className="mb-4 flex h-36 items-start rounded border-1 border-zinc-400 p-2 outline-none">
          <textarea
            className="h-full w-full resize-none overflow-hidden bg-transparent text-sm text-zinc-900 outline-none"
            {...register('description')}
          />
        </div>

        {/* Input de imagem */}
        <div className="relative mb-4 flex h-48 w-full flex-col items-center justify-center rounded border-1 border-dashed border-gray-400 bg-zinc-100">
          <input
            type="file"
            className="absolute inset-0 cursor-pointer opacity-0"
            {...register('image')}
          />
          <div className="pointer-actions-none flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="mt-2 text-sm text-gray-500">
              Adicione uma imagem
            </span>
          </div>
        </div>

        {/* Botão de criar actiono */}
        <button
          type="submit"
          className="mb-8 w-full rounded bg-green-700 p-3 text-zinc-50 hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'CRIAR AÇÃO'}
        </button>
      </form>
    </div>
  )
}
