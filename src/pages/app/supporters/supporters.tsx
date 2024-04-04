import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import SupportersImg from '../../../assets/SupportersImg.svg'
import WhatsAppIcon from '../../../assets/WhatsAppIcon.svg'
import InstagramIcon from '../../../assets/InstagramIcon.svg'

export function Supporters() {
  return (
    <>
      <Helmet title="supporters" />

      <div className='px-24 gap-32 flex items-center'>      
        <div className="flex flex-col">
          <h1 className='text-zinc-50 text-4xl font-medium'>
            Apoiadores
          </h1>

          <p className='flex text-zinc-50 font-normal text-xl text-start mt-4'>
            Junte-se a nós e torne-se um parceiro crucial em nossa 
            missão de fazer a diferença na vida daqueles que mais 
            precisam. Se sua empresa compartilha nossos valores de 
            solidariedade e empatia, entre em contato conosco para 
            contribuir e se tornar parte de nossa rede de apoio.
          </p>

          <h1 className='text-zinc-50 text-3xl font-medium mt-10'>
            Contatos
          </h1>

          <div className='flex flex-row gap-6 mt-4'>
            <a href="https://www.instagram.com/casadacaridadequixada/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded bg-zinc-900 border border-green-500 text-green-500 px-6 py-2 text-xl font-normal">
              <img className='w-6' src={WhatsAppIcon} alt="Ícone WhatsApp" />
              WhatsApp
            </a>
            <a href="https://www.instagram.com/casadacaridadequixada/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded bg-zinc-900 border border-green-500 text-green-500 px-6 py-2 text-xl font-normal">
              <img className='w-6' src={InstagramIcon} alt="Ícone Instagram" />
              Instagram
            </a>
          </div>
        </div>

        <img
          src={SupportersImg}
          alt='Aperto de mãos'
          className='h-full w-full'
        />
      </div>



    </>
  )
}
