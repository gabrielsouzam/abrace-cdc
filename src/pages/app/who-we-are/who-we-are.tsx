import { Helmet } from 'react-helmet-async'

import Completo from '../../../assets/Completo.svg'
import FeiraPechincha from '../../../assets/feiraPechincha.svg'
import Logo from '../../../assets/logo.svg'
import Lugar from '../../../assets/lugar.svg'

export function WhoWeAre() {
  return (
    <>
      <Helmet title="Who We Are" />
      <div className="flex items-start justify-between px-20">
        <div className="max-w-lg">
          <h1 className="left-20 top-50 w-64 text-3xl font-medium text-zinc-900">
            Quem Somos
          </h1>
          <div className="mt-6">
            <p className="mb-4 text-justify text-base font-normal text-zinc-900">
              Somos uma plataforma inovadora que une voluntários, doadores e
              organizações em uma missão comum de transformar o mundo. Nossa
              paixão por ajudar se encontra com a ação, criando uma comunidade
              vibrante e dedicada a iniciativas de caridade e arrecadação de
              fundos. Aqui, acreditamos que cada gesto de generosidade pode
              causar um impacto significativo e duradouro.
            </p>
            <p className="text-justify text-base font-normal text-zinc-900">
              Em nossa plataforma, conectamos pessoas e instituições que
              compartilham o desejo de fazer a diferença. Facilitamos a
              colaboração entre voluntários comprometidos, doadores generosos e
              organizações que trabalham incansavelmente para atender às
              necessidades de suas comunidades. Ao unir forças, potencializamos
              os esforços individuais e coletivos, criando um ambiente onde a
              solidariedade e a compaixão prosperam.
            </p>
          </div>
        </div>

        <div className="ml-auto flex items-start">
          <img
            src={Completo}
            alt="Complemento"
            className="relative left-64 z-10"
          />
          <div>
            <img src={Lugar} alt="Casa da Caridade" className="relative z-20" />
            <img
              src={Logo}
              alt="Logo Casa"
              className="relative right-8 top-[-5.5rem] z-20 w-[10rem]"
            />
          </div>
        </div>
      </div>
      <div className="relative flex h-32 w-full items-center justify-center">
        <h1 className="relative text-center text-3xl font-medium text-zinc-900">
          Nossos Projetos
        </h1>
      </div>
      <div className="relative right-20 flex h-32 w-full justify-end">
        <div className="max-w-lg">
          <h1 className="relative text-right text-3xl font-medium text-zinc-900">
            Feira da Pechinha
          </h1>
          <div className="mt-6">
            <p className="mb-4 text-justify text-base font-normal text-zinc-900">
              Somos uma plataforma inovadora que une voluntários, doadores e
              organizações em uma missão comum de transformar o mundo. Nossa
              paixão por ajudar se encontra com a ação, criando uma comunidade
              vibrante e dedicada a iniciativas de caridade e arrecadação de
              fundos. Aqui, acreditamos que cada gesto de generosidade pode
              causar um impacto significativo e duradouro.
            </p>
          </div>
        </div>
      </div>
      <div className="-mt-20 ml-60 flex items-start">
        <img
          src={FeiraPechincha}
          alt="Feira Pechincha"
          className="relative -left-36 -mt-10"
        />
      </div>
      <div className="relative flex h-32 w-full items-center justify-center"></div>
      <div className="flex items-start justify-between px-20">
        <div className="max-w-lg">
          <h1 className="relative text-left text-3xl font-medium text-zinc-900">
            Clube do Idoso
          </h1>
          <div className="mt-6">
            <p className="mb-4 text-justify text-base font-normal text-zinc-900">
              Somos uma plataforma inovadora que une voluntários, doadores e
              organizações em uma missão comum de transformar o mundo. Nossa
              paixão por ajudar se encontra com a ação, criando uma comunidade
              vibrante e dedicada a iniciativas de caridade e arrecadação de
              fundos. Aqui, acreditamos que cada gesto de generosidade pode
              causar um impacto significativo e duradouro.
            </p>
          </div>
        </div>
        <div className="ml-60 mt-20 flex items-start">
          <img
            src={FeiraPechincha}
            alt="Feira Pechincha"
            className="relative -mt-40"
          />
        </div>
      </div>
    </>
  )
}
