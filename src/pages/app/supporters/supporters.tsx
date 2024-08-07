import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

import InstagramIcon from '../../../assets/InstagramIcon.svg'
import SupportersImg from '../../../assets/SupportersImg.svg'
import WhatsAppIcon from '../../../assets/WhatsAppIcon.svg'
import { SupportCard } from './components/supportCard'

const event1 = {
  id: 1,
  image:
    'https://portalcostadosol.com.br/wp-content/uploads/2021/12/Casa-de-Caridade-1170x650.jpg',
  name: 'Doação de roupas para famílias desabrigadas',
  date: '4 FEV 2024 16H',
  locale: 'Praça José de Barros, Quixadá - CE',
}

const event2 = {
  id: 2,
  image:
    'https://portalcostadosol.com.br/wp-content/uploads/2021/12/Casa-de-Caridade-1170x650.jpg',
  name: 'Doação de roupas para famílias desabrigadas',
  date: '15 FEV 2024 16H',
  locale: 'Praça José de Barros, Quixadá - CE',
}

const event3 = {
  id: 3,
  image:
    'https://portalcostadosol.com.br/wp-content/uploads/2021/12/Casa-de-Caridade-1170x650.jpg',
  name: 'Doação de roupas para famílias desabrigadas',
  date: '22 FEV 2024 16H',
  locale: 'Praça José de Barros, Quixadá - CE',
}

const event4 = {
  id: 4,
  image:
    'https://portalcostadosol.com.br/wp-content/uploads/2021/12/Casa-de-Caridade-1170x650.jpg',
  name: 'Doação de roupas para famílias desabrigadas',
  date: '3 MAR 2024 16H',
  locale: 'Praça José de Barros, Quixadá - CE',
}

const event5 = {
  id: 5,
  image:
    'https://portalcostadosol.com.br/wp-content/uploads/2021/12/Casa-de-Caridade-1170x650.jpg',
  name: 'Doação de roupas para famílias desabrigadas',
  date: '3 MAR 2024 16H',
  locale: 'Praça José de Barros, Quixadá - CE',
}

interface Evento {
  id: number
  image: string
  name: string
  date: string
  locale: string
}

export function Supporters() {
  const events = [event1, event2, event3, event4, event5]

  return (
    <>
      <Helmet title="supporters" />

      <div className="flex items-center gap-32 px-24">
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

      <div className="mx-24 mt-16 grid grid-cols-3 gap-16">
        {events.map((event) => {
          return (
            <SupportCard
              image={event.image}
              name={event.name}
              date={event.date}
              locale={event.locale}
              key={event.id}
            />
          )
        })}
      </div>
    </>
  )
}
