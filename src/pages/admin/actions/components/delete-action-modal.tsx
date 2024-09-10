import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

export function DeleteActionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-black/75" />

      <Dialog.Content
        className="fixed left-1/2 top-1/2 min-w-[32rem] -translate-x-1/2 
      -translate-y-1/2 transform rounded-md bg-zinc-200 px-6 pb-6 pt-12"
      >
        <Dialog.Title className="text-lg font-semibold">
          Tem certeza que deseja excluir?
        </Dialog.Title>

        <Dialog.Close className="absolute right-6 top-6 cursor-pointer border-0 bg-transparent leading-none text-gray-500">
          <X size={24} />
        </Dialog.Close>

        <div className="mt-10 flex justify-end gap-2">
          <Dialog.Close asChild>
            <button className=" flex items-center justify-center gap-1 rounded bg-zinc-400 p-2 text-sm text-zinc-50">
              <span>Cancelar</span>
            </button>
          </Dialog.Close>
          <button className=" flex items-center justify-center gap-1 rounded bg-red-600 p-2 text-sm text-zinc-50">
            <span>Excluir</span>
          </button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
