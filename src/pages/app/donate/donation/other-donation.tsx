import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

import { DonationStage } from './components/donation-stage'
export function OtherDonation() {
  return (
    <div>
      <DonationStage stage={2} />

      <form>
        <Select.Root>
          <Select.Trigger
            aria-label="Categoria"
            className="inline-flex w-full items-center justify-between rounded border-2 border-solid border-zinc-400 px-2 py-3 focus:outline-none data-[placeholder]:text-gray-400"
          >
            <Select.Value placeholder="Selecione uma categoria" />
            <Select.Icon className="h-6 w-6 text-zinc-50">
              <ChevronDown />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className=" overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
              <Select.Viewport className="p-2">
                <Select.Group>
                  <Select.Label>Categorias</Select.Label>
                  <Select.Item value="roupa">Roupa</Select.Item>
                  <Select.Item value="comida">comida</Select.Item>
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </form>
    </div>
  )
}
