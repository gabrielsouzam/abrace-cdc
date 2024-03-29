import { Helmet } from 'react-helmet-async'

import Humans from '../../../assets/Humans.svg'

export function Home() {
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
              <span className='text-blue-700 font-bold text-base m-2'>
                missão comum de fazer a diferença.
              </span>
              Aqui, a paixão por ajudar encontra as mãos que fazem,criando uma comunidade vibrante
              focada em iniciativas de caridade e esforços de arrecadação de fundos.
            </p>
          </div>
        </div>
        <div className=''>
          <img 
            src={Humans} 
            alt='Pessosas empilhando caixas'
            className='w-full -mt-56' 
          />
        </div>
      </div>
      <div className='ml-20 mt-16'>
        <h1 className='text-zinc-50 text-3xl font-medium'>
          Últimos Eventos
        </h1>
        <p className='text-zinc-400 text-base font-medium mt-2'>
          Fique por dentro dos últimos Eventos postados pela a gente.
        </p>
      </div>
      <div className='grid grid-cols-3 gap-8 mt-8'>
        
      </div>
    </>
  )
}
