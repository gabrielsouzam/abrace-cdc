export interface Action {
  id: string
  title: string
  subtitle: string
  addressEntity: {
    cep: string
    city: string
    complement: string
    id: string
    number: number
    road: string
  }
  categoryEntity: {
    description: string
    id: string
    name: string
  }
  organizerEntity: {
    id: string
    name: string
    email: string
    cellphone: string
  }
  registers: {
    id: string
    urlImage: string
    email: string
    description: string
  }[]
  dateTime: string
  description: string
  duration: string
}
