import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import * as Select from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Address } from '../../../@types/Address'
import { Category } from '../../../@types/Category'
import { Organizer } from '../../../@types/Organizer'
import { api } from '../../../lib/axios'
import { NewCategoryModal } from '../@components/new-category-modal'
import { NewOrganizerModal } from '../@components/new-organizer-modal'

// Validação do schema com zod
const createEventSchema = z.object({
  title: z.string().min(1, 'O título é obrigatório.'),
  subtitle: z.string().optional(),
  category: z.string().min(1, 'A categoria é obrigatória.'), // Use nonempty ao invés de min
  organizer: z.string().min(1, 'O organizador é obrigatório.'),
  description: z.string().optional(),
  date: z.string().min(1, 'A data é obrigatória.'),
  time: z.string().min(1, 'O horário é obrigatório.'),
  image: z.any().optional(),
  street: z.string().min(1, 'O rua é obrigatório.'),
  number: z.string().min(1, 'O numero é obrigatório.'),
  city: z.string().min(1, 'O city é obrigatório.'),
  complement: z.string().min(1, 'O coplmento é obrigatório.'),
  cep: z.string().min(1, 'O cep é obrigatório.'),
})

type CreateEventForm = z.infer<typeof createEventSchema> & { category: string }

export function NewEvent() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [organizers, setOrganizers] = useState<Organizer[]>()
  const [categories, setCategories] = useState<Category[]>()
  const [address, setAddress] = useState<Address[]>([])

  const [isOpenOrganizerModal, setIsOpenOrganizerModal] = useState(false)
  const [isOpenCategoryModal, setIsOpenCategoryModal] = useState(false)

  const handleCloseOrganizerModal = useCallback(() => {
    setIsOpenOrganizerModal(false)
  }, [])

  const handleCloseCategoryModal = useCallback(() => {
    setIsOpenCategoryModal(false)
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

    if (isOpenOrganizerModal === false && isOpenCategoryModal === false) {
      getAllOrganizer()
      getAllCategories()
    }
  }, [isOpenOrganizerModal, isOpenCategoryModal])

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<CreateEventForm>({
    resolver: zodResolver(createEventSchema),
  })

  async function getAddresId(data: CreateEventForm) {
    const response = await api.get('/address')
    setAddress(response.data)
    const addressId = address.find(
      (address) =>
        address.road === data.street &&
        address.number === Number(data.number) &&
        address.city === data.city &&
        address.complement === data.complement &&
        address.cep === data.cep,
    )

    if (!addressId) {
      const responseAddress = await api.post('/address', {
        road: data.street,
        number: data.number,
        city: data.city,
        complement: data.complement,
        cep: data.cep,
      })
      console.log(responseAddress.data.id)
      return responseAddress.data.id
    }

    console.log(addressId.id)
    return addressId.id
  }

  async function handleCreateEvent(data: CreateEventForm) {
    const dateFormated = `${data.date}T${data.time}:00`
    setLoading(true)
    try {
      const addressId = await getAddresId(data)

      const response = await api.post('/api/events', {
        category_id: data.category,
        title: data.title,
        caption: data.subtitle,
        description: data.description,
        address_id: addressId,
        dateTime: dateFormated,
        organizer_id: data.organizer,
      })
      console.log(response.data)
      toast.success('Evento criado com sucesso')
      navigate('/admin/events')
    } catch (error) {
      console.error('Erro ao criar o evento:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto flex w-2/6 min-w-96 max-w-full flex-col justify-center">
      <h1 className="pb-4 text-2xl font-semibold">Novo evento</h1>
      <form
        className="mb-4 flex flex-col"
        onSubmit={handleSubmit(handleCreateEvent)}
      >
        {/* Campo de título */}
        <label
          className={`relative left-2 top-2 mt-4 inline text-xs ${errors.title ? 'text-red-500' : 'text-zinc-900'}`}
        >
          <span className="bg-zinc-50 px-1">Título do Evento</span>
        </label>

        <div
          className={`mb-2 flex h-12 items-start rounded border-1 p-2 outline-none ${
            errors.title ? 'border-red-500' : 'border-zinc-400'
          }`}
        >
          <input
            type="text"
            placeholder="Título do evento"
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

        {/* Campo de categoria */}
        <label
          className={`relative left-2 top-2 mt-4 inline text-xs ${errors.title ? 'text-red-500' : 'text-zinc-900'}`}
        >
          <span className="bg-zinc-50 px-1">Categoria</span>
        </label>

        <Controller
          control={control}
          defaultValue=""
          name="category"
          render={({ field }) => {
            return (
              <>
                <Select.Root
                  onValueChange={field.onChange}
                  value={field.value || ''}
                >
                  <Select.Trigger
                    data-error={!!errors.category}
                    className="mb-2 inline-flex items-center justify-between gap-1 rounded border-1 border-solid 
                border-zinc-400 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none 
                data-[error=true]:border-red-500 data-[error=true]:text-red-500 data-[placeholder]:text-gray-400"
                    aria-label="Food"
                  >
                    <Select.Value placeholder="Seleciona uma categoria" />
                    <Select.Icon
                      data-error={!!errors.category}
                      className="text-zinc-900 data-[error=true]:text-red-500"
                    >
                      <ChevronDownIcon className="text-zinc-400" />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content className=" overflow-hidden rounded-sm bg-zinc-100">
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
                              <Select.ItemText>{category.name}</Select.ItemText>
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
              </>
            )
          }}
        />

        {errors.category && (
          <span className="text-xs text-red-500">
            {errors.category.message}
          </span>
        )}

        <Dialog.Root
          open={isOpenCategoryModal}
          onOpenChange={setIsOpenCategoryModal}
        >
          <Dialog.Trigger asChild>
            <button className=" flex w-full items-center justify-center gap-1 rounded border-1 border-zinc-400 bg-zinc-200 p-2 text-sm text-zinc-950 hover:bg-zinc-300">
              <span>Adicionar categoria</span>
            </button>
          </Dialog.Trigger>

          <NewCategoryModal
            handleCloseCategoryModal={handleCloseCategoryModal}
          />
        </Dialog.Root>

        {/* Campo de organizador */}
        <div>
          <label
            className={`relative left-2 top-2 mt-4 inline text-xs ${errors.title ? 'text-red-500' : 'text-zinc-900'}`}
          >
            <span className="bg-zinc-50 px-1">Organizador</span>
          </label>
          <Controller
            control={control}
            name="organizer"
            render={({ field }) => {
              return (
                <Select.Root onValueChange={field.onChange} value={field.value}>
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

          <Dialog.Root
            open={isOpenOrganizerModal}
            onOpenChange={setIsOpenOrganizerModal}
          >
            <Dialog.Trigger asChild>
              <button className="mt-2 flex w-full items-center justify-center gap-1 rounded border-1 border-zinc-400 bg-zinc-200 p-2 text-sm text-zinc-950 hover:bg-zinc-300">
                <span>Adicionar organizador</span>
              </button>
            </Dialog.Trigger>

            <NewOrganizerModal
              handleCloseOrganizerModal={handleCloseOrganizerModal}
            />
          </Dialog.Root>
        </div>

        {/* Campo de endereço */}
        <div>
          <div className="mb-2 flex gap-2">
            <div className="flex flex-1 flex-col">
              <label
                className={`relative left-2 top-2 inline text-xs ${errors.title ? 'text-red-500' : 'text-zinc-900'}`}
              >
                <span className="bg-zinc-50 px-1">Rua</span>
              </label>
              <input
                data-error={!!errors.street}
                className="w-full rounded border-1 border-zinc-400 px-4 py-3 data-[error=true]:border-red-500"
                placeholder="Rua"
                {...register('street')}
              />
              {errors.street && (
                <span className="mt-1 block text-sm text-red-500">
                  {errors.street.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label
                className={`relative left-2 top-2 inline text-xs ${errors.title ? 'text-red-500' : 'text-zinc-900'}`}
              >
                <span className="bg-zinc-50 px-1">Número</span>
              </label>

              <input
                data-error={!!errors.number}
                className="rounded border-1 border-zinc-400 px-4 py-3 data-[error=true]:border-red-500"
                placeholder="Nº"
                type="number"
                {...register('number')}
              />
              {errors.number && (
                <span className="mt-1 block text-sm text-red-500">
                  {errors.number.message}
                </span>
              )}
            </div>
          </div>

          <div className="mb-2 flex gap-2">
            <div className="flex flex-1 flex-col">
              <label
                className={`relative left-2 top-2 inline text-xs ${errors.title ? 'text-red-500' : 'text-zinc-900'}`}
              >
                <span className="bg-zinc-50 px-1">Cidade</span>
              </label>

              <input
                data-error={!!errors.city}
                className="w-full rounded border-1 border-zinc-400 px-4 py-3 data-[error=true]:border-red-500"
                placeholder="Cidade"
                {...register('city')}
              />
              {errors.city && (
                <span className="mt-1 block text-sm text-red-500">
                  {errors.city.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label
                className={`relative left-2 top-2 inline text-xs ${errors.title ? 'text-red-500' : 'text-zinc-900'}`}
              >
                <span className="bg-zinc-50 px-1">cep</span>
              </label>
              <input
                data-error={!!errors.cep}
                className="rounded border-1 border-zinc-400 px-4 py-3 data-[error=true]:border-red-500"
                placeholder="CEP"
                type="text"
                {...register('cep')}
              />
              {errors.cep && (
                <span className="mt-1 block text-sm text-red-500">
                  {errors.cep.message}
                </span>
              )}
            </div>
          </div>

          <label
            className={`relative left-2 top-2 mt-4 inline text-xs ${errors.title ? 'text-red-500' : 'text-zinc-900'}`}
          >
            <span className="bg-zinc-50 px-1">Complemento</span>
          </label>

          <div>
            <input
              data-error={!!errors.complement}
              className="w-full rounded border-1 border-zinc-400 px-4 py-3 data-[error=true]:border-red-500"
              placeholder="Complemento"
              type="complement"
              {...register('complement')}
            />
            {errors.complement && (
              <span className="block text-sm text-red-500">
                {errors.complement.message}
              </span>
            )}
          </div>
        </div>

        {/* Campo de data e hora */}
        <div className="mt-4 flex w-full flex-row gap-4">
          <div className="w-1/2">
            <label
              className={`relative left-2 top-2 inline text-xs ${errors.date ? 'text-red-500' : 'text-zinc-900'}`}
            >
              <span className="bg-zinc-50 px-1">Data</span>
            </label>
            <div
              className={`mb-2 flex h-12 items-start rounded border-1 p-2 outline-none ${
                errors.date ? 'border-red-500' : 'border-zinc-400'
              }`}
            >
              <input
                type="date"
                className="h-full w-full bg-transparent text-sm text-zinc-900 outline-none"
                {...register('date')}
              />
            </div>
            {errors.date && (
              <span className="text-xs text-red-500">
                {errors.date.message}
              </span>
            )}
          </div>

          <div className="w-1/2">
            <label
              className={`relative left-2 top-2 inline text-xs ${errors.time ? 'text-red-500' : 'text-zinc-900'}`}
            >
              <span className="bg-zinc-50 px-1">Horário</span>
            </label>
            <div
              className={`mb-2 flex h-12 items-start rounded border-1 p-2 outline-none ${
                errors.time ? 'border-red-500' : 'border-zinc-400'
              }`}
            >
              <input
                type="time"
                className="h-full w-full bg-transparent text-sm text-zinc-900 outline-none focus:outline-none focus:ring-0"
                {...register('time')}
              />
            </div>
            {errors.time && (
              <span className="text-xs text-red-500">
                {errors.time.message}
              </span>
            )}
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
          <div className="pointer-events-none flex flex-col items-center justify-center">
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

        {/* Botão de criar evento */}
        <button
          type="submit"
          className="mb-8 w-full rounded bg-green-700 p-3 text-zinc-50 hover:bg-green-600"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'CRIAR EVENTO'}
        </button>
      </form>
    </div>
  )
}
