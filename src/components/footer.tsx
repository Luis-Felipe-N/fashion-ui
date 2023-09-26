'use client'
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="bg-black text-white py-24 px-8 lg:px-24 grid lg:grid-cols-2 gap-12">
      <div className="space-y-8 lg:w-96">
        <h1 className="text-4xl uppercase font-black">Fashion</h1>
        <p>Aprimore seu estilo com nossas linhas de roupas.</p>
        <nav>
          <ul className="flex gap-4">
            <li className="h-10 w-10 flex items-center justify-center rounded-xl text-black bg-yellow-500">
              <FacebookLogo size={24} />
            </li>
            <li className="h-10 w-10 flex items-center justify-center rounded-xl text-black bg-yellow-500">
              <InstagramLogo size={24} />
            </li>
            <li className="h-10 w-10 flex items-center justify-center rounded-xl text-black bg-yellow-500">
              <TwitterLogo size={24} />
            </li>
            <li className="h-10 w-10 flex items-center justify-center rounded-xl text-black bg-yellow-500">
              <LinkedinLogo size={24} />
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-between flex-col lg:flex-row gap-8">
        <ul className="space-y-6">
          <li>
            <strong>Empresa</strong>
          </li>
          <li>Sobre</li>
          <li>Contato</li>
          <li>Suporte</li>
          <li>Careers</li>
        </ul>
        <ul className="space-y-8">
          <li>
            <strong>Links Rápidos</strong>
          </li>
          <li>Compartilhar Localização</li>
          <li>Rastreamento de Pedidos</li>
          <li>Guia de Tamanhos</li>
          <li>FAQs</li>
        </ul>
        <ul className="space-y-8">
          <li>
            <strong>Legal</strong>
          </li>
          <li>Termos & Condições</li>
          <li>Política de Privacidade</li>
          <li>Suporte</li>
          <li>Careers</li>
        </ul>
      </div>
    </footer>
  )
}
