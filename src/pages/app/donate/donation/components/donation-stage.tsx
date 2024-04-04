import { Check } from 'lucide-react'

import { Line } from './line'

interface DonationStageProps {
  stage: number
  type?: 'monetary' | 'other'
}

export function DonationStage({
  stage,
  type = 'monetary',
}: DonationStageProps) {
  return (
    <div className="mb-10 flex items-center space-x-2">
      <div className="flex items-center gap-2">
        <span className=" flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs">
          {stage > 1 ? <Check className="h-4 w-4" /> : 1}
        </span>
        <div className="flex flex-col">
          <span className="text-sm">Passo 1</span>
          <span className="text-xs">Informações</span>
        </div>
      </div>
      <Line />
      <div className="flex items-center gap-2">
        <span
          data-stage={stage > 1}
          className=" flex h-6 w-6 items-center justify-center rounded-full bg-zinc-500  text-xs data-[stage=true]:bg-green-600"
        >
          {stage > 2 ? <Check className="h-4 w-4" /> : 2}
        </span>
        <div className="flex flex-col">
          <span className="text-sm">Passo 2</span>
          {stage > 1 ? (
            type === 'monetary' ? (
              <span className="text-xs">Qr code</span>
            ) : (
              <span className="text-xs">Dados da doação</span>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
      <Line />
      <div className="flex items-center gap-2">
        <span
          data-stage={stage > 2}
          className=" flex h-6 w-6 items-center justify-center rounded-full bg-zinc-500 text-xs data-[stage=true]:bg-green-600"
        >
          {stage > 2 ? <Check className="h-4 w-4" /> : 3}
        </span>
        <div className="flex flex-col">
          <span className="text-sm">Passo 3</span>
          {stage > 2 ? <span className="text-xs">Final</span> : <></>}
        </div>
      </div>
    </div>
  )
}
