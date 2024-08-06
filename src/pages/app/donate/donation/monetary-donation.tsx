import { Copy } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import QrCode from '../../../../assets/qr-code.svg'
import { DonationStage } from './components/donation-stage'

export function MonetaryDonation() {
  const navigate = useNavigate()

  async function handleCopyQrCode() {
    const qrCode = 'unfeufhw783h4rh347hrweRYY5TgGbrfrFv'
    try {
      await navigator.clipboard.writeText(qrCode)
      toast.success('Código copiado com sucesso')

      await new Promise((resolve) => setTimeout(resolve, 2000))

      navigate('/donate/success')
    } catch (err) {
      toast.error('Falha ao copiar o código')
    }
  }

  return (
    <div className="pb-20">
      <Helmet title="Qr code" />
      <DonationStage stage={2} />
      <div className="mb-10 grid grid-cols-2">
        <img src={QrCode} alt="" />
        <div className="space-y-6">
          <div>
            <span className="block font-semibold ">Nome</span>
            <span className="text-sm text-zinc-400">Casa de caridade LTDA</span>
          </div>

          <div>
            <span className="block font-semibold">CPF/CNPJ</span>
            <span className="text-sm text-zinc-400">XX.XXX.XXX/0001-XX</span>
          </div>

          <div>
            <span className="block font-semibold">Código QR Code</span>
            <span className="text-sm text-zinc-400">
              unfeufhw783h4rh347hrweRYY5TgGbrfrFv
            </span>
          </div>
        </div>
      </div>

      <button
        className="flex w-full items-center justify-center gap-2 rounded bg-green-700 py-2"
        onClick={handleCopyQrCode}
      >
        <Copy size={24} />
        Copiar QR code
      </button>
    </div>
  )
}
