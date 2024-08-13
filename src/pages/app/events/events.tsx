import { CaretDown } from '@phosphor-icons/react'
import * as Select from '@radix-ui/react-select'
import { CheckIcon } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import Doacao from '../../../assets/Doacao.png'
import { EventCard } from './components/event-card'

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
        <div className="flex flex-row justify-between px-20">
          <h1 className="text-4xl font-semibold text-zinc-900">Eventos</h1>

          <div className="flex flex-row flex-wrap items-center justify-between gap-4">
            <Select.Root>
              <Select.Trigger className="flex h-10 w-72 items-center justify-between rounded border-2 border-zinc-500 bg-zinc-50 px-3 text-base text-gray-700">
                <Select.Value placeholder="Categoria" />
                <Select.Icon>
                  <CaretDown
                    className="text-zinc-500"
                    size={14}
                    weight="fill"
                  />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className=" overflow-hidden rounded-md bg-zinc-100 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                  <Select.Viewport className="p-1">
                    <Select.Group>
                      <Select.Label className="px-6 py-2 text-sm text-zinc-900">
                        Categorias
                      </Select.Label>
                      <Select.Item
                        value="Roupa"
                        className="relative flex h-7 select-none items-center rounded px-6 text-sm text-zinc-900 hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-300 data-[disabled]:text-zinc-300 data-[highlighted]:text-zinc-900 data-[highlighted]:outline-none"
                      >
                        <Select.ItemText>Roupa</Select.ItemText>
                        <Select.ItemIndicator className="absolute left-1 inline-flex h-4 w-4 items-center justify-center">
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                      <Select.Item
                        value="Comida"
                        className="relative flex h-7 select-none items-center rounded px-6 text-sm text-zinc-900 hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-300 data-[disabled]:text-zinc-300 data-[highlighted]:text-zinc-900 data-[highlighted]:outline-none"
                      >
                        <Select.ItemText>Comida</Select.ItemText>
                        <Select.ItemIndicator className="absolute left-1 inline-flex h-4 w-4 items-center justify-center">
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>

            <Select.Root>
              <Select.Trigger className="flex h-10 w-72 items-center justify-between rounded border-2 border-zinc-500 bg-zinc-50 px-3 text-base text-gray-700">
                <Select.Value placeholder="Bairro" />
                <Select.Icon>
                  <CaretDown
                    className="text-zinc-500"
                    size={14}
                    weight="fill"
                  />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className=" overflow-hidden rounded-md bg-zinc-100 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                  <Select.Viewport className="p-1">
                    <Select.Group>
                      <Select.Label className="px-6 py-2 text-sm text-zinc-900">
                        Bairros
                      </Select.Label>
                      <Select.Item
                        value="Centro"
                        className="relative flex h-7 select-none items-center rounded px-6 text-sm text-zinc-900 hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-300 data-[disabled]:text-zinc-300 data-[highlighted]:text-zinc-900 data-[highlighted]:outline-none"
                      >
                        <Select.ItemText>Centro</Select.ItemText>
                        <Select.ItemIndicator className="absolute left-1 inline-flex h-4 w-4 items-center justify-center">
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                      <Select.Item
                        value="Putiú"
                        className="relative flex h-7 select-none items-center rounded px-6 text-sm text-zinc-900 hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-300 data-[disabled]:text-zinc-300 data-[highlighted]:text-zinc-900 data-[highlighted]:outline-none"
                      >
                        <Select.ItemText>Putiú</Select.ItemText>
                        <Select.ItemIndicator className="absolute left-1 inline-flex h-4 w-4 items-center justify-center">
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </div>

        <div className="mx-14 mt-10 grid grid-cols-3 gap-4">
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
