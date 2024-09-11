import { CaretDown } from '@phosphor-icons/react'
import * as Select from '@radix-ui/react-select'
import { CheckIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Action } from '../../../@types/Action'
import { Category } from '../../../@types/Category'
import { api } from '../../../lib/axios'
import { ActionCardAdmin } from './components/action-card-admin'

export function ActionsAdmin() {
  const [actions, setActions] = useState<Action[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  const [filteredActions, setFilteredActions] = useState<Action[]>([])

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    async function getAllActions() {
      const response = await api.get('/action/')
      console.log(response.data)
      setActions(response.data)
    }

    async function getAllCategories() {
      const response = await api.get('/categories/')
      console.log(response)
      setCategories(response.data)
    }

    getAllCategories()
    getAllActions()
  }, [])

  useEffect(() => {
    let filtered = actions

    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(
        (action) => action.categoryEntity.id === selectedCategory,
      )
    }

    setFilteredActions(filtered)
  }, [selectedCategory, actions])
  return (
    <>
      <Helmet title="Actions" />
      <div className="mb-20 px-14 text-zinc-900">
        <div className="mb-11 flex justify-between">
          <h1 className="text-4xl font-semibold">Ações</h1>
          <Select.Root onValueChange={setSelectedCategory}>
            <Select.Trigger className="flex h-10 w-72 items-center justify-between rounded border-1 border-zinc-400 bg-zinc-50 px-3 text-base text-gray-700">
              <Select.Value placeholder="Categoria" />
              <Select.Icon>
                <CaretDown className="text-zinc-500" size={14} weight="fill" />
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
                      value="all"
                      className="relative flex h-7 select-none items-center rounded px-6 text-sm text-zinc-900 hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-300 data-[disabled]:text-zinc-300 data-[highlighted]:text-zinc-900 data-[highlighted]:outline-none"
                    >
                      <Select.ItemText>Todos</Select.ItemText>
                      <Select.ItemIndicator className="absolute left-1 inline-flex h-4 w-4 items-center justify-center">
                        <CheckIcon />
                      </Select.ItemIndicator>
                    </Select.Item>
                    {categories?.map((category) => {
                      return (
                        <Select.Item
                          value={category.id}
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
        </div>

        {filteredActions.length === 0 ? (
          <div className="flex h-96 items-center justify-center">
            <p className="text-center text-xl text-zinc-700">
              Ainda não há ações cadastradas com essa categoria
            </p>
          </div>
        ) : (
          <div className="grid w-full grid-cols-3 gap-10">
            {filteredActions?.map((action) => {
              return (
                <ActionCardAdmin
                  key={action.id}
                  title={action.title}
                  subtile={action.subtitle}
                  category={action.categoryEntity.name}
                  id={action.id}
                  actionImage={
                    action.registers.length > 0 && action.registers[0].urlImage
                      ? action.registers[0].urlImage
                      : null
                  }
                />
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
