import { Helmet } from 'react-helmet-async'

import * as Select from '@radix-ui/react-select'
import { CaretDown } from '@phosphor-icons/react'

import { EventCard } from './components/eventCard'

import Doacao from '../../../assets/Doacao.png'


const event1 = {
  id: 1,
  image: '../../../../assets/Doacao.png',
  title: 'Doação de roupas para famílias desabrigadas',
  subtitle:
    'Doação de roupas para as famílias desabrigadas das chuvas do bairro Putiú',
  author: 'Casa da caridade',
  locale: 'Praça José de Barros, Quixadá - CE',
  date: '4 FEV 2024 16H',
}

const event2 = {
  id: 2,
  image: '../../../../assets/Doacao.png',
  title: 'Doação de roupas para famílias desabrigadas',
  subtitle:
    'Doação de roupas para as famílias desabrigadas das chuvas do bairro Putiú',
  author: 'Casa da caridade',
  locale: 'Praça José de Barros, Quixadá - CE',
  date: '15 FEV 2024 16H',
}

const event3 = {
  id: 3,
  image: '../../../../assets/Doacao.png',
  title: 'Doação de roupas para famílias desabrigadas',
  subtitle:
    'Doação de roupas para as famílias desabrigadas das chuvas do bairro Putiú',
  author: 'Casa da caridade',
  locale: 'Praça José de Barros, Quixadá - CE',
  date: '22 FEV 2024 16H',
}

const event4 = {
  id: 4,
  image: '../../../../assets/Doacao.png',
  title: 'Doação de roupas para famílias desabrigadas',
  subtitle:
    'Doação de roupas para as famílias desabrigadas das chuvas do bairro Putiú',
  author: 'Casa da caridade',
  locale: 'Praça José de Barros, Quixadá - CE',
  date: '3 MAR 2024 16H',
}

const event5 = {
  id: 5,
  image: '../../../../assets/Doacao.png',
  title: 'Doação de roupas para famílias desabrigadas',
  subtitle:
    'Doação de roupas para as famílias desabrigadas das chuvas do bairro Putiú',
  author: 'Casa da caridade',
  locale: 'Praça José de Barros, Quixadá - CE',
  date: '18 MAR 2024 16H',
}

export function Events() {
  const events = [event1, event2, event3, event4, event5]

  return (
    <>
      <Helmet title="Events" />
      <div>
        <div className='flex flex-row px-20 justify-between'>
          <h1 className='text-4xl text-zinc-50 font-semibold'>Eventos</h1>

          <div className='flex flex-row justify-between gap-4 flex-wrap items-center'>
            <Select.Root>
              <Select.Trigger className='flex items-center justify-between rounded px-[12px] text-[16px] text-gray-400 h-[40px] w-[280px] bg-zinc-800'>
                <Select.Value placeholder="Categoria" />
                <Select.Icon>
                  <CaretDown className='text-zinc-50' size={14} weight='fill' />
                </Select.Icon>
              </Select.Trigger>

              <Select.Trigger className='flex items-center justify-between rounded px-[12px] text-[16px] text-gray-400 h-[40px] w-[280px] bg-zinc-800'>
                <Select.Value placeholder="Bairro" />
                <Select.Icon>
                  <CaretDown className='text-zinc-50' size={14} weight='fill' />
                </Select.Icon>
              </Select.Trigger>
            </Select.Root>
          </div>

        </div>

        <div className='grid grid-cols-3 gap-4 mt-10 mx-14'>
          {events.map((event) => {
            return (
              <EventCard
                image={Doacao}
                title={event.title}
                subtitle={event.subtitle}
                author={event.author}
                locale={event.locale}
                date={event.date}
                key={event.id}
              />
            )
          })}
        </div>

      </div>
    </>
  )
}
