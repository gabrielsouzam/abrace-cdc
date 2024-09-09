import 'react-multi-carousel/lib/styles.css'

import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Carousel from 'react-multi-carousel'

import { Event } from '../../../@types/Event'
import Doacao from '../../../assets/Doacao.png'
import Humans from '../../../assets/Humans.svg'
import { api } from '../../../lib/axios'
import { EventCard } from '../../_layouts/components/event-card'

export function Home() {
  const [events, setEvents] = useState<Event[]>([])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
  }

  useEffect(() => {
    async function getAllEvents() {
      const response = await api.get('/api/events/latest')
      console.log(response)
      setEvents(response.data)
    }

    getAllEvents()
  }, [])

  return (
    <>
      <Helmet title="Home" />
      <div className="relative flex w-full justify-between bg-[url('assets/background-home.svg')] bg-cover bg-no-repeat px-20 pb-14">
        <div className="max-w-lg">
          <div>
            <h1 className="text-3xl font-medium text-zinc-900">
              Bem vindo(a) a Casa da Caridade
            </h1>

            <p className="mt-2 text-base font-medium text-zinc-400">
              Conectando quem tem à quem precisa.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-start text-base font-normal text-zinc-900">
              Somos uma plataforma inovadora que une voluntários, doadores e
              organizações em uma
              <span className="m-2 text-base font-bold text-green-700">
                missão comum de fazer a diferença.
              </span>
              Aqui, a paixão por ajudar encontra as mãos que fazem, criando uma
              comunidade vibrante focada em iniciativas de caridade e esforços
              de arrecadação de fundos.
            </p>
          </div>
        </div>

        <img
          src={Humans}
          alt="Pessosas fazendo doações"
          className="relative top-[-2rem] mr-11"
        />
      </div>

      <div className="ml-20 mt-16">
        <h1 className="text-3xl font-medium text-zinc-900">Últimos Eventos</h1>
        <p className="mb-8 mt-2 text-base font-medium text-zinc-400">
          Fique por dentro dos últimos Eventos postados pela gente.
        </p>
      </div>

      <Carousel responsive={responsive} itemClass="px-4" containerClass="py-10">
        {events.map((event) => {
          return (
            <EventCard
              image={Doacao}
              title={event.title}
              subtitle={event.caption}
              author={event.organizer.name}
              locale={`${event.address.city}, ${event.address.road}, ${event.address.number}`}
              date={event.dateTime}
              tag={event.category.name}
              key={event.id}
              id={event.id}
            />
          )
        })}
      </Carousel>
    </>
  )
}
