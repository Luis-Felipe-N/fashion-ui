'use client'

import Image from 'next/image'

import { motion as m } from 'framer-motion'
import { container, item } from '@/app/animations'

export function Hero() {
  return (
    <section className="max-w-6xl px-8 mx-auto  w-full items-center ">
      <div
        style={{ backgroundColor: '#F4F6F5' }}
        className="lg:px-20 lg:py-16 p-8 justify-between text-sm lg:flex rounded-3xl"
      >
        <div className="flex flex-col">
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:text-6xl text-4xl font-black uppercase"
          >
            <div className="overflow-hidden">
              <m.div variants={item} className="py-2">
                <div className="-rotate-2 inline-block -ml-8 bg-white px-8 py-2">
                  <p className="rotate-3">Vamos</p>
                </div>
              </m.div>
            </div>
            <div className="overflow-hidden">
              <m.p variants={item}>Explorar</m.p>
            </div>
            <div className="overflow-hidden">
              <m.div variants={item} className="py-2">
                <div className="-rotate-2 inline-block -ml-8 bg-yellow-200 px-8 py-2">
                  <p className="rotate-3">Unicas</p>
                </div>
              </m.div>
            </div>
            <div className="overflow-hidden">
              <m.p variants={item}>Roupas</m.p>
            </div>
          </m.div>

          <div className="overflow-hidden">
            <m.div variants={container} initial="hidden" animate="show">
              <m.div variants={item}>
                <p className="lg:text-xl lg:my-8 my-4">
                  Viva pela moda influente e inovadora!
                </p>

                <div className="flex gap-4">
                  <Image
                    width={190}
                    height={32}
                    className="w-32 object-contain lg:block hidden"
                    src="/elements/element-01.png"
                    alt=""
                  />
                  <button className="text-slate-50 font-semibold bg-slate-950 p-4 px-10 rounded-lg">
                    Compre agora
                  </button>
                </div>
              </m.div>
            </m.div>
          </div>
        </div>

        <div className="lg:block hidden">
          <m.div variants={container} initial="hidden" animate="show">
            <Image
              src={'/hero.png'}
              width={500}
              height={450}
              alt="Na imagem, uma deslumbrante jovem envolta em um casaco de pele sintética se destaca. Seu cabelo esvoaça suavemente no vento, enquanto ela se diverte em meio a um cenário encantador. Vestida com roupas cor-de-rosa adoráveis, ela irradia uma beleza cativante e uma energia contagiante, tornando a cena verdadeiramente fascinante."
            />
          </m.div>
        </div>
      </div>
    </section>
  )
}
