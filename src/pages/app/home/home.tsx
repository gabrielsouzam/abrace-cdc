import { Helmet } from 'react-helmet-async'

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import { EventCard } from './components/eventCard'

import Humans from '../../../assets/Humans.svg'

import Doacao from '../../../assets/Doacao.png'

const event1 = {
  id: 1,
  image: '../../../../assets/Doacao.png',
  title: 'Doação de roupas para famílias desabrigadas',
  subtitle: 'Doação de roupas para as famílias desabrigadas das chuvas do bairro Putiú',
  author: 'Casa da caridade',
  locale: 'Praça José de Barros, Quixadá - CE',
  date: '4 FEV 2024 16H'
}

const event2 = {
  id: 2,
  image: '../../../../assets/Doacao.png',
  title: 'Doação de roupas para famílias desabrigadas',
  subtitle: 'Doação de roupas para as famílias desabrigadas das chuvas do bairro Putiú',
  author: 'Casa da caridade',
  locale: 'Praça José de Barros, Quixadá - CE',
  date: '15 FEV 2024 16H'
}

const event3 = {
  id: 3,
  image: '../../../../assets/Doacao.png',
  title: 'Doação de roupas para famílias desabrigadas',
  subtitle: 'Doação de roupas para as famílias desabrigadas das chuvas do bairro Putiú',
  author: 'Casa da caridade',
  locale: 'Praça José de Barros, Quixadá - CE',
  date: '22 FEV 2024 16H'
}

const event4 = {
  id: 4,
  image: '../../../../assets/Doacao.png',
  title: 'Doação de roupas para famílias desabrigadas',
  subtitle: 'Doação de roupas para as famílias desabrigadas das chuvas do bairro Putiú',
  author: 'Casa da caridade',
  locale: 'Praça José de Barros, Quixadá - CE',
  date: '3 MAR 2024 16H'
}

const event5 = {
  id: 5,
  image: '../../../../assets/Doacao.png',
  title: 'Doação de roupas para famílias desabrigadas',
  subtitle: 'Doação de roupas para as famílias desabrigadas das chuvas do bairro Putiú',
  author: 'Casa da caridade',
  locale: 'Praça José de Barros, Quixadá - CE',
  date: '18 MAR 2024 16H'
}




export function Home() {
  const events = [event1, event2, event3, event4, event5]

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
  };

  return (
    <>
      <Helmet title="Home" />
      <div>
        <div className='ml-20 max-w-lg'>
          <div>
            <h1 className='text-zinc-50 text-3xl font-medium'>
              Bem vindo(a) a Casa da Caridade
            </h1>

            <p className='text-zinc-400 font-medium text-base mt-2'>
              Conectando quem tem à quem precisa.
            </p>

          </div>

          <div className='mt-6'>
            <p className='text-zinc-50 font-normal text-base text-start'>
              Somos uma plataforma inovadora que une voluntários, doadores e organizações em uma

              <span className='text-green-700 font-bold text-base m-2'>
                missão comum de fazer a diferença.
              </span>

              Aqui, a paixão por ajudar encontra as mãos que fazem, criando uma comunidade vibrante
              focada em iniciativas de caridade e esforços de arrecadação de fundos.
            </p>

          </div>

        </div>

        <div>
          <img
            src={Humans}
            alt='Pessosas fazendo doações'
            className='w-full -mt-56'
          />
        </div>

      </div>

      <div className='ml-20 mt-16'>
        <h1 className='text-zinc-50 text-3xl font-medium'>
          Últimos Eventos
        </h1>
        <p className='text-zinc-400 text-base font-medium mt-2 mb-8'>
          Fique por dentro dos últimos Eventos postados pela gente.
        </p>

      </div>

      <Carousel 
        responsive={responsive}
      >
        {events.map(event => {
          return (
              <EventCard
                image={Doacao}
                title={event.title}
                subtitle={event.subtitle}
                author={event.author}
                locale={event.locale}
                date={event.date}
              />
          )
        })}
      </Carousel>
    </>
  )
}
