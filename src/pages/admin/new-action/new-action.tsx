import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'


// Validação do schema com zod
const createActionSchema = z.object({
  title: z.string().min(1, 'O título é obrigatório.'),
  subtitle: z.string().optional(),
  value: z.string().min(1, 'É necessário informar o valor'),
  description: z.string().optional(),
  image: z.any().optional(),
})

type CreateActionForm = z.infer<typeof createActionSchema>

export function NewAction() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateActionForm>({
    resolver: zodResolver(createActionSchema),
  })

  async function handleCreateAction(data: CreateActionForm) {
    setLoading(true)
    try {
      const response = await axios.post(
        'https://api.meuservico.com/actions',
        data,
      )
      console.log(response.data)
      navigate('/actions/success')
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
          className={`mb-2 flex h-12 items-start rounded border-1 p-2 outline-none ${errors.title ? 'border-red-500' : 'border-zinc-400'}`}
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
        <span className="relative left-2 top-2 mt-4 inline text-xs">
          <span className="bg-zinc-50 px-1 text-zinc-900">Valor</span>
        </span>

        <div className="mb-4 flex h-12 items-start rounded border-1 border-zinc-400 p-2 outline-none">
        <input
            type="text"
            placeholder="Valor a ser arrecadado"
            className="h-full w-full bg-transparent text-sm text-zinc-900 outline-none"
            {...register('value')}
          />
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
          className="mb-8 w-full rounded bg-green-700 p-3 text-zinc-50 hover:bg-green-600"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'CRIAR AÇÃO'}
        </button>
      </form>
    </div>
  )
}
