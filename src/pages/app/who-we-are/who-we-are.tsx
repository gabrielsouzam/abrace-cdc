import { Helmet } from 'react-helmet-async'
import Lugar from '../../../assets/lugar.svg'
import Logo from "../../../assets/logo.svg"
import Completo from "../../../assets/Completo.svg"
export function WhoWeAre() {
  return (
    <>
      <Helmet title="Who We Are" />
      <div className='items-start flex justify-between px-20'>
        <div className='max-w-lg'>
          <h1 className="text-3xl font-medium text-zinc-50 w-64 top-50 left-20">Quem Somos</h1>
          <div className='mt-6'>
            <p className='text-start text-base font-normal text-zinc-50 mb-4'>
              Somos uma plataforma inovadora que une voluntários, doadores e organizações em uma missão comum de transformar o mundo. Nossa paixão por ajudar se encontra com a ação, criando uma comunidade vibrante e dedicada a iniciativas de caridade e arrecadação de fundos. Aqui, acreditamos que cada gesto de generosidade pode causar um impacto significativo e duradouro.
            </p>
            <p className='text-start text-base font-normal text-zinc-50'> 
              Em nossa plataforma, conectamos pessoas e instituições que compartilham o desejo de fazer a diferença. Facilitamos a colaboração entre voluntários comprometidos, doadores generosos e organizações que trabalham incansavelmente para atender às necessidades de suas comunidades. Ao unir forças, potencializamos os esforços individuais e coletivos, criando um ambiente onde a solidariedade e a compaixão prosperam.
            </p>
              </div>
          </div>

          <div className='flex items-start ml-auto'>
            <img
              src={Completo}
              alt='Complemento'
              className='relative left-64 z-10'
            />
            <div>
              <img
                src={Lugar}
                alt='Casa da Caridade'
                className='relative z-20'
              />
              <img
                src={Logo}
                alt='Logo Casa'
                className='relative top-[-5.5rem] z-20 w-[10rem] right-8'
              />
            </div>
          </div>
        </div>
        <div className='relative w-full h-32 flex justify-center items-center'>
            <h1 className='text-3xl font-medium text-zinc-50 text-center relative'>Nossos Projetos</h1>
        </div>

    </>
  )
}
