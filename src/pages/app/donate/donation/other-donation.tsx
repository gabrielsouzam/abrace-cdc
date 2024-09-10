import { zodResolver } from '@hookform/resolvers/zod'
import { Info } from '@phosphor-icons/react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Select from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { DonationStage } from './components/donation-stage'

const otherDonationSchema = z
  .object({
    category: z.enum(['Roupa', 'Alimento', 'Moradia']),
    description: z.string().optional(),
    hour: z.string(),
    date: z.string(),
    needToGet: z.enum(['true', 'false']),
    street: z.string().optional(),
    number: z.string().optional(),
    city: z.string().optional(),
    complement: z.string().optional(),
    cep: z.string().optional(),
  })
  .refine((data) => data.needToGet === 'false' || !!data.street, {
    message: 'O campo de rua é obrigatório.',
    path: ['street'],
  })
  .refine((data) => data.needToGet === 'false' || !!data.number, {
    message: 'O campo de número é obrigatório.',
    path: ['number'],
  })
  .refine((data) => data.needToGet === 'false' || !!data.city, {
    message: 'O campo de cidade é obrigatório.',
    path: ['city'],
  })
  .refine((data) => data.needToGet === 'false' || !!data.cep, {
    message: 'O campo de CEP é obrigatório.',
    path: ['cep'],
  })
  .refine((data) => data.needToGet === 'false' || !!data.complement, {
    message: 'O campo de complemento é obrigatório.',
    path: ['complement'],
  })

type OtherDonationForm = z.infer<typeof otherDonationSchema>

