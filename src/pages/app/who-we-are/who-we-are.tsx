import { Helmet } from 'react-helmet-async'

import Completo from '../../../assets/Completo.svg'
import FeiraPechincha from '../../../assets/feiraPechincha.svg'
import Logo from '../../../assets/logo.svg'
import Lugar from '../../../assets/lugar.svg'
import colaborador from '../../../assets/colaborador.svg'
import whatsapp from '../../../assets/wpp.svg'
import instagram from '../../../assets/insta.svg'


const colaboradores = [
  {
    nome: 'Henrique Freitas',
    cargo: 'Diretor Geral',
    imagem: colaborador,
    descricao: 'Responsável pela gestão geral da organização.',
  },
  {
    nome: 'Ana Souza',
    cargo: 'Gerente de Projetos',
    imagem: colaborador,
    descricao: 'Coordena as iniciativas e projetos da equipe.',
  },
  {
    nome: 'João Pereira',
    cargo: 'Desenvolvedor',
    imagem: colaborador,
    descricao: 'Desenvolve soluções tecnológicas para a plataforma.',
  },
  {
    nome: 'Maria Oliveira',
    cargo: 'Designer Gráfico',
    imagem: colaborador,
    descricao: 'Cuida da identidade visual da organização.',
  },
  {
    nome: 'Carlos Silva',
    cargo: 'Analista de Marketing',
    imagem: colaborador,
    descricao: 'Elabora estratégias de comunicação e marketing.',
  },
  {
    nome: 'Paula Lima',
    cargo: 'Assistente Administrativo',
    imagem: colaborador,
    descricao: 'Auxilia nas atividades administrativas da equipe.',
  },
]

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
        <div className="ml-60 mt-28 flex items-start">
          <img
            src={FeiraPechincha}
            alt="Feira Pechincha"
            className="relative -mt-40"
          />
        </div>
      </div>
      <div className="relative right-20 flex top-40 h-35 w-full justify-end">
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
      <div className="-mt-20 ml-60 items-start">
        <img
          src={FeiraPechincha}
          alt="Feira Pechincha"
          className="relative -left-36 -mt-10"
        />
      </div>
      <div className="relative flex h-50 w-full items-center justify-center">
        <h1 className="relative text-center text-3xl font-medium text-zinc-900">
          Colaboradores
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-8 justify-items-center">
        {colaboradores.map((colaborador, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={colaborador.imagem}
              alt={`Colaborador ${index + 1}`}
              className="w-32 h-32 rounded-full"
            />
            <h2 className="mt-2 text-lg font-semibold text-zinc-900">
              {colaborador.nome}
            </h2>
            <p className="text-sm text-zinc-600">{colaborador.cargo}</p>
            <p className="mt-1 text-xs text-zinc-500">{colaborador.descricao}</p>
          </div>
        ))}
      </div>
      <div className="relative flex h-50 w-full items-center justify-center">
        <h1 className="relative text-center text-3xl font-medium text-zinc-900">
          Nossos Contatos
        </h1>
      </div>
      <div className="ml-1 mt-10 flex items-start space-x-8 justify-center" >

        <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="Contato WhatsApp" className="w-50 h-16" />
        </a>

        <a href="https://www.instagram.com/casadacaridadequixada?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Contato Instagram" className="w-50 h-16" />
        </a>
      </div>
    </>
  )
}
