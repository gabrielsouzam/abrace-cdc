import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const createEventSchema = z.object({
  title: z.string().min(1, 'O título é obrigatório'),
  subtitle: z.string().optional(),
  date: z.string().min(1, 'A data é obrigatória'),
  time: z.string().min(1, 'O horário é obrigatório'),
  description: z.string().optional(),
  image: z.any().optional(),
})

type CreateEventForm = z.infer<typeof createEventSchema>

export function CreateEvent() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEventForm>({
    resolver: zodResolver(createEventSchema),
  })

  function handleCreateEvent(data: CreateEventForm) {
    console.log(data)
    navigate('/events/success')
  }

  return (
    <div className="pb-20">
      <h1 className="mb-6 text-xl font-semibold">Novo evento</h1>

      <form
        className="mb-4 flex flex-col"
        onSubmit={handleSubmit(handleCreateEvent)}
      >
        <div className="mb-4 flex flex-col">
          <label className="mb-1 text-sm text-zinc-900" htmlFor="title">
            Título
          </label>
          <input
            id="title"
            className="inline-flex w-full items-center justify-between gap-1 rounded border-2 border-solid 
              border-zinc-400 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none focus:shadow-[0_0_0_1px] focus:shadow-white"
            type="text"
            placeholder="Título"
            {...register('title')}
          />
          {errors.title && (
            <span className="text-sm text-red-500">{errors.title.message}</span>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <label className="mb-1 text-sm text-zinc-900" htmlFor="subtitle">
            Subtítulo
          </label>
          <input
            id="subtitle"
            className="inline-flex w-full items-center justify-between gap-1 rounded border-2 border-solid 
              border-zinc-400 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none focus:shadow-[0_0_0_1px] focus:shadow-white"
            type="text"
            placeholder="Subtítulo"
            {...register('subtitle')}
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label className="mb-1 text-sm text-zinc-900" htmlFor="date">
            Data
          </label>
          <input
            id="date"
            className="inline-flex w-full items-center justify-between gap-1 rounded border-2 border-solid 
              border-zinc-400 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none focus:shadow-[0_0_0_1px] focus:shadow-white"
            type="date"
            {...register('date')}
          />
          {errors.date && (
            <span className="text-sm text-red-500">{errors.date.message}</span>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <label className="mb-1 text-sm text-zinc-900" htmlFor="time">
            Horário
          </label>
          <input
            id="time"
            className="inline-flex w-full items-center justify-between gap-1 rounded border-2 border-solid 
              border-zinc-400 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none focus:shadow-[0_0_0_1px] focus:shadow-white"
            type="time"
            {...register('time')}
          />
          {errors.time && (
            <span className="text-sm text-red-500">{errors.time.message}</span>
          )}
        </div>

        <div className="mb-6 flex flex-col">
          <label className="mb-1 text-sm text-zinc-900" htmlFor="description">
            Descrição (opcional)
          </label>
          <textarea
            id="description"
            className="inline-flex h-36 w-full resize-none items-center justify-between gap-1 overflow-hidden rounded border-2 
              border-solid border-zinc-400 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none focus:shadow-[0_0_0_1px] focus:shadow-white"
            placeholder="Descrição"
            {...register('description')}
          />
        </div>

        <div className="mb-6 flex flex-col items-center">
          <div className="flex w-full items-center justify-center rounded border-2 border-dashed border-zinc-400 p-6">
            <input
              id="image"
              type="file"
              className="hidden"
              {...register('image')}
            />
            <div className="items-center text-center">
              <img
                src="/src/assets/imagemUpload.svg"
                alt="Upload"
                className="h-12 w-12"
              />
              <p className="text-zinc-400">Adicione uma imagem</p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded bg-green-600 p-3 text-sm text-white"
        >
          CRIAR
        </button>
      </form>
    </div>
  )
}
