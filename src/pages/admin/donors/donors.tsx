import { DonorInfo } from './components/donor-info'

export function Donors() {
  return (
    <div>
      <div className="mb-10 flex justify-between px-20">
        <h1 className="text-4xl font-semibold">Doadores</h1>

        <button className="rounded border-1 border-zinc-200 bg-transparent px-2 py-3">
          Filtrar
        </button>
      </div>

      <div className="px-12">
        <DonorInfo />
      </div>
    </div>
  )
}
