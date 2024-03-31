import * as RadioGroup from '@radix-ui/react-radio-group'
import { Helmet } from 'react-helmet-async'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { DonationStage } from './components/donation-stage'

const donationForm = z.object({
  typeDonation: z.enum(['DoacaoMonetaria', 'OutroTipo']),
})

type DonationForm = z.infer<typeof donationForm>

export function Donation() {
  const navigate = useNavigate()
  const { handleSubmit, control } = useForm<DonationForm>()

  function handleSelectDonationType(data: DonationForm) {
    console.log(data)

    if (data.typeDonation === 'DoacaoMonetaria') {
      navigate('/donate/monetary')
    } else {
      navigate('/donate/other')
    }
  }

  return (
    <div>
      <Helmet title="Doação" />

      <DonationStage stage={1} />

      <div>
        <h1 className="mb-2.5 text-left font-semibold">Tipo de doação</h1>

        <form onSubmit={handleSubmit(handleSelectDonationType)}>
          <Controller
            control={control}
            name="typeDonation"
            render={({ field }) => {
              return (
                <RadioGroup.Root
                  className="mb-10 flex gap-8"
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <div className="flex items-center gap-2 ">
                    <RadioGroup.Item
                      value="DoacaoMonetaria"
                      id="r1"
                      className="h-5 w-5 rounded-full border-2 border-solid border-zinc-400"
                    >
                      <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-2.5 after:w-2.5 after:rounded-[50%] after:bg-green-500 after:content-['']" />
                    </RadioGroup.Item>
                    <label htmlFor="r1">Doação monetária</label>
                  </div>

                  <div className="flex items-center gap-2 ">
                    <RadioGroup.Item
                      data-state
                      value="OutroTipo"
                      id="r2"
                      className="h-5 w-5 rounded-full border-2 border-solid border-zinc-400"
                    >
                      <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-2.5 after:w-2.5 after:rounded-[50%] after:bg-green-500 after:content-['']" />
                    </RadioGroup.Item>
                    <label htmlFor="r2">Outro tipo de doação</label>
                  </div>
                </RadioGroup.Root>
              )
            }}
          />

          <button type="submit" className="w-full rounded bg-green-700 py-2">
            CONTINUAR
          </button>
        </form>
      </div>
    </div>
  )
}
