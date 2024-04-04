import { Info } from '@phosphor-icons/react'
import * as Select from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { DonationStage } from './components/donation-stage'

const otherDonationSchema = z.object({
  category: z.string(),
  description: z.string().optional(),
})

type OtherDonationForm = z.infer<typeof otherDonationSchema>

export function OtherDonation() {
  const navigate = useNavigate()
  const { handleSubmit, register, control } = useForm<OtherDonationForm>()

  function handleOtherDonation(data: OtherDonationForm) {
    console.log(data)

    navigate('/donate/success')
  }

  return (
    <div>
      <DonationStage stage={2} type="other" />

      <form
        className="mb-4 flex flex-col"
        onSubmit={handleSubmit(handleOtherDonation)}
      >
        <Controller
          control={control}
          name="category"
          render={({ field }) => {
            return (
              <Select.Root onValueChange={field.onChange} value={field.value}>
                <Select.Trigger
                  className="mb-6 inline-flex w-1/2 items-center justify-between gap-1 rounded border-2 border-solid 
                border-zinc-400 bg-transparent px-4 py-3 text-sm outline-none focus:shadow-[0_0_0_1px]
                focus:shadow-white data-[placeholder]:text-gray-400"
                  aria-label="Food"
                >
                  <Select.Value placeholder="Seleciona uma categoria" />
                  <Select.Icon className="text-zinc-50">
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className=" overflow-hidden rounded-md bg-zinc-800 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                    <Select.Viewport className="p-1">
                      <Select.Group>
                        <Select.Label className="px-6 py-2 text-sm text-zinc-300">
                          Categorias
                        </Select.Label>
                        <Select.Item
                          value="Roupa"
                          className="relative flex h-7 select-none items-center rounded px-6 text-sm text-zinc-100 hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-600 data-[disabled]:text-zinc-600 data-[highlighted]:text-zinc-300 data-[highlighted]:outline-none"
                        >
                          <Select.ItemText>Roupa</Select.ItemText>
                          <Select.ItemIndicator className="absolute left-1 inline-flex h-4 w-4 items-center justify-center">
                            <CheckIcon />
                          </Select.ItemIndicator>
                        </Select.Item>
                        <Select.Item
                          value="Alimento"
                          className="relative flex h-7 select-none items-center rounded px-6 text-sm text-zinc-100 hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-600 data-[disabled]:text-zinc-600 data-[highlighted]:text-zinc-300 data-[highlighted]:outline-none"
                        >
                          <Select.ItemText>Alimento</Select.ItemText>
                          <Select.ItemIndicator className="absolute left-1 inline-flex h-4 w-4 items-center justify-center">
                            <CheckIcon />
                          </Select.ItemIndicator>
                        </Select.Item>
                        <Select.Item
                          value="Moradia"
                          className="relative flex h-7 select-none items-center rounded px-6 text-sm text-zinc-100 hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-600 data-[disabled]:text-zinc-600 data-[highlighted]:text-zinc-300 data-[highlighted]:outline-none"
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

        <span className="relative left-2 top-2 inline text-xs">
          <span className="bg-zinc-900 pl-1 text-zinc-100">Descrição</span>
          <span className="bg-zinc-900 pr-1 text-zinc-400">(opcional)</span>
        </span>

        <div className="mb-10 flex h-36 items-start rounded border-1 border-solid border-zinc-400 p-2 outline-none">
          <textarea
            className="h-full w-full resize-none overflow-hidden bg-transparent text-sm outline-none"
            {...register('description')}
          />
        </div>

        <button className="w-full rounded bg-green-700 p-2" type="submit">
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
