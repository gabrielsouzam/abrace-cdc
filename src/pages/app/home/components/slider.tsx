import Carousel from 'react-multi-carousel'

import Doacao from '../../../../assets/Doacao.png'
import { EventCard } from './event-card'

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

export function Slider() {
  const events = [event1, event2, event3, event4, event5]

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

  return (
    <Carousel responsive={responsive} showDots={true}>
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
    </Carousel>
  )
}
