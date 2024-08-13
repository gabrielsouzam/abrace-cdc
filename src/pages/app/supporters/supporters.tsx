import { Helmet } from 'react-helmet-async'

import InstagramIcon from '../../../assets/InstagramIcon.svg'
import SupportersImg from '../../../assets/SupportersImg.svg'
import WhatsAppIcon from '../../../assets/WhatsAppIcon.svg'

export function Supporters() {
  return (
    <>
      <Helmet title="supporters" />

      <div className="flex items-center gap-32 px-24">
        <div className="flex flex-col">
          <h1 className="text-4xl font-medium text-zinc-900">Apoiadores</h1>

          <p className="mt-4 flex text-start text-xl font-normal text-zinc-900">
            Junte-se a nós e torne-se um parceiro crucial em nossa missão de
            fazer a diferença na vida daqueles que mais precisam. Se sua empresa
            compartilha nossos valores de solidariedade e empatia, entre em
            contato conosco para contribuir e se tornar parte de nossa rede de
            apoio.
          </p>

          <h1 className="mt-10 text-3xl font-medium text-zinc-900">Contatos</h1>

          <div className="mt-4 flex flex-row gap-6">
            <a
              href="https://www.instagram.com/casadacaridadequixada/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded border border-green-500 bg-zinc-50 px-6 py-2 text-xl font-normal text-green-500"
            >
              <img className="w-6" src={WhatsAppIcon} alt="Ícone WhatsApp" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/casadacaridadequixada/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded border border-green-500 bg-zinc-50 px-6 py-2 text-xl font-normal text-green-500"
            >
              <img className="w-6" src={InstagramIcon} alt="Ícone Instagram" />
              Instagram
            </a>
          </div>
        </div>

        <img
          src={SupportersImg}
          alt="Aperto de mãos"
          className="h-full w-full"
        />
      </div>
    </>
  )
}
