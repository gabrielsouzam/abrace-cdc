import * as RadioGroup from '@radix-ui/react-radio-group'
import { Helmet } from 'react-helmet-async'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { DonationStage } from './components/donation-stage'

const donationSignUpForm = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  typeDonation: z.enum(['DoacaoMonetaria', 'OutroTipo']),
})

type DonationSignUpForm = z.infer<typeof donationSignUpForm>

export function DonationSignUp() {
  const navigate = useNavigate()

  const { control, register, handleSubmit } = useForm<DonationSignUpForm>()

  function handleInsertDataDonation(data: DonationSignUpForm) {
    console.log(data)

    if (data.typeDonation === 'DoacaoMonetaria') {
      navigate('/donate/monetary')
    } else {
      navigate('/donate/other')
    }
  }

  return (
    <div>
      <Helmet title="Cadastrar" />
      <DonationStage stage={1} />

      <h1 className="pb-6 font-semibold">Seus dados</h1>
      <form onSubmit={handleSubmit(handleInsertDataDonation)}>
        <input
          type="text"
          placeholder="Nome"
          className="mb-6 w-full rounded border-2 border-solid border-zinc-400 bg-transparent px-2 py-4"
          {...register('name')}
        />

        <div className="mb-6 flex space-x-4">
          <input
            type="email"
            placeholder="Email"
            className="w-3/5 rounded border-2 border-solid border-zinc-400 bg-transparent px-2 py-4"
            {...register('email')}
          />

          <input
            type="text"
            placeholder="(11) 1111-1111"
            className="w-2/5 rounded border-2 border-solid border-zinc-400 bg-transparent px-2 py-4"
            {...register('phone')}
          />
        </div>

        <h1 className="mb-2.5 text-left font-semibold">Tipo de doação</h1>

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
  )
}
