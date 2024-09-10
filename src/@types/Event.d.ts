export interface Event {
  id: string
  title: string
  caption: string
  description: string
  dateTime: string
  category: {
    id: string
    name: string
    description: string
  }
  organizer: {
    id: string
    name: string
    email: string
    cellphone: string
  }
  address: {
    cep: string
    city: string
    complement: string
    id: string
    number: number
    road: string
  }
  registers: {
    id: string
    urlImage: string
    description: string
  }[]
  donationsEvent: {
    id: string
    value: number
  }[]
}
