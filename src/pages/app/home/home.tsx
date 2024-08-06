import 'react-multi-carousel/lib/styles.css'

import { Helmet } from 'react-helmet-async'

import HumanitarianHome from '../../../assets/HumanitarianHome.svg'
import ImageHome from '../../../assets/ImageHome.svg'
import { Slider } from './components/slider'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div className="flex items-center gap-36">
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
        <aside>
          <img
            src={HumanitarianHome}
            alt="Pessosas fazendo doações"
            className=""
          />
        </aside>
      </div>
      <img src={ImageHome} alt="" className="h-full w-full" />

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
