'use client'

import { container, itemInView } from '@/app/animations'
import { motion as m } from 'framer-motion'
import Image from 'next/image'

export function Banner() {
  return (
    <section className="bg-[#E0C340]">
      <div className="max-w-6xl mx-auto w-full items-center justify-between text-sm grid lg:grid-cols-2 p-8 gap-4">
        <div>
          <Image
            src={'/banner.png'}
            width={500}
            height={450}
            className="w-full"
            alt="Na imagem, uma deslumbrante jovem envolta em um casaco de pele sintética se destaca. Seu cabelo esvoaça suavemente no vento, enquanto ela se diverte em meio a um cenário encantador. Vestida com roupas cor-de-rosa adoráveis, ela irradia uma beleza cativante e uma energia contagiante, tornando a cena verdadeiramente fascinante."
          />
        </div>
        <m.div
          whileInView="visible"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="overflow-hidden text-6xl font-black uppercase">
            <m.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {
                  y: '100%',
                },
                visible: {
                  y: '0%',
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              className="py-2"
            >
              <div className="-rotate-2 inline-block -ml-8 bg-white px-8 py-2">
                <p className="rotate-3">PAYDAY</p>
              </div>
            </m.div>
          </div>
          <div className="overflow-hidden text-6xl font-black uppercase">
            <m.p
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {
                  y: '100%',
                },
                visible: {
                  y: '0%',
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
            >
              SALE NOW
            </m.p>
          </div>

          <div className="text-lg mt-6">
            <m.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {
                  y: '10%',
                  opacity: 0,
                },
                visible: {
                  y: '0%',
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              className="space-y-4"
            >
              <p>
                Gaste no mínimo R$100 e receba um código de desconto de 30% para
                a sua próxima compra.
              </p>
              <div>
                <strong>1 de Julho - 10 de Julho 2024</strong>
                <p>*Termo & Condições</p>
              </div>
              <button className="text-slate-50 text-base font-semibold bg-slate-950 p-4 px-10 rounded-lg">
                Compre agora
              </button>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
