import { Link } from 'react-router-dom'

import Chat from '../../../assets/chat.svg'
import Email from '../../../assets/email.svg'
import InstagramIcon from '../../../assets/InstagramIcon.svg'
import Phone from '../../../assets/phone.svg'
import WhatsAppIcon from '../../../assets/WhatsAppIcon.svg'
import Logo from './../../../assets/iconName.svg'

export function AppFooter() {
  return (
    <footer className="mt-20 border-t-1 border-zinc-200 bg-zinc-50 px-32 py-8 text-green-700">
      <div className="flex justify-between">
        {/* Logo and Description */}
        <div>
          <div className="flex flex-col items-center">
            <img src={Logo} alt="Logo" className="h-32 w-32" />
          </div>
          <p className="mt-2 max-w-sm text-center text-xs text-green-700">
            Nos dedicamos a oferecer apoio e esperança para aqueles em situação
            de vulnerabilidade.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Mapa do site</h3>

          <ul className="space-y-2">
            <li>
              <Link
                title="quemSomos"
                className="hover:underline"
                to="/who-we-are"
              >
                Quem somos
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="actions">
                Ações
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="events">
                Eventos
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="supporters">
                Apoiadores
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="profile">
                Perfil
              </Link>
            </li>
          </ul>
        </div>

        {/* Community Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Comunidade</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Central de ajuda
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sugestões
              </a>
            </li>
          </ul>
        </div>

        {/* Partner Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Precisa de ajuda?</h3>
          <ul className="space-y-2">
            <li>
              <div className="flex flex-row items-center gap-2">
                <img src={Chat} alt="Ícone chat" className="w-4" />
                <a href="#" className="hover:underline">
                  Chat online
                </a>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center gap-2">
                <img src={Email} alt="Ícone email" className="w-4" />
                <a href="#" className="hover:underline">
                  Email
                </a>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center gap-2">
                <img src={Phone} alt="Ícone telefone" className="w-4" />
                <a href="#" className="hover:underline">
                  Fale conosco
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Social Media Icons */}
      <div className="mt-8 flex items-center justify-between border-t-2 border-zinc-400 pt-4">
        <p className="text-green-700s text-xs">
          &copy; 2024 Casa da Caridade. Todos os direitos reservados.
        </p>
        <div className="flex space-x-4">
          <Link
            className="text-green-700 hover:text-green-600 active:font-bold"
            to="/admin/choose-create"
          >
            Admin
          </Link>

          <a
            href="https://www.instagram.com/casadacaridadequixada/"
            aria-label="Instagram"
            className="hover:text-gray-400"
          >
            <img className="w-6" src={InstagramIcon} alt="Ícone Instagram" />
          </a>
          <a
            href="https://www.instagram.com/casadacaridadequixada/"
            aria-label="WhatsApp"
            className="hover:text-gray-400"
          >
            <img className="w-6" src={WhatsAppIcon} alt="Ícone WhatsApp" />
          </a>
        </div>
      </div>
    </footer>
  )
}
