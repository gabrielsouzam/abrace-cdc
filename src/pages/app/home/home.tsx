import 'react-multi-carousel/lib/styles.css'

import { Helmet } from 'react-helmet-async'

import Humans from '../../../assets/Humans.svg'
import { Slider } from './components/slider'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div>
        <div className="ml-20 max-w-lg">
          <h1 className="text-3xl font-medium text-zinc-50">
            Bem vindo(a) a Casa da Caridade
          </h1>

          <p className="mt-2 text-base font-medium text-zinc-400">
            Conectando quem tem à quem precisa.
          </p>

          <div className="mt-6">
            <p className="text-start text-base font-normal text-zinc-50">
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
          className="-mt-56 w-full"
        />
      </div>

      <div className="ml-20 mt-16">
        <h1 className="text-3xl font-medium text-zinc-50">Últimos Eventos</h1>
        <p className="mb-8 mt-2 text-base font-medium text-zinc-400">
          Fique por dentro dos últimos Eventos postados pela gente.
        </p>
      </div>

      <Slider />
    </>
  )
}
