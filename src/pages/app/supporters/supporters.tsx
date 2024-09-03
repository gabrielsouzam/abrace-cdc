import { Helmet } from 'react-helmet-async'

import InstagramIcon from '../../../assets/InstagramIcon.svg'
import nutritivaImg from '../../../assets/nutritiva.svg'
import panificadoraImg from '../../../assets/panificadora.svg'
import QuixaFrutImg from '../../../assets/quixaFrut.svg'
import SupportersImg from '../../../assets/SupportersImg.svg'
import WhatsAppIcon from '../../../assets/WhatsAppIcon.svg'
import { SupporterCard } from './components/SupporterCard'

export function Supporters() {
  return (
    <div className="mb-20 px-20">
      <Helmet title="supporters" />

      <div className="flex items-center gap-32 pb-20">
        <div className="flex flex-col">
          <h1 className="text-4xl font-medium text-zinc-50">Apoiadores</h1>

          <p className="mt-4 flex text-start text-xl font-normal text-zinc-50">
            Junte-se a nós e torne-se um parceiro crucial em nossa missão de
            fazer a diferença na vida daqueles que mais precisam. Se sua empresa
            compartilha nossos valores de solidariedade e empatia, entre em
            contato conosco para contribuir e se tornar parte de nossa rede de
            apoio.
          </p>

          <h1 className="mt-10 text-3xl font-medium text-zinc-50">Contatos</h1>

          <div className="mt-4 flex flex-row gap-6">
            <a
              href="https://www.instagram.com/casadacaridadequixada/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded border border-green-500 bg-zinc-900 px-6 py-2 text-xl font-normal text-green-500"
            >
              <img className="w-6" src={WhatsAppIcon} alt="Ícone WhatsApp" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/casadacaridadequixada/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded border border-green-500 bg-zinc-900 px-6 py-2 text-xl font-normal text-green-500"
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

      <div className="grid w-full grid-cols-3 gap-12 ">
        <SupporterCard
          imgLink={QuixaFrutImg}
          name="QuixaFrut"
          startDate="Desde 22 de março de 2024"
          addres="Av. Plácido Castelo, s/n - Centro, Quixadá"
          link="https://www.instagram.com/quixafrut/"
        />
        <SupporterCard
          imgLink={panificadoraImg}
          name="Panificadora Nossa Senhora..."
          startDate="Desde 29 de março de 2024"
          addres="Rua Benjamim Constant, 1033 - Alto São Francisco, Quixadá "
          link="https://www.instagram.com/pnsps_quixada/"
        />
        <SupporterCard
          imgLink={nutritivaImg}
          name="Nutritiva"
          startDate="Desde 25 de agosto de 2022"
          addres="AR. Rodrigues Júnior, 1278 - Centro, Quixadá"
          link="https://www.instagram.com/nutritivasaudavel/"
        />
      </div>
    </div>
  )
}
