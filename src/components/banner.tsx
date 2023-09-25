'use client'

import { container, item } from '@/app/animations'
import { motion as m } from 'framer-motion'
import Image from 'next/image'

export function Banner() {
  return (
    <section className="bg-[#E0C340]">
      <div className="max-w-6xl mx-auto w-full items-center justify-between text-sm grid lg:grid-cols-2 ">
        <div>
          <Image
            src={'/banner.png'}
            width={500}
            height={450}
            className="w-full"
            alt="Na imagem, uma deslumbrante jovem envolta em um casaco de pele sintética se destaca. Seu cabelo esvoaça suavemente no vento, enquanto ela se diverte em meio a um cenário encantador. Vestida com roupas cor-de-rosa adoráveis, ela irradia uma beleza cativante e uma energia contagiante, tornando a cena verdadeiramente fascinante."
          />
        </div>
        <m.div variants={container} initial="hidden" animate="show">
          <div className="overflow-hidden text-6xl font-black uppercase">
            <m.div variants={item} className="py-2">
              <div className="-rotate-2 inline-block -ml-8 bg-white px-8 py-2">
                <p className="rotate-3">PAYDAY</p>
              </div>
            </m.div>
          </div>
          <div className="overflow-hidden text-6xl font-black uppercase">
            <m.p variants={item}>SALE NOW</m.p>
          </div>

          <div className="text-lg mt-6">
            <div className="space-y-4">
              <p>
                Spend minimal $100 get 30% off voucher code for your next
                purchase
              </p>
              <div>
                <strong>1 June - 10 June 2021</strong>
                <p>*Terms & Conditions apply</p>
              </div>
              <button className="text-slate-50 text-base font-semibold bg-slate-950 p-4 px-10 rounded-lg">
                Compre agora
              </button>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
