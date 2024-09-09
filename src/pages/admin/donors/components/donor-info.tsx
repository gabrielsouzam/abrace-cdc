import { User } from '@phosphor-icons/react'

export function DonorInfo() {
  return (
    <div className="flex items-center justify-between rounded bg-zinc-100 p-6">
      <div className="flex flex-col gap-3">
        <span className="font-medium text-zinc-600">Doador</span>
        <div className="flex items-center gap-4">
          <div className=" flex h-8 w-8 items-center justify-center rounded-full bg-zinc-300">
            <User weight="fill" size={16} className="text-zinc-900" />
          </div>
          <span className="font-medium text-zinc-950">Antonio Francisco</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-medium text-zinc-600">Ação</span>
        <div className="flex items-center gap-4">
          <span className="font-medium text-zinc-950">
            Doação monetária para cons...
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-medium text-zinc-600">Tipo</span>
        <div className="flex items-center gap-4">
          <span className="font-medium text-zinc-950">Outro</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-medium text-zinc-600">Descrição</span>
        <div className="flex items-center gap-4">
          <span className="font-medium text-zinc-950">
            Tenho 2 blusas, 4 ber...
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-medium text-zinc-600">Status</span>
        <div className="flex items-center gap-4">
          <span className="font-medium text-green-500">RECEBIDO</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-medium text-zinc-600">Descrição</span>
        <div className="flex items-center gap-4">
          <div>
            <span className="block text-xs font-medium text-zinc-950">
              08:26
            </span>
            <span className="block text-xs font-medium text-zinc-950">
              03/09/2024
            </span>
          </div>
        </div>
      </div>
      <div>
        <button className="border-none bg-transparent text-blue-500">
          &gt;
        </button>
      </div>
    </div>
  )
}
