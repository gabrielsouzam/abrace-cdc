import { CaretDown } from '@phosphor-icons/react'
import * as Select from '@radix-ui/react-select'
import { CheckIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Address } from '../../../@types/Address'
import { Category } from '../../../@types/Category'
import { Event } from '../../../@types/Event'
import Doacao from '../../../assets/Doacao.png'
import { api } from '../../../lib/axios'
import { EventCard } from '../../_layouts/components/event-card'

export function Events() {
  const [events, setEvents] = useState<Event[]>([])
  const [citys, setCitys] = useState<Address[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  useEffect(() => {
    async function getAllEvents() {
      const response = await api.get('/api/events')
      console.log(response)
      setEvents(response.data)
    }

    async function getAllCategories() {
      const response = await api.get('/categories/list', {
        params: {
          filter: '',
        },
      })
      console.log(response)
      setCategories(response.data)
    }

    async function getAllCitys() {
      const response = await api.get('/address')
      console.log(response)
      setCitys(response.data)
    }

    getAllCitys()
    getAllCategories()
    getAllEvents()
  }, [])

  useEffect(() => {
    let filtered = events

    if (selectedCategory) {
      filtered = filtered.filter(
        (event) => event.category.name === selectedCategory,
      )
    }

    if (selectedCity) {
      filtered = filtered.filter((event) => event.address.road === selectedCity)
    }

    setFilteredEvents(filtered)
  }, [selectedCategory, selectedCity, events])

  return (
    <>
      <Helmet title="Events" />
      <div className="mb-20 px-14 text-zinc-900">
        <div className="mb-11 flex justify-between">
          <h1 className="text-4xl font-semibold">Eventos</h1>

          <div className="flex flex-row flex-wrap items-center justify-between gap-4">
            <Select.Root onValueChange={setSelectedCategory}>
              <Select.Trigger className="flex h-10 w-72 items-center justify-between rounded border-1 border-zinc-400 bg-zinc-50 px-3 text-base text-gray-700">
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
                      {categories?.map((category) => {
                        return (
                          <Select.Item
                            value={category.name}
                            className="relative flex h-7 select-none items-center rounded px-6 text-sm text-zinc-900 hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-300 data-[disabled]:text-zinc-300 data-[highlighted]:text-zinc-900 data-[highlighted]:outline-none"
                            key={category.id}
                          >
                            <Select.ItemText>{category.name}</Select.ItemText>
                            <Select.ItemIndicator className="absolute left-1 inline-flex h-4 w-4 items-center justify-center">
                              <CheckIcon />
                            </Select.ItemIndicator>
                          </Select.Item>
                        )
                      })}
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>

            <Select.Root onValueChange={setSelectedCity}>
              <Select.Trigger className="flex h-10 w-72 items-center justify-between rounded border-1 border-zinc-400 bg-zinc-50 px-3 text-base text-gray-700">
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
                        Ruas
                      </Select.Label>
                      {citys?.map((city) => {
                        return (
                          <Select.Item
                            value={city.road}
                            className="relative flex h-7 select-none items-center rounded px-6 text-sm text-zinc-900 hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-300 data-[disabled]:text-zinc-300 data-[highlighted]:text-zinc-900 data-[highlighted]:outline-none"
                            key={city.id}
                          >
                            <Select.ItemText>{city.road}</Select.ItemText>
                            <Select.ItemIndicator className="absolute left-1 inline-flex h-4 w-4 items-center justify-center">
                              <CheckIcon />
                            </Select.ItemIndicator>
                          </Select.Item>
                        )
                      })}
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="flex h-96 items-center justify-center">
            <p className="text-center text-xl text-zinc-700">
              Ainda não há eventos cadastrados com essa categoria ou bairro.
            </p>
          </div>
        ) : (
          <div className="grid w-full grid-cols-3 gap-10">
            {filteredEvents?.map((event) => {
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
          </div>
        )}
      </div>
    </>
  )
}