export function OtherDonation() {
  const navigate = useNavigate()
  const [minDate, setMinDate] = useState('')

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<OtherDonationForm>({
    resolver: zodResolver(otherDonationSchema),
    defaultValues: {
      hour: '12:00',
      needToGet: 'true',
    },
  })

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    setMinDate(today)
  }, [])

  function handleOtherDonation(data: OtherDonationForm) {
    console.log(data)

    navigate('/donate/success')
  }

  return (
    <div className="pb-20">
      <DonationStage stage={2} type="other" />

      <form
        className="mb-4 flex flex-col"
        onSubmit={handleSubmit(handleOtherDonation)}
      >
        {errors.category && (
          <span className="text-sm text-red-500">Este campo é obrigatório</span>
        )}

        <div className="mb-4 flex flex-1 items-center justify-center gap-2">
          <Controller
            control={control}
            name="category"
            render={({ field }) => {
              return (
                <Select.Root onValueChange={field.onChange} value={field.value}>
                  <Select.Trigger
                    data-error={!!errors.category}
                    className="inline-flex w-full items-center justify-between gap-1 rounded border-2 border-solid 
                border-zinc-400 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none focus:shadow-[0_0_0_1px]
                focus:shadow-white data-[error=true]:border-red-500 data-[placeholder]:text-gray-400"
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
                    <Select.Content className=" overflow-hidden rounded-md bg-zinc-100 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                      <Select.Viewport className="p-1">
                        <Select.Group>
                          <Select.Label className="px-6 py-2 text-sm text-zinc-900">
                            Categorias
                          </Select.Label>
                          <Select.Item
                            value="Roupa"
                            className="relative flex h-7 select-none items-center rounded px-6 text-sm text-zinc-900 hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-300 data-[disabled]:text-zinc-300 data-[highlighted]:text-zinc-900 data-[highlighted]:outline-none"
                          >
                            <Select.ItemText>Roupa</Select.ItemText>
                            <Select.ItemIndicator className="absolute left-1 inline-flex h-4 w-4 items-center justify-center">
                              <CheckIcon />
                            </Select.ItemIndicator>
                          </Select.Item>
                          <Select.Item
                            value="Alimento"
                            className="relative flex h-7 select-none items-center rounded px-6 text-sm text-zinc-900 hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-300 data-[disabled]:text-zinc-300 data-[highlighted]:text-zinc-900 data-[highlighted]:outline-none"
                          >
                            <Select.ItemText>Alimento</Select.ItemText>
                            <Select.ItemIndicator className="absolute left-1 inline-flex h-4 w-4 items-center justify-center">
                              <CheckIcon />
                            </Select.ItemIndicator>
                          </Select.Item>
                          <Select.Item
                            value="Moradia"
                            className="relative flex h-7 select-none items-center rounded px-6 text-sm text-zinc-900 hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-300 data-[disabled]:text-zinc-300 data-[highlighted]:text-zinc-900 data-[highlighted]:outline-none"
                          >
                            <Select.ItemText>Moradia</Select.ItemText>
                            <Select.ItemIndicator className="absolute left-1 inline-flex h-4 w-4 items-center justify-center">
                              <CheckIcon />
                            </Select.ItemIndicator>
                          </Select.Item>
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

          <input
            className=" rounded border-2 border-zinc-400 px-4 py-3"
            type="date"
            min={minDate}
            {...register('date')}
          />
          <input
            className="rounded border-2 border-zinc-400 px-4 py-3"
            type="time"
            step="60"
            defaultValue="12:00"
            min="08:00"
            max="18:00"
            {...register('hour')}
          />
        </div>

        <Controller
          control={control}
          name="needToGet"
          render={({ field }) => {
            return (
              <>
                <div className="mb-4 flex gap-5">
                  <span className="font-semibold">
                    Precisamos buscar sua doação?
                  </span>
                  <RadioGroup.Root
                    className="flex gap-3"
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue="true"
                  >
                    <div className="flex items-center gap-1 ">
                      <RadioGroup.Item
                        value="true"
                        id="r1"
                        className="h-5 w-5 rounded-full border-2 border-solid border-zinc-400"
                      >
                        <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-2.5 after:w-2.5 after:rounded-[50%] after:bg-green-500 after:content-['']" />
                      </RadioGroup.Item>
                      <label htmlFor="r1" className="text-zinc-900">
                        Sim
                      </label>
                    </div>

                    <div className="flex items-center gap-2 ">
                      <RadioGroup.Item
                        data-state
                        value="false"
                        id="r2"
                        className="h-5 w-5 rounded-full border-2 border-solid border-zinc-400"
                      >
                        <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-2.5 after:w-2.5 after:rounded-[50%] after:bg-green-500 after:content-['']" />
                      </RadioGroup.Item>
                      <label htmlFor="r2" className="text-zinc-900">
                        Não
                      </label>
                    </div>
                  </RadioGroup.Root>
                </div>
                {field.value === 'true' && (
                  <div className="mb-2">
                    <div className="mb-2 flex gap-2">
                      <div className="flex flex-1 flex-col">
                        <input
                          data-error={!!errors.street}
                          className="w-full rounded border-2 border-zinc-400 px-4 py-3 data-[error=true]:border-red-500"
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
                        <input
                          data-error={!!errors.number}
                          className="rounded border-2 border-zinc-400 px-4 py-3 data-[error=true]:border-red-500"
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
                        <input
                          data-error={!!errors.city}
                          className="w-full rounded border-2 border-zinc-400 px-4 py-3 data-[error=true]:border-red-500"
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
                        <input
                          data-error={!!errors.cep}
                          className="rounded border-2 border-zinc-400 px-4 py-3 data-[error=true]:border-red-500"
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

                    <div>
                      <input
                        data-error={!!errors.complement}
                        className="w-full rounded border-2 border-zinc-400 px-4 py-3 data-[error=true]:border-red-500"
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
                )}
              </>
            )
          }}
        />

        <span className="relative left-2 top-2 inline text-xs">
          <span className="bg-zinc-50 pl-1 text-zinc-900">Descrição</span>
          <span className="bg-zinc-50 pr-1 text-zinc-400">(opcional)</span>
        </span>

        <div className="mb-10 flex h-36 items-start rounded border-1 border-solid border-zinc-400 p-2 outline-none">
          <textarea
            className="h-full w-full resize-none overflow-hidden bg-transparent text-sm text-zinc-900 outline-none"
            {...register('description')}
          />
        </div>

        <button
          className="w-full rounded bg-green-700 p-2 text-zinc-50"
          type="submit"
        >
          CONTINUAR
        </button>
      </form>

      <div className="flex w-full items-start gap-4 bg-orange-200 p-2 text-orange-700">
        <Info className="h-5 w-5" weight="bold" />
        <div>
          <span className="block font-semibold">Horários de coleta</span>
          <span className="text-sm font-medium">
            Nossos horários de coleta de doações são de segunda à sexta, das
            08H-18H.
          </span>
        </div>
      </div>
    </div>
  )
}
